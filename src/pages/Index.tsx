import { motion } from "framer-motion";
import { RatingCard } from "@/components/RatingCard";
import { FeatureSection } from "@/components/FeatureSection";
import { Button } from "@/components/ui/button";
import { ArrowRight, Apple, PlaySquare } from "lucide-react";

const features = [
  {
    title: "Transparent Ratings",
    description: "Access detailed ratings and reviews for both tenants and property owners.",
  },
  {
    title: "Verified Histories",
    description: "Track rental and payment histories with verified documentation.",
  },
  {
    title: "Communication Metrics",
    description: "Evaluate communication patterns and response times.",
  },
  {
    title: "Maintenance Tracking",
    description: "Monitor repair requests and resolution timelines.",
  },
  {
    title: "Behavioral Insights",
    description: "Get comprehensive behavioral assessments and references.",
  },
  {
    title: "Professional Scoring",
    description: "Access standardized professionalism and reliability scores.",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 pt-16 md:pt-24 lg:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-7xl text-center"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary"
          >
            nestara.net - Revolutionizing Rental Relationships
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 text-4xl font-bold tracking-tight text-neutral-900 sm:text-6xl"
          >
            Trust Through Transparency
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-6 text-lg leading-8 text-neutral-600 max-w-2xl mx-auto"
          >
            Build better rental relationships with our comprehensive rating system for both tenants and property owners.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" className="rounded-full group transition-all duration-300 hover:scale-105">
              Get Started <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <div className="flex gap-4">
              <Button variant="outline" size="lg" className="rounded-full hover:scale-105 transition-all duration-300">
                <Apple className="mr-2 h-5 w-5" />
                App Store
              </Button>
              <Button variant="outline" size="lg" className="rounded-full hover:scale-105 transition-all duration-300">
                <PlaySquare className="mr-2 h-5 w-5" />
                Play Store
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Rating Categories */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              Comprehensive Rating System
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              Our detailed rating categories ensure fair and thorough evaluations
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <RatingCard
              title="Cleanliness"
              score={9.5}
              description="Property maintenance and cleanliness standards"
              delay={0.1}
            />
            <RatingCard
              title="Payment History"
              score={9.8}
              description="Consistency and timeliness of payments"
              delay={0.2}
            />
            <RatingCard
              title="Communication"
              score={9.2}
              description="Responsiveness and clarity in communications"
              delay={0.3}
            />
            <RatingCard
              title="Professionalism"
              score={9.6}
              description="Professional conduct and reliability"
              delay={0.4}
            />
            <RatingCard
              title="Maintenance"
              score={9.4}
              description="Timely handling of maintenance issues"
              delay={0.5}
            />
            <RatingCard
              title="Overall Rating"
              score={9.7}
              description="Comprehensive evaluation score"
              delay={0.6}
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="px-6 py-24 bg-white"
      >
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              Why Choose Nestara
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              Discover how our features benefit both tenants and property owners
            </p>
          </div>
          <FeatureSection features={features} />
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="px-6 py-24 bg-primary"
      >
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Transform Your Rental Experience?
          </h2>
          <p className="mt-6 text-lg leading-8 text-white/90">
            Join thousands of satisfied users who have improved their rental relationships
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" variant="secondary" className="rounded-full bg-white text-primary hover:bg-neutral-100">
              Get Started Now
            </Button>
            <div className="flex gap-4">
              <Button size="lg" variant="outline" className="rounded-full bg-white/10 text-white hover:bg-white/20">
                <Apple className="mr-2 h-5 w-5" />
                Download for iOS
              </Button>
              <Button size="lg" variant="outline" className="rounded-full bg-white/10 text-white hover:bg-white/20">
                <PlaySquare className="mr-2 h-5 w-5" />
                Download for Android
              </Button>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Index;