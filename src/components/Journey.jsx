// import { useState } from "react";

// const journey = [
//   {
//     company: "ChaiCode",
//     title: "Mentor – System Design & DSA",
//     period: "Feb 2025 – Present",
//     location: "Remote",
//     desc: [
//       "Mentoring engineers in system design and DSA with real-world focus.",
//       "Helping students build architectural thinking and interview readiness.",
//     ],
//   },
//   {
//     company: "Career Break",
//     title: "Intentional Career Break",
//     period: "Apr 2024 – Feb 2025",
//     location: "Jaipur, India",
//     desc: [
//       "Focused on physical and mental well-being.",
//       "Strengthened backend skills, system design, and AI/LLM workflows.",
//     ],
//   },
//   {
//     company: "Tekion Corp",
//     title: "Senior Software Engineer (SDE-2)",
//     period: "Jan 2022 – Mar 2024",
//     location: "Bangalore / Hybrid",
//     desc: [
//       "Built Central Accounting module for large dealership networks.",
//       "Automated invoicing and transaction workflows.",
//       "Led and mentored a team of 3 developers.",
//     ],
//   },
//   {
//     company: "Temenos India",
//     title: "Senior Software Engineer",
//     period: "Jul 2021 – Jan 2022",
//     location: "Bangalore",
//     desc: [
//       "Designed front-end architecture for investment banking apps.",
//       "Improved UI performance and engagement by ~30%.",
//     ],
//   },
//   {
//     company: "Temenos India",
//     title: "Software Engineer",
//     period: "Jul 2019 – Jul 2021",
//     location: "Bangalore",
//     desc: [
//       "Built reusable UI libraries.",
//       "Owned backend modules for high-volume banking systems.",
//     ],
//   },
// ];

// export default function Journey() {
//   const [active, setActive] = useState(0);
//   const current = journey[active];

//   return (
//     <section id="journey" className="py-20 bg-white">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6">
//         {/* Header */}
//         <div className="mb-12">
//           <h2 className="text-3xl font-bold text-black">Work Experience</h2>
//           <p className="mt-2 text-gray-500 max-w-xl">
//             A journey shaped by ownership, learning, and strong engineering
//             culture.
//           </p>
//         </div>

//         <div className="flex flex-col md:flex-row gap-12">
//           {/* Left rail */}
//           <div className="md:w-1/3">
//             <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-visible">
//               {journey.map((item, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setActive(index)}
//                   className={`px-4 py-3 rounded-lg text-sm whitespace-nowrap border transition
//                     ${
//                       active === index
//                         ? "bg-black text-white border-black"
//                         : "bg-white text-gray-600 border-gray-200 hover:text-black"
//                     }`}
//                 >
//                   {item.company}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Right content */}
//           <div className="md:w-2/3">
//             <h3 className="text-2xl font-semibold text-black">
//               {current.title}{" "}
//               <span className="text-blue-600">@{current.company}</span>
//             </h3>

//             <p className="mt-2 text-gray-500">
//               {current.period} · {current.location}
//             </p>

//             <ul className="mt-6 space-y-3 text-gray-700">
//               {current.desc.map((point, i) => (
//                 <li key={i} className="flex gap-3">
//                   <span className="text-blue-600">✓</span>
//                   <span>{point}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { useState } from "react";

const journey = [
  {
    company: "ChaiCode",
    title: "Mentor – System Design & DSA",
    period: "Feb 2025 – Present",
    location: "Remote",
    desc: [
      "Mentoring engineers in system design and DSA with real-world focus.",
      "Helping students build architectural thinking and interview readiness.",
    ],
  },
  {
    company: "Career Break",
    title: "Intentional Career Break",
    period: "Apr 2024 – Feb 2025",
    location: "Jaipur, India",
    desc: [
      "Focused on physical and mental well-being.",
      "Strengthened backend skills, system design, and AI/LLM workflows.",
    ],
  },
  {
    company: "Tekion Corp",
    title: "Senior Software Engineer (SDE-2)",
    period: "Jan 2022 – Mar 2024",
    location: "Bangalore / Hybrid",
    desc: [
      "Built Central Accounting module for large dealership networks.",
      "Automated invoicing and transaction workflows.",
      "Led and mentored a team of 3 developers.",
    ],
  },
  {
    company: "Temenos India",
    title: "Senior Software Engineer",
    period: "Jul 2021 – Jan 2022",
    location: "Bangalore",
    desc: [
      "Designed front-end architecture for investment banking apps.",
      "Improved UI performance and engagement by ~30%.",
    ],
  },
  {
    company: "Temenos India",
    title: "Software Engineer",
    period: "Jul 2019 – Jul 2021",
    location: "Bangalore",
    desc: [
      "Built reusable UI libraries.",
      "Owned backend modules for high-volume banking systems.",
    ],
  },
];

export default function Journey() {
  const [active, setActive] = useState(0);
  const current = journey[active];

  return (
    <section id="journey" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white">Work Experience</h2>
          <p className="mt-2 text-gray-400 max-w-xl">
            A journey shaped by ownership, learning, and strong engineering
            culture.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Left rail */}
          <div className="md:w-1/3">
            <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-visible">
              {journey.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setActive(index)}
                  className={`px-4 py-3 rounded-lg text-sm whitespace-nowrap border transition text-center w-full md:w-48
                    ${
                      active === index
                        ? "bg-white text-black border-white"
                        : "bg-gray-900 text-gray-400 border-gray-800 hover:text-white"
                    }`}
                >
                  {item.company}
                </button>
              ))}
            </div>
          </div>

          {/* Right content */}
          <div className="md:w-2/3">
            <h3 className="text-2xl font-semibold text-white">
              {current.title}{" "}
              <span className="text-blue-500">@{current.company}</span>
            </h3>

            <p className="mt-2 text-gray-400">
              {current.period} · {current.location}
            </p>

            <ul className="mt-6 space-y-3 text-gray-300">
              {current.desc.map((point, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-blue-500">✓</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
