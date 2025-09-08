const uspList = [
  {
    img: "https://media.istockphoto.com/id/1317713882/photo/eco-energy-concept.jpg?s=612x612&w=0&k=20&c=MHOg3DrinUpLPnY4mKSz8uivn4nosc_9WAUhyLAHbUM=",
    title: "Energy Efficiency",
  },
  {
    img: "https://media.istockphoto.com/id/681605364/photo/tiger-resting-on-grass.jpg?s=1024x1024&w=is&k=20&c=g0llRyz3M0_M9vYK_AgDcFhcPrNUqa_rRS7k9ZFg0Cw=",
    title: "Precision Monitoring",
  },
  {
    img: "https://media.istockphoto.com/id/2187887434/photo/businessman-analyzes-data-strategy-with-graph-on-digital-screen-financial-analytics-digital.jpg?s=612x612&w=0&k=20&c=761MxbHYc2p78PB0kyH1Zzg2gqFP97hOiQPD3rDdBfc=",
    title: "Automated Systems",
  },
  {
    img: "https://media.istockphoto.com/id/2156653048/video/filing-documents-artificial-intelligence-digitization-file-folder-document-data-technology.jpg?s=640x640&k=20&c=e4cA7w1MWWSQpi-SwyKFDrhwMhxwH27-7brzdKA5KtA=",
    title: "AI-Driven Insights",
  },
  {
    img: "https://media.istockphoto.com/id/1413763039/photo/customer-service-woman-working-on-a-phone-call.jpg?s=612x612&w=0&k=20&c=sZ1Xk4XPbFC06zx4734mtnEUska7_2EyfelwQPhG8SY=",
    title: "Remote Support",
  },
];

export default function UspSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-800">
          Custom IoT Solutions for Your Business
        </h2>
        <img
          className="flex items-center justify-between"
          src="https://res.cloudinary.com/dt8emxboh/image/upload/v1745481390/d3kqsex1ajnbsp5km0w3.png"
          alt=""
        />
        <p className="mt-2 text-xl font-semibold text-gray-700">
          Unique Selling Points (USP)
        </p>

        {/* Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {uspList.map((item, index) => (
            <div
              key={index}
              className="relative group rounded-lg overflow-hidden shadow-md hover:shadow-xl transition"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-40 object-cover group-hover:scale-105 transition"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <p className="text-white font-semibold text-lg">{item.title}</p>
              </div>
              {/* Always visible text at bottom */}
              <div className="absolute bottom-2 left-2 text-white text-sm font-semibold">
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
