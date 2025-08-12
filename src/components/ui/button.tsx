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
        // Primary button - solid with gradient
        default: [
          "bg-gradient-to-b from-eco-button-primary-bg-base-light to-eco-button-primary-bg-base-dark",
          "text-eco-button-primary-text-base",
          "hover:from-eco-button-primary-bg-hover-light hover:to-eco-button-primary-bg-hover-dark",
          "active:from-eco-button-primary-bg-base-dark active:to-eco-button-primary-bg-base-light",
          "disabled:from-eco-button-primary-bg-disabled disabled:to-eco-button-primary-bg-disabled",
          "disabled:text-eco-button-primary-text-disabled",
        ].join(" "),

        // Secondary button - subtle background
        secondary: [
          "bg-gradient-to-b from-eco-button-secondary-bg-base-light to-eco-button-secondary-bg-base-dark",
          "text-eco-text-primary border border-eco-button-secondary-border-base",
          "hover:from-eco-button-secondary-bg-hover-light hover:to-eco-button-secondary-bg-hover-dark",
          "hover:text-eco-button-secondary-text-base",
          "active:from-eco-button-secondary-bg-hover-dark active:to-eco-button-secondary-bg-hover-light",
          "disabled:border-eco-button-secondary-border-disabled",
          "disabled:from-eco-button-secondary-bg-disabled disabled:to-eco-button-secondary-bg-disabled",
          "disabled:text-eco-button-secondary-text-disabled",
        ].join(" "),

        // Outline button - transparent with border
        outline: [
          "bg-transparent border border-eco-button-secondary-border-base",
          "text-eco-text-primary",
          "hover:bg-eco-button-secondary-bg-hover-light hover:border-eco-button-secondary-border-active",
          "hover:text-eco-button-secondary-text-base",
          "active:bg-eco-button-secondary-bg-hover-dark",
          "disabled:border-eco-button-secondary-border-disabled",
          "disabled:text-eco-button-secondary-text-disabled",
        ].join(" "),

        // Ghost button - transparent
        ghost: [
          "bg-transparent text-eco-button-ghost-text",
          "hover:bg-eco-button-ghost-bg-hover",
          "active:bg-eco-button-ghost-bg-active",
          "disabled:text-eco-button-ghost-text-disabled",
        ].join(" "),

        // Destructive button - red solid
        destructive: [
          "bg-eco-button-destructive-solid-bg-normal text-eco-button-destructive-solid-text",
          "hover:bg-eco-button-destructive-solid-bg-hover",
          "active:bg-eco-button-destructive-solid-bg-active",
          "disabled:bg-eco-button-destructive-solid-bg-disabled",
          "disabled:text-eco-button-destructive-solid-text-disabled",
        ].join(" "),

        // Link button - text only
        link: [
          "text-primary underline-offset-4 hover:underline",
        ].join(" "),
      },

      size: {
        // Extra small - 24px height
        xs: [
          "text-xs h-xs px-2 py-1",
          "has-[>svg]:px-1.5 gap-1",
        ].join(" "),

        // Small - 32px height
        sm: [
          "text-sm h-sm px-2 py-1.5",
          "has-[>svg]:px-1.5 gap-1",
        ].join(" "),

        // Default - 32px height
        default: [
          "text-sm h-sm px-3 py-2",
          "has-[>svg]:px-2 gap-2",
        ].join(" "),

        // Large - 40px height
        lg: [
          "text-base h-md rounded-md px-3 py-3",
          "has-[>svg]:px-2.5 gap-2",
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

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
