import { NextRequest, NextResponse } from "next/server";
import { getRegistryItem } from "@/lib/registry";
import fs from "fs/promises";
import path from "path";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ name: string }> }
) {
  try {
    const { name } = await params;
    const component = getRegistryItem(name);

    if (!component) {
      return NextResponse.json(
        { error: "Component not found" },
        { status: 404 }
      );
    }

    // Transform to v0-compatible format
    const v0Component = {
      name: component.name,
      type: "component",
      files: component.files?.map(file => file.path.replace("src/", "")) || [],
      dependencies: component.registryDependencies || [],
      content: ""
    };

    // Read file content for the main component file
    if (component.files && component.files.length > 0) {
      const mainFile = component.files[0];
      if (mainFile.path) {
        try {
          const filePath = path.join(process.cwd(), mainFile.path);
          const content = await fs.readFile(filePath, "utf-8");
          v0Component.content = content;
        } catch (fileError) {
          console.error(`Error reading file ${mainFile.path}:`, fileError);
        }
      }
    }

    // Add CORS headers for v0
    const response = NextResponse.json(v0Component);
    response.headers.set("Access-Control-Allow-Origin", "*");
    response.headers.set("Access-Control-Allow-Methods", "GET, OPTIONS");
    response.headers.set("Access-Control-Allow-Headers", "Content-Type");

    return response;
  } catch (error) {
    console.error("Registry API error:", error);
    return NextResponse.json(
      { error: "Internal server error", details: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}

export async function OPTIONS() {
  const response = new NextResponse(null, { status: 200 });
  response.headers.set("Access-Control-Allow-Origin", "*");
  response.headers.set("Access-Control-Allow-Methods", "GET, OPTIONS");
  response.headers.set("Access-Control-Allow-Headers", "Content-Type");
  return response;
}