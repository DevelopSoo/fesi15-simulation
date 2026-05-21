// src/components/Input/index.tsx

import clsx from "clsx";

import { twMerge } from "tailwind-merge";

export default function Input({
  className,
  type = "text",
  ...props
}: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      className={twMerge(
        clsx(
          "border border-gray-300 rounded-md px-3 py-1 shadow-xs w-full",
          className
        )
      )}
      {...props}
    />
  );
}
