import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="default-space--top lg:mt-16 content flex flex-col">
      <div className="flex md:justify-between items-center w-full gap-x-4">
        <div className="">
          <Image
            alt="about-me"
            src="/about-me.svg"
            width={200}
            height={200}
            className="md:hidden"
          />
          {/* <Image
            alt="about-me"
            src="/about-me.svg"
            width={300}
            height={200}
            className="hidden md:block"
          /> */}
        </div>

        <div className="relative w-full">
          <div className="md:hidden">
            <div className="relative">
              <Image
                alt="about-me"
                src="/profile-1.png"
                width={200}
                height={200}
                className=" relative"
              />
              <Image
                alt="about-me"
                src="/profile-2.png"
                width={120}
                height={200}
                className="z-10 absolute -bottom-30 right-0"
              />
            </div>
          </div>
          <div className="hidden md:block">
            <Image
              alt="about-me"
              src="/profile-1.png"
              width={340}
              height={200}
              className="z-10 relative"
            />
            <Image
              alt="about-me"
              src="/profile-2.png"
              width={250}
              height={200}
              className="absolute -right-2/3 -bottom-1/3"
            />
          </div>
        </div>
      </div>

      <p className="mt-8 md:mt-36">
        Hi,
        <br /> My name is Rick Beukman. <br /> <br /> I’m a 23-year-old designer
        based in the Netherlands who loves to create digital products. My main
        goal is to deliver the right message to the right people and to help
        brands and individuals with my designs.
      </p>

      <div className="flex justify-between items-start md:items-center w-full mt-8 md:mt-24 md:gap-x-24">
        <div className="flex flex-col gap-y-2 md:gap-y-16">
          <p>
            If you have any questions or would like to connect, feel free to
            reach out via email or the social links below!
            <br />
            <br />
            rick.beukman10@gmail.com
          </p>
          <div className="flex flex-row gap-x-8">
            <Image
              alt="about-me"
              src="/instagram.svg"
              width={50}
              height={200}
              className="md:hidden"
            />
            <Image
              alt="about-me"
              src="/linkedin.svg"
              width={50}
              height={200}
              className="md:hidden"
            />

            <Image
              alt="about-me"
              src="/instagram.svg"
              width={100}
              height={200}
              className="hidden md:block"
            />
            <Image
              alt="about-me"
              src="/linkedin.svg"
              width={100}
              height={200}
              className="hidden md:block"
            />
          </div>
        </div>

        <div className="w-full md:w-fit">
          <Image
            alt="about-me"
            src="/get-in-touch.svg"
            width={200}
            height={200}
            className="md:hidden"
          />
          <Image
            alt="about-me"
            src="/get-in-touch.svg"
            width={300}
            height={200}
            className="hidden md:block"
          />
        </div>
      </div>
    </div>
  );
}
