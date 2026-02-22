import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export default function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center border border-border bg-background/80 px-2.5 py-1 text-xs uppercase tracking-wider text-text-muted backdrop-blur-sm",
        className
      )}
    >
      {children}
    </span>
  );
}
