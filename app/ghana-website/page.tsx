import { Label } from "@/components/ui/Label";
import Image from "next/image";

export default function GhanaWebsitePage() {
  return (
    <div className="content default-space--top flex flex-col gap-y-4">
      <h1 className="text-center"> Ghana website </h1>

      <div className="flex flex-wrap gap-8 w-full items-stretch px-18 mt-4">
        <Label text="UX/UI" />
        <Label text="Webdesign" />
        <Label text="Illustration" />
      </div>

      <p className="mt-4 mb-8">
        Commissioned by the KNMI, we have been tasked with designing and
        developing a web portal where air measurements can be uploaded and
        viewed. The goal of this platform is to provide residents with insight
        into the air quality in their surroundings and to make them aware of the
        impact of air pollution on their living environment and health. The
        website is made for the people of Ghana who mainly use their phone to
        search on the internet.
        <br />
        <br />
        Fully made with Figma.
      </p>

      <div className="grid lg:grid-cols-4 lg:gap-4 place-items-center gap-0">
        <Image
          src="/ghana-1.png"
          alt="ghana website"
          width={1000}
          height={1000}
        />
        <Image
          src="/ghana-2.png"
          alt="ghana website"
          width={1000}
          height={1000}
        />
        <Image
          src="/ghana-3.png"
          alt="ghana website"
          width={1000}
          height={1000}
        />
        <Image
          src="/ghana-4.png"
          alt="ghana website"
          width={1000}
          height={1000}
        />
      </div>
    </div>
  );
}
