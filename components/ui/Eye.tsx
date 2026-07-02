import Image from "next/image";

export const Eye = () => {
  return (
    <div className="w-10 h-10">
      <Image
        src="/eye.svg"
        alt="Eye"
        width={100}
        height={100}
        className="w-full h-full object-contain"
      />
    </div>
  );
};
