import { Rocket, Menu } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2 font-semibold text-gray-900">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-tr from-blue-600 to-indigo-500 text-white">
              <Rocket size={18} />
            </span>
            <span>Vibe Coding</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-600">
            <a href="#features" className="hover:text-gray-900">Features</a>
            <a href="#showcase" className="hover:text-gray-900">Showcase</a>
            <a href="#pricing" className="hover:text-gray-900">Pricing</a>
            <a href="#faqs" className="hover:text-gray-900">FAQs</a>
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">
              Sign in
            </button>
            <button className="px-4 py-2 text-sm font-semibold text-white rounded-md bg-gradient-to-tr from-blue-600 to-indigo-500 hover:from-blue-700 hover:to-indigo-600 shadow-sm">
              Get started
            </button>
          </div>
          <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-md hover:bg-gray-100">
            <Menu />
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-gray-200">
          <div className="px-4 py-3 space-y-2 text-gray-700">
            <a href="#features" className="block">Features</a>
            <a href="#showcase" className="block">Showcase</a>
            <a href="#pricing" className="block">Pricing</a>
            <a href="#faqs" className="block">FAQs</a>
            <div className="pt-2 flex gap-2">
              <button className="flex-1 px-4 py-2 text-sm font-medium text-gray-700 border rounded-md">Sign in</button>
              <button className="flex-1 px-4 py-2 text-sm font-semibold text-white rounded-md bg-gradient-to-tr from-blue-600 to-indigo-500">Get started</button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
