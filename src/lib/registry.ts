import registry from "@/registry";

export interface Component {
  name: string;
  type: string;
  title: string;
  description?: string;
  files?: { path: string; type: string; target: string }[];
  registryDependencies?: string[];
}

export function getRegistryItems(): Component[] {
  // exclude style item as it's not relevant to show in the ui
  const components = registry.items.filter(
    (item) => item.type !== "registry:style",
  );

  return components as Component[];
}

export function getRegistryItem(name: string): Component | null {
  const components = getRegistryItems();

  const component = components.find(
    (item: { name: string }) => item.name === name,
  );

  return component || null;
}

export function getBlocks() {
  return getRegistryItems().filter(
    (component) => component.type === "registry:block",
  );
}

export function getUIPrimitives() {
  return getRegistryItems().filter(
    (component) => component.type === "registry:ui",
  );
}

export function getComponents() {
  return getRegistryItems().filter(
    (component) => component.type === "registry:component",
  );
}
