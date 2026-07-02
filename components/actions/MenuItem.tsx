import { cn } from "@/utils/cn";
import Link from "next/link";

export const MenuItem = ({
  href,
  label,
  className,
}: {
  href: string;
  label: string;
  className?: string;
}) => {
  return (
    <Link
      href={href}
      className={cn("flex items-center gap-1 bg-white p-2", className)}
    >
      <div className="w-3 h-3 bg-[#001BF4] rounded-full" />
      {label}
    </Link>
  );
};
