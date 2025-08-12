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
        // Primary button - solid with gradient using design system tokens
        default: [
          "bg-gradient-to-b from-blue-500 to-blue-600",
          "text-white",
          "hover:from-blue-600 hover:to-blue-700",
          "active:from-blue-800 active:to-blue-900",
          "disabled:from-blue-200 disabled:to-blue-300",
          "disabled:text-gray-300",
        ].join(" "),

        // Secondary button - subtle background using design system tokens
        secondary: [
          "bg-gradient-to-b from-slate-50 to-slate-100",
          "text-gray-900 border border-slate-300",
          "hover:from-slate-100 hover:to-slate-200",
          "hover:text-gray-900",
          "active:from-slate-200 active:to-slate-100",
          "disabled:border-slate-200",
          "disabled:from-white disabled:to-slate-50",
          "disabled:text-slate-400",
        ].join(" "),

        // Outline button - transparent with border using design system tokens
        outline: [
          "bg-transparent border border-slate-300",
          "text-gray-900",
          "hover:bg-slate-50 hover:border-slate-400",
          "hover:text-gray-900",
          "active:bg-slate-100",
          "disabled:border-slate-200",
          "disabled:text-slate-400",
        ].join(" "),

        // Ghost button - transparent using design system tokens
        ghost: [
          "bg-transparent text-gray-900",
          "hover:bg-slate-50",
          "active:bg-slate-100",
          "disabled:text-slate-400",
        ].join(" "),

        // Destructive button - red solid using design system tokens
        destructive: [
          "bg-red-500 text-color-eco-text-primary",
          "hover:bg-red-600",
          "active:bg-red-700",
          "disabled:bg-red-200",
          "disabled:text-red-800",
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

  // Apply design system tokens via inline styles for variants that need custom colors
  const getVariantStyles = () => {
    if (variant === "default") {
      return {
        background: "linear-gradient(to bottom, var(--button-primary-bg-base-light), var(--button-primary-bg-base-dark))",
        color: "var(--button-primary-text-base)",
      };
    }
    if (variant === "destructive") {
      return {
        backgroundColor: "var(--button-destructive-solid-bg-normal)",
        color: "var(--button-destructive-solid-text)",
      };
    }
    return {};
  };

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      style={getVariantStyles()}
      {...props}
    />
  );
}

export { Button, buttonVariants };
