import classNames from "classnames";
import { HTMLAttributes, ReactNode } from "react";

const IconButton = ({
  children,
  className,
  ...props
}: {
  children: ReactNode;
  className?: string;
} & HTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      type="button"
      className={classNames(
        className,
        "aspect-square text-black bg-white hover:bg-slate-200 focus:ring-4 focus:outline-none focus:ring-slate-600 rounded-full inline-flex justify-center items-center mr-2 h-10"
      )}
      {...props}
    >
      <span>{children}</span>
      <span className="sr-only">Icon description</span>
    </button>
  );
};

export default IconButton;
