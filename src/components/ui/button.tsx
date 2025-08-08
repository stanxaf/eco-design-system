import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";
import type * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-b from-eco-button-primary-bg-base-light to-eco-button-primary-bg-base-dark text-eco-button-primary-text-base leading-base [leading-trim:both] [text-edge:cap] hover:from-eco-button-primary-bg-hover-light hover:to-eco-button-primary-bg-hover-dark active:from-eco-button-primary-bg-base-dark active:to-eco-button-primary-bg-base-light disabled:from-eco-button-primary-bg-disabled disabled:to-eco-button-primary-bg-disabled disabled:text-eco-button-primary-text-disabled",
        destructive:
          "active:bg-eco-button-destructive-solid-bg-active bg-eco-button-destructive-solid-bg-normal disabled:bg-eco-button-destructive-solid-bg-disabled disabled:text-eco-button-destructive-solid-text-disabled hover:bg-eco-button-destructive-solid-bg-hover hover:text-eco-button-destructive-solid-text text-eco-button-destructive-solid-text",
        outline:
          "bg-gradient-to-b border border-eco-button-secondary-border-base text-eco-text-primary disabled:border-eco-button-secondary-border-disabled disabled:from-eco-button-secondary-bg-disabled disabled:text-eco-button-secondary-text-disabled disabled:to-eco-button-secondary-bg-disabled from-eco-button-secondary-bg-base-light hover:from-eco-button-secondary-bg-hover-light hover:text-eco-button-secondary-text-base hover:to-eco-button-secondary-bg-hover-dark active:from-eco-button-secondary-bg-hover-dark active:to-eco-button-secondary-bg-hover-light to-eco-button-secondary-bg-base-dark",
        secondary:
          "bg-gradient-to-b border border-eco-button-secondary-border-base text-eco-text-primary disabled:border-eco-button-secondary-border-disabled disabled:from-eco-button-secondary-bg-disabled disabled:text-eco-button-secondary-text-disabled disabled:to-eco-button-secondary-bg-disabled from-eco-button-secondary-bg-base-light hover:from-eco-button-secondary-bg-hover-light hover:text-eco-button-secondary-text-base hover:to-eco-button-secondary-bg-hover-dark active:from-eco-button-secondary-bg-hover-dark active:to-eco-button-secondary-bg-hover-light to-eco-button-secondary-bg-base-dark",
        ghost:
          "bg-transparent disabled:bg-transparent text-eco-text-primary disabled:text-eco-button-tertiary-text-disabled hover:bg-eco-button-tertiary-bg-hover active:bg-eco-button-tertiary-bg-active",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-sm px-3 py-2 has-[>svg]:px-2 gap-2",
        sm: "text-xs h-xs rounded-md gap-1 px-2 py-1 has-[>svg]:px-1.5 gap-1",
        lg: "text-base h-md rounded-md px-3 py-3 has-[>svg]:px-2.5 gap-2",
        icon: "size-9 text-eco-text-primary",
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
