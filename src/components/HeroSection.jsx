// import heroDevices from "../assets/hero-devices.png";

export default function HeroSection() {
  return (
    <section className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Text */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-snug">
            Smart IoT Solutions <br />
            for a <span className="text-green-700">Sustainable Future</span>
          </h1>

          <p className="mt-6 text-gray-600 text-lg">
            Harness the power of IoT to optimize productivity, enhance
            efficiency, and build a greener tomorrow.
          </p>

          <button className="mt-6 px-6 py-3 bg-green-600 text-white rounded-md shadow hover:bg-green-400 transition">
            📞 Contact Us
          </button>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src="https://res.cloudinary.com/dt8emxboh/image/upload/v1745821669/bedikrcsckzppju5rfxz.png"
            alt="IoT Devices"
            className="max-h-[350px] object-contain"
          />
        </div>
      </div>
    </section>
  );
}
