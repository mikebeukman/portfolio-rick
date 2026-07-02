import { cn } from "@/utils/cn";
import Image from "next/image";

export const ImageGrid = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn("grid grid-cols-2 gap-4 h-full content-between", className)}
    >
      <Image
        src="/az-1.png"
        alt="AZ Story"
        width={100}
        height={100}
        className="size-full"
      />
      <Image
        src="/az-1.png"
        alt="AZ Story"
        width={100}
        height={100}
        className="w-full h-auto"
      />
      <Image
        src="/az-1.png"
        alt="AZ Story"
        width={100}
        height={100}
        className="w-full h-auto"
      />
      <Image
        src="/az-1.png"
        alt="AZ Story"
        width={100}
        height={100}
        className="w-full h-auto"
      />
      <Image
        src="/az-1.png"
        alt="AZ Story"
        width={100}
        height={100}
        className="w-full h-auto"
      />
      <Image
        src="/az-1.png"
        alt="AZ Story"
        width={100}
        height={100}
        className="w-full h-auto"
      />
    </div>
  );
};
