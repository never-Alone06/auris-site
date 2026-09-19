import { hero } from "@/data/content";

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative pt-28 pb-20 md:pt-36 md:pb-28 bg-gradient-to-br from-auris-navy via-auris-blue to-auris-navy text-white overflow-hidden"
    >
      {/* Halos décoratifs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-auris-cyan/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-auris-cyan/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Colonne gauche : texte */}
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-auris-cyan/10 border border-auris-cyan/30 text-auris-cyan text-xs font-semibold tracking-wide uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-auris-cyan animate-pulse" />
              {hero.badge}
            </span>

            <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-none">
              {hero.title}
            </h1>

            <p className="text-2xl md:text-3xl font-medium text-auris-cyan mb-6 leading-tight">
              {hero.tagline}
            </p>

            <p className="text-lg text-slate-300 leading-relaxed mb-10 max-w-xl">
              {hero.subtitle}
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href={hero.ctaPrimary.href}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-auris-cyan text-auris-navy font-semibold hover:bg-auris-sky transition-colors shadow-lg shadow-auris-cyan/20"
              >
                {hero.ctaPrimary.label}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>
              <a
                href={hero.ctaSecondary.href}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-slate-500 hover:border-auris-cyan hover:bg-white/5 text-white font-semibold transition-colors"
              >
                {hero.ctaSecondary.label}
              </a>
            </div>
          </div>

          {/* Colonne droite : PHOTO du prototype */}
          <div className="relative flex justify-center">
            <div className="absolute inset-0 bg-auris-cyan/30 blur-3xl rounded-full" />
            <img
              src={hero.image}
              alt="Prototype du bracelet AURIS"
              className="relative w-full max-w-md rounded-3xl shadow-2xl border border-auris-cyan/30 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}