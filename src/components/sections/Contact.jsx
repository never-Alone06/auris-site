import { contact } from "@/data/content";

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-auris-light">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* En-tête */}
        <div className="max-w-3xl mb-14">
          <span className="inline-block px-3 py-1 rounded-full bg-auris-cyan/10 text-auris-cyan text-xs font-semibold tracking-wide uppercase mb-4">
            Contact
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-auris-navy mb-6 leading-tight">
            {contact.title}
          </h2>
          <p className="text-lg text-auris-gray leading-relaxed">
            {contact.intro}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Carte WhatsApp */}
          <a
            href={`https://wa.me/${contact.whatsapps[0].link}?text=${encodeURIComponent(
              "Bonjour, je souhaite en savoir plus sur le projet AURIS"
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl p-8 md:p-10 text-white shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
            <div className="relative">
              <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2">WhatsApp</h3>
              <p className="text-emerald-50 text-sm mb-6">
                Discutons directement en message
              </p>
              <div className="space-y-1">
                {contact.whatsapps.map((w, i) => (
                  <p key={i} className="font-semibold text-lg">
                    {w.display}
                  </p>
                ))}
              </div>
              <span className="inline-flex items-center gap-2 mt-6 text-sm font-medium group-hover:translate-x-1 transition-transform">
                Ouvrir WhatsApp
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </div>
          </a>

          {/* Carte Email */}
          <a
            href={`mailto:${contact.emails[0]}?subject=${encodeURIComponent(
              "Projet AURIS"
            )}`}
            className="group bg-gradient-to-br from-auris-navy to-auris-blue rounded-2xl p-8 md:p-10 text-white shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-auris-cyan/20 rounded-full blur-3xl" />
            <div className="relative">
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-auris-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2">Email</h3>
              <p className="text-slate-300 text-sm mb-6">
                Écrivez-nous pour toute demande
              </p>
              <div className="space-y-1">
                {contact.emails.map((e, i) => (
                  <p key={i} className="font-semibold text-sm md:text-base break-all">
                    {e}
                  </p>
                ))}
              </div>
              <span className="inline-flex items-center gap-2 mt-6 text-sm font-medium group-hover:translate-x-1 transition-transform">
                Envoyer un email
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </div>
          </a>
        </div>

        {/* Bloc localisation */}
        <div className="mt-8 bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl bg-auris-navy flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-auris-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-auris-gray">Localisation</p>
                <p className="font-semibold text-auris-navy">{contact.location}</p>
              </div>
            </div>
            <div className="hidden md:block w-px h-10 bg-slate-200" />
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl bg-auris-navy flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-auris-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-auris-gray">Institution</p>
                <p className="font-semibold text-auris-navy text-sm">{contact.school}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}