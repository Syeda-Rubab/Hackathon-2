import React from "react";
import Image from "next/image";

function RoomSection() {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 bg-[#FCF8F3] mt-10">
        {/* Text Section */}
        <div className="flex flex-col justify-center ml-20 items-center md:items-start px-4 md:px-6 my-10 md:my-20">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#323131] text-center md:text-left">
            50+ Beautiful rooms inspiration
          </h3>
          <p className="mt-4 text-gray-600 text-center md:text-left">
            Our designer already made a lot of beautiful<br /> prototypes of rooms
            that inspire you.
          </p>
          <button className="mt-6 bg-[#B88E2F] text-sm font-bold py-3 px-4 md:px-12 lg:px-12 duration-300 border border-[#B88E2F] text-white hover:text-[#B88E2F]">
            EXPLORE MORE
          </button>
        </div>

        {/* Image Section */}
        <div className="flex items-center justify-center space-x-4">
          <Image
            src="/pic.png"
            alt="Beautiful Room Inspiration"
            width={250}
            height={250}
            className="shadow-lg object-cover"
          />
          <div className="flex flex-col items-center">
            {/* pic2 and Indicator stacked vertically */}
            <Image
              src="/pic2.png"
              alt="Additional Inspiration"
              width={220}
              height={220}
              className="shadow-lg object-cover"
            />
            <Image
              src="/Indicator.png"
              alt="Indicator"
              width={80}
              height={80}
              className="-ml-32 mt-4"
            />
          </div>
          {/* Group 13 placed to the right of pic2 */}
          <Image
            src="/Group 13.png"
            alt="Group 13"
            width={80}
            height={80}
            className=""
          />
        </div>
      </div>
    </section>
  );
}

export default RoomSection;






