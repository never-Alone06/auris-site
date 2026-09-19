import { technology } from "@/data/content";

export default function Technology() {
  return (
    <section id="technologie" className="py-20 md:py-28 bg-auris-navy text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-auris-cyan/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-auris-blue/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <span className="inline-block px-3 py-1 rounded-full bg-auris-cyan/10 text-auris-cyan text-xs font-semibold tracking-wide uppercase mb-4">
            Technologie & IA
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            {technology.title}
          </h2>
          <p className="text-lg text-white/70 leading-relaxed">
            {technology.intro}
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-sm font-semibold text-auris-cyan uppercase tracking-wide mb-6">
            Pipeline temps réel
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {technology.pipeline.map((p, i) => (
              <div
                key={i}
                className="relative bg-white/5 border border-white/10 rounded-xl p-5 backdrop-blur-sm"
              >
                <p className="text-auris-cyan text-2xl font-bold mb-2">{p.step}</p>
                <p className="font-semibold text-sm mb-1">{p.label}</p>
                <p className="text-xs text-white/50 leading-relaxed">{p.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-sm font-semibold text-auris-cyan uppercase tracking-wide mb-6">
            Performances mesurées
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {technology.performances.map((perf, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
                <p className="text-3xl md:text-4xl font-bold text-auris-cyan mb-1">
                  {perf.value}
                  <span className="text-xl">{perf.suffix}</span>
                </p>
                <p className="text-sm font-medium mb-1">{perf.label}</p>
                <p className="text-xs text-white/50">{perf.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-16">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
            <h3 className="text-lg font-bold mb-5">Matrice de confusion (test)</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr>
                    <th className="text-left py-2 pr-2 text-white/50 font-medium">
                      Prédit →
                    </th>
                    {technology.confusionMatrix.labels.map((l) => (
                      <th key={l} className="text-center py-2 px-2 text-white/70 font-medium">
                        {l}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {technology.confusionMatrix.rows.map((row, i) => (
                    <tr key={i} className="border-t border-white/5">
                      <td className="py-2 pr-2 font-semibold text-white/80">
                        {row.class}
                      </td>
                      {row.values.map((v, j) => (
                        <td
                          key={j}
                          className={`text-center py-2 px-2 tabular-nums ${
                            i === j
                              ? "text-auris-cyan font-bold"
                              : "text-white/50"
                          }`}
                        >
                          {v.toFixed(1)}%
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-white/40 mt-4">
              En diagonale : taux de bonne classification. Hors diagonale : confusions.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
            <h3 className="text-lg font-bold mb-5">{technology.cnn.title}</h3>
            <ul className="space-y-3">
              {technology.cnn.layers.map((layer, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-white/70">
                  <span className="text-auris-cyan mt-0.5">▸</span>
                  <span>{layer}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-sm font-semibold text-auris-cyan uppercase tracking-wide mb-6">
            Composants matériels · Total 22 500 FCFA
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {technology.hardware.map((hw, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-xl p-5 flex items-start justify-between gap-4"
              >
                <div>
                  <p className="font-semibold text-sm mb-1">{hw.name}</p>
                  <p className="text-xs text-white/50 leading-relaxed">{hw.role}</p>
                </div>
                <span className="text-auris-cyan font-bold text-sm whitespace-nowrap">
                  {hw.price}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-auris-cyan uppercase tracking-wide mb-6">
            Outils & plateformes
          </h3>
          <div className="flex flex-wrap gap-3">
            {technology.stack.map((s, i) => (
              <div
                key={i}
                className="px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
              >
                <span className="text-sm font-semibold text-auris-cyan">{s.name}</span>
                <span className="text-xs text-white/50 ml-2">· {s.usage}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}