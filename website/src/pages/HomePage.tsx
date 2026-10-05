import { Download } from "lucide-react";
import { BsAndroid } from "react-icons/bs";
import icon from "../assets/icon_transparent.png";

import marksDark from "../assets/screenshots/MarksScreenDark.png";
import marksLight from "../assets/screenshots/MarksScreenLight.png";
import profileDark from "../assets/screenshots/ProfileScreenDark.png";
import profileLight from "../assets/screenshots/ProfileScreenLight.png";
import timetableDark from "../assets/screenshots/TimetableScreenDark.png";
import timetableLight from "../assets/screenshots/TimetableScreenLight.png";

export default function HomePage() {
  const features = [
    {
      title: "Timetable",
      description: "See your classes, labs, and schedule at a glance.",
    },
    {
      title: "Attendance",
      description: "Keep track of attendance and know exactly where you stand.",
    },
    {
      title: "Marks",
      description: "Track your academic performance across subjects.",
    },
    {
      title: "More",
      description: "Everything else you need, gradually brought into Orbit.",
    },
  ];

  const screenshots = [
    { light: marksLight, dark: marksDark, alt: "Marks screen" },
    { light: timetableLight, dark: timetableDark, alt: "Timetable screen" },
    { light: profileLight, dark: profileDark, alt: "Profile screen" },
  ];

  const handleDownload = () => {
    window.location.href = '/orbit.apk';
    // const downloadUrl =
    //   "https://github.com/Govind-Sankar/orbit-app/releases/latest/download/orbit.apk";

    // const fallbackUrl =
    //   "https://github.com/Govind-Sankar/orbit-app/releases/latest";

    // let fallbackTriggered = false;

    // const fallbackTimer = window.setTimeout(() => {
    //   fallbackTriggered = true;
    //   window.location.href = fallbackUrl;
    // }, 5000);

    // const handlePageHide = () => {
    //   window.clearTimeout(fallbackTimer);
    //   window.removeEventListener("pagehide", handlePageHide);
    // };

    // window.addEventListener("pagehide", handlePageHide);

    // window.location.href = downloadUrl;

    // void fallbackTriggered;
  };

  return (
    <div className="relative min-h-[calc(100vh-4.1rem)] w-full overflow-hidden text-[#1A1A1A] dark:text-[#E0E0E0]">
      {/* Background Dots */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <span className="absolute left-[10%] top-[15%] h-1 w-1 rounded-full bg-black/25 dark:bg-white/30" />
        <span className="absolute left-[20%] top-[65%] h-1.5 w-1.5 rounded-full bg-black/20 dark:bg-white/20" />
        <span className="absolute left-[75%] top-[15%] h-1.5 w-1.5 rounded-full bg-black/20 dark:bg-white/20" />
        <span className="absolute left-[85%] top-[60%] h-1 w-1 rounded-full bg-black/25 dark:bg-white/30" />
        <span className="absolute left-[60%] top-[80%] h-1 w-1 rounded-full bg-black/20 dark:bg-white/20" />
        <span className="absolute left-[35%] top-[10%] h-1 w-1 rounded-full bg-black/20 dark:bg-white/20" />
        <span className="absolute left-[90%] top-[30%] h-1 w-1 rounded-full bg-black/20 dark:bg-white/20" />
      </div>

      {/* Hero */}
      <section className="relative z-10 mx-auto flex min-h-[calc(100vh-4.1rem)] max-w-7xl items-center px-6 py-16 sm:px-10 lg:px-16">
        <div className="grid w-full items-center gap-16 lg:grid-cols-2">
          {/* Left - Hero Content */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <span className="text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
              Meet
            </span>
            <h1 className="text-6xl font-semibold tracking-tight sm:text-7xl lg:text-8xl">
              <span className="text-[#676BCA]">Orbit</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#757575] dark:text-[#9E9E9E]">
              Your all-in-one companion for college life. Keep track of your
              timetable, attendance, marks, and everything that matters.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
              <a
                href="#download"
                className="
                  inline-flex items-center gap-2
                  rounded-full
                  bg-[#676BCA]
                  px-6 py-3
                  text-sm font-medium text-white
                  transition-all duration-200
                  hover:bg-[#5B5FB5]
                  hover:shadow-lg hover:shadow-[#676BCA]/20
                  active:scale-95
                "
              >
                <Download className="h-4 w-4" />
                Download Orbit
              </a>
              <a
                href="#features"
                className="
                  inline-flex items-center gap-2
                  rounded-full
                  border border-[#DADADA]
                  bg-white/60
                  px-6 py-3
                  text-sm font-medium
                  transition-all duration-200
                  hover:bg-white
                  dark:border-[#333333]
                  dark:bg-[#1E1E1E]/60
                  dark:hover:bg-[#1E1E1E]
                "
              >
                Explore Features
              </a>
            </div>
            <div className="mt-5 flex items-center gap-2 text-xs text-[#818080] dark:text-[#9E9E9E]">
              <BsAndroid className="h-3.5 w-3.5" />
              Currently available for Android
              <span className="text-[#676BCA]/60">•</span>
              <span className="text-[#676BCA]/80">v1.0.0</span>
            </div>
          </div>

          {/* App Preview */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow */}
              <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#676BCA]/40 blur-3xl dark:bg-[#676BCA]/25" />
              {/* Orbit ring */}
              <div className="absolute left-1/2 top-1/2 h-108 w-64 -translate-x-1/2 -translate-y-1/2 rotate-[-15deg] rounded-[50%] border border-[#676BCA]/25 dark:border-[#676BCA]/50" />
              {/* Phone */}
              <div
                className="relative z-10 h-125 w-62.5 overflow-hidden rounded-[2.5rem] border-[6px]
                  border-[#242424] bg-[#121212] shadow-2xl shadow-black/20 dark:border-[#2E2E2E]"
              >
                <div className="h-full w-full bg-[#FAFAF8] dark:bg-[#121212]">
                  <img
                    src={timetableLight}
                    alt="Orbit timetable screen"
                    className="h-full w-full object-cover dark:hidden"
                  />
                  <img
                    src={timetableDark}
                    alt="Orbit timetable screen in dark mode"
                    className="hidden h-full w-full object-cover dark:block"
                  />
                </div>
              </div>
              {/* Floating star */}
              <span className="absolute -right-8 top-12 text-xl text-[#676BCA]/50 dark:text-[#9B9FE8]/60">
                ✦
              </span>
              <span className="absolute -left-10 bottom-20 text-sm text-[#676BCA]/40 dark:text-[#9B9FE8]/50">
                ✦
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section
        id="features"
        className="relative z-10 mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-16"
      >
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#676BCA]">
            Everything in one place
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            College, without chaos.
          </h2>
          <p className="mt-4 text-[#757575] dark:text-[#9E9E9E]">
            Orbit brings the information you need every day into one simple,
            beautiful app.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="
                rounded-2xl
                border border-[#E5E5E5]
                bg-white/70
                p-6
                transition-all duration-200
                hover:-translate-y-1
                hover:shadow-lg hover:shadow-black/5
                dark:border-[#2A2A2A]
                dark:bg-[#1E1E1E]/70
                dark:hover:shadow-black/20
              "
            >
              <div className="mb-5 h-2 w-2 rounded-full bg-[#676BCA]" />

              <h3 className="font-semibold">{feature.title}</h3>

              <p className="mt-2 text-sm leading-6 text-[#757575] dark:text-[#9E9E9E]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Screenshots */}
      <div className="mt-14 grid gap-4 lg:gap-0 md:grid-cols-3 px-16">
        {screenshots.map((screenshot) => (
          <div
            key={screenshot.alt}
            className="mx-auto flex w-full max-w-fit lg:max-w-[20vw] justify-center overflow-hidden rounded-4xl border border-[#E5E5E5] bg-[#F1F3F5] shadow-lg dark:border-[#2A2A2A] dark:bg-[#1E1E1E]"
          >
            <img
              src={screenshot.light}
              alt={screenshot.alt}
              className="block h-95 lg:h-[90vh] w-full object-contain dark:hidden"
            />
            <img
              src={screenshot.dark}
              alt={`${screenshot.alt} in dark mode`}
              className="hidden h-95 lg:h-[90vh] w-full object-contain dark:block"
            />
          </div>
        ))}
      </div>

      {/* Download */}
      <section
        id="download"
        className="relative z-10 mx-auto max-w-4xl px-6 py-24 text-center"
      >
        <div
          className="
            rounded-3xl
            border border-[#E5E5E5]
            bg-white/70
            px-6 py-16
            dark:border-[#2A2A2A]
            dark:bg-[#1E1E1E]/70
          "
        >
          <img
            src={icon}
            alt="App icon"
            className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl shadow-xl shadow-[#676BCA]/50 dark:shadow-lg darkshadow-[#676BCA]/10"
          />

          <h2 className="mt-6 text-3xl font-semibold tracking-tight">
            Ready to enter Orbit?
          </h2>

          <p className="mx-auto mt-3 max-w-md text-[#757575] dark:text-[#9E9E9E]">
            Download Orbit and keep your college life organized, wherever you
            go.
          </p>
          <button
            onClick={handleDownload}
            className="
              mt-7 inline-flex items-center gap-2
              rounded-full
              bg-[#676BCA]
              px-7 py-3
              text-sm font-medium text-white
              transition-all duration-200
              hover:bg-[#5B5FB5]
              hover:shadow-lg hover:shadow-[#676BCA]/20
              active:scale-95
            "
          >
            <Download className="h-4 w-4" />
            Download for Android
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-[#E5E5E5] px-6 py-8 dark:border-[#2A2A2A]">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <p className="text-sm text-[#9E9E9E]">
            © {new Date().getFullYear()} Orbit
          </p>
          {/* <a
            href="#"
            className="text-[#9E9E9E] transition-colors hover:text-[#676BCA]"
            aria-label="GitHub"
          >
            <FaGithub className="h-5 w-5" />
          </a> */}
        </div>
      </footer>
    </div>
  );
}
