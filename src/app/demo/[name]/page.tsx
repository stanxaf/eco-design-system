import { notFound } from "next/navigation";

import { demos } from "@/app/demo/[name]/index";

import { Renderer } from "@/app/demo/[name]/renderer";
import { getRegistryItem } from "@/lib/registry";

export async function generateStaticParams() {
  return Object.keys(demos).map((name) => ({
    name,
  }));
}

export default async function DemoPage({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;

  const component = getRegistryItem(name);

  if (!component) {
    notFound();
  }

  const demo = demos[name];

  if (!demo) {
    notFound();
  }

  const { components } = demo;

  return (
    <div className="flex h-[100vh] w-full items-center justify-center bg-card">
      {components && (
        <div className="relative w-full h-full flex items-center justify-center">
          <Renderer>
            {/* Show Demo component if it exists, otherwise show the first available component */}
            {components.Demo || Object.values(components)[0]}
          </Renderer>
        </div>
      )}
    </div>
  );
}
