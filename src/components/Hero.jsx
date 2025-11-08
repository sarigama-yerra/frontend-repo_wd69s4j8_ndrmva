import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/6t3xwMDy9K2gYwHw/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative max-w-6xl mx-auto px-4 pt-28 pb-24">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900">
            Build, run, and ship apps with AI
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            Design, code, and deploy full-stack experiences from one canvas. Instant previews, smart suggestions, and beautiful defaults.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#features" className="inline-flex items-center justify-center px-6 py-3 rounded-md text-white font-semibold bg-gradient-to-tr from-blue-600 to-indigo-500 hover:from-blue-700 hover:to-indigo-600">
              Start building
            </a>
            <a href="#showcase" className="inline-flex items-center justify-center px-6 py-3 rounded-md font-semibold text-gray-700 bg-white/80 backdrop-blur border border-gray-200 hover:bg-white">
              See examples
            </a>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white" />
    </section>
  );
}
