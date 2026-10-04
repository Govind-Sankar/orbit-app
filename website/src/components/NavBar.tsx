import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import icon from "../assets/icon_transparent.png";

export default function NavBar() {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-[#E5E5E5] bg-[#FAFAF8] dark:border-[#2A2A2A] dark:bg-[#121212]">
      <div className="mx-auto flex h-16 w-full items-center justify-between px-6 sm:px-10 lg:px-16">
        <span className="flex flex-row gap-4 items-center">
          <img src={icon} alt="App icon" className="h-10 w-10 items-center justify-center rounded-xl border border-black/15 dark:border-white/15 p-1" />
          <div className="text-2xl font-semibold tracking-tight text-[#676BCA]">
            Orbit
          </div>
        </span>
        <button
          onClick={() => setIsDark((prev) => !prev)}
          aria-label="Toggle theme"
          className="
            flex h-10 w-10 items-center justify-center
            rounded-full
            text-[#676BCA]
            transition-all duration-200
            hover:bg-[#676BCA]/10
            active:scale-90
            dark:hover:bg-[#676BCA]/15
          "
        >
          <Sun className="h-5 w-5 dark:hidden" />
          <Moon className="hidden h-5 w-5 dark:block" />
        </button>
      </div>
    </nav>
  );
}