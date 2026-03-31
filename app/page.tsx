import { UrgencyBar } from "@/components/urgency-bar";
import { SocialProofRow } from "@/components/social-proof-row";
import { HeroHeadline } from "@/components/hero-headline";
import { BeforeAfter } from "@/components/before-after";
import { ProductSlider } from "@/components/product-slider";
import { CTAButton } from "@/components/cta-button";
import { EmotionalCopy } from "@/components/emotional-copy";
import { WhatYouReceive } from "@/components/what-you-receive";
import { ObjectionCards } from "@/components/objection-cards";
import { WhatsAppProof } from "@/components/whatsapp-proof";
import { PricingSection } from "@/components/pricing-section";
import { GuaranteeSection } from "@/components/guarantee-section";
import { SocialProofNumber } from "@/components/social-proof-number";
import { FAQSection } from "@/components/faq-section";
import { UrgencyReminder } from "@/components/urgency-reminder";
import { FinalCTA } from "@/components/final-cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAF8F4]">
      {/* Wrapper for mobile-first centered layout */}
      <div className="max-w-[430px] mx-auto bg-[#FAF8F4]">
        {/* 1. Urgency Bar */}
        <UrgencyBar />

        {/* 2. Social Proof Row */}
        <SocialProofRow />

        {/* 3. Hero Headline */}
        <HeroHeadline />

        {/* 4. Before/After Comparison */}
        <BeforeAfter />

        {/* 5. Product Slider */}
        <ProductSlider />

        {/* 6. Primary CTA */}
        <CTAButton
          text="QUERO TRANSFORMAR MEU PRESENTE AGORA"
          variant="green"
          className="py-4"
        />

        {/* 7. Emotional Copy */}
        <EmotionalCopy />

        {/* 8. What You Receive */}
        <WhatYouReceive />

        {/* 9. Objection Cards */}
        <ObjectionCards />

        {/* 10. WhatsApp Proof */}
        <WhatsAppProof />

        {/* 11. Pricing Section */}
        <PricingSection />

        {/* 12. Guarantee Section */}
        <GuaranteeSection />

        {/* 13. Social Proof Numbers */}
        <SocialProofNumber />

        {/* 14. FAQ Section */}
        <FAQSection />

        {/* 15. Urgency Reminder */}
        <UrgencyReminder />

        {/* 16. Final CTA */}
        <FinalCTA />

        {/* 17. Footer */}
        <Footer />
      </div>
    </main>
  );
}
