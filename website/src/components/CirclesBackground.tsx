export default function CirclesBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-0 overflow-hidden">
      {/* Top-left primary */}
      <div
        className="
          absolute left-[20%] top-[22.5%]
          h-[400px] w-[400px]
          -translate-x-1/2 -translate-y-1/2
          rounded-full
          bg-[#676BCA]/5
          blur-[1px]
          dark:bg-[#676BCA]/8
        "
      />

      {/* Top-right tertiary */}
      <div
        className="
          absolute left-[85%] top-[18.5%]
          h-[280px] w-[280px]
          -translate-x-1/2 -translate-y-1/2
          rounded-full
          bg-[#00796B]/5
          blur-[1px]
          dark:bg-[#00796B]/8
        "
      />

      {/* Middle-right tertiary */}
      <div
        className="
          absolute left-[71.5%] top-[44%]
          h-[200px] w-[200px]
          -translate-x-1/2 -translate-y-1/2
          rounded-full
          bg-[#00796B]/4
          blur-[1px]
          dark:bg-[#00796B]/6
        "
      />

      {/* Bottom-right secondary */}
      <div
        className="
          absolute left-[81.5%] top-[78.5%]
          h-[320px] w-[320px]
          -translate-x-1/2 -translate-y-1/2
          rounded-full
          bg-[#009688]/5
          blur-[1px]
          dark:bg-[#009688]/8
        "
      />

      {/* Bottom-left primary */}
      <div
        className="
          absolute left-[24%] top-[76.5%]
          h-[180px] w-[180px]
          -translate-x-1/2 -translate-y-1/2
          rounded-full
          bg-[#676BCA]/4
          blur-[1px]
          dark:bg-[#676BCA]/7
        "
      />

      {/* Bottom-center secondary */}
      <div
        className="
          absolute left-[52.5%] top-[89.5%]
          h-[220px] w-[220px]
          -translate-x-1/2 -translate-y-1/2
          rounded-full
          bg-[#009688]/4
          blur-[1px]
          dark:bg-[#009688]/7
        "
      />
    </div>
  );
}