export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />

      {/* Modal */}
      <div className="relative bg-white w-full max-w-4xl h-[85vh] rounded-xl overflow-hidden shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-sm px-3 py-1 border rounded-md"
        >
          Close
        </button>

        <iframe
          src="/resume.pdf"
          title="Resume"
          className="w-full h-full border-none"
        />
      </div>
    </div>
  );
}
