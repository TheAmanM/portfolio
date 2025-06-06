// components/ui/button.tsx
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@sglara/cn";

/**
 * Base styles shared by every button variant
 * – feel free to tweak padding, radius, etc.
 */
const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2",
    "rounded-md text-sm font-medium transition-colors",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-50",
  ].join(" "),
  {
    variants: {
      /** Visual looks */
      variant: {
        /** “Contact Me” style */
        primary:
          "bg-primary text-white hover:bg-primary/80 active:bg-primary/60",
        /** “View Projects” glass-ghost style */
        ghost:
          "bg-white/15 backdrop-blur-sm border border-white/18 text-white " +
          "hover:bg-white/25 active:bg-white/30",
      },

      /** Optional size modifiers */
      size: {
        sm: "h-9 px-3",
        md: "h-10 px-6",
        lg: "h-12 px-8",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & { href: string };

/**
 * Reusable Button
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ href, className, variant, size, ...props }, ref) => (
    <a href={href}>
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      />
    </a>
  )
);
Button.displayName = "Button";
