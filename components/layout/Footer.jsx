import Link from "next/link";
import Image from "next/image";

/* SERVICES ROUTES */
const SERVICES = [
  {
    name: "Web Development",
    path: "/services/website-development-services-company",
  },
  { name: "Mobile Apps", path: "/services/android-app-development-services" },
  {
    name: "Blockchain & Web3",
    path: "/services/blockchain-development-company",
  },
  {
    name: "IoT & Embedded",
    path: "/services/iot-application-development-services",
  },
  { name: "API Engineering", path: "/services/api-development-services" },
  { name: "Digital Marketing", path: "/services/socialMedia-marketing" },
  {
    name: "Game Development",
    path: "/services/mobile-game-development-company",
  },
];

/* COMPANY ROUTES */
const COMPANY = [
  { name: "About Us", path: "/about" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Careers", path: "/careers" },
  { name: "Blog", path: "/blog" },
  { name: "Case Studies", path: "/portfolio" },
];

/* LEGAL LINKS */
const LEGAL = [
  "Privacy Policy",
  "Terms of Service",
  "Refund Policy",
  "NDA Template",
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 pt-14 pb-8 px-[5%] relative z-10">
      {/* Gold accent */}
      <div className="absolute top-0 left-[5%] w-64 h-px bg-gradient-to-r from-amber-400 to-transparent opacity-60" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        {/* Brand */}
        <div>
          <Link href="/" className="flex items-center gap-2 mb-3">
            <Image
              src="/images/albos-technologies-logo.png"
              width={160}
              height={40}
              alt="Albos Technologies"
              className="h-10 w-auto object-contain"
            />
          </Link>

          <p className="text-slate-400 text-xs leading-relaxed max-w-[240px] mb-5">
            Full-stack software engineering studio based in Pune, India.
            Building enterprise-grade digital products for global clients.
          </p>

          {/* Social */}
        </div>

        {/* Services */}
        <div>
          <h5 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4">
            Services
          </h5>

          {SERVICES.map((service) => (
            <Link
              key={service.name}
              href={service.path}
              className="block text-slate-500 hover:text-slate-800 text-xs mb-2 transition-colors"
            >
              {service.name}
            </Link>
          ))}
        </div>

        {/* Company */}
        <div>
          <h5 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4">
            Company
          </h5>

          {COMPANY.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className="block text-slate-500 hover:text-slate-800 text-xs mb-2 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Legal + Contact */}
        <div>
          <h5 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4">
            Legal
          </h5>

          {LEGAL.map((l) => (
            <a
              key={l}
              href="#"
              className="block text-slate-500 hover:text-slate-800 text-xs mb-2 transition-colors"
            >
              {l}
            </a>
          ))}

          <h5 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3 mt-5">
            Contact
          </h5>

          <a
            href="tel:+919766650411"
            className="block text-slate-500 hover:text-slate-800 text-xs mb-2 transition-colors"
          >
            +91 97666 50411
          </a>

          <a
            href="mailto:info@albostechnologies.com"
            className="block text-slate-500 hover:text-slate-800 text-xs transition-colors"
          >
            info@albostechnologies.com
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="flex flex-wrap justify-between items-center pt-6 border-t border-slate-100 gap-4">
        <span className="text-slate-400 text-xs">
          © {new Date().getFullYear()} Albos Technologies Pvt. Ltd. · Pune,
          India
        </span>

        <div className="flex flex-wrap gap-2">
          {["Est. 2014", "ISO Certified", "4.9★ Clutch", "NASSCOM Member"].map(
            (label, i) => (
              <div
                key={label}
                className={`rounded-full px-3 py-1 text-[10px] font-bold border ${
                  i === 0
                    ? "bg-amber-50 border-amber-200 text-amber-600"
                    : "bg-slate-50 border-slate-200 text-slate-500"
                }`}
              >
                {label}
              </div>
            ),
          )}
        </div>
      </div>
    </footer>
  );
}
