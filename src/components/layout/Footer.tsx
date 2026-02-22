import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-6 px-6 md:flex-row md:px-10">
        <Link
          href="/"
          className="font-heading text-sm font-bold tracking-tight text-text-primary"
        >
          RZMRN
        </Link>

        <p className="font-mono text-sm text-text-muted">
          &copy; {new Date().getFullYear()} RZMRN. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
