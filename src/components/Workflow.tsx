export default function Workflow() {
  const steps = [
    {
      title: "Consulta Inicial",
      description: "Evaluamos tus necesidades.",
      icon: "📌",
    },
    {
      title: "Estrategia Personalizada",
      description: "Diseñamos una solución a medida.",
      icon: "🎯",
    },
    {
      title: "Implementación",
      description: "Ponemos en marcha la estrategia.",
      icon: "🚀",
    },
    {
      title: "Resultados y Optimización",
      description: "Medimos y ajustamos.",
      icon: "📊",
    },
  ];

  return (
    <section className="w-full bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10">
          Nuestro Proceso de Trabajo
        </h2>

        {/* Contenedor RESPONSIVE */}
        <div className="flex flex-col md:flex-row items-center md:justify-between space-y-8 md:space-y-0 md:space-x-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center w-full md:w-1/4"
            >
              {/* Ícono con tamaño dinámico */}
              <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-blue-600 text-white text-3xl">
                {step.icon}
              </div>
              {/* Título */}
              <h3 className="mt-4 text-lg md:text-xl font-semibold">
                {step.title}
              </h3>
              {/* Descripción */}
              <p className="text-gray-600 mt-2 text-sm md:text-base">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
