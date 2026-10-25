import Image from "next/image";
import "./brand-brochure.css";

const benefits = [
  {
    title: "Un teléfono es suficiente",
    description: "Envía o solicita pagos usando el número de tu contacto.",
    icon: "/icons/plain-line-duotone.svg",
  },
  {
    title: "También con QR",
    description: "Usa los códigos QR como otra forma de conectar tus pagos.",
    icon: "/icons/qr-code-line-duotone.svg",
  },
  {
    title: "Todo a la vista",
    description:
      "Consulta tu actividad y encuentra tus movimientos en un solo lugar.",
    icon: "/icons/history-line-duotone.svg",
  },
];

export default function BrandBrochure() {
  return (
    <section className="pagi-benefits" aria-labelledby="pagi-benefits-title">
      <div className="pagi-benefits-content">
        <h2 id="pagi-benefits-title" className="pagi-benefits-title">
          <span>Lo cotidiano,</span>
          <span>sin complicaciones.</span>
        </h2>
        <p className="pagi-benefits-description">
          Todo lo esencial para moverte con confianza.
        </p>
        <ul className="pagi-benefits-cards">
          {benefits.map(({ title, description, icon }) => (
            <li key={title} className="pagi-benefits-card">
              <Image src={icon} alt="" width={24} height={24} />
              <h3 className="pagi-benefits-card-title">{title}</h3>
              <p className="pagi-benefits-card-description">{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
