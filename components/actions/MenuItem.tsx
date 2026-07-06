import { cn } from "@/utils/cn";
import Link from "next/link";

export const MenuItem = ({
  href,
  index,
  label,
  className,
}: {
  href: string;
  index?: number;
  label: string;
  className?: string;
}) => {
  return (
    <Link
      href={href}
      className={cn("flex items-center gap-1 bg-white", className)}
    >
      <div className="w-3 h-3 bg-[#001BF4] rounded-full" />
      {index && <span className="md:text-xl">{index}.</span>}
      <span className="underline md:text-xl">{label}</span>
    </Link>
  );
};
