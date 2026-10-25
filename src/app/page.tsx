import MainSection from "@/components/main-section";
import BrandBrochure from "@/components/brand-brochure";
import HowItWorks from "@/components/how-it-works";
import SecuritySection from "@/components/security-section";
import FAQSection from "@/components/faq-section";
import CTASection from "@/components/cta-section";
import Topbar from "@/components/topbar";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Topbar />
      <main>
        <MainSection />
        <BrandBrochure />
        <HowItWorks />
        <SecuritySection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
