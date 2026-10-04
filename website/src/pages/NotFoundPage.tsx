import { useNavigate } from "react-router-dom";

export default function NotFoundPage() {
  const navigate = useNavigate();
  
  return (
    <div className="relative flex h-[calc(100vh-4.1rem)] w-full items-center justify-center overflow-hiddentext-[#1A1A1A] dark:text-[#E0E0E0]">
      {/* Background Dots*/}
      <div className="pointer-events-none absolute inset-0">
        <span className="absolute left-[15%] top-[20%] h-1 w-1 rounded-full bg-black/30 dark:bg-white/30" />
        <span className="absolute left-[75%] top-[18%] h-1.5 w-1.5 rounded-full bg-black/20 dark:bg-white/20" />
        <span className="absolute left-[82%] top-[70%] h-1 w-1 rounded-full bg-black/25 dark:bg-white/30" />
        <span className="absolute left-[18%] top-[75%] h-1.5 w-1.5 rounded-full bg-black/20 dark:bg-white/20" />
        <span className="absolute left-[65%] top-[82%] h-1 w-1 rounded-full bg-black/20 dark:bg-white/25" />
        <span className="absolute left-[30%] top-[15%] h-1 w-1 rounded-full bg-black/20 dark:bg-white/20" />
      </div>
      
      <main className="relative z-10 flex flex-col items-center text-center">
        {/* Planet */}
        <div className="relative mb-8 h-40 w-40">
          <div
            className="
              absolute left-1/2 top-1/2
              h-24 w-40
              -translate-x-1/2 -translate-y-1/2
              rotate-[-20deg]
              rounded-[50%]
              border border-[#676BCA]/50
              dark:border-[#676BCA]/30
            "
          />
          <div
            className="
              absolute left-1/2 top-1/2
              h-20 w-20
              -translate-x-1/2 -translate-y-1/2
              rounded-full
              bg-[#676BCA]
              shadow-[0_0_35px_rgba(103,107,202,0.18)]
              dark:shadow-[0_0_50px_rgba(103,107,202,0.25)]
            "
          >
            <div className="absolute left-4 top-5 h-2 w-8 rounded-full bg-white/15 dark:bg-white/15" />
            <div className="absolute bottom-6 right-4 h-3 w-4 rounded-full bg-white/10 dark:bg-white/10" />
          </div>
          <div
            className="
              absolute left-[22%] top-[28%]
              h-2 w-2 rounded-full
              bg-[#676BCA]/50
              dark:bg-[#9B9FE8]
            "
          />
          <div
            className="
              absolute right-[8%] top-[18%]
              text-xl
              text-[#676BCA]/40
              dark:text-[#9B9FE8]/60
            "
          >
            ✦
          </div>
        </div>
        <p className="mb-2 text-sm font-medium uppercase tracking-[0.3em] text-[#676BCA]">
          404
        </p>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Page Not Found
        </h1>
        <p className="mt-3 max-w-sm px-6 text-sm leading-6 text-[#757575] dark:text-[#9E9E9E]">
          Looks like this page has drifted out of orbit.
        </p>
        <button
          onClick={() => navigate("/")}
          className="
            mt-7 rounded-full
            bg-[#676BCA]
            px-6 py-2.5
            text-sm font-medium text-white
            transition-all duration-200
            hover:bg-[#5B5FB5]
            hover:shadow-lg
            hover:shadow-[#676BCA]/20
            active:scale-95
          "
        >
          Go Back
        </button>
      </main>
    </div>
  );
}
