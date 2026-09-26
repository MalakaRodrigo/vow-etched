import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap border font-sans text-[0.7rem] font-medium uppercase tracking-[0.18em] transition duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "border-primary bg-primary text-primary-foreground hover:bg-foreground",
        primary: "border-primary bg-primary text-primary-foreground hover:bg-foreground",
        destructive: "border-destructive bg-destructive text-destructive-foreground",
        outline: "border-border bg-transparent text-foreground hover:border-primary hover:text-primary",
        secondary: "border-secondary bg-secondary text-secondary-foreground",
        ghost: "border-transparent bg-transparent text-foreground hover:text-primary",
        link: "border-transparent bg-transparent text-primary underline-offset-4 hover:underline",
        icon: "border-border bg-background/90 text-foreground hover:border-primary hover:text-primary",
      },
      size: {
        default: "min-h-12 px-6",
        sm: "h-9 px-3",
        lg: "h-14 px-8",
        icon: "h-10 w-10 p-0",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  },
);

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, type = "button", ...props }, ref) => (
    <button
      ref={ref}
      type={type}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  ),
);

Button.displayName = "Button";