import { Divider } from "antd"
import FeaturesSection from "./FeaturesSection"
import HeroSection from "./HeroSection"
import PricingPlansSection from "./PricingPlansSection"
import TestimonialsSection from "./TestimonialsSection"
import FAQSection from "./FAQSection"

export default function LandingPage() {
  return (
    <>
      <HeroSection />
      <Divider />
      <FeaturesSection />
      <Divider />
      <PricingPlansSection />
      <Divider />
      <TestimonialsSection
        testimonials={[
          { text: "Bidalyze has transformed our sales strategy.", name: "John Doe", rating: 5 },
          { text: "Incredible insights! We can predict customer needs easily.", name: "Sarah Lee", rating: 5 },
          { text: "A must-have tool for any sales team.", name: "Mike Johnson", rating: 4 },
        ]}
      />
      <Divider />
      <FAQSection />
    </>
  )
}
