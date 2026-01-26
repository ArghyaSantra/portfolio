// import { useState } from "react";

// const educationData = [
//   {
//     label: "Education",
//     title: "B.Tech in Computer Science & Engineering",
//     org: "SRM University",
//     period: "2015 – 2019",
//     location: "Chennai, Tamil Nadu",
//     desc: [
//       "Graduated with strong fundamentals in computer science and software engineering.",
//       "CGPA: 8.9 / 10",
//     ],
//   },
//   {
//     label: "Education",
//     title: "Class XII (Senior Secondary)",
//     org: "Neerja Modi School",
//     period: "2015",
//     location: "Jaipur, Rajasthan",
//     desc: ["CBSE Board", "Score: 92.2%"],
//   },
//   {
//     label: "Certification",
//     title: "Front-End Web Development with React",
//     org: "The Hong Kong University of Science and Technology · Coursera",
//     period: "Certification",
//     location: "",
//     desc: [
//       "Built modern React applications with component-driven architecture.",
//       "Focused on state management, hooks, and performance best practices.",
//     ],
//   },
//   {
//     label: "Certification",
//     title: "Front-End JavaScript Frameworks: Angular",
//     org: "The Hong Kong University of Science and Technology · Coursera",
//     period: "Certification",
//     location: "",
//     desc: [
//       "Learned Angular architecture, modules, services, and RxJS fundamentals.",
//     ],
//   },
//   {
//     label: "Certification",
//     title: "Server-side Development with Node.js, Express & MongoDB",
//     org: "The Hong Kong University of Science and Technology · Coursera",
//     period: "Certification",
//     location: "",
//     desc: [
//       "Developed REST APIs and backend services using Node.js and Express.",
//       "Worked with MongoDB schema design and data modeling.",
//     ],
//   },
// ];

// export default function Education() {
//   const [active, setActive] = useState(0);
//   const current = educationData[active];

//   return (
//     <section id="education" className="py-20 bg-white">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6">
//         {/* Header */}
//         <div className="mb-10">
//           <h2 className="text-2xl font-semibold text-black">
//             Education & Certifications
//           </h2>
//         </div>

//         <div className="flex flex-col md:flex-row gap-10">
//           {/* Left selector */}
//           <div className="md:w-1/3">
//             <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-visible">
//               {educationData.map((item, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setActive(index)}
//                   className={`px-4 py-3 rounded-lg text-sm text-left border transition
//   ${
//     active === index
//       ? "bg-black text-white border-black"
//       : "bg-white text-gray-600 border-gray-200 hover:text-black"
//   }`}
//                 >
//                   <div className="text-xs uppercase tracking-wide opacity-70">
//                     {item.label}
//                   </div>
//                   <div className="font-medium">{item.org}</div>
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Right content */}
//           <div className="md:w-2/3">
//             <h3 className="text-xl font-semibold text-black">
//               {current.title}
//             </h3>

//             <p className="mt-1 text-gray-600">{current.org}</p>

//             <p className="mt-1 text-sm text-gray-500">
//               {current.period}
//               {current.location && ` · ${current.location}`}
//             </p>

//             <ul className="mt-5 space-y-2 text-gray-700">
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

const educationData = [
  {
    label: "Education",
    title: "B.Tech in Computer Science & Engineering",
    org: "SRM University",
    period: "2015 – 2019",
    location: "Chennai, Tamil Nadu",
    desc: [
      "Graduated with strong fundamentals in computer science and software engineering.",
      "CGPA: 8.9 / 10",
    ],
  },
  {
    label: "Education",
    title: "Class XII (Senior Secondary)",
    org: "Neerja Modi School",
    period: "2015",
    location: "Jaipur, Rajasthan",
    desc: ["CBSE Board", "Score: 92.2%"],
  },
  {
    label: "Certification",
    title: "Front-End Web Development with React",
    org: "The Hong Kong University of Science and Technology · Coursera",
    period: "Certification",
    location: "",
    desc: [
      "Built modern React applications with component-driven architecture.",
      "Focused on state management, hooks, and performance best practices.",
    ],
  },
  {
    label: "Certification",
    title: "Front-End JavaScript Frameworks: Angular",
    org: "The Hong Kong University of Science and Technology · Coursera",
    period: "Certification",
    location: "",
    desc: [
      "Learned Angular architecture, modules, services, and RxJS fundamentals.",
    ],
  },
  {
    label: "Certification",
    title: "Server-side Development with Node.js, Express & MongoDB",
    org: "The Hong Kong University of Science and Technology · Coursera",
    period: "Certification",
    location: "",
    desc: [
      "Developed REST APIs and backend services using Node.js and Express.",
      "Worked with MongoDB schema design and data modeling.",
    ],
  },
];

export default function Education() {
  const [active, setActive] = useState(0);
  const current = educationData[active];

  return (
    <section id="education" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">
            Education & Certifications
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-10">
          {/* Left selector */}
          <div className="md:w-1/3">
            <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-visible">
              {educationData.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setActive(index)}
                  className={`px-4 py-3 rounded-lg text-sm text-left border transition w-full md:w-64
                    ${
                      active === index
                        ? "bg-white text-black border-white"
                        : "bg-gray-900 text-gray-400 border-gray-800 hover:text-white"
                    }`}
                >
                  <div className="text-xs uppercase tracking-wide opacity-70">
                    {item.label}
                  </div>
                  <div className="font-medium">{item.org}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Right content */}
          <div className="md:w-2/3">
            <h3 className="text-xl sm:text-2xl font-semibold text-white">
              {current.title}
            </h3>

            <p className="mt-1 text-gray-400">{current.org}</p>

            <p className="mt-1 text-sm text-gray-500">
              {current.period}
              {current.location && ` · ${current.location}`}
            </p>

            <ul className="mt-5 space-y-2 text-gray-300">
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
