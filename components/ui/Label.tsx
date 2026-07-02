export const Label = ({ text }: { text: string }) => {
  return (
    <label className="text-sm font-medium border border-black px-8 py-2 relative flex-1 text-center">
      {text}

      <div className="absolute top-0 left-0 -translate-y-1/2 -translate-x-1/2 size-3 border border-black bg-white" />
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 size-3 border border-black bg-white" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 size-3 border border-black bg-white" />
      <div className="absolute bottom-0 right-0 translate-y-1/2 translate-x-1/2 size-3 border border-black bg-white" />
    </label>
  );
};
