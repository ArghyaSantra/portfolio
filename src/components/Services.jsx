// // const services = [
// //   {
// //     title: "Custom Web Applications",
// //     desc: "End-to-end applications built for real business needs.",
// //   },
// //   {
// //     title: "Backend & Database Design",
// //     desc: "Secure APIs and clean PostgreSQL schemas.",
// //   },
// //   {
// //     title: "Frontend Development",
// //     desc: "Responsive UIs with React and Tailwind CSS.",
// //   },
// // ];

// // export default function Services() {
// //   return (
// //     <section id="services" className="py-16 bg-gray-50">
// //       <div className="max-w-6xl mx-auto px-4 sm:px-6">
// //         <h2 className="text-xl sm:text-2xl font-semibold mb-8">Services</h2>

// //         <div className="flex flex-col md:grid md:grid-cols-3 gap-6">
// //           {services.map((s, i) => (
// //             <div key={i} className="bg-white p-5 rounded-xl">
// //               <h3 className="font-semibold">{s.title}</h3>
// //               <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// // import Lottie from "lottie-react";
// // import servicesAnim from "../assets/services-animation.json"; // your existing animation

// // const services = [
// //   {
// //     title: "Custom Web Applications",
// //     desc: "End-to-end applications built for real business needs.",
// //   },
// //   {
// //     title: "Backend & Database Design",
// //     desc: "Secure APIs and clean PostgreSQL schemas.",
// //   },
// //   {
// //     title: "Frontend Development",
// //     desc: "Responsive UIs with React and Tailwind CSS.",
// //   },
// // ];

// // export default function Services() {
// //   return (
// //     <section id="services" className="py-16 bg-gray-50">
// //       <div className="max-w-6xl mx-auto px-4 sm:px-6">
// //         <h2 className="text-xl sm:text-2xl font-semibold mb-8">Services</h2>

// //         {/* Service cards */}
// //         <div className="flex flex-col md:grid md:grid-cols-3 gap-6">
// //           {services.map((s, i) => (
// //             <div
// //               key={i}
// //               className="bg-white p-5 rounded-xl border hover:shadow-sm transition"
// //             >
// //               <h3 className="font-semibold">{s.title}</h3>
// //               <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
// //             </div>
// //           ))}
// //         </div>

// //         {/* Bottom animation */}
// //         <div className="mt-12 flex justify-center">
// //           <div className="w-56 md:w-64 opacity-90">
// //             <Lottie animationData={servicesAnim} loop autoplay />
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// import Lottie from "lottie-react";
// import servicesAnim from "../assets/services-animation.json";

// const services = [
//   {
//     title: "Custom Web Applications",
//     desc: "End-to-end applications built for real business needs.",
//   },
//   {
//     title: "Backend & Database Design",
//     desc: "Secure APIs and clean PostgreSQL schemas.",
//   },
//   {
//     title: "Frontend Development",
//     desc: "Responsive UIs with React and Tailwind CSS.",
//   },
// ];

// export default function Services() {
//   return (
//     <section id="services" className="py-20 bg-gray-50">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6">
//         <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-12">
//           Services
//         </h2>
//         {/* Main layout */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//           {/* LEFT: Animation */}
//           <div className="flex justify-center md:justify-start">
//             <div className="w-72 md:w-96 opacity-90">
//               <Lottie animationData={servicesAnim} loop autoplay />
//             </div>
//           </div>

//           {/* RIGHT: Service cards */}
//           <div className="flex flex-col gap-6">
//             {services.map((s, i) => (
//               <div
//                 key={i}
//                 className="bg-white p-6 rounded-xl border hover:shadow-sm transition"
//               >
//                 <h3 className="font-semibold text-base sm:text-lg">
//                   {s.title}
//                 </h3>
//                 <p className="mt-2 text-sm sm:text-base text-gray-600">
//                   {s.desc}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import Lottie from "lottie-react";
import servicesAnim from "../assets/services-animation.json";

const services = [
  {
    title: "Custom Web Applications",
    desc: "End-to-end applications built for real business needs.",
  },
  {
    title: "Backend & Database Design",
    desc: "Secure APIs and clean PostgreSQL schemas.",
  },
  {
    title: "Frontend Development",
    desc: "Responsive UIs with React and Tailwind CSS.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-12 text-white">
          Services
        </h2>

        {/* Main layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* LEFT: Animation */}
          <div className="flex justify-center md:justify-start">
            <div className="w-72 md:w-96 opacity-90">
              <Lottie animationData={servicesAnim} loop autoplay />
            </div>
          </div>

          {/* RIGHT: Service cards */}
          <div className="flex flex-col gap-6">
            {services.map((s, i) => (
              <div
                key={i}
                className="bg-gray-900 border border-gray-800 p-6 rounded-xl hover:border-gray-700 transition"
              >
                <h3 className="font-semibold text-base sm:text-lg text-white">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm sm:text-base text-gray-400">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
