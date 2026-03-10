"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from "@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen";
import HeroSplitDoubleCarousel from "@/components/sections/hero/HeroSplitDoubleCarousel";
import MediaAbout from "@/components/sections/about/MediaAbout";
import FeatureCardSix from "@/components/sections/feature/FeatureCardSix";
import ProductCardTwo from "@/components/sections/product/ProductCardTwo";
import TestimonialCardTen from "@/components/sections/testimonial/TestimonialCardTen";
import MetricCardFourteen from "@/components/sections/metrics/MetricCardFourteen";
import ContactCenter from "@/components/sections/contact/ContactCenter";
import FooterBaseCard from "@/components/sections/footer/FooterBaseCard";
import { Sparkles, CheckCircle, Zap, Award, Star, Rocket } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
      contentWidth="smallMedium"
      sizing="largeSmallSizeMediumTitles"
      background="floatingGradient"
      cardStyle="gradient-bordered"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="layered"
      headingFontWeight="medium"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleFullscreen
          brandName="Jo"
          navItems={[
            { name: "Home", id: "home" },
            { name: "About", id: "about" },
            { name: "Services", id: "services" },
            { name: "Portfolio", id: "portfolio" },
            { name: "Contact", id: "contact" },
          ]}
          bottomLeftText="Web Design Specialist"
          bottomRightText="302-729-2269"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplitDoubleCarousel
          title="Craft Organized, Attractive, Modern Websites"
          description="Jo specializes in creating professional websites that drive business growth. Launched nationwide in 2024, delivering clean, modern designs that convert visitors into clients."
          tag="Web Design Specialist"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          background={{ variant: "glowing-orb" }}
          leftCarouselItems={[
            {
              imageSrc: "http://img.b2bpic.net/free-psd/fashion-sale-landing-page-template_23-2149528740.jpg?_wi=1",              imageAlt: "Professional website design portfolio piece"},
            {
              imageSrc: "http://img.b2bpic.net/free-vector/home-furnitures-landing-page-tempalte_23-2148402689.jpg",              imageAlt: "Modern responsive website layout"},
            {
              imageSrc: "http://img.b2bpic.net/free-vector/webtemplate-landing-page-styles_52683-30917.jpg",              imageAlt: "Contemporary web design example"},
            {
              imageSrc: "http://img.b2bpic.net/free-vector/blogger-email-template_23-2148754589.jpg",              imageAlt: "Creative website design showcase"},
          ]}
          rightCarouselItems={[
            {
              imageSrc: "http://img.b2bpic.net/free-psd/coffee-shop-website-page-template_197582-337.jpg?_wi=1",              imageAlt: "Business website template"},
            {
              imageSrc: "http://img.b2bpic.net/free-vector/winter-season-sale-horizontal-banner-template_23-2149960947.jpg?_wi=1",              imageAlt: "Ecommerce website design"},
            {
              imageSrc: "http://img.b2bpic.net/free-vector/dashboard-element-collection-template_23-2148366978.jpg?_wi=1",              imageAlt: "SaaS platform website"},
            {
              imageSrc: "http://img.b2bpic.net/free-psd/fashion-sale-landing-page-template_23-2149528740.jpg?_wi=2",              imageAlt: "Website portfolio showcase"},
          ]}
          buttons={[
            { text: "View Portfolio", href: "portfolio" },
            { text: "Get Started", href: "contact" },
          ]}
          buttonAnimation="slide-up"
          carouselPosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <MediaAbout
          title="About Jo's Web Design Services"
          description="With expertise in modern web technologies and user-centered design, Jo creates websites that are not just beautiful, but strategically designed to help your business grow. Every project combines clean aesthetics with conversion-focused functionality."
          tag="Since 2024"
          tagIcon={CheckCircle}
          imageSrc="http://img.b2bpic.net/free-photo/happy-man-office-reviewing-financial-graphs-celebrating-positive-kpis_482257-126647.jpg"
          imageAlt="Jo working on web design project"
          buttons={[{ text: "Learn More", href: "services" }]}
          useInvertedBackground={false}
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardSix
          title="The Web Design Process"
          description="A streamlined approach to deliver exceptional results"
          tag="Services"
          tagIcon={Zap}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
          features={[
            {
              id: 1,
              title: "Discovery & Planning",              description: "We understand your business goals, target audience, and competitive landscape. This foundation ensures every design decision serves your growth objectives.",              imageSrc: "http://img.b2bpic.net/free-psd/coffee-shop-website-page-template_197582-337.jpg?_wi=2",              imageAlt: "Discovery planning phase"},
            {
              id: 2,
              title: "Design & Development",              description: "Creating modern, organized interfaces using the latest web technologies. We focus on clean aesthetics, responsive design, and intuitive user experiences.",              imageSrc: "http://img.b2bpic.net/free-vector/winter-season-sale-horizontal-banner-template_23-2149960947.jpg?_wi=2",              imageAlt: "Design development process"},
            {
              id: 3,
              title: "Testing & Optimization",              description: "Rigorous testing ensures your website performs flawlessly across devices. We optimize for speed, accessibility, and conversion to maximize impact.",              imageSrc: "http://img.b2bpic.net/free-vector/dashboard-element-collection-template_23-2148366978.jpg?_wi=2",              imageAlt: "Testing optimization phase"},
            {
              id: 4,
              title: "Launch & Support",              description: "Your website goes live with confidence. Jo provides ongoing support and maintenance to keep your site performing at peak levels.",              imageSrc: "http://img.b2bpic.net/free-psd/fashion-sale-landing-page-template_23-2149528740.jpg?_wi=3",              imageAlt: "Website launch support"},
          ]}
        />
      </div>

      <div id="portfolio" data-section="portfolio">
        <ProductCardTwo
          title="Portfolio Showcase"
          description="Examples of professional websites Jo has designed and built"
          tag="Featured Work"
          tagIcon={Award}
          textboxLayout="default"
          useInvertedBackground={false}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          products={[
            {
              id: "1",              brand: "Business Services",              name: "Professional Services Website",              price: "Modern Design",              rating: 5,
              reviewCount: "Fully Responsive",              imageSrc: "http://img.b2bpic.net/free-psd/coffee-shop-website-page-template_197582-337.jpg?_wi=3",              imageAlt: "Professional services website"},
            {
              id: "2",              brand: "Ecommerce",              name: "Online Store Experience",              price: "Conversion Ready",              rating: 5,
              reviewCount: "Optimized",              imageSrc: "http://img.b2bpic.net/free-vector/winter-season-sale-horizontal-banner-template_23-2149960947.jpg?_wi=3",              imageAlt: "Ecommerce website example"},
            {
              id: "3",              brand: "Tech Startup",              name: "SaaS Platform Website",              price: "Scalable Design",              rating: 5,
              reviewCount: "Performant",              imageSrc: "http://img.b2bpic.net/free-vector/dashboard-element-collection-template_23-2148366978.jpg?_wi=3",              imageAlt: "SaaS platform website"},
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTen
          title="Client Success Stories"
          description="Hear from businesses that have grown with Jo's web design expertise"
          tag="Testimonials"
          tagIcon={Star}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
          testimonials={[
            {
              id: "1",              title: "Transformed Our Online Presence",              quote: "Jo redesigned our website and it completely changed how customers perceive our business. The increase in inquiries was immediate and impressive.",              name: "Sarah Mitchell",              role: "CEO",              imageSrc: "http://img.b2bpic.net/free-photo/young-woman-sitting-library_273609-15845.jpg",              imageAlt: "Sarah Mitchell portrait"},
            {
              id: "2",              title: "Professional From Start to Finish",              quote: "Working with Jo was seamless. She understood our brand, asked the right questions, and delivered a website that exceeded our expectations.",              name: "Michael Chen",              role: "Founder",              imageSrc: "http://img.b2bpic.net/free-photo/faces-close-up-smiling-executives_1098-1829.jpg",              imageAlt: "Michael Chen portrait"},
            {
              id: "3",              title: "Design That Drives Results",              quote: "Our new website isn't just beautiful—it converts. Jo's focus on user experience and modern design principles really shows in the results.",              name: "Emily Rodriguez",              role: "Business Owner",              imageSrc: "http://img.b2bpic.net/free-photo/smiling-confident-manager-cafeteria_1098-20954.jpg",              imageAlt: "Emily Rodriguez portrait"},
            {
              id: "4",              title: "Exceeded Our Expectations",              quote: "Jo brought our vision to life with clean, modern design and flawless execution. Couldn't be happier with the investment in our online presence.",              name: "David Kim",              role: "Marketing Director",              imageSrc: "http://img.b2bpic.net/free-photo/portrait-optimistic-businessman-formalwear_1262-3600.jpg",              imageAlt: "David Kim portrait"},
            {
              id: "5",              title: "Trusted Web Design Partner",              quote: "Over two years working with Jo, she's proven to be reliable, creative, and always focused on delivering value for our business.",              name: "Jessica Thompson",              role: "Executive Producer",              imageSrc: "http://img.b2bpic.net/free-photo/confident-businessman-smiling_107420-84736.jpg",              imageAlt: "Jessica Thompson portrait"},
            {
              id: "6",              title: "Modern Design, Amazing Support",              quote: "Jo doesn't just build websites; she provides ongoing support and guidance. That's what sets her apart in this industry.",              name: "Robert Martinez",              role: "COO",              imageSrc: "http://img.b2bpic.net/free-photo/elderly-businessman-posing_23-2148116270.jpg",              imageAlt: "Robert Martinez portrait"},
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardFourteen
          title="Proven Results for Web Design Excellence and Business Growth"
          tag="Impact"
          tagAnimation="slide-up"
          metrics={[
            {
              id: "1",              value: "50+",              description: "Professional websites designed and launched for diverse industries nationwide"},
            {
              id: "2",              value: "98%",              description: "Client satisfaction rate reflecting our commitment to excellence and growth"},
            {
              id: "3",              value: "3.2x",              description: "Average increase in client inquiries after website redesign and optimization"},
            {
              id: "4",              value: "24/7",              description: "Dedicated support and maintenance ensuring your website runs flawlessly"},
          ]}
          metricsAnimation="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Ready to Grow?"
          title="Let's Build Your Perfect Website"
          description="Jo works nationwide to create websites that help businesses succeed. Get in touch to discuss your project and see how professional web design can transform your online presence."
          tagIcon={Rocket}
          tagAnimation="slide-up"
          background={{ variant: "rotated-rays-animated-grid" }}
          useInvertedBackground={false}
          inputPlaceholder="your@email.com"
          buttonText="Start Your Project"
          termsText="We'll respond within 24 hours with next steps for your web design project."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseCard
          logoText="Jo"
          columns={[
            {
              title: "Services",              items: [
                { label: "Web Design", href: "#services" },
                { label: "Responsive Design", href: "#services" },
                { label: "Optimization", href: "#services" },
              ],
            },
            {
              title: "Company",              items: [
                { label: "About Jo", href: "#about" },
                { label: "Portfolio", href: "#portfolio" },
                { label: "Testimonials", href: "#testimonials" },
              ],
            },
            {
              title: "Contact",              items: [
                { label: "Phone: 302-729-2269", href: "tel:302-729-2269" },
                { label: "Get in Touch", href: "#contact" },
                { label: "Project Inquiry", href: "#contact" },
              ],
            },
            {
              title: "Legal",              items: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Cookie Policy", href: "#" },
              ],
            },
          ]}
          copyrightText="© 2024 Jo Web Design | Nationwide Service | All Rights Reserved"
        />
      </div>
    </ThemeProvider>
  );
}
