import { solution } from "@/data/content";

export default function Solution() {
  return (
    <section id="solution" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* En-tête */}
        <div className="max-w-3xl mb-14">
          <span className="inline-block px-3 py-1 rounded-full bg-auris-cyan/10 text-auris-cyan text-xs font-semibold tracking-wide uppercase mb-4">
            Notre solution
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-auris-navy mb-6 leading-tight">
            {solution.title}
          </h2>
          <p className="text-lg text-auris-gray leading-relaxed">
            {solution.intro}
          </p>
        </div>

        {/* Grille des fonctionnalités */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {solution.features.map((feature, i) => (
            <div
              key={i}
              className="bg-auris-light rounded-2xl p-6 md:p-8 border border-slate-200 hover:border-auris-cyan hover:shadow-xl hover:shadow-auris-cyan/10 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-auris-navy flex items-center justify-center mb-5">
                <span className="text-auris-cyan text-xl">
                  {feature.icon === "waves" && "🎯"}
                  {feature.icon === "vibrate" && "📳"}
                  {feature.icon === "chip" && "🧠"}
                  {feature.icon === "toggle" && "🔘"}
                  {feature.icon === "phone" && "📱"}
                  {feature.icon === "sun" && "☀️"}
                </span>
              </div>
              <h3 className="text-lg font-bold text-auris-navy mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-auris-gray leading-relaxed">
                {feature.text}
              </p>
            </div>
          ))}
        </div>

        {/* Galerie photos du prototype */}
        {solution.gallery && solution.gallery.length > 0 && (
          <div className="mt-16">
            <h3 className="text-2xl md:text-3xl font-bold text-auris-navy mb-8 text-center">
              Le prototype en images
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {solution.gallery.map((item, i) => (
                <div
                  key={i}
                  className="group rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="overflow-hidden">
                    <img
                      src={item.src}
                      alt={item.caption}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <p className="text-center text-sm text-auris-gray py-3 bg-auris-light font-medium">
                    {item.caption}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}