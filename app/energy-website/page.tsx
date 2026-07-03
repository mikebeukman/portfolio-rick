import { Label } from "@/components/ui/Label";
import Image from "next/image";

export default function EnergyWebsitePage() {
  return (
    <div className="content default-space--top flex flex-col gap-y-4">
      <h1 className="text-center"> Energy website </h1>

      <div className="flex-wrap flex gap-8 w-full items-stretch px-18 mt-4">
        <Label text="UX/UI" />
        <Label text="Webdesign" />
        <Label text="Illustration" />
      </div>

      <p className="mt-4">
        In this school project we got the assignment to make a onepager in
        Illlustrator for a food/drink. For this energydrink the assignment was
        to make 3 variables of your food/drink, a mascot and make a onepager
        that reflects the product in the form of color and illustration. 
      </p>

      <div className="grid md:grid-cols-3 gap-0 md:gap-4 place-items-center">
        <Image
          className="mt-4 h-full"
          src="/energy-3.png"
          alt="ghana website"
          width={1000}
          height={1000}
        />
        <Image
          className=" mt-4 h-full"
          src="/energy-2.png"
          alt="ghana website"
          width={1000}
          height={1000}
        />
        <Image
          className="mt-4 h-full"
          src="/energy-1.png"
          alt="ghana website"
          width={1000}
          height={1000}
        />
      </div>
    </div>
  );
}
