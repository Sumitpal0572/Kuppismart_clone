export default function ImpactSection() {
  const stats = [
    {
      icon: "🌍",
      text: "100+ clients using smart IoT solutions",
    },
    {
      icon: "📈",
      text: "25% increase in productivity",
    },
    {
      icon: "💧",
      text: "Natural resource and water waste slashed by 40%",
    },
  ];

  return (
    <section className="bg-green-700 text-white py-12 ">
      <h2 className="text-center text-3xl font-bold mb-8">Our Impact</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {stats.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center space-y-3"
          >
            <div className="text-4xl">{item.icon}</div>
            <p className="text-lg">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
