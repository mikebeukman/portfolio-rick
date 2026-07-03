import { Label } from "@/components/ui/Label";
import Image from "next/image";

export default function RecycleWebsitePage() {
  return (
    <div className="content default-space--top flex flex-col gap-y-4">
      <h1 className="text-center"> Recycle website </h1>

      <div className="flex gap-8 w-full items-stretch px-18 mt-4">
        <Label text="UX/UI" />
        <Label text="Webdesign" />
        <Label text="Illustration" />
      </div>

      <p className="mt-4 mb-8">
        For this project, I designed and developed an interactive, mobile-first
        website/app that puts the United Repair Centre in the spotlight. No
        boring blocks of text or standard stock photos, but a unique, fully
        hand-drawn style designed to give the visitor the feeling that the
        website has also been repaired and is therefore dedicated to
        sustainability.
        <br />
        <br />
        This interactive prototype was built in Figma and fully coded in
        html/css.
      </p>

      <div className="grid md:grid-cols-3 gap-4 place-items-center">
        <Image
          className="col-span-1 mt-4"
          src="/recycle-1.png"
          alt="ghana website"
          width={1000}
          height={1000}
        />
        <Image
          className="col-span-1 mt-4"
          src="/recycle-2.png"
          alt="ghana website"
          width={1000}
          height={1000}
        />
        <Image
          className="col-span-1 mt-4"
          src="/recycle-3.png"
          alt="ghana website"
          width={1000}
          height={1000}
        />
      </div>
    </div>
  );
}
