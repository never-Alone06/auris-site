import { stats } from "@/data/content";

export default function Stats() {
  return (
    <section
      id="stats"
      className="relative py-20 md:py-28 bg-auris-light"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* En-tête */}
        <div className="text-center mb-14">
          <span className="inline-block px-3 py-1 rounded-full bg-auris-cyan/10 text-auris-cyan text-xs font-semibold tracking-wide uppercase mb-4">
            AURIS en chiffres
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-auris-navy mb-4">
            Un impact mesurable, une technologie prouvée
          </h2>
          <p className="text-auris-gray max-w-2xl mx-auto">
            Des résultats concrets obtenus après des mois de conception,
            d'entraînement IA et de tests utilisateurs en conditions réelles.
          </p>
        </div>

        {/* Grille de stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 border border-slate-200 hover:border-auris-cyan hover:shadow-xl hover:shadow-auris-cyan/10 transition-all duration-300 hover:-translate-y-1"
            >
              <p className="text-3xl md:text-4xl font-bold text-auris-navy mb-2 group-hover:text-auris-cyan transition-colors">
                {stat.value}
                <span className="text-auris-cyan text-2xl md:text-3xl">
                  {stat.suffix}
                </span>
              </p>
              <p className="text-sm font-medium text-auris-navy mb-1 leading-snug">
                {stat.label}
              </p>
              <p className="text-xs text-auris-gray">{stat.hint}</p>
            </div>
          ))}
        </div>

        {/* Ligne de bas : comparaison de prix */}
        <div className="mt-14 max-w-3xl mx-auto bg-white rounded-2xl border border-slate-200 p-6 md:p-8">
          <p className="text-center text-sm font-semibold text-auris-navy mb-6 uppercase tracking-wide">
            Un prix qui change tout
          </p>
          <div className="space-y-4">
            {/* Appareil auditif */}
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-auris-navy font-medium">
                  Appareil auditif classique
                </span>
                <span className="text-auris-gray">
                  150 000 – 300 000 FCFA
                </span>
              </div>
              <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
                <div className="h-full bg-slate-400 rounded-full w-full" />
              </div>
            </div>

            {/* Montre connectée */}
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-auris-navy font-medium">
                  Montre connectée grand public
                </span>
                <span className="text-auris-gray">
                  250 000 – 500 000 FCFA
                </span>
              </div>
              <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
                <div className="h-full bg-slate-400 rounded-full w-full" />
              </div>
            </div>

            {/* AURIS */}
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-auris-navy font-semibold flex items-center gap-2">
                  AURIS
                  <span className="text-[10px] uppercase bg-auris-cyan/10 text-auris-cyan px-2 py-0.5 rounded-full">
                    Notre solution
                  </span>
                </span>
                <span className="text-auris-cyan font-bold">
                  49 000 FCFA
                </span>
              </div>
              <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-auris-cyan to-auris-sky rounded-full w-[18%]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}