export default function WhatsAppButton() {
  const phone = "256776112595"; // international format without + or spaces
  const message = "Hello! I saw your website and would like a cleaning quote.";
  const href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg ring-1 ring-black/10 focus:outline-none focus:ring-2 focus:ring-emerald-300 transition-colors"
    >
      {/* WhatsApp SVG */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-7 h-7"
        aria-hidden
      >
        <path d="M20.52 3.48A11.7 11.7 0 0012 .75C6.21.75 1.5 5.46 1.5 11.25c0 1.98.52 3.9 1.5 5.6L.75 23.25l6.7-2.05a11.42 11.42 0 005.05 1.1h.01c5.79 0 10.5-4.71 10.5-10.5 0-2.82-1.1-5.46-3.14-7.32zM12 21.37h-.01c-1.57 0-3.11-.38-4.48-1.11l-.32-.18-3.98 1.22 1.2-3.9-.21-.37A8.63 8.63 0 013.5 11.25c0-4.69 3.81-8.5 8.5-8.5 2.27 0 4.4.89 6.01 2.5a8.43 8.43 0 012.49 6.01c0 4.69-3.81 8.5-8.49 8.5zm4.03-6.9c-.22-.11-1.3-.64-1.5-.71-.2-.07-.35-.11-.5.11s-.57.71-.7.86c-.12.16-.24.18-.46.06-.22-.11-.93-.34-1.77-1.09-.66-.59-1.11-1.31-1.24-1.53-.13-.22-.01-.34.1-.45.1-.1.22-.25.33-.37.11-.12.15-.2.22-.34.07-.14.03-.26-.02-.37-.05-.11-.5-1.2-.69-1.64-.18-.43-.36-.37-.5-.38l-.43-.01c-.14 0-.37.05-.56.26-.19.21-.73.71-.73 1.73s.75 2.01.86 2.15c.11.14 1.49 2.27 3.62 3.18 2.02.9 2.02.6 2.38.56.36-.05 1.3-.53 1.48-1.05.18-.52.18-.97.13-1.06-.05-.09-.18-.14-.4-.25z" />
      </svg>
    </a>
  );
}
