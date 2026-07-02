import Image from "next/image";

export const Logo = () => {
  return (
    <div className="flex flex-col z-10 items-center p-4 px-8 rounded-full bg-white shadow-white shadow-[0_0_30px_8px_rgba(0,0,0,0.35)]">
      {/* Mobile */}
      <Image
        src="/logo.svg"
        alt="Logo"
        width={100}
        height={150}
        className="block md:hidden"
      />

      {/* Desktop */}
      <Image
        src="/logo.svg"
        alt="Logo"
        width={200}
        height={150}
        className="hidden md:block"
      />
      <div className="hidden md:flex text-2xl font-bold font-display -mt-8 justify-between w-full px-1">
        <span>UX / UI </span>
        <span>Designer</span>
      </div>
    </div>
  );
};
