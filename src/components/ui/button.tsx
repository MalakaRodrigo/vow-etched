import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "outline" | "ghost" | "icon";
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", type = "button", ...props }, ref) => (
    <button
      ref={ref}
      type={type}
      className={cn(
        "inline-flex min-h-12 items-center justify-center gap-2 border px-6 font-sans text-[0.7rem] font-medium uppercase tracking-[0.18em] transition duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50",
        variant === "primary" && "border-primary bg-primary text-primary-foreground hover:bg-foreground",
        variant === "outline" && "border-border bg-transparent text-foreground hover:border-primary hover:text-primary",
        variant === "ghost" && "border-transparent bg-transparent px-3 text-foreground hover:text-primary",
        variant === "icon" && "h-12 w-12 border-border bg-background/90 p-0 text-foreground hover:border-primary hover:text-primary",
        className,
      )}
      {...props}
    />
  ),
);

Button.displayName = "Button";