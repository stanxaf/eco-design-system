import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ name: string }> }
) {
  const { name } = await params;

  // Redirect to the new API endpoint
  return NextResponse.redirect(new URL(`/api/registry/${name}`, request.url));
}