import Navbar from "../../components/navbar/Navbar";
import Hero from "../../components/hero/Hero";
import AboutSection from "../../components/about/AboutSection";
import WhyChooseUs from "../../components/whyChooseUs/WhyChooseUs";
import ServicesSection from "../../components/services/ServicesSection";
import ProductShowcase from "../../components/products/ProductShowcase";
import TestimonialsSection from "../../components/testimonials/TestimonialsSection";
import StatsCTASection from "../../components/stats/StatsCTASection";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <div>

      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <Hero />

      {/* About */}
      <AboutSection />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Services */}
      <ServicesSection />

      {/* Products */}
      <ProductShowcase />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Stats + CTA */}
      <StatsCTASection />

    </div>
  );
};

export default Home;

