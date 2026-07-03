import { Label } from "@/components/ui/Label";
import Image from "next/image";

export default function CoffeeWebsitePage() {
  return (
    <div className="content default-space--top flex flex-col gap-y-4">
      <h1 className="text-center"> Coffee website </h1>

      <div className="flex-wrap flex gap-8 w-full items-stretch px-18 mt-4">
        <Label text="UX/UI" />
        <Label text="Webdesign" />
      </div>

      <p className="mt-4 mb-8">
        A luxury coffee e-commerce website featuring a seamless toggle to a
        personalized user dashboard. Designed with user psychology in mind, the
        platform balances high-end aesthetics with intentional UX choices to
        support the user. This prototype was built entirely in Figma!
        <br />
        <br />
        <strong>Color Theory & Psychological Design</strong> <br />
        <br />
        The Main Website: Dominated by beige, gold/brown, and light tones to
        create a calm, luxurious, and highly accessible atmosphere. Blue is used
        as an accent color, leveraging its psychological associations with
        tranquility and sweetness. The Dashboard Inversion: For the user
        dashboard, the color scheme is inverted. Instead of harsh black, dark
        graywas chosen to make the transition softer on the eyes. The blue
        accent color remains consistent, maintaining a clear visual link to the
        main site.
      </p>

      <div className="grid md:grid-cols-2 gap-8 place-items-start mt-4">
        <Image
          src="/coffee-1.png"
          alt="ghana website"
          width={1000}
          height={1000}
        />
        <Image
          src="/coffee-2.png"
          alt="ghana website"
          width={1000}
          height={1000}
        />
      </div>
    </div>
  );
}
