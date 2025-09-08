import React from "react";

const Sustainability = () => {
  return (
    <section className="w-full bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* Left Side Text */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Our Commitment to{" "}
            <span className="text-green-600">Sustainability</span>
          </h2>
          <div className="mt-6 w-48 h-2 bg-green-200 relative">
            <span className="absolute top-0 left-0 h-2 w-10 bg-green-600 rounded-full"></span>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="flex justify-center ">
          <img
            src="https://res.cloudinary.com/dt8emxboh/image/upload/v1745482635/ysp2ydxjhmyxbgfg0uzu.png"
            alt="Hands together for sustainability"
            className=" shadow-lg max-h-[400px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Sustainability;
