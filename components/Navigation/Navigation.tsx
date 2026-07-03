"use client";

import { usePathname } from "next/navigation";
import { NavigationLink } from "../actions/NavigationLink";

export const Navigation = () => {
  const pathname = usePathname();
  return (
    <nav className="flex items-center justify-between px-4 pt-8 top-0 left-0 min-w-full md:px-40 md:pt-16 lg:absolute content">
      {pathname !== "/" && (
        <NavigationLink label="Home" href="/" className="mr-auto" />
      )}
      {pathname !== "/about" && (
        <NavigationLink label="About" href="/about" className="ml-auto" />
      )}
    </nav>
  );
};
