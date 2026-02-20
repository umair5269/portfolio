export default function Footer() {
  return (
    <footer className="py-6 border-t border-gray-800 text-center text-gray-500 text-sm">
      © {new Date().getFullYear()} Umair. Built with Next.js & Tailwind.
    </footer>
  );
}