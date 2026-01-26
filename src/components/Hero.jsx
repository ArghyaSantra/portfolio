// import { useState } from "react";
// import Lottie from "lottie-react";
// import devAnimation from "../assets/Coder.json";
// import ResumeModal from "./ResumeModal";

// export default function Hero() {
//   const [openResume, setOpenResume] = useState(false);

//   return (
//     <section
//       id="about"
//       className="pt-24 pb-20 lg:min-h-[80vh] lg:flex lg:items-center"
//     >
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
//         <div className="flex flex-col lg:flex-row items-center gap-12">
//           {/* LEFT: Text content */}
//           <div className="flex-1">
//             <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight text-black">
//               Hi, I’m Arghya Santra 👋
//             </h1>

//             <p className="mt-6 max-w-2xl text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
//               Full-stack engineer building production-ready web applications
//               with a strong focus on system design, clean backends, and
//               thoughtful user experiences.
//             </p>

//             <div className="mt-8 max-w-3xl space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed">
//               <p>
//                 I enjoy turning ideas into structured, reliable systems. My work
//                 spans API design, PostgreSQL modeling, and frontend
//                 implementation, with an emphasis on clarity and maintainability.
//               </p>
//             </div>

//             {/* CTAs */}
//             <div className="mt-10 flex flex-col sm:flex-row gap-4">
//               <a
//                 href="#projects"
//                 className="w-full sm:w-auto text-center px-8 py-3 bg-black text-white rounded-lg text-sm sm:text-base hover:bg-gray-800 transition-colors"
//               >
//                 View Projects
//               </a>

//               <button
//                 onClick={() => setOpenResume(true)}
//                 className="w-full sm:w-auto text-center px-8 py-3 border border-gray-300 rounded-lg text-sm sm:text-base text-black hover:bg-gray-100 transition-colors"
//               >
//                 View Resume
//               </button>

//               <a
//                 href="#contact"
//                 className="w-full sm:w-auto text-center px-8 py-3 border border-gray-300 rounded-lg text-sm sm:text-base text-black hover:bg-gray-100 transition-colors"
//               >
//                 Hire Me
//               </a>
//             </div>
//           </div>

//           {/* RIGHT: Animation */}
//           <div className="flex-1 max-w-sm hidden lg:block">
//             <Lottie
//               animationData={devAnimation}
//               loop
//               className="w-full h-auto"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Resume modal */}
//       <ResumeModal isOpen={openResume} onClose={() => setOpenResume(false)} />
//     </section>
//   );
// }

import { useState } from "react";
import Lottie from "lottie-react";
import devAnimation from "../assets/Coder.json";
import ResumeModal from "./ResumeModal";

export default function Hero() {
  const [openResume, setOpenResume] = useState(false);

  return (
    <section
      id="about"
      className="pt-24 pb-20 lg:min-h-[80vh] lg:flex lg:items-center bg-black"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* LEFT: Text content */}
          <div className="flex-1">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight text-white">
              Hi, I’m Arghya Santra 👋
            </h1>

            <p className="mt-6 max-w-2xl text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed">
              Full-stack engineer building production-ready web applications
              with a strong focus on system design, clean backends, and
              thoughtful user experiences.
            </p>

            <div className="mt-8 max-w-3xl space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed">
              <p>
                I enjoy turning ideas into structured, reliable systems. My work
                spans API design, PostgreSQL modeling, and frontend
                implementation, with an emphasis on clarity and maintainability.
              </p>
            </div>

            {/* CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="#projects"
                className="w-full sm:w-auto text-center px-8 py-3 bg-white text-black rounded-lg text-sm sm:text-base hover:bg-gray-200 transition-colors"
              >
                View Projects
              </a>

              <button
                onClick={() => setOpenResume(true)}
                className="w-full sm:w-auto text-center px-8 py-3 border border-gray-700 rounded-lg text-sm sm:text-base text-gray-200 hover:bg-gray-900 transition-colors"
              >
                View Resume
              </button>

              <a
                href="#contact"
                className="w-full sm:w-auto text-center px-8 py-3 border border-gray-700 rounded-lg text-sm sm:text-base text-gray-200 hover:bg-gray-900 transition-colors"
              >
                Hire Me
              </a>
            </div>
          </div>

          {/* RIGHT: Animation */}
          <div className="flex-1 max-w-sm hidden lg:block">
            <Lottie
              animationData={devAnimation}
              loop
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* Resume modal */}
      <ResumeModal isOpen={openResume} onClose={() => setOpenResume(false)} />
    </section>
  );
}
