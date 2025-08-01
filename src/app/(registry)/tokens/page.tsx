"use client";

import { ArrowLeft, Palette, Type, Zap, Layers } from "lucide-react";
import Link from "next/link";
import type React from "react";

import { FontBlock } from "@/app/(registry)/tokens/font-block";
import { Button } from "@/components/ui/button";
import { ColorBlock } from "./color-block";

export default function TokensPage() {
  return (
    <div className="container p-5 md:p-10">
      <div className="mb-8">
        <Button variant="ghost" size="sm" asChild className="mb-4">
          <Link href="/">
            <ArrowLeft className="mr-2 size-4" />
            Back to Home
          </Link>
        </Button>

        <h1 className="font-bold text-3xl tracking-tight">Design Tokens</h1>
        <p className="mt-1 text-muted-foreground">
          A comprehensive overview of all design tokens used in the Eco Design System
        </p>
      </div>

      {/* Brand Colors */}
      <section className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <Palette className="size-5 text-primary" />
          <h2 className="font-semibold text-xl">Brand Colors</h2>
        </div>
        <p className="mb-6 text-muted-foreground">
          Core brand colors that define the identity and primary interactions.
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <ColorBlock name="Brand Blue" className="bg-[#1497e3]" />
          <ColorBlock name="Brand Green" className="bg-[#68c949]" />
          <ColorBlock name="Utility Blue" className="bg-[#0072cc]" />
          <ColorBlock name="Neutral White" className="bg-[#ffffff] border" />
        </div>
      </section>

      {/* Color Palettes */}
      <section className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <Palette className="size-5 text-primary" />
          <h2 className="font-semibold text-xl">Color Palettes</h2>
        </div>
        <p className="mb-6 text-muted-foreground">
          Complete color scales for consistent design across the system.
        </p>

        {/* Gray Palette */}
        <div className="mb-8">
          <h3 className="font-medium text-lg mb-4">Gray Palette</h3>
          <div className="grid grid-cols-11 gap-2">
            {[
              { name: "50", value: "#FAFAFA" },
              { name: "100", value: "#F4F4F5" },
              { name: "200", value: "#E4E4E7" },
              { name: "300", value: "#D1D1D6" },
              { name: "400", value: "#B0B0B8" },
              { name: "500", value: "#8E8E98" },
              { name: "600", value: "#6E6E78" },
              { name: "700", value: "#4E4E58" },
              { name: "800", value: "#27272E" },
              { name: "900", value: "#1A1A1F" },
              { name: "950", value: "#060608" }
            ].map((color) => (
              <div key={color.name} className="space-y-2">
                <div
                  className="h-12 rounded"
                  style={{ backgroundColor: color.value }}
                />
                <div className="text-center">
                  <div className="text-xs font-medium">{color.name}</div>
                  <code className="text-xs text-muted-foreground">{color.value}</code>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Blue Palette */}
        <div className="mb-8">
          <h3 className="font-medium text-lg mb-4">Blue Palette</h3>
          <div className="grid grid-cols-11 gap-2">
            {[
              { name: "50", value: "#ECF6FE" },
              { name: "100", value: "#DDEFFD" },
              { name: "200", value: "#C0E2FC" },
              { name: "300", value: "#78BCF0" },
              { name: "400", value: "#1A93EF" },
              { name: "500", value: "#007BD9" },
              { name: "600", value: "#005AA1" },
              { name: "700", value: "#004C87" },
              { name: "800", value: "#003E6E" },
              { name: "900", value: "#003054" },
              { name: "950", value: "#00213B" }
            ].map((color) => (
              <div key={color.name} className="space-y-2">
                <div
                  className="h-12 rounded"
                  style={{ backgroundColor: color.value }}
                />
                <div className="text-center">
                  <div className="text-xs font-medium">{color.name}</div>
                  <code className="text-xs text-muted-foreground">{color.value}</code>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Green Palette */}
        <div className="mb-8">
          <h3 className="font-medium text-lg mb-4">Green Palette</h3>
          <div className="grid grid-cols-11 gap-2">
            {[
              { name: "50", value: "#F0FCEC" },
              { name: "100", value: "#E3F8DC" },
              { name: "200", value: "#C8F1BB" },
              { name: "300", value: "#9FE38A" },
              { name: "400", value: "#71CE53" },
              { name: "500", value: "#52B434" },
              { name: "600", value: "#3D8527" },
              { name: "700", value: "#326B20" },
              { name: "800", value: "#224916" },
              { name: "900", value: "#132B0C" },
              { name: "950", value: "#0A1706" }
            ].map((color) => (
              <div key={color.name} className="space-y-2">
                <div
                  className="h-12 rounded"
                  style={{ backgroundColor: color.value }}
                />
                <div className="text-center">
                  <div className="text-xs font-medium">{color.name}</div>
                  <code className="text-xs text-muted-foreground">{color.value}</code>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Red Palette */}
        <div>
          <h3 className="font-medium text-lg mb-4">Red Palette</h3>
          <div className="grid grid-cols-11 gap-2">
            {[
              { name: "50", value: "#FFEDEB" },
              { name: "100", value: "#FFDAD6" },
              { name: "200", value: "#FDC0B9" },
              { name: "300", value: "#FA8C80" },
              { name: "400", value: "#F35A49" },
              { name: "500", value: "#E0230F" },
              { name: "600", value: "#BB1D0C" },
              { name: "700", value: "#8E180B" },
              { name: "800", value: "#60130B" },
              { name: "900", value: "#3A0D08" },
              { name: "950", value: "#1E0805" }
            ].map((color) => (
              <div key={color.name} className="space-y-2">
                <div
                  className="h-12 rounded"
                  style={{ backgroundColor: color.value }}
                />
                <div className="text-center">
                  <div className="text-xs font-medium">{color.name}</div>
                  <code className="text-xs text-muted-foreground">{color.value}</code>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Semantic Tokens */}
      <section className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <Layers className="size-5 text-primary" />
          <h2 className="font-semibold text-xl">Semantic Tokens</h2>
        </div>
        <p className="mb-6 text-muted-foreground">
          Tokens that represent specific UI concepts and states.
        </p>

        {/* Text Tokens */}
        <div className="mb-8">
          <h3 className="font-medium text-lg mb-4">Text Colors</h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <ColorBlock name="Text Primary" className="bg-[var(--text-primary)]" />
            <ColorBlock name="Text Secondary" className="bg-[var(--text-secondary)]" />
            <ColorBlock name="Text Tertiary" className="bg-[var(--text-tertiary)]" />
            <ColorBlock name="Text On Dark" className="bg-[var(--text-on-dark)]" />
            <ColorBlock name="Text Link Base" className="bg-[var(--text-link-base)]" />
            <ColorBlock name="Text Link Hover" className="bg-[var(--text-link-hover)]" />
          </div>
        </div>

        {/* Background Tokens */}
        <div className="mb-8">
          <h3 className="font-medium text-lg mb-4">Background Colors</h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <ColorBlock name="Surface Default" className="bg-[var(--bg-surface-default)]" />
            <ColorBlock name="Surface Light" className="bg-[var(--bg-surface-light)]" />
            <ColorBlock name="Surface Medium" className="bg-[var(--bg-surface-medium)]" />
            <ColorBlock name="Surface Dark" className="bg-[var(--bg-surface-dark)]" />
            <ColorBlock name="Component Default" className="bg-[var(--bg-component-default)]" />
            <ColorBlock name="Component Light" className="bg-[var(--bg-component-light)]" />
          </div>
        </div>

        {/* Status Tokens */}
        <div className="mb-8">
          <h3 className="font-medium text-lg mb-4">Status Colors</h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <ColorBlock name="Success" className="bg-[var(--status-success)]" />
            <ColorBlock name="Error" className="bg-[var(--status-error)]" />
            <ColorBlock name="Success BG" className="bg-[var(--status-bg-success)]" />
            <ColorBlock name="Info BG" className="bg-[var(--status-bg-info)]" />
            <ColorBlock name="Error BG" className="bg-[var(--status-bg-error)]" />
            <ColorBlock name="Warning BG" className="bg-[var(--status-bg-warning)]" />
          </div>
        </div>

        {/* Border Tokens */}
        <div>
          <h3 className="font-medium text-lg mb-4">Border Colors</h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <ColorBlock name="Border Field" className="bg-[var(--border-field)]" />
            <ColorBlock name="Border Light" className="bg-[var(--border-light)]" />
            <ColorBlock name="Border Medium" className="bg-[var(--border-medium)]" />
            <ColorBlock name="Border Focus" className="bg-[var(--border-focus)]" />
            <ColorBlock name="Border Error" className="bg-[var(--border-error)]" />
            <ColorBlock name="Border On Dark" className="bg-[var(--border-on-dark)]" />
          </div>
        </div>
      </section>

      {/* Typography */}
      <section className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <Type className="size-5 text-primary" />
          <h2 className="font-semibold text-xl">Typography</h2>
        </div>
        <p className="mb-6 text-muted-foreground">
          Font families and size tokens that define the typography system.
        </p>

        {/* Font Families */}
        <div className="mb-8">
          <h3 className="font-medium text-lg mb-4">Font Families</h3>
          <div className="grid grid-cols-1 gap-4">
            <FontBlock className="font-sans" />
            <FontBlock className="font-serif" />
            <FontBlock className="font-mono" />
          </div>
        </div>

        {/* Font Sizes */}
        <div>
          <h3 className="font-medium text-lg mb-4">Font Sizes</h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-4 border rounded-lg">
              <div className="text-xs mb-2">Text XS (11px)</div>
              <code className="text-xs text-muted-foreground">--text-xs: 11px</code>
            </div>
            <div className="p-4 border rounded-lg">
              <div className="text-sm mb-2">Text SM (12px)</div>
              <code className="text-xs text-muted-foreground">--text-sm: 12px</code>
            </div>
            <div className="p-4 border rounded-lg">
              <div className="text-base mb-2">Text Base (13px)</div>
              <code className="text-xs text-muted-foreground">--text-base: 13px</code>
            </div>
            <div className="p-4 border rounded-lg">
              <div className="text-md mb-2">Text MD (14px)</div>
              <code className="text-xs text-muted-foreground">--text-md: 14px</code>
            </div>
            <div className="p-4 border rounded-lg">
              <div className="text-lg mb-2">Text LG (16px)</div>
              <code className="text-xs text-muted-foreground">--text-lg: 16px</code>
            </div>
            <div className="p-4 border rounded-lg">
              <div className="text-xl mb-2">Text XL (18px)</div>
              <code className="text-xs text-muted-foreground">--text-xl: 18px</code>
            </div>
            <div className="p-4 border rounded-lg">
              <div className="text-2xl mb-2">Text 2XL (20px)</div>
              <code className="text-xs text-muted-foreground">--text-2xl: 20px</code>
            </div>
            <div className="p-4 border rounded-lg">
              <div className="text-3xl mb-2">Text 3XL (24px)</div>
              <code className="text-xs text-muted-foreground">--text-3xl: 24px</code>
            </div>
            <div className="p-4 border rounded-lg">
              <div className="text-4xl mb-2">Text 4XL (28px)</div>
              <code className="text-xs text-muted-foreground">--text-4xl: 28px</code>
            </div>
            <div className="p-4 border rounded-lg">
              <div className="text-5xl mb-2">Text 5XL (32px)</div>
              <code className="text-xs text-muted-foreground">--text-5xl: 32px</code>
            </div>
          </div>
        </div>
      </section>

      {/* Shadows */}
      <section className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <Zap className="size-5 text-primary" />
          <h2 className="font-semibold text-xl">Shadows</h2>
        </div>
        <p className="mb-6 text-muted-foreground">
          Shadow tokens for creating depth and elevation in the interface.
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-4">
            <div className="h-20 rounded-lg bg-background border shadow-2xs" />
            <div>
              <div className="font-medium">Shadow 2XS</div>
              <code className="font-mono text-muted-foreground text-sm">shadow-2xs</code>
            </div>
          </div>
          <div className="space-y-4">
            <div className="h-20 rounded-lg bg-background border shadow-xs" />
            <div>
              <div className="font-medium">Shadow XS</div>
              <code className="font-mono text-muted-foreground text-sm">shadow-xs</code>
            </div>
          </div>
          <div className="space-y-4">
            <div className="h-20 rounded-lg bg-background border shadow-sm" />
            <div>
              <div className="font-medium">Shadow SM</div>
              <code className="font-mono text-muted-foreground text-sm">shadow-sm</code>
            </div>
          </div>
          <div className="space-y-4">
            <div className="h-20 rounded-lg bg-background border shadow" />
            <div>
              <div className="font-medium">Shadow</div>
              <code className="font-mono text-muted-foreground text-sm">shadow</code>
            </div>
          </div>
          <div className="space-y-4">
            <div className="h-20 rounded-lg bg-background border shadow-md" />
            <div>
              <div className="font-medium">Shadow MD</div>
              <code className="font-mono text-muted-foreground text-sm">shadow-md</code>
            </div>
          </div>
          <div className="space-y-4">
            <div className="h-20 rounded-lg bg-background border shadow-lg" />
            <div>
              <div className="font-medium">Shadow LG</div>
              <code className="font-mono text-muted-foreground text-sm">shadow-lg</code>
            </div>
          </div>
          <div className="space-y-4">
            <div className="h-20 rounded-lg bg-background border shadow-xl" />
            <div>
              <div className="font-medium">Shadow XL</div>
              <code className="font-mono text-muted-foreground text-sm">shadow-xl</code>
            </div>
          </div>
          <div className="space-y-4">
            <div className="h-20 rounded-lg bg-background border shadow-2xl" />
            <div>
              <div className="font-medium">Shadow 2XL</div>
              <code className="font-mono text-muted-foreground text-sm">shadow-2xl</code>
            </div>
          </div>
        </div>
      </section>

      {/* Shadcn Theme */}
      <section className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <Layers className="size-5 text-primary" />
          <h2 className="font-semibold text-xl">Shadcn Theme</h2>
        </div>
        <p className="mb-6 text-muted-foreground">
          Core theme tokens that integrate with shadcn/ui components.
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <ColorBlock name="Background" className="bg-background" />
          <ColorBlock name="Foreground" className="bg-foreground" />
          <ColorBlock name="Primary" className="bg-primary" />
          <ColorBlock name="Primary Foreground" className="bg-primary-foreground" />
          <ColorBlock name="Secondary" className="bg-secondary" />
          <ColorBlock name="Secondary Foreground" className="bg-secondary-foreground" />
          <ColorBlock name="Muted" className="bg-muted" />
          <ColorBlock name="Muted Foreground" className="bg-muted-foreground" />
          <ColorBlock name="Accent" className="bg-accent" />
          <ColorBlock name="Accent Foreground" className="bg-accent-foreground" />
          <ColorBlock name="Destructive" className="bg-destructive" />
          <ColorBlock name="Destructive Foreground" className="bg-destructive-foreground" />
          <ColorBlock name="Border" className="bg-border" />
          <ColorBlock name="Input" className="bg-input" />
          <ColorBlock name="Ring" className="bg-ring" />
        </div>
      </section>
    </div>
  );
}
