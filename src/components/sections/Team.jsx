import { team } from "@/data/content";

export default function Team() {
  return (
    <section id="equipe" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* En-tête */}
        <div className="max-w-3xl mb-14">
          <span className="inline-block px-3 py-1 rounded-full bg-auris-cyan/10 text-auris-cyan text-xs font-semibold tracking-wide uppercase mb-4">
            L'équipe
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-auris-navy mb-6 leading-tight">
            {team.title}
          </h2>
          <p className="text-lg text-auris-gray leading-relaxed">
            {team.intro}
          </p>
        </div>

        {/* Photo des innovateurs */}
        <div className="mb-14 max-w-3xl">
          <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-lg group">
            <img
              src={team.photo}
              alt="L'équipe du projet AURIS"
              className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-auris-navy/90 to-transparent p-6">
              <p className="text-white font-semibold text-sm md:text-base">
                {team.photoCaption}
              </p>
            </div>
          </div>
        </div>

        {/* Grille des 3 membres */}
        <div className="grid md:grid-cols-3 gap-6">
          {team.members.map((member, i) => (
            <div
              key={i}
              className="group bg-auris-light rounded-2xl p-6 md:p-8 border border-slate-200 hover:border-auris-cyan hover:shadow-xl hover:shadow-auris-cyan/10 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Avatar */}
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-auris-cyan to-auris-blue flex items-center justify-center mb-5 shadow-lg overflow-hidden group-hover:scale-110 transition-transform">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-lg font-bold text-auris-navy mb-1">
                {member.name}
              </h3>
              <p className="text-sm text-auris-cyan font-semibold mb-1">
                {member.role} · {member.focus}
              </p>
              <p className="text-xs text-auris-gray mb-4">{member.school}</p>

              <p className="text-sm text-auris-gray leading-relaxed border-t border-slate-200 pt-4 mb-4">
                {member.bio}
              </p>

              <div className="flex flex-wrap gap-3 pt-4 border-t border-slate-200">
                <a
                  href={`mailto:${member.email}`}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-auris-gray hover:text-auris-cyan transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email
                </a>
                <a
                  href={`https://wa.me/${member.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-auris-gray hover:text-auris-cyan transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Encart valeurs */}
        <div className="mt-14 bg-gradient-to-br from-auris-navy to-auris-blue rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-auris-cyan/10 rounded-full blur-3xl" />
          <div className="relative max-w-3xl">
            <p className="text-auris-cyan text-sm font-semibold uppercase tracking-wide mb-3">
              Notre conviction
            </p>
            <p className="text-xl md:text-2xl font-medium leading-relaxed">
              La technologie peut et doit être au service de l'humain, en particulier
              des plus vulnérables. AURIS est né de cette ambition :{" "}
              <span className="text-auris-cyan">
                redonner aux personnes sourdes une sécurité
              </span>{" "}
              que la plupart d'entre nous tiennent pour acquise.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}