import { problem } from "@/data/content";

export default function Problem() {
  return (
    <section id="probleme" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* En-tête */}
        <div className="max-w-3xl mb-14">
          <span className="inline-block px-3 py-1 rounded-full bg-red-50 text-red-600 text-xs font-semibold tracking-wide uppercase mb-4">
            Le problème
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-auris-navy mb-6 leading-tight">
            {problem.title}
          </h2>
          <p className="text-lg text-auris-gray leading-relaxed">
            {problem.intro}
          </p>
        </div>

        {/* Grille de 3 cartes */}
        <div className="grid md:grid-cols-3 gap-6">
          {problem.points.map((point, index) => (
            <div
              key={index}
              className="relative bg-auris-light rounded-2xl p-6 md:p-8 border border-slate-200 hover:border-auris-cyan transition-colors"
            >
              {/* Numéro */}
              <span className="absolute top-6 right-6 text-5xl font-bold text-auris-navy/5">
                0{index + 1}
              </span>

              {/* Icône */}
              <div className="w-12 h-12 rounded-xl bg-auris-navy flex items-center justify-center mb-5">
                {index === 0 && (
                  <svg className="w-6 h-6 text-auris-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                )}
                {index === 1 && (
                  <svg className="w-6 h-6 text-auris-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                )}
                {index === 2 && (
                  <svg className="w-6 h-6 text-auris-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )}
              </div>

              <h3 className="text-xl font-bold text-auris-navy mb-3">
                {point.title}
              </h3>
              <p className="text-auris-gray text-sm leading-relaxed">
                {point.text}
              </p>
            </div>
          ))}
        </div>

        {/* Encart "constat" en bas */}
        <div className="mt-14 bg-auris-navy rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-auris-cyan/10 rounded-full blur-3xl" />
          <div className="relative max-w-3xl">
            <p className="text-auris-cyan text-sm font-semibold uppercase tracking-wide mb-3">
              Constat
            </p>
            <p className="text-xl md:text-2xl font-medium leading-relaxed">
              Aucune solution existante ne combine{" "}
              <span className="text-auris-cyan">portabilité</span>,{" "}
              <span className="text-auris-cyan">intelligence embarquée</span>,{" "}
              <span className="text-auris-cyan">alerte vibratoire différenciée</span>{" "}
              et <span className="text-auris-cyan">prix accessible</span>.
            </p>
            <p className="text-white/60 mt-4 text-sm">
              C'est précisément ce vide que le projet AURIS est venu combler.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}