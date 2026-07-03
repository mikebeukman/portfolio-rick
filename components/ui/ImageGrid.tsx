import { cn } from "@/utils/cn";
import Image from "next/image";

export const ImageGrid = ({
  className,
  images,
}: {
  className?: string;
  images: string[];
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 gap-4 h-full content-between",
        className,
      )}
    >
      {images.map((image) => (
        <Image
          key={image}
          src={image}
          alt="AZ Story"
          width={100}
          height={100}
          className="size-full"
        />
      ))}
    </div>
  );
};
