import { ImageGrid } from "@/components/ui/ImageGrid";
import { Label } from "@/components/ui/Label";
import { Youtube } from "@/components/ui/Youtube";

export default function WorldCupPage() {
  return (
    <div className="content default-space--top flex flex-col gap-y-4">
      <h1 className="text-center"> 8-bit worldcup</h1>

      <div className="flex gap-8 w-full items-stretch px-18 mt-4">
        <Label text="UX/UI" />
        <Label text="Webdesign" />
        <Label text="Illustration" />
        <Label text="Interaction" />
      </div>

      <p className="mt-4 mb-8">
        This project is an interactive mobile website/app designed with a core
        focus on dynamic animation and user engagement. Inspired by classic
        gaming nostalgia, the platform features elements that react vividly to
        user interaction, turning a simple visit into an immersive, playful
        experience.
        <br />
        <br />
        This interactive prototype was built entirely in Figma.
      </p>

      <div className="grid lg:grid-cols-3 gap-4">
        <Youtube videoId="K_XlC8dTJZo" className="col-span-1 lg:col-span-2" />
        <ImageGrid
          images={[
            "/worldcup-1.png",
            "/worldcup-2.png",
            "/worldcup-3.png",
            "/worldcup-4.png",
            "/worldcup-5.png",
            "/worldcup-6.png",
          ]}
          className="col-span-1"
        />
      </div>
    </div>
  );
}
