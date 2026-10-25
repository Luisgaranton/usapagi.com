import "./how-it-works.css";

const steps = [
  {
    number: "01",
    title: "Crea tu perfil",
    description: "Regístrate y verifica tu identidad y tu número de teléfono.",
  },
  {
    number: "02",
    title: "Elige tus bancos",
    description:
      "Conecta los bancos que usas para enviar instrucciones por SMS.",
  },
  {
    number: "03",
    title: "Conecta con tu gente",
    description:
      "Selecciona tu contacto y revisa los datos antes de confirmar el pago.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="pagi-how-it-works"
      aria-labelledby="pagi-how-it-works-title"
    >
      <div className="pagi-how-it-works-content">
        <h2 id="pagi-how-it-works-title" className="pagi-how-it-works-title">
          <span>Empieza con lo que</span>{" "}
          <span>ya tienes.</span>
        </h2>
        <ol className="pagi-how-it-works-steps" role="list">
          {steps.map(({ number, title, description }) => (
            <li key={number} className="pagi-how-it-works-step">
              <p className="pagi-how-it-works-number" aria-hidden="true">
                {number}
              </p>
              <h3 className="pagi-how-it-works-step-title">{title}</h3>
              <p className="pagi-how-it-works-description">{description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
