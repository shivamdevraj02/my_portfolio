export default function Footer({ dark }) {
  return (
    <footer className={`border-t py-6 px-4 text-center
      ${dark ? "border-white/5 bg-[#0a0e17]" : "border-gray-100 bg-gray-50"}`}>
      <p className="mono text-xs text-gray-500">
        <span className="text-blue-400">@shivamdevraj</span> ·AI/ML Engineer   · 2025
      </p>
    </footer>
  );
}
