import "./cta-section.css";

export default function CTASection() {
  return (
    <section className="pagi-cta-section" aria-labelledby="pagi-cta-section-title">
      <div className="pagi-cta-section-content">
        <h2 id="pagi-cta-section-title" className="pagi-cta-section-title">
          <span>Más cerca de tu gente.</span>{" "}
          <span>Más fácil con PAGI.</span>
        </h2>
        <p className="pagi-cta-section-description">
          Descubre una forma más simple de organizar tus pagos del día a día.
        </p>
        <a href="#inicio" className="pagi-cta-section-button">
          Volver al inicio
        </a>
      </div>
    </section>
  );
}
