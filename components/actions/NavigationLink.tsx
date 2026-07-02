import Link from "next/link";
import { Eye } from "../ui/Eye";
import { cn } from "@/utils/cn";

export const NavigationLink = ({
  label,
  href,
  className,
}: {
  label: string;
  href: string;
  className?: string;
}) => {
  return (
    <Link
      href={href}
      className={cn("flex items-center gap-1 font-display", className)}
    >
      <Eye />
      <span className="text-3xl leading-none">{label}</span>
    </Link>
  );
};
