export default function PurposeSection() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center">
        {/* Imagen */}
        <div className="w-full md:w-1/2">
          <img
            src="https://via.placeholder.com/600x400" // ⚡ Aquí reemplaza con una imagen real
            alt="Nuestro Propósito"
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        {/* Texto - Visión y Misión */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-10 text-center md:text-left">
          <h2 className="text-4xl font-bold text-blue-700">
            Nuestro Propósito
          </h2>
          <p className="text-gray-700 mt-4">
            En <strong>Consultora WIP</strong>, ayudamos a las empresas a
            enamorar a sus talentos y fortalecer su identidad como empleadores.
          </p>

          <div className="mt-6">
            <h3 className="text-2xl font-semibold text-gray-800">🌍 Visión</h3>
            <p className="text-gray-600 mt-2">
              Ser referentes en estrategias de marca empleadora, transformando
              el mundo laboral con innovación y compromiso.
            </p>
          </div>

          <div className="mt-6">
            <h3 className="text-2xl font-semibold text-gray-800">🎯 Misión</h3>
            <p className="text-gray-600 mt-2">
              Impulsar el crecimiento de las empresas mediante estrategias que
              prioricen el talento humano y la cultura organizacional.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
