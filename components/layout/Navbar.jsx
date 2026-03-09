"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

// ─── Flat service list (no group classification) ─────────────────────────────
const SERVICES = [
  {
    name: "Web Development",
    icon: "🌐",
    desc: "Modern, responsive and scalable websites",
    path: "/services/website-development-services-company",
  },
  {
    name: "Android App Development",
    icon: "📱",
    desc: "Custom Android apps for your business needs",
    path: "/services/android-app-development-services",
  },
  {
    name: "iOS App Development",
    icon: "🍎",
    desc: "High-performance native iOS applications",
    path: "/services/ios-app-development",
  },
  {
    name: "Embedded & IoT Development",
    icon: "🤖",
    desc: "Smart IoT systems and embedded solutions",
    path: "/services/iot-application-development-services",
  },
  {
    name: "API Development",
    icon: "⚡",
    desc: "Secure & scalable APIs for web & mobile",
    path: "/services/api-development-services",
  },
  {
    name: "Telecalling & Tech Support",
    icon: "🎧",
    desc: "24/7 customer & technical assistance",
    path: "/services/telecalling-support",
  },
  {
    name: "Social Media Marketing",
    icon: "📣",
    desc: "Meta, Google, LinkedIn ads & brand growth",
    path: "/services/socialMedia-marketing",
  },
  {
    name: "SEO Optimization",
    icon: "🔍",
    desc: "Boost search rankings & grow organically",
    path: "/services/digital-marketing-seo",
  },
  {
    name: "Game Development",
    icon: "🎮",
    desc: "2D, 3D & multiplayer game development",
    path: "/services/mobile-game-development-company",
  },
  {
    name: "Enterprise ERP / CRM LMS",
    icon: "🏢",
    desc: "Custom enterprise workflow solutions",
    path: "/services/erp-crm",
  },
  {
    name: "Blockchain Development",
    icon: "🔗",
    desc: "Crypto apps, smart contracts & Web3",
    path: "/services/blockchain-development-company",
  },
  {
    name: "Hosting & Domain Services",
    icon: "☁️",
    desc: "Cloud hosting, domains & server setup",
    path: "/services/web-hosting-services",
  },
  {
    name: "UI / UX Design",
    icon: "✦",
    desc: "Modern user interfaces & smooth experience",
    path: "/services/uiux-design-company",
  },
];

