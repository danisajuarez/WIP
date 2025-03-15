export default function Testimonials() {
  const testimonials = [
    {
      name: "María López",
      role: "Gerente de RRHH en TalentCorp",
      feedback:
        "Gracias a Consultora WIP, logramos reducir la rotación de empleados y mejorar la satisfacción del equipo. ¡Altamente recomendados!",
      image: "/client.webp", // ⚡ Reemplaza con imagen real
    },
    {
      name: "Carlos Méndez",
      role: "CEO en Innovatech",
      feedback:
        "El enfoque en Marca Empleadora realmente nos ayudó a posicionarnos como un gran lugar para trabajar. Los resultados fueron increíbles.",
      image: "/client.webp",
    },
    {
      name: "Ana Beltrán",
      role: "Líder de Talento en CreceMás",
      feedback:
        "La estrategia de Consultora WIP nos permitió atraer talento de alto nivel y mejorar nuestro clima organizacional.",
      image: "/client.webp",
    },
  ];

  return (
    <section className="w-full bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-10">
          Lo que dicen nuestros clientes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-24 h-24 rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-semibold">{testimonial.name}</h3>
              <p className="text-gray-500 text-sm">{testimonial.role}</p>
              <p className="text-gray-700 mt-4">{testimonial.feedback}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
