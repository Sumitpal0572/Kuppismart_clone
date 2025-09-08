import Info from "../components/Info";
import FAQ from "../components/Faq";
import GoalsGrid from "../components/GoalsGrid";
import HeroSection from "../components/HeroSection";
import ImpactSection from "../components/ImpactSection";
import SolutionsSection from "../components/SolutionsSection";
import Sustainability from "../components/Sustanlibility";
import Testimonials from "../components/Testamonial";
import UspSection from "../components/UpSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ImpactSection />
      <SolutionsSection />
      <UspSection />
      <Sustainability />
      <GoalsGrid />
      <Testimonials />
      <FAQ />
      <Info />
    </>
  );
}
