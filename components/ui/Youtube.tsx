import { cn } from "@/utils/cn";

export const Youtube = ({
  videoId,
  className,
}: {
  videoId: string;
  className?: string;
}) => {
  return (
    <div className={cn("relative aspect-video w-full", className)}>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="size-full"
      />
    </div>
  );
};
