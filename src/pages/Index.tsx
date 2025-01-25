import { motion } from "framer-motion";
import { RatingCard } from "@/components/RatingCard";
import { FeatureSection } from "@/components/FeatureSection";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

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
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            Revolutionizing Rental Relationships
          </span>
          <h1 className="mt-8 text-4xl font-bold tracking-tight text-neutral-900 sm:text-6xl">
            Trust Through Transparency
          </h1>
          <p className="mt-6 text-lg leading-8 text-neutral-600 max-w-2xl mx-auto">
            Build better rental relationships with our comprehensive rating system for both tenants and property owners.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg" className="rounded-full">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="rounded-full">
              Learn More
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Rating Categories */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              Comprehensive Rating System
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              Our detailed rating categories ensure fair and thorough evaluations
            </p>
          </div>
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
      <section className="px-6 py-24 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              Why Choose Our Platform
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              Discover how our features benefit both tenants and property owners
            </p>
          </div>
          <FeatureSection features={features} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-24 bg-primary">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Transform Your Rental Experience?
          </h2>
          <p className="mt-6 text-lg leading-8 text-white/90">
            Join thousands of satisfied users who have improved their rental relationships
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg" variant="secondary" className="rounded-full bg-white text-primary hover:bg-neutral-100">
              Get Started Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;