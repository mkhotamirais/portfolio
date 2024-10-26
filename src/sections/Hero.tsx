import HeroLeft from "@/components/HeroLeft";
import HeroRight from "@/components/HeroRight";

export default function Hero() {
  return (
    <section className="min-h-[75vh] mt-12 py-16">
      <div className="container">
        <div className="h-auto lg:h-[24rem] grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-8">
          <HeroLeft />
          <HeroRight />
        </div>
      </div>
    </section>
  );
}
