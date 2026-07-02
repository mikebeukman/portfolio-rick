import { ImageGrid } from "@/components/ui/ImageGrid";
import { Label } from "@/components/ui/Label";
import { Youtube } from "@/components/ui/Youtube";
import Image from "next/image";

export default function AzStoryPage() {
  return (
    <div className="content default-space--top flex flex-col gap-y-4">
      <h1 className="text-center"> AZ Story </h1>

      <div className="flex gap-8 w-full items-stretch px-18 mt-4">
        <Label text="UX/UI" />
        <Label text="Webdesign" />
        <Label text="Illustration" />
        <Label text="Interaction" />
      </div>

      <p className="mt-4">
        An interactive mobile website/app that utilizes immersive,
        animation-driven storytelling to showcase the club’s historic evolution
        from 2009 to the present day. Rendered in a captivating hand-drawn
        illustration style, the platform guides users through an inspiring
        narrative: how the club overcame near-bankruptcy to become the
        financially healthiest club in the Netherlands, boasting one of the
        world's top-tier youth academies.
      </p>

      <div className="grid grid-cols-3 gap-4">
        <Youtube videoId="yoPXbaYHAiY" />
        <ImageGrid className="col-span-1" />
      </div>
    </div>
  );
}
