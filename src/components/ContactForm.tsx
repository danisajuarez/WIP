import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí podrías integrar con Formspree o una API
    console.log("Mensaje enviado:", formData);
    setSuccessMessage("¡Mensaje enviado con éxito!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="w-full bg-gray-100 py-16">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10">Contáctanos</h2>
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-lg p-6 space-y-6"
        >
          <div>
            <label className="block text-gray-700 font-semibold">Nombre</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg mt-1"
              placeholder="Tu nombre"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold">
              Correo Electrónico
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg mt-1"
              placeholder="tuemail@ejemplo.com"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold">Mensaje</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg mt-1"
              rows={4}
              placeholder="Escribe tu mensaje aquí..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-700 text-white font-bold py-3 rounded-lg hover:bg-blue-800 transition"
          >
            Enviar Mensaje
          </button>
        </form>
        {successMessage && (
          <p className="text-green-600 text-center mt-4">{successMessage}</p>
        )}
      </div>
    </section>
  );
}
