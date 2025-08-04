import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ComponentCard } from "@/components/registry/component-card";
import { Button } from "@/components/ui/button";
import { getRegistryItem, getRegistryItems } from "@/lib/registry";
import { getPrompt } from "@/lib/utils";

export async function generateStaticParams() {
  const components = getRegistryItems();

  return components.map(({ name }) => ({
    name,
  }));
}

export default async function RegistryItemPage({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;
  const component = getRegistryItem(name);

  if (!component) {
    notFound();
  }

  // Check if this is an API request (v0)
  const headers = await import('next/headers');
  const headersList = await headers.headers();
  const userAgent = headersList.get('user-agent') || '';
  const accept = headersList.get('accept') || '';

  // If it's a JSON request or from v0, return JSON
  if (accept.includes('application/json') || userAgent.includes('v0')) {
    // Transform to v0-compatible format
    const v0Component = {
      name: component.name,
      type: component.type === "registry:ui" ? "component" : component.type.replace("registry:", ""),
      files: component.files?.map(file => file.path.replace("src/", "")) || [],
      dependencies: component.registryDependencies || [],
      content: ""
    };

    // Read file content for the main component file
    if (component.files && component.files.length > 0) {
      const mainFile = component.files[0];
      if (mainFile.path) {
        try {
          const fs = await import('fs/promises');
          const path = await import('path');
          const filePath = path.join(process.cwd(), mainFile.path);
          const content = await fs.readFile(filePath, "utf-8");
          v0Component.content = content;
        } catch (fileError) {
          console.error(`Error reading file ${mainFile.path}:`, fileError);
        }
      }
    }

    return new Response(JSON.stringify(v0Component), {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    });
  }

  return (
    <div className="container p-5 md:p-10">
      <div className="mb-1">
        <Button variant="ghost" size="sm" asChild>
          <Link href="/">
            <ArrowLeft className="mr-2 size-4" />
            Back to Home
          </Link>
        </Button>
      </div>

      <ComponentCard
        component={component}
        baseUrl={process.env.VERCEL_PROJECT_PRODUCTION_URL ?? ""}
        prompt={getPrompt()}
      />
    </div>
  );
}
