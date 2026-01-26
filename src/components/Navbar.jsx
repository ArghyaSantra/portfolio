// import { useState } from "react";
// import ScrollProgress from "./ScrollProgress";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);

//   return (
//     <nav className="fixed top-0 w-full bg-white border-b z-50">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
//         <span className="font-semibold text-base">Arghya</span>

//         {/* Desktop nav */}
//         <div className="hidden md:flex gap-6 text-sm">
//           <a href="#about">About</a>
//           <a href="#services">Services</a>
//           <a href="#projects">Projects</a>
//           <a href="#contact">Contact</a>
//         </div>

//         {/* Mobile toggle */}
//         <button className="md:hidden text-xl" onClick={() => setOpen(!open)}>
//           ☰
//         </button>
//       </div>

//       {/* Mobile menu */}
//       {open && (
//         <div className="md:hidden border-t bg-white">
//           <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-4">
//             <a href="#services" onClick={() => setOpen(false)}>
//               Services
//             </a>
//             <a href="#projects" onClick={() => setOpen(false)}>
//               Projects
//             </a>
//             <a href="#about" onClick={() => setOpen(false)}>
//               About
//             </a>
//             <a href="#contact" onClick={() => setOpen(false)}>
//               Contact
//             </a>
//           </div>
//         </div>
//       )}
//       <ScrollProgress />
//     </nav>
//   );
// }

// import { useEffect, useState } from "react";
// import ScrollProgress from "./ScrollProgress";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [dark, setDark] = useState(
//     document.documentElement.classList.contains("dark"),
//   );

//   useEffect(() => {
//     if (dark) {
//       document.documentElement.classList.add("dark");
//       localStorage.setItem("theme", "dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//       localStorage.setItem("theme", "light");
//     }
//   }, [dark]);

//   return (
//     <nav className="fixed top-0 w-full bg-white dark:bg-black border-b dark:border-gray-800 z-50">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
//         <span className="font-semibold text-base text-black dark:text-white">
//           Arghya
//         </span>

//         {/* Desktop nav */}
//         <div className="hidden md:flex items-center gap-6 text-sm text-black dark:text-gray-300">
//           <a href="#services">Services</a>
//           <a href="#projects">Projects</a>
//           <a href="#hero">About</a>
//           <a href="#contact">Contact</a>

//           {/* Theme toggle */}
//           <button
//             onClick={() => setDark(!dark)}
//             className="ml-4 text-lg"
//             aria-label="Toggle theme"
//           >
//             {dark ? "🌙" : "☀️"}
//           </button>
//         </div>

//         {/* Mobile toggle */}
//         <button className="md:hidden text-xl" onClick={() => setOpen(!open)}>
//           ☰
//         </button>
//       </div>

//       {/* Mobile menu */}
//       {open && (
//         <div className="md:hidden border-t bg-white dark:bg-black">
//           <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-4 text-black dark:text-gray-300">
//             <a href="#services" onClick={() => setOpen(false)}>
//               Services
//             </a>
//             <a href="#projects" onClick={() => setOpen(false)}>
//               Projects
//             </a>
//             <a href="#hero" onClick={() => setOpen(false)}>
//               About
//             </a>
//             <a href="#contact" onClick={() => setOpen(false)}>
//               Contact
//             </a>

//             {/* Mobile theme toggle */}
//             <button
//               onClick={() => setDark(!dark)}
//               className="mt-2 self-start text-lg"
//             >
//               {dark ? "🌙 Dark" : "☀️ Light"}
//             </button>
//           </div>
//         </div>
//       )}

//       <ScrollProgress />
//     </nav>
//   );
// }

import { useState } from "react";
import ScrollProgress from "./ScrollProgress";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-black border-b border-gray-800 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        {/* Logo / Name */}
        <span className="font-semibold text-base text-white">Arghya</span>

        {/* Desktop nav */}
        <div className="hidden md:flex gap-6 text-sm text-gray-300">
          <a href="#about" className="hover:text-white transition-colors">
            About
          </a>
          <a href="#services" className="hover:text-white transition-colors">
            Services
          </a>
          <a href="#projects" className="hover:text-white transition-colors">
            Projects
          </a>
          <a href="#contact" className="hover:text-white transition-colors">
            Contact
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-xl text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-gray-800 bg-black">
          <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-4 text-gray-300">
            <a
              href="#about"
              onClick={() => setOpen(false)}
              className="hover:text-white transition-colors"
            >
              About
            </a>
            <a
              href="#services"
              onClick={() => setOpen(false)}
              className="hover:text-white transition-colors"
            >
              Services
            </a>
            <a
              href="#projects"
              onClick={() => setOpen(false)}
              className="hover:text-white transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      )}

      <ScrollProgress />
    </nav>
  );
}
