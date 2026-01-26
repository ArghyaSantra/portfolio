// export default function Footer() {
//   const year = new Date().getFullYear();

//   return (
//     <footer className="border-t py-8 text-sm text-gray-600">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
//         <span>© {year} Arghya. All rights reserved.</span>

//         <div className="flex gap-4">
//           <a
//             href="https://github.com/yourusername"
//             target="_blank"
//             className="hover:text-black"
//           >
//             GitHub
//           </a>
//           <a
//             href="https://linkedin.com/in/yourusername"
//             target="_blank"
//             className="hover:text-black"
//           >
//             LinkedIn
//           </a>
//           <a href="mailto:your@email.com" className="hover:text-black">
//             Email
//           </a>
//         </div>
//       </div>
//     </footer>
//   );
// }

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-800 py-10 bg-black text-sm text-gray-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span>© {year} Arghya Santra. All rights reserved.</span>

        <div className="flex gap-6">
          <a
            href="https://github.com/ArghyaSantra"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/arghya-santra/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>

          <a
            href="mailto:arghyasantr103@email.com"
            className="hover:text-white transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
