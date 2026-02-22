import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = {
  variant?: ButtonVariant;
  className?: string;
  children: React.ReactNode;
} & (
  | ({ href: string } & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "children" | "className">)
  | ({ href?: never } & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children" | "className">)
);

const variants: Record<ButtonVariant, string> = {
  primary: "bg-accent text-text-primary hover:bg-accent-hover",
  secondary: "border border-border text-text-primary hover:border-text-muted",
  ghost: "text-text-secondary hover:text-text-primary",
};

export default function Button({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-none px-6 py-3 text-sm font-medium tracking-wide uppercase transition-all duration-[--duration-normal] ease-[--ease-expo-out]",
    variants[variant],
    className
  );

  if ("href" in props && props.href) {
    const { href, ...rest } = props as { href: string } & React.AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  const buttonProps = props as React.ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
