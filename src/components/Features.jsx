import { Sparkles, Shield, Zap } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'AI-assisted building',
    desc: 'Generate components, routes, and APIs with production-ready quality.',
  },
  {
    icon: Shield,
    title: 'Secure by default',
    desc: 'Best practices baked in: validation, typing, and safe defaults.',
  },
  {
    icon: Zap,
    title: 'Fast feedback',
    desc: 'Live preview, hot reload, and instant deploys for every change.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Everything you need to ship</h2>
          <p className="mt-4 text-gray-600">A curated toolkit for building delightful full‑stack apps without the glue work.</p>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="p-6 rounded-xl border border-gray-200 bg-white/60 backdrop-blur">
              <div className="h-10 w-10 inline-flex items-center justify-center rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-500 text-white">
                <Icon size={18} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
