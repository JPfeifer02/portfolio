export default function FullscreenModal({ selected, setSelected }) {
  return (
    <div
      className="fixed inset-0 bg-[var(--bg-color)] z-50 p-8 overflow-auto"
      onClick={() => setSelected(null)}
    >
      <button
        className="absolute top-3 right-3 text-xl font-bold"
        style={{ color: "var(--accent-color)" }}
        onClick={() => setSelected(null)}
      >
        ✕
      </button>

      <h3
        className="text-2xl font-semibold mb-4"
        style={{ color: "var(--accent-color)" }}
        onClick={(e) => e.stopPropagation()}
      >
        {selected.title}
      </h3>

      <p
        style={{ color: "var(--text-color)" }}
        onClick={(e) => e.stopPropagation()}
      >
        {selected.description}
      </p>
    </div>
  );
}
