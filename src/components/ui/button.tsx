import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";
import type * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  // Base styles - shadcn compatible
  [
    "inline-flex items-center justify-center gap-2",
    "whitespace-nowrap rounded-md font-medium",
    "transition-all disabled:pointer-events-none disabled:opacity-50",
    "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",
    "shrink-0 [&_svg]:shrink-0",
    "outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
    "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  ].join(" "),
  {
    variants: {
      variant: {
        // Primary button - using v0's expected classes
        default: [
          "bg-primary",
          "text-primary-foreground",
          "hover:bg-primary/90",
          "active:bg-primary/80",
          "disabled:opacity-50",
        ].join(" "),

        // Secondary button - using v0's expected classes but with our design tokens
        secondary: [
          "bg-secondary",
          "text-secondary-foreground border border-border",
          "hover:bg-secondary/80",
          "active:bg-secondary/90",
          "disabled:opacity-50",
        ].join(" "),

        // Outline button - using v0's expected classes
        outline: [
          "border border-input bg-background",
          "text-foreground",
          "hover:bg-accent hover:text-accent-foreground",
          "active:bg-accent/80",
          "disabled:opacity-50",
        ].join(" "),

        // Ghost button - using v0's expected classes
        ghost: [
          "hover:bg-accent hover:text-accent-foreground",
          "active:bg-accent/80",
          "disabled:opacity-50",
        ].join(" "),

        // Destructive button - using v0's expected classes
        destructive: [
          "bg-destructive text-destructive-foreground",
          "hover:bg-destructive/90",
          "active:bg-destructive/80",
          "disabled:opacity-50",
        ].join(" "),

        // Link button - text only using design system tokens
        link: [
          "text-blue-600 underline-offset-4 hover:underline",
        ].join(" "),
      },

      size: {
        // Extra small - 24px height (using design system token)
        xs: [
          "text-xs px-2 py-1",
          "has-[>svg]:px-1.5 gap-1",
          "h-xs",
        ].join(" "),

        // Small - 32px height (using design system token)
        sm: [
          "text-sm px-2 py-1.5",
          "has-[>svg]:px-1.5 gap-1",
          "h-sm",
        ].join(" "),

        // Default - 32px height (using design system token)
        default: [
          "text-sm px-3 py-2",
          "has-[>svg]:px-2 gap-2",
          "h-sm",
        ].join(" "),

        // Large - 40px height (using design system token)
        lg: [
          "text-base rounded-md px-3 py-3",
          "has-[>svg]:px-2.5 gap-2",
          "h-md",
        ].join(" "),

        // Icon only - 36px square
        icon: [
          "size-9",
        ].join(" "),
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  // No inline styles needed - using v0's expected classes

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
