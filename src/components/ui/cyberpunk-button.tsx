import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const cyberpunkButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        neon: "bg-gradient-primary text-primary-foreground shadow-neon-primary hover:shadow-neon-primary hover:scale-105",
        "neon-secondary": "bg-gradient-secondary text-secondary-foreground shadow-neon-secondary hover:shadow-neon-secondary hover:scale-105",
        "neon-accent": "bg-gradient-to-r from-accent to-accent-glow text-accent-foreground shadow-neon-accent hover:shadow-neon-accent hover:scale-105",
        ghost: "hover:bg-primary/10 hover:text-primary border border-transparent hover:border-primary/20",
        outline: "border border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/60 hover:shadow-neon-primary",
        glow: "bg-transparent border border-primary text-primary hover:bg-primary/5 hover:shadow-neon-primary animate-glow",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "neon",
      size: "default",
    },
  }
);

export interface CyberpunkButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof cyberpunkButtonVariants> {
  asChild?: boolean;
}

const CyberpunkButton = React.forwardRef<HTMLButtonElement, CyberpunkButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(cyberpunkButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
CyberpunkButton.displayName = "CyberpunkButton";

export { CyberpunkButton, cyberpunkButtonVariants };