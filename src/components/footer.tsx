import Image from "next/image";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="pagi-footer">
      <div className="pagi-footer-content">
        <span className="pagi-footer-brand" role="img" aria-label="PAGI">
          <Image
            src="/brand/pagi-logo.webp"
            alt=""
            width={106}
            height={116}
            className="pagi-footer-symbol"
          />
          <Image
            src="/brand/pagi-logo-nombre.webp"
            alt=""
            width={200}
            height={97}
            className="pagi-footer-wordmark"
          />
        </span>
        <p className="pagi-footer-description">
          Pagos digitales pensados para Venezuela.
        </p>
        <p className="pagi-footer-tagline">PAGI · Tu dinero. Tu gente.</p>
      </div>
    </footer>
  );
}
