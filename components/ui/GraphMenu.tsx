"use client";

import { useEffect, useRef, useState } from "react";
import { Line } from "./Line";
import { MenuItem } from "../actions/MenuItem";
import { Logo } from "./Logo";

const items = [
  { label: "ghana website", href: "/", className: "absolute right-20 -top-4" },
  {
    label: "az story",
    href: "/az-story",
    className: "absolute right-0 top-20",
  },
  {
    label: "coffee website",
    href: "/",
    className: "absolute -right-8 bottom-20",
  },
  {
    label: "energy website",
    href: "/",
    className: "absolute right-1/2 -bottom-5 translate-x-1/2",
  },
  {
    label: "8-bit world cup",
    href: "/",
    className: "absolute -left-5 bottom-10",
  },
  { label: "recycle project", href: "/", className: "absolute -left-7 top-15" },
];

type LineData = { length: number; angle: number };

export const GraphMenu = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [lines, setLines] = useState<LineData[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const update = () => {
      const rect = container.getBoundingClientRect();
      const cx = rect.width / 2;
      const cy = rect.height / 2;

      setLines(
        items.map((_, i) => {
          const wrapper = itemRefs.current[i];
          const link = wrapper?.querySelector("a");
          if (!link) return { length: 0, angle: 0 };

          const linkRect = link.getBoundingClientRect();
          const lx = linkRect.left + linkRect.width / 2 - rect.left;
          const ly = linkRect.top + linkRect.height / 2 - rect.top;
          const dx = lx - cx;
          const dy = ly - cy;

          return {
            length: Math.hypot(dx, dy),
            angle: (Math.atan2(dy, dx) * 180) / Math.PI,
          };
        }),
      );
    };

    update();
    const ro = new ResizeObserver(update);
    ro.observe(container);
    void document.fonts.ready.then(update);
    return () => ro.disconnect();
  }, []);

  const ready = lines.some((line) => line.length > 0);

  return (
    <div className="relative w-full flex flex-col items-center justify-center">
      <div ref={containerRef} className="w-4/5 aspect-square absolute p-2">
        {ready &&
          lines.map((line, i) => (
            <Line
              key={items[i].label}
              length={line.length}
              angle={line.angle}
            />
          ))}

        {items.map((item, i) => (
          <div
            key={item.label}
            ref={(el) => {
              itemRefs.current[i] = el;
            }}
            className={`${item.className} z-10`}
          >
            <MenuItem href={item.href} label={item.label} />
          </div>
        ))}
      </div>
      <Logo />
    </div>
  );
};
