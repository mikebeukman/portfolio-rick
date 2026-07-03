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
    <Link href={href} className={cn("flex items-center gap-1", className)}>
      <div className="w-3 h-3 bg-[#001BF4] rounded-full" />
      <span className="underline md:text-xl">{label}</span>
    </Link>
  );
};
