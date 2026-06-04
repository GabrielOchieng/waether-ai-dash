export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white mt-12 py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="col-span-2 md:col-span-1">
          <h3 className="font-bold text-slate-900 mb-2">
            Atmosphere & Forestry
          </h3>
          <p className="text-slate-500 text-sm">
            Empowering precision insights through AI-driven environmental data.
          </p>
        </div>

        {/* Footer Link Sections */}
        <FooterSection title="Product" links={["Features", "Integrations"]} />
        <FooterSection title="Company" links={["About Us", "Contact"]} />
        <FooterSection title="Legal" links={["Privacy", "Terms"]} />
      </div>

      <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-slate-100 text-center text-slate-400 text-xs">
        © {currentYear} Environmental AI Labs. All rights reserved.
      </div>
    </footer>
  );
}

// Helper component to avoid repetitive code
function FooterSection({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h4 className="font-semibold text-slate-900 mb-3">{title}</h4>
      <ul className="text-sm text-slate-500 space-y-2">
        {links.map((link) => (
          <li key={link}>
            <a href="#" className="hover:text-blue-600 transition-colors">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
