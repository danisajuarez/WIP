import { Link } from "react-router-dom";

const services = [
  {
    title: "Marca Empleadora",
    description:
      "Diseñamos estrategias para enamorar a tus talentos y retenerlos.",
    link: "/services",
  },
  {
    title: "Análisis y Diagnóstico",
    description:
      "Evaluamos la situación actual de tu empresa para detectar oportunidades.",
    link: "/services",
  },
  {
    title: "Diseño de KPIs",
    description:
      "Creamos indicadores clave para medir el éxito de la gestión del talento.",
    link: "/services",
  },
  {
    title: "Implementación de Marca Empleadora",
    description:
      "Aplicamos estrategias innovadoras para posicionarte como mejor empleador.",
    link: "/services",
  },
];

export default function ServicesSection() {
  return (
    <section className="w-full bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-10">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="text-gray-600 mt-2">{service.description}</p>
              <Link
                to={service.link}
                className="text-blue-700 font-bold mt-4 inline-block hover:underline"
              >
                Ver más →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
