import Image from "next/image";
import Link from "next/link";
import "./topbar.css";

type TopbarProps = {
  homeHref?: string;
  howItWorksHref?: string;
  securityHref?: string;
  faqHref?: string;
  ctaHref?: string;
};

export default function Topbar({
  homeHref,
  howItWorksHref,
  securityHref,
  faqHref,
  ctaHref,
}: TopbarProps) {
  const links = [
    { label: "Cómo funciona", href: howItWorksHref },
    { label: "Tu seguridad", href: securityHref },
    { label: "Preguntas frecuentes", href: faqHref },
  ];

  const logo = (
    <>
      <Image
        src="/brand/pagi-logo.webp"
        alt=""
        width={106}
        height={116}
        className="pagi-topbar-symbol"
      />
      <Image
        src="/brand/pagi-logo-nombre.webp"
        alt=""
        width={200}
        height={97}
        className="pagi-topbar-wordmark"
      />
    </>
  );

  const navigationLinks = links.map(({ label, href }) =>
    href ? (
      <Link key={label} href={href} className="pagi-topbar-nav-link">
        {label}
      </Link>
    ) : (
      <span key={label} className="pagi-topbar-nav-link">
        {label}
      </span>
    ),
  );

  const cta = ctaHref ? (
    <Link href={ctaHref} className="pagi-topbar-cta">
      Conocer PAGI
    </Link>
  ) : (
    <button type="button" className="pagi-topbar-cta" disabled>
      Conocer PAGI
    </button>
  );

  return (
    <header id="inicio" className="pagi-topbar">
      {homeHref ? (
        <Link href={homeHref} className="pagi-topbar-brand" aria-label="PAGI — Inicio">
          {logo}
        </Link>
      ) : (
        <span className="pagi-topbar-brand" role="img" aria-label="PAGI">
          {logo}
        </span>
      )}

      <nav className="pagi-topbar-navigation" aria-label="Navegación principal">
        {navigationLinks}
      </nav>

      {cta}

      <details className="pagi-topbar-mobile-menu">
        <summary className="pagi-topbar-menu-toggle">Menú</summary>
        <nav className="pagi-topbar-mobile-navigation" aria-label="Navegación móvil">
          {navigationLinks}
          {cta}
        </nav>
      </details>
    </header>
  );
}
