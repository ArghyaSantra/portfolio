// const projects = [
//   {
//     title: "Expense Tracker System",
//     desc: "Designed a complete expense tracking system with users, transactions, and monthly analytics.",
//     tech: "React · Node.js · PostgreSQL",
//   },
//   {
//     title: "Local Business Store",
//     desc: "Built an online store with product catalog, order management, and delivery logic.",
//     tech: "React · Express · Payments",
//   },
//   {
//     title: "Habit & Routine Builder",
//     desc: "Product-focused habit tracking app with visual progress and routine stacking.",
//     tech: "React · System Design",
//   },
// ];

// export default function Projects() {
//   return (
//     <section id="projects" className="py-16">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6">
//         <h2 className="text-xl sm:text-2xl font-semibold mb-8">
//           Featured Projects
//         </h2>

//         <div className="flex flex-col md:grid md:grid-cols-3 gap-6">
//           {projects.map((project, index) => (
//             <div
//               key={index}
//               className="border rounded-xl p-5 flex flex-col justify-between hover:shadow-sm transition"
//             >
//               <div>
//                 <h3 className="font-semibold text-base sm:text-lg">
//                   {project.title}
//                 </h3>

//                 <p className="mt-2 text-sm text-gray-600">{project.desc}</p>
//               </div>

//               <div className="mt-4 text-xs text-gray-400">{project.tech}</div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// import Lottie from "lottie-react";
// import projectsAnim from "../assets/project-launching.json"; // your animation

// const projects = [
//   {
//     title: "Expense Tracker System",
//     desc: "Designed a complete expense tracking system with users, transactions, and monthly analytics.",
//     tech: "React · Node.js · PostgreSQL",
//   },
//   {
//     title: "Local Business Store",
//     desc: "Built an online store with product catalog, order management, and delivery logic.",
//     tech: "React · Express · Payments",
//   },
//   {
//     title: "Habit & Routine Builder",
//     desc: "Product-focused habit tracking app with visual progress and routine stacking.",
//     tech: "React · System Design",
//   },
// ];

// export default function Projects() {
//   return (
//     <section id="projects" className="py-20">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6">
//         <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-12">
//           Featured Projects
//         </h2>

//         {/* Main layout */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//           {/* LEFT: Projects */}
//           <div className="flex flex-col gap-6">
//             {projects.map((project, index) => (
//               <div
//                 key={index}
//                 className="border rounded-xl p-6 flex flex-col justify-between hover:shadow-sm transition"
//               >
//                 <div>
//                   <h3 className="font-semibold text-base sm:text-lg">
//                     {project.title}
//                   </h3>
//                   <p className="mt-2 text-sm sm:text-base text-gray-600">
//                     {project.desc}
//                   </p>
//                 </div>

//                 <div className="mt-4 text-xs sm:text-sm text-gray-400">
//                   {project.tech}
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* RIGHT: Animation */}
//           <div className="flex justify-center md:justify-end">
//             <div className="w-108 md:w-144 opacity-90">
//               <Lottie animationData={projectsAnim} loop autoplay />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import Lottie from "lottie-react";
import projectsAnim from "../assets/project-launching.json";

const projects = [
  {
    title: "Expense Tracker System",
    desc: "Designed a complete expense tracking system with users, transactions, and monthly analytics.",
    tech: "React · Node.js · PostgreSQL",
  },
  {
    title: "Local Business Store",
    desc: "Built an online store with product catalog, order management, and delivery logic.",
    tech: "React · Express · Payments",
  },
  {
    title: "Habit & Routine Builder",
    desc: "Product-focused habit tracking app with visual progress and routine stacking.",
    tech: "React · System Design",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-12 text-white">
          Featured Projects
        </h2>

        {/* Main layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* LEFT: Projects */}
          <div className="flex flex-col gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-900 border border-gray-800 rounded-xl p-6 flex flex-col justify-between hover:border-gray-700 transition"
              >
                <div>
                  <h3 className="font-semibold text-base sm:text-lg text-white">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm sm:text-base text-gray-400">
                    {project.desc}
                  </p>
                </div>

                <div className="mt-4 text-xs sm:text-sm text-gray-500">
                  {project.tech}
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT: Animation */}
          <div className="flex justify-center md:justify-end">
            <div className="w-[360px] md:w-[520px] opacity-90">
              <Lottie animationData={projectsAnim} loop autoplay />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
