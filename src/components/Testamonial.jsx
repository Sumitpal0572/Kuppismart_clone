import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    name: "Ramulu",
    role: "Layer Poultry Farm, Telangana",
    text: "Kuppismart has been a game-changer for my poultry farm. Not only did it help me save on feed costs and reduce mortality, but it also gave me peace of mind knowing that my birds are in safe hands.",
    img: "https://res.cloudinary.com/dt8emxboh/image/upload/v1728537118/hx43ypgfcns3emo2t61h.jpg",
  },
  {
    id: 2,
    name: "Murugan",
    role: "EC Poultry Farm, Tamil Nadu",
    text: "Kuppismart has been a valuable asset in maintaining optimal environmental conditions for my poultry farm. It has helped me reduce utility costs, improve bird health, and increase overall farm efficiency.",
    img: "https://res.cloudinary.com/dt8emxboh/image/upload/v1728537140/jduyrootosfzxs1zit2y.jpg",
  },
  {
    id: 3,
    name: "Senthilvel",
    role: "Broiler Poultry Farm, Tamil Nadu",
    text: "I'm amazed at how Kuppismart has improved the efficiency of my broiler farms. The automation features have saved me time and money, while the data insights have helped me optimize feed management and reduce waste.",
    img: "https://res.cloudinary.com/dt8emxboh/image/upload/v1728537093/rnaslfy9dca1avasblfq.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          We let our <span className="text-green-600">clients</span> be our
          speaker
        </h2>
        <p className="text-gray-600 mt-4">
          See how KuppiSmart is transforming farms with smart IoT solutions
        </p>

        {/* Button */}
        <div className="mt-6">
          <button className="bg-green-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-green-700 transition">
            Contact Us
          </button>
        </div>

        {/* Swiper Carousel */}
        <div className="mt-12">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {testimonials.map((t) => (
              <SwiperSlide key={t.id}>
                <div className="bg-white shadow-lg rounded-lg p-6 h-full flex flex-col">
                  <div className="flex items-center mb-4">
                    <img
                      src={t.img}
                      alt={t.name}
                      className="w-12 h-12 rounded-full mr-4 object-cover"
                    />
                    <div>
                      <h4 className="font-bold text-gray-800">{t.name}</h4>
                      <p className="text-sm text-gray-500">{t.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {t.text}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
