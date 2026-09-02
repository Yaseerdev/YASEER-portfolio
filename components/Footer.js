export default function Footer() {
  return (
    <footer className="py-12 px-6 bg-gray-950 text-gray-400 border-t border-gray-900">
      <div className="container mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="flex flex-col md:flex-row items-center gap-2">
          <span className="font-bold text-xl tracking-widest text-white">YASEER</span>
          <span className="hidden md:block text-gray-600 mx-4">|</span>
          <p className="text-sm">© {new Date().getFullYear()} Yaseerdev. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}