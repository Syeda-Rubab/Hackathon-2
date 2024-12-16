import Image from "next/image";
import React from "react";

function BrowseTheRangeSection() {
  const data = [
    {
      imageUrl: "/Dinning.png",
      title: "Dining",
    },
    {
      imageUrl: "/Living.png",
      title: "Living",
    },
    {
      imageUrl: "/Bedroom.png",
      title: "Bedroom",
    },
  ];

  return (
    <section>
      <div>
        <p className="text-[32px] font-bold text-center text-gray-800 mt-4">Browse The Range</p>
        <p className="text-[20px] text-gray-500 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 mt-8 md:mt-16 justify-center">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <Image
              src={item.imageUrl}
              alt={`${item.title} image`}
              width={300}
              height={480}
              className="h-[480px] w-[300px] rounded-[10px] object-cover"
            />
            <p className="text-[19px] text-gray-800 font-semibold mt-2 text-center">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BrowseTheRangeSection;
