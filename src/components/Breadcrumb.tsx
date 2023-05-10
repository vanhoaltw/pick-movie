import Link from "next/link";
import { ReactNode } from "react";

const Breadcrumb = ({ children }: { children: ReactNode }) => {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-2 text-sm font-semibold text-accent-3">
        <li className="inline-flex items-center">
          <Link
            href="/"
            className="inline-flex items-center gap-1 text-slate-400 hover:text-slate-200"
          >
            Home
          </Link>
        </li>
        {children}
      </ol>
    </nav>
  );
};

const BreadcrumbAnchor = ({
  href,
  children,
  className,
}: {
  href?: string;
  children: ReactNode;
  className?: string;
}) => (
  <li className={className}>
    <div className="flex items-center gap-2">
      <span className="text-slate-400">/</span>
      {href ? (
        <Link className="text-slate-400 hover:text-slate-200" href={href}>
          {children}
        </Link>
      ) : (
        children
      )}
    </div>
  </li>
);

Breadcrumb.displayName = "Breadcrumb";
Breadcrumb.Anchor = BreadcrumbAnchor;

export default Breadcrumb;
