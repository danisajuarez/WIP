import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";

const slides = [
  {
    image: "https://via.placeholder.com/1600x600/4F46E5/FFFFFF?text=Slide+1",
    title: "Impulsa tu empresa hoy",
    text: "Soluciones personalizadas para maximizar tu rentabilidad.",
  },
  {
    image: "https://via.placeholder.com/1600x600/059669/FFFFFF?text=Slide+2",
    title: "Expertos en Marca Empleadora",
    text: "Te ayudamos a construir una identidad fuerte en el mercado.",
  },
  {
    image: "https://via.placeholder.com/1600x600/1E40AF/FFFFFF?text=Slide+3",
    title: "Tu sitio web a medida",
    text: "Desarrollamos tu presencia digital con tecnología de punta.",
  },
];

export default function Slider() {
  return (
    <div className="w-full h-[80vh] mt-0">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative w-full h-full">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center p-4">
              <h2 className="text-4xl font-bold">{slide.title}</h2>
              <p className="text-lg mt-2">{slide.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
