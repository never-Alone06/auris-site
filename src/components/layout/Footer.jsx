import { site, footer } from "@/data/content";

const SocialIcon = ({ name }) => {
  const paths = {
    linkedin:
      "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 2a2 2 0 110 4 2 2 0 010-4z",
    github:
      "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",
    mail: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  };
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d={paths[name]} />
    </svg>
  );
};

export default function Footer() {
  return (
    <footer className="bg-auris-navy text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Colonne 1 : Logo + tagline */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-10 h-10 rounded-full bg-auris-cyan flex items-center justify-center font-bold text-auris-navy text-lg">
                A
              </span>
              <span className="font-bold text-2xl tracking-wider">{site.name}</span>
            </div>
            <p className="text-auris-cyan font-semibold mb-3">{footer.tagline}</p>
            <p className="text-white/60 text-sm leading-relaxed max-w-md">
              {footer.description}
            </p>
          </div>

          {/* Colonne 2 : Navigation */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wide text-auris-cyan mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
              {footer.links.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-auris-cyan text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3 : Contact + réseaux */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wide text-auris-cyan mb-4">
              Contact
            </h4>
            <p className="text-white/70 text-sm mb-2">{site.email}</p>
            <p className="text-white/70 text-sm mb-6">{site.location}</p>

            <div className="flex gap-3">
              {footer.social.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  aria-label={s.name}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-auris-cyan hover:text-auris-navy hover:border-auris-cyan transition-all"
                >
                  <SocialIcon name={s.icon} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Ligne de bas */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-xs">{footer.copyright}</p>
          <p className="text-white/50 text-xs">{footer.credits}</p>
        </div>
      </div>
    </footer>
  );
}