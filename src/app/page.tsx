import HeroSection from "./components/herosection";
import ProductSection from "./components/productsection";
import CarouselSection from "./components/RoomSection";
import GellarySection from "./components/gellarysection";
import BrowseTheRangeSection from "./components/BrowsTheRangeSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <BrowseTheRangeSection/>
      <h2 className="text-[32px] text-center mt-8 font-bold">Our Products</h2>
      <ProductSection />
      <CarouselSection />
      <GellarySection />
    </main>
  );
}
