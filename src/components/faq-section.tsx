import "./faq-section.css";

const questions = [
  {
    question: "¿PAGI es un banco?",
    answer:
      "No. PAGI es una herramienta que prepara y envía instrucciones de pago por SMS a tus bancos. No guarda fondos.",
  },
  {
    question: "¿Necesito compartir mis claves bancarias?",
    answer: "No. PAGI no solicita las contraseñas de tus cuentas bancarias.",
  },
  {
    question: "¿Qué necesito para empezar?",
    answer:
      "Tu número de teléfono, tu cédula y seleccionar los bancos que usas durante el registro.",
  },
];

export default function FAQSection() {
  return (
    <section
      id="preguntas-frecuentes"
      className="pagi-faq"
      aria-labelledby="pagi-faq-title"
    >
      <div className="pagi-faq-content">
        <h2 id="pagi-faq-title" className="pagi-faq-title">Hablemos claro.</h2>
        {questions.map(({ question, answer }) => (
          <article key={question} className="pagi-faq-item">
            <h3 className="pagi-faq-question">{question}</h3>
            <p className="pagi-faq-answer">{answer}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
