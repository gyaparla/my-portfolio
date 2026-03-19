export function Title({ name, description }) {
  return (
    <div className="text-center mb-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-white">{name}</h2>
      <div className="w-24 h-1 bg-primary mx-auto mt-2"></div>
      <p className="text-gray-400 mt-4 text-lg font-semibold">{description}</p>
    </div>
  );
}

export function Modal({ open, onClose, title, children }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
      <div className="relative w-full max-w-xl rounded-3xl bg-gray-950/90 border border-white/10 p-6 shadow-[0_25px_50px_rgba(0,0,0,0.65)]">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Close modal"
        >
          ✕
        </button>
        {title && (
          <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
        )}
        <div className="space-y-4 text-gray-200">{children}</div>
      </div>
    </div>
  );
}
