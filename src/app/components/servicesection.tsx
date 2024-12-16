import React from "react";
import Image from "next/image";

function Servicesection() {
  const data = [
    {
      iconUrl: "/banner_icon_1.png",
      title: "High Quality",
      description: "crafted from top materials",
    },
    {
      iconUrl: "/banner_icon_2.png",
      title: "Warranty Protection",
      description: "Over 2 years",
    },
    {
      iconUrl: "/banner_icon_3.png",
      title: "Free Shipping",
      description: "Order over 150 $",
    },
    {
      iconUrl: "/banner_icon_4.png",
      title: "24 / 7 Support",
      description: "Dedicated support",
    },
  ];
  return (
    <section className="bg-[#FAF3EA] md:h-[270px] py-16 md:py-0 flex px-4 md:px-[53px]">
      <div className="flex flex-col gap-8 md:flex-row justify-between w-full">
        {data.map((item, index) => (
          <div key={index} className="flex gap-4 items-center">
            <div className="w-12 h-12 relative">
              <Image
                src={item.iconUrl}
                alt={`${item.title} icon`}
                width={48} // Adjust based on your icon size
                height={48} // Adjust based on your icon size
                className="object-contain"
              />
            </div>
            <div>
              <p className="text-customBlack font-semibold text-normal xl:text-[25px]">
                {item.title}
              </p>
              <p className="text-customGray">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Servicesection;

