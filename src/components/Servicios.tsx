import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const services = [
  {
    title: "Marca Empleadora",
    description:
      "Ayudamos a potenciar tu empresa como marca empleadora, mejorando la retención y atracción de talento.",
    details:
      "A través de estrategias personalizadas, analizamos la cultura organizacional, implementamos planes de fidelización y creamos procesos que enamoren a tus colaboradores.",
  },
  {
    title: "Análisis y Diagnóstico",
    description:
      "Evaluamos el estado actual de tu empresa en términos de cultura, reputación y talento humano.",
    details:
      "Aplicamos metodologías de evaluación para detectar oportunidades de mejora y definir el punto de partida para fortalecer la marca empleadora.",
  },
  {
    title: "Diseño de KPIs",
    description:
      "Definimos métricas clave que te permitirán tomar decisiones estratégicas en la gestión del talento.",
    details:
      "Establecemos indicadores de éxito alineados a los objetivos del negocio para medir el impacto de las estrategias implementadas.",
  },
  {
    title: "Implementación de Marca Empleadora",
    description:
      "Desarrollamos y ejecutamos planes concretos para posicionarte como mejor empleador.",
    details:
      "Desde campañas de comunicación interna hasta programas de fidelización, nos encargamos de que tu empresa sea un lugar donde los empleados quieran quedarse.",
  },
];

export default function Services() {
  return (
    <div>
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-center mb-10">
          Nuestros Servicios
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition"
            >
              <h2 className="text-2xl font-semibold">{service.title}</h2>
              <p className="text-gray-700 mt-2">{service.description}</p>
              <p className="text-gray-500 mt-4">{service.details}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
