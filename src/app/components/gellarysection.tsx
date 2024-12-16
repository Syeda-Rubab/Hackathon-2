import * as React from "react";
import Image from "next/image";

const GellarySection = () => {
  return (
    <section className="max-w-[1440px] mx-auto p-8 hidden md:hidden lg:block xl:block">
      <p className="text-[18px] text-center mt-4 text-gray-500">
        Share your setup with
      </p>
      <h2 className="text-[36px] text-center font-bold mb-8">
        #FuniroFurniture
      </h2>
      <div className="w-full flex gap-6 justify-center items-center" >
        <Image src="/share_your_setup.png" alt="Image" width={1600} height={1600} className=" cursor-pointer"/>
        
     </div>
      
    </section>
  );
};

export default GellarySection;
