import React from "react";

const goals = [
  {
    id: 2,
    img: "https://res.cloudinary.com/dt8emxboh/image/upload/v1745492394/jst4a1lycakogyfnkh8x.png",
  },
  {
    id: 3,
    img: "https://res.cloudinary.com/dt8emxboh/image/upload/v1745492424/ba6zh1getssk2ciwwbuw.png",
  },
  {
    id: 6,
    img: "https://res.cloudinary.com/dt8emxboh/image/upload/v1745492439/wihy7qvtjsakob6zcak4.png",
  },
  {
    id: 7,
    img: "https://res.cloudinary.com/dt8emxboh/image/upload/v1745492457/pwkff5tet5sjphxqekal.png",
  },
  {
    id: 8,
    img: "https://res.cloudinary.com/dt8emxboh/image/upload/v1745492493/jwxkrvmbeociblwqok9p.png",
  },
  {
    id: 9,
    img: "https://res.cloudinary.com/dt8emxboh/image/upload/v1745492509/hp3ndaixhmhvifhnqu7f.png",
  },
  {
    id: 12,
    img: "https://res.cloudinary.com/dt8emxboh/image/upload/v1745492527/uwnnrxi2ufrvbjqsgkle.png",
  },
  {
    id: 13,
    img: "https://res.cloudinary.com/dt8emxboh/image/upload/v1745492547/uxrvsmazqhwtm2uhqupb.png",
  },
  {
    id: 14,
    img: "https://res.cloudinary.com/dt8emxboh/image/upload/v1745492563/umgvagufbqzs907lpsvw.png",
  },
  {
    id: 15,
    img: "https://res.cloudinary.com/dt8emxboh/image/upload/v1745492578/hmwcdqljgsqx678pahcy.png",
  },
];

const GoalsGrid = () => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Top 8 Cards (4x2 grid) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {goals.slice(0, 8).map((goal) => (
            <div
              key={goal.id}
              className="shadow-lg rounded-lg overflow-hidden flex justify-center items-center bg-white"
            >
              <img
                src={goal.img}
                alt={`Goal ${goal.id}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Bottom Row (centered 2 cards) */}
        <div className="mt-8 flex justify-center gap-6">
          {goals.slice(8).map((goal) => (
            <div
              key={goal.id}
              className="shadow-lg rounded-lg overflow-hidden w-36 md:w-44 flex justify-center items-center bg-white"
            >
              <img
                src={goal.img}
                alt={`Goal ${goal.id}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GoalsGrid;
