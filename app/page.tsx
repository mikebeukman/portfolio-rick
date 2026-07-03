import { MenuItem } from "@/components/actions/MenuItem";
import { GraphMenu } from "@/components/ui/GraphMenu";
import { items } from "@/utils/constants";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center mt-40 md:mt-0 md:h-screen">
      <div className="sm:hidden content">
        <Image
          src="/logo.svg"
          alt="Logo"
          width={200}
          height={150}
          className=""
        />
        <div className="flex flex-col gap-y-4">
          {items.map((item) => (
            <MenuItem
              href={item.href}
              label={item.label}
              className="text-xl bg-none"
            />
          ))}
        </div>
      </div>
      <GraphMenu className="hidden sm:flex" />
    </div>
  );
}
