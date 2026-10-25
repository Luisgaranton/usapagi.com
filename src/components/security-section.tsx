import "./security-section.css";

const securityDetails = [
  {
    title: "Tú confirmas",
    description: "Revisa el destinatario y el monto antes de enviar.",
  },
  {
    title: "Acceso biométrico",
    description: "Configura la biometría para acceder a tu cuenta.",
  },
];

export default function SecuritySection() {
  return (
    <section
      id="tu-seguridad"
      className="pagi-security"
      aria-labelledby="pagi-security-title"
    >
      <div className="pagi-security-content">
        <h2 id="pagi-security-title" className="pagi-security-title">
          <span>Tus bancos siguen</span>{" "}
          <span>siendo tus bancos.</span>
        </h2>
        <p className="pagi-security-description">
          PAGI prepara instrucciones de pago por SMS. No guarda tu dinero ni
          necesita las claves de tus cuentas bancarias.
        </p>
        <div className="pagi-security-details">
          {securityDetails.map(({ title, description }) => (
            <div key={title} className="pagi-security-detail">
              <h3 className="pagi-security-detail-title">{title}</h3>
              <p className="pagi-security-detail-description">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
