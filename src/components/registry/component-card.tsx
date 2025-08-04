"use client";

import { Check, Copy } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { OpenInV0Button } from "@/components/registry/open-in-v0";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { getComponentDocs } from "./docs";
import type { Component } from "@/lib/registry";

interface ComponentCardProps {
  component: Component;
  baseUrl: string;
  prompt: string;
}

export function ComponentCard({
  component,
  baseUrl,
  prompt,
}: ComponentCardProps) {
  const [copied, setCopied] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const docs = getComponentDocs(component.name);

  const registryUrl = `https://${baseUrl}/r/${component.name}.json`;
  const npxCommand = `npx shadcn@latest add ${registryUrl}`;

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(npxCommand);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  // Handle iframe height adjustment
  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const handleLoad = () => {
      try {
        // Set a reasonable default height
        iframe.style.height = '600px';

        // Try to get content height from iframe
        const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
        if (iframeDoc) {
          const height = iframeDoc.body.scrollHeight;
          if (height > 0) {
            iframe.style.height = `${Math.max(height + 50, 400)}px`;
          }
        }
      } catch (error) {
        // Cross-origin restrictions, keep default height
        console.log('Iframe height adjustment not available due to CORS');
      }
    };

    iframe.addEventListener('load', handleLoad);
    return () => iframe.removeEventListener('load', handleLoad);
  }, [component.name]);

  return (
    <section className="space-y-6">
      {/* Header with title, description, and v0 buttons */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">{docs.title}</h1>
          <p className="text-lg text-muted-foreground">{docs.description}</p>
        </div>

        <div className="flex items-center gap-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipContent className="font-mono">
                Copy npx command
              </TooltipContent>
              <TooltipTrigger asChild>
                <Button
                  onClick={copyToClipboard}
                  variant="outline"
                  className="p-4"
                  aria-label="Copy npx command to clipboard"
                >
                  {copied ? (
                    <Check className="size-4" />
                  ) : (
                    <Copy className="size-4" />
                  )}
                </Button>
              </TooltipTrigger>
            </Tooltip>
          </TooltipProvider>

          <OpenInV0Button
            registryUrl={registryUrl}
            title={`${docs.title} Kit`}
            prompt={prompt}
          />
        </div>
      </div>

      {/* Clean iframe demo with single centered button */}
      <div className="w-full overflow-hidden rounded-md border bg-card">
        <iframe
          ref={iframeRef}
          id="iframe"
          src={`/demo/${component.name}`}
          className="w-full bg-card"
          title="Component Preview"
          style={{
            minHeight: '400px',
            height: 'auto',
            transition: 'height 0.3s ease',
            padding: '1rem',
          }}
        />
      </div>

      {/* Tabs below iframe */}
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="api">API</TabsTrigger>
          <TabsTrigger value="guide">Guide</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Examples</h3>
            <div className="space-y-6">
              {docs.overview.examples.length > 0 ? (
                docs.overview.examples.map((section, index) => (
                  <div key={index}>
                    <h4 className="font-medium mb-3">{section.title}</h4>
                    <div className="flex flex-wrap gap-2">
                      {section.components}
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  <p>No examples available for this component.</p>
                </div>
              )}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="api" className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Props</h3>
            {docs.api.props ? (
              <div className="bg-muted p-4 rounded-md">
                <pre className="text-sm">{docs.api.props}</pre>
              </div>
            ) : (
              <div className="text-center py-4 text-muted-foreground">
                <p>No props documentation available.</p>
              </div>
            )}

            <h3 className="text-lg font-semibold">Variants</h3>
            {docs.api.variants.length > 0 ? (
              <div className="space-y-2">
                {docs.api.variants.map((variant, index) => (
                  <div key={index}>
                    <code>{variant.name}</code> - {variant.description}
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-4 text-muted-foreground">
                <p>No variants available for this component.</p>
              </div>
            )}

            <h3 className="text-lg font-semibold">Sizes</h3>
            {docs.api.sizes.length > 0 ? (
              <div className="space-y-2">
                {docs.api.sizes.map((size, index) => (
                  <div key={index}>
                    <code>{size.name}</code> - {size.description}
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-4 text-muted-foreground">
                <p>No size variants available for this component.</p>
              </div>
            )}
          </div>
        </TabsContent>

        <TabsContent value="guide" className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">When to use</h3>
            {docs.guide.whenToUse.length > 0 ? (
              <ul className="space-y-2 text-sm">
                {docs.guide.whenToUse.map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            ) : (
              <div className="text-center py-4 text-muted-foreground">
                <p>No usage guidelines available.</p>
              </div>
            )}

            <h3 className="text-lg font-semibold">Best practices</h3>
            {docs.guide.bestPractices.length > 0 ? (
              <ul className="space-y-2 text-sm">
                {docs.guide.bestPractices.map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            ) : (
              <div className="text-center py-4 text-muted-foreground">
                <p>No best practices documented.</p>
              </div>
            )}

            <h3 className="text-lg font-semibold">Accessibility</h3>
            {docs.guide.accessibility.length > 0 ? (
              <ul className="space-y-2 text-sm">
                {docs.guide.accessibility.map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            ) : (
              <div className="text-center py-4 text-muted-foreground">
                <p>No accessibility guidelines available.</p>
              </div>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
}
