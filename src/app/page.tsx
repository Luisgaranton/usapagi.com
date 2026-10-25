import MainSection from "@/components/main-section";
import BrandBrochure from "@/components/brand-brochure";
import Topbar from "@/components/topbar";

export default function Home() {
  return (
    <>
      <Topbar />
      <main>
        <MainSection />
        <BrandBrochure />
      </main>
    </>
  );
}
