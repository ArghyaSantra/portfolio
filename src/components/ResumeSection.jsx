import { useState } from "react";
import ResumeModal from "./ResumeModal";

export default function ResumeSection() {
  const [open, setOpen] = useState(false);

  return (
    <section id="resume" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl font-semibold text-black">Resume</h2>

        <p className="mt-3 text-gray-600 max-w-xl mx-auto">
          Prefer a traditional resume? View or download it here.
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <button
            onClick={() => setOpen(true)}
            className="px-6 py-3 bg-black text-white rounded-lg text-sm"
          >
            View Resume
          </button>

          <a
            href="/resume.pdf"
            download
            className="px-6 py-3 border rounded-lg text-sm"
          >
            Download PDF
          </a>
        </div>
      </div>

      <ResumeModal isOpen={open} onClose={() => setOpen(false)} />
    </section>
  );
}
