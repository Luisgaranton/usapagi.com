import Image from "next/image";
import Link from "next/link";
import "./main-section.css";

type MainSectionProps = {
  howItWorksHref?: string;
  exploreAppHref?: string;
};

export default function MainSection({
  howItWorksHref,
  exploreAppHref,
}: MainSectionProps) {
  return (
    <section className="pagi-main-section" aria-labelledby="pagi-main-title">
      <div className="pagi-main-section-content">
        <div className="pagi-main-section-copy">
          <p className="pagi-main-section-eyebrow">PAGOS A TU RITMO</p>
          <h1 id="pagi-main-title" className="pagi-main-section-title">
            <span>Tu dinero.</span>
            <span>Tu gente.</span>
            <span>Más simple.</span>
          </h1>
          <p className="pagi-main-section-description">
            Envía y solicita pagos con un número de teléfono. PAGI conecta tus
            bancos por SMS para que el día a día sea más sencillo.
          </p>
          <div className="pagi-main-section-actions">
            {howItWorksHref ? (
              <Link href={howItWorksHref} className="pagi-main-section-button">
                Así funciona PAGI
              </Link>
            ) : (
              <button type="button" className="pagi-main-section-button" disabled>
                Así funciona PAGI
              </button>
            )}
            {exploreAppHref ? (
              <Link
                href={exploreAppHref}
                className="pagi-main-section-button pagi-main-section-button-secondary"
              >
                Explorar la app
              </Link>
            ) : (
              <button
                type="button"
                className="pagi-main-section-button pagi-main-section-button-secondary"
                disabled
              >
                Explorar la app
              </button>
            )}
          </div>
          <p className="pagi-main-section-note">
            Pensado para Venezuela. Para la vida de todos los días.
          </p>
        </div>
        <div className="pagi-main-section-product">
          {/* Reserved product slot: intentionally no phone image or mockup. */}
          <div className="pagi-main-section-phone-space" aria-hidden="true" />
          <div className="pagi-main-section-detail">
            <p className="pagi-main-section-detail-title">
              Menos vueltas.<br />Más conectado.
            </p>
            <div className="pagi-main-section-detail-card">
              <Image
                src="/icons/plain-line-duotone.svg"
                width={24}
                height={24}
                alt=""
              />
              <p className="pagi-main-section-card-title">
                Un número.<br />Muchas posibilidades.
              </p>
              <p className="pagi-main-section-card-caption">
                Enviar · Solicitar · QR
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
