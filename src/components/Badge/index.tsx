// src/components/Badge/index.tsx

import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

const badgeVariants = cva(
  "px-2 py-1 text-xs font-medium bg-black text-white rounded-full",
  {
    variants: {
      variant: {
        secondary: "bg-gray-200 text-black",
        destructive: "bg-red-500 text-white",
        outline: "bg-transparent text-black border border-gray-200",
      },
    },
  },
);

type BadgeProps = VariantProps<typeof badgeVariants> & {
  className?: string;
  children: React.ReactNode;
};

export default function Badge({ children, variant, className }: BadgeProps) {
  return (
    <span className={twMerge(clsx(badgeVariants({ variant }), className))}>
      {children}
    </span>
  );
}