const NAV_LINKS = [
  { label: "Portfolio", to: "/portfolio" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const megaRef = useRef(null);
  const servicesBtnRef = useRef(null);
  const closeTimer = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const handler = (e) => {
      if (
        megaRef.current &&
        !megaRef.current.contains(e.target) &&
        servicesBtnRef.current &&
        !servicesBtnRef.current.contains(e.target)
      ) {
        setMegaOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleServicesEnter = () => {
    clearTimeout(closeTimer.current);
    setMegaOpen(true);
  };
  const handleServicesLeave = () => {
    closeTimer.current = setTimeout(() => setMegaOpen(false), 150);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap');
        *, *::before, *::after { box-sizing: border-box; font-family: 'DM Sans', sans-serif; }

        .albos-nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
          padding: 10px;
          transition: all 0.35s cubic-bezier(0.4,0,0.2,1);
        }
        .albos-nav-inner {
          padding: 10px 60px;
          width: 100%;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .albos-nav.scrolled {
          background: rgba(255,255,255,0.97); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(15,23,42,0.08); box-shadow: 0 4px 24px rgba(15,23,42,0.06);
        }
        .albos-nav:not(.scrolled) {
          background: rgba(255,255,255,0.85); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid transparent;
        }

        /* Desktop menu */
        .albos-desktop-menu { display: flex; align-items: center; gap: 4px; list-style: none; margin: 0; padding: 0; }
        .albos-nav-link {
          padding: 8px 14px; border-radius: 8px; font-size: 14px; font-weight: 500;
          color: #64748B; text-decoration: none; transition: all 0.2s; display: block;
        }
        .albos-nav-link:hover, .albos-nav-link.active { background: rgba(79,110,247,0.07); color: #0F172A; font-weight: 600; }
        .albos-services-btn {
          padding: 8px 14px; border-radius: 8px; font-size: 14px; font-weight: 500;
          color: #64748B; background: transparent; border: none; cursor: pointer;
          display: flex; align-items: center; gap: 5px; transition: all 0.2s; font-family: inherit;
        }
        .albos-services-btn:hover, .albos-services-btn.open { background: rgba(79,110,247,0.07); color: #0F172A; }
        .albos-chevron { width: 14px; height: 14px; transition: transform 0.25s; opacity: 0.6; }
        .albos-chevron.open { transform: rotate(180deg); }

        .albos-cta {
          background: linear-gradient(135deg, #4F6EF7 0%, #7C3AED 100%);
          color: #fff; padding: 9px 20px; border-radius: 10px; font-size: 13.5px; font-weight: 700;
          text-decoration: none; display: flex; align-items: center; gap: 6px;
          box-shadow: 0 4px 14px rgba(79,110,247,0.35); transition: all 0.2s; white-space: nowrap;
        }
        .albos-cta:hover { transform: translateY(-1px); box-shadow: 0 8px 24px rgba(79,110,247,0.45); }

        /* Dropdown — 2-column grid */
        .albos-dropdown {
          position: fixed; top: 68px; left: 50%; transform: translateX(-50%) translateY(-10px);
          width: min(700px, 92vw);
          background: #fff; border-radius: 16px;
          box-shadow: 0 20px 60px rgba(15,23,42,0.12), 0 0 0 1px rgba(15,23,42,0.06);
          padding: 20px 20px 16px;
          opacity: 0; pointer-events: none;
          transition: all 0.25s cubic-bezier(0.4,0,0.2,1); z-index: 999;
        }
        .albos-dropdown.open { opacity: 1; pointer-events: all; transform: translateX(-50%) translateY(0); }

        .albos-dropdown-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 4px;
        }
        .albos-service-item {
          display: flex; align-items: flex-start; gap: 10px; padding: 10px 12px;
          border-radius: 10px; text-decoration: none; transition: background 0.15s; cursor: pointer;
        }
        .albos-service-item:hover { background: #F8FAFC; }
        .albos-service-icon { font-size: 17px; line-height: 1; margin-top: 2px; flex-shrink: 0; }
        .albos-service-name { font-size: 13px; font-weight: 600; color: #0F172A; display: block; margin-bottom: 1px; }
        .albos-service-desc { font-size: 11.5px; color: #94A3B8; display: block; }

        .albos-dropdown-footer {
          margin-top: 14px; padding-top: 12px; border-top: 1px solid #F1F5F9;
          display: flex; align-items: center; justify-content: space-between;
        }
        .albos-dropdown-footer-tag { font-size: 12px; color: #94A3B8; font-style: italic; }
        .albos-dropdown-footer-link {
          font-size: 13px; font-weight: 600; color: #4F6EF7; text-decoration: none;
          display: flex; align-items: center; gap: 4px;
        }
        .albos-dropdown-footer-link:hover { text-decoration: underline; }

        /* Hamburger */
        .albos-hamburger {
          display: none; flex-direction: column; gap: 5px; background: none; border: none;
          cursor: pointer; padding: 8px; border-radius: 8px;
        }
        .albos-bar {
          width: 22px; height: 2px; background: #0F172A; border-radius: 2px;
          transition: all 0.3s; display: block;
        }
        .albos-bar.b0.open { transform: rotate(45deg) translate(5px, 5px); }
        .albos-bar.b1.open { opacity: 0; }
        .albos-bar.b2.open { transform: rotate(-45deg) translate(5px, -5px); }

        /* Mobile overlay */
        .albos-mobile-overlay {
          display: none; position: fixed; inset: 0; top: 68px;
          background: #fff; z-index: 998;
          flex-direction: column; overflow-y: auto;
          padding: 0 5% 32px;
        }
        .albos-mobile-overlay.open { display: flex; }

        .albos-mobile-section-btn {
          width: 100%; display: flex; justify-content: space-between; align-items: center;
          padding: 16px 0; border: none; border-bottom: 1px solid #F1F5F9;
          background: none; font-size: 15px; font-weight: 600; color: #0F172A;
          cursor: pointer; font-family: inherit;
        }
        .albos-mobile-services-list { padding: 6px 0 4px; border-bottom: 1px solid #F1F5F9; }
        .albos-mobile-service-link {
          display: flex; align-items: center; gap: 10px; padding: 10px 4px;
          text-decoration: none; font-size: 14px; color: #475569; font-weight: 500;
          border-bottom: 1px solid #F8FAFC;
        }
        .albos-mobile-service-link:last-child { border-bottom: none; }
        .albos-mobile-service-link:hover { color: #0F172A; }
        .albos-mobile-nav-link {
          display: block; padding: 16px 0; font-size: 15px; font-weight: 500;
          color: #475569; text-decoration: none; border-bottom: 1px solid #F1F5F9;
        }
        .albos-mobile-nav-link:hover { color: #0F172A; }
        .albos-mobile-cta {
          margin-top: 20px; display: block; text-align: center;
          background: linear-gradient(135deg, #4F6EF7 0%, #7C3AED 100%);
          color: #fff; padding: 15px; border-radius: 12px; font-size: 15px; font-weight: 700;
          text-decoration: none; box-shadow: 0 4px 20px rgba(79,110,247,0.3);
        }

        @media (max-width: 768px) {
          .albos-desktop-menu { display: none; }
          .albos-hamburger { display: flex; }
          .albos-dropdown { display: none; }
        }
        @media (min-width: 769px) {
          .albos-mobile-overlay { display: none !important; }
        }
      `}</style>

      <nav className={`albos-nav${scrolled ? " scrolled" : ""}`}>
        <div className="albos-nav-inner">
          {/* Logo */}
          <Link href="/" style={{ display: "flex", alignItems: "center" }}>
            <Image
              src="/images/albos-technologies-logo.png"
              alt="Albos Technologies"
              width={160}
              height={40}
              className="h-10 w-auto object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <ul className="albos-desktop-menu">
            <li style={{ position: "relative" }}>
              <button
                ref={servicesBtnRef}
                onMouseEnter={handleServicesEnter}
                onMouseLeave={handleServicesLeave}
                onClick={() => setMegaOpen(!megaOpen)}
                className={`albos-services-btn${megaOpen ? " open" : ""}`}
              >
                Services
                <svg
                  className={`albos-chevron${megaOpen ? " open" : ""}`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </li>

            {NAV_LINKS.map(({ label, to }) => (
              <li key={to}>
                <Link
                  href={to}
                  className={`albos-nav-link${pathname === to ? " active" : ""}`}
                >
                  {label}
                </Link>
              </li>
            ))}

            <li>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-br from-amber-500 btn-amber to-amber-600 text-white text-sm font-bold shadow-lg hover:-translate-y-1 transition"
              >
                Get a Quote
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </li>
          </ul>

          {/* Hamburger */}
          <button
            className="albos-hamburger"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className={`albos-bar b${i}${mobileOpen ? " open" : ""}`}
              />
            ))}
          </button>
        </div>
      </nav>

      {/* Desktop Dropdown */}
      <div
        ref={megaRef}
        className={`albos-dropdown${megaOpen ? " open" : ""}`}
        onMouseEnter={handleServicesEnter}
        onMouseLeave={handleServicesLeave}
      >
        <div className="albos-dropdown-grid">
          {SERVICES.map((s) => (
            <Link
              key={s.path}
              href={s.path}
              onClick={() => setMegaOpen(false)}
              className="albos-service-item"
            >
              <span className="albos-service-icon">{s.icon}</span>
              <span>
                <span className="albos-service-name">{s.name}</span>
                {/* <span className="albos-service-desc">{s.desc}</span> */}
              </span>
            </Link>
          ))}
        </div>
        <div className="albos-dropdown-footer">
          <span className="albos-dropdown-footer-tag">
            Need help choosing?{" "}
            <Link
              href="/contact"
              className="albos-dropdown-footer-link"
              onClick={() => setMegaOpen(false)}
            >
              Contact us
            </Link>
          </span>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`albos-mobile-overlay${mobileOpen ? " open" : ""}`}>
        {/* Services accordion */}
        <button
          className="albos-mobile-section-btn"
          onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
        >
          <span>Services</span>
          <svg
            className={`albos-chevron${mobileServicesOpen ? " open" : ""}`}
            viewBox="0 0 20 20"
            fill="currentColor"
            width="16"
            height="16"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {mobileServicesOpen && (
          <div className="albos-mobile-services-list">
            {SERVICES.map((s) => (
              <Link
                key={s.path}
                href={s.path}
                onClick={() => setMobileOpen(false)}
                className="albos-mobile-service-link"
              >
                <span style={{ fontSize: "16px" }}>{s.icon}</span>
                <span>{s.name}</span>
              </Link>
            ))}
          </div>
        )}

        {NAV_LINKS.map(({ label, to }) => (
          <Link
            key={to}
            href={to}
            onClick={() => setMobileOpen(false)}
            className="albos-mobile-nav-link"
          >
            {label}
          </Link>
        ))}

        <Link
          href="/contact"
          onClick={() => setMobileOpen(false)}
          className="mt-5 flex items-center justify-center gap-2 w-full py-4 px-6 rounded-xl bg-gradient-to-br from-amber-500 btn-amber to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white text-base font-bold shadow-lg hover:shadow-amber-200 hover:-translate-y-0.5 transition"
        >
          Get a Quote →
        </Link>
      </div>
    </>
  );
}
