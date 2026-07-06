import { AboutHeader } from "@/components/Headers/AboutHeader";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="default-space--top lg:mt-16 content flex flex-col justify-between">
      <AboutHeader />
      <p className="mt-8 md:mt-36">
        Hi,
        <br /> My name is Rick Beukman. <br /> <br /> I’m a 23-year-old designer
        based in the Netherlands who loves to create digital products. My main
        goal is to deliver the right message to the right people and to help
        brands and individuals with my designs.
      </p>

      <div className="flex justify-between gap-x-4 items-start md:items-center mt-8 md:mt-24 md:gap-x-24">
        {/* LEFT CONTENT */}
        <div className="flex flex-col gap-y-2 md:gap-y-16 flex-1 min-w-0">
          <p>
            If you have any questions or would like to connect, feel free to
            reach out via email or the social links below!
            <br />
            <br />
            rick.beukman10@gmail.com
          </p>

          <div className="flex flex-row gap-x-8">
            <Image
              alt="instagram"
              src="/instagram.svg"
              width={50}
              height={50}
              className="md:hidden"
            />
            <Image
              alt="linkedin"
              src="/linkedin.svg"
              width={50}
              height={50}
              className="md:hidden"
            />

            <Image
              alt="instagram"
              src="/instagram.svg"
              width={100}
              height={100}
              className="hidden md:block"
            />
            <Image
              alt="linkedin"
              src="/linkedin.svg"
              width={100}
              height={100}
              className="hidden md:block"
            />
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="shrink-0 w-32 sm:w-48 md:w-64">
          <Image
            alt="get in touch"
            src="/get-in-touch.svg"
            width={300}
            height={300}
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}
