// import { useState } from "react";
// import ResumeModal from "./ResumeModal";

// export default function Contact() {
//   const [openResume, setOpenResume] = useState(false);

//   return (
//     <section id="contact" className="py-20 bg-gray-50">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
//         <h2 className="text-2xl sm:text-3xl font-semibold text-black">
//           Let’s Work Together
//         </h2>

//         <p className="mt-4 text-base text-gray-600 max-w-xl mx-auto">
//           If you have a project in mind or are looking to hire a full-stack
//           developer, feel free to reach out.
//         </p>

//         <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
//           {/* Email */}
//           <a href="mailto:your@email.com" className="btn-outline">
//             Email Me
//           </a>

//           {/* Resume */}
//           <button onClick={() => setOpenResume(true)} className="btn-outline">
//             View Resume
//           </button>

//           {/* GitHub */}
//           <a
//             href="https://github.com/yourusername"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="btn-outline"
//           >
//             GitHub
//           </a>

//           {/* LinkedIn */}
//           <a
//             href="https://linkedin.com/in/yourusername"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="btn-outline"
//           >
//             LinkedIn
//           </a>
//         </div>
//       </div>

//       <ResumeModal isOpen={openResume} onClose={() => setOpenResume(false)} />
//     </section>
//   );
// }

import { useState } from "react";
import ResumeModal from "./ResumeModal";

export default function Contact() {
  const [openResume, setOpenResume] = useState(false);

  return (
    <section id="contact" className="py-24 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white">
          Let’s Work Together
        </h2>

        <p className="mt-4 text-base text-gray-400 max-w-xl mx-auto">
          If you have a project in mind or are looking to hire a full-stack
          developer, feel free to reach out.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
          {/* Email */}
          <a href="mailto:arghyasantra103@email.com" className="btn-dark">
            Email Me
          </a>

          {/* Resume */}
          <button onClick={() => setOpenResume(true)} className="btn-dark">
            View Resume
          </button>

          {/* GitHub */}
          <a
            href="https://github.com/ArghyaSantra"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-dark"
          >
            GitHub
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/arghya-santra/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-dark"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <ResumeModal isOpen={openResume} onClose={() => setOpenResume(false)} />
    </section>
  );
}
