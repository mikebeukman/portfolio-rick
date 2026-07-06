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
        <div className="w-48 sm:w-56 md:w-64 lg:w-72">
          <Image
            src="/profile-1.png"
            alt="Profile 1"
            width={200}
            height={200}
            className="w-full h-auto"
          />
        </div>

        <div className="w-28 mt-24 sm:w-28 md:w-32 -ml-16 sm:-ml-20 md:-ml-24 sm:mt-28 md:mt-32 lg:mt-40">
          <Image
            src="/profile-2.png"
            alt="Profile 2"
            width={180}
            height={200}
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};
