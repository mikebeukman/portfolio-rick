export const Line = ({
  length,
  angle,
}: {
  length: number;
  angle: number;
}) => {
  return (
    <div
      className="absolute left-1/2 top-1/2 z-0 h-px origin-left bg-black pointer-events-none"
      style={{ width: length, transform: `rotate(${angle}deg)` }}
    />
  );
};
