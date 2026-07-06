import Image from "next/image";

export const AboutHeader = () => {
  return (
    <div className="flex items-center justify-between gap-4 w-full">
      {/* Left image */}
      <div className="w-full max-w-[200px]">
        <Image
          src="/about-me.svg"
          alt="About me"
          width={300}
          height={300}
          className="w-full h-auto"
          priority
        />
      </div>

      {/* Right images */}
      <div className="relative w-full max-w-md flex justify-end">
        <div className="w-32 sm:w-40 md:w-48">
          <Image
            src="/profile-1.png"
            alt="Profile 1"
            width={200}
            height={200}
            className="w-full h-auto"
          />
        </div>

        <div className="w-28 sm:w-32 md:w-36 -ml-16 sm:-ml-20 md:-ml-24 mt-12 sm:mt-16 md:mt-20">
          <Image
            src="/profile-2.png"
            alt="Profile 2"
            width={200}
            height={200}
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};
