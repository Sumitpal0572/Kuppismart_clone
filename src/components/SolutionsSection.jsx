// import sewageImg from "../assets/sewage.jpg";
// import shrimpImg from "../assets/shrimp.jpg";
// import poultryImg from "../assets/poultry.jpg";
// import hydroponicImg from "../assets/hydroponic.jpg";
// import industrialImg from "../assets/industrial.jpg";

const solutions = [
  {
    img: "https://media.istockphoto.com/id/1472824092/photo/aerial-view-of-modern-water-cleaning-facility-at-urban-wastewater-treatment-plant.jpg?s=612x612&w=0&k=20&c=o0yNiP_focHD67bBP2oeDQR3IPgYoeDqwCUUnshyBzE=",
    title: "Smart IoT Solutions for Efficient Sewage Water Treatment",
  },
  {
    img: "https://media.istockphoto.com/id/2226253271/video/fishing-trawler-navigates-gold-coast-waters.jpg?s=640x640&k=20&c=EZcnTWamWQvGPUotU0AH-rpHFbdwiWkbTyhY81_UoVU=",
    title: "IoT Smart Solutions for Shrimp & Aqua Farming",
  },
  {
    img: "https://media.istockphoto.com/id/2074430406/photo/poultry-farm.jpg?s=612x612&w=0&k=20&c=nhmYWN8lV4ZFs0bQwbYAUDVTcvvdcKbv5STu3XTJfmc=",
    title: "IoT-Powered Smart Solutions for Efficient Poultry Farming",
  },
  {
    img: "https://media.istockphoto.com/id/615420436/photo/food-production-in-hydroponic-plant-lettuce.jpg?s=1024x1024&w=is&k=20&c=7aeaP7bb5wjOEIreUrwEcqrTebDtT34iAbAk0GkFSyc=",
    title: "IoT Smart Solutions for Hydroponic & Controlled Farming",
  },
  {
    img: "https://media.istockphoto.com/id/1360028080/video/self-driving-autonomous-electric-cars-on-city-street.jpg?s=640x640&k=20&c=FvNXyqwZ_fyisuMZvWFVZRy5BlgT5Wp55PdZxPCxe8s=",
    title: "IoT-Driven Smart Automation for Industrial Efficiency",
  },
];

export default function SolutionsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <h2 className="text-center text-2xl font-bold text-gray-800 mb-10">
        Innovative Solutions We Offer
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6">
        {solutions.map((item, index) => (
          <div
            key={index}
            className="relative group rounded-lg overflow-hidden shadow-md hover:shadow-xl transition"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-48 object-cover group-hover:scale-105 transition"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
              <p className="text-white text-center font-semibold px-4">
                {item.title}
              </p>
            </div>
            {/* visible caption always */}
            <div className="absolute bottom-2 left-2 right-2 text-white text-sm font-medium">
              {item.title}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
