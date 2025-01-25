import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

interface Feature {
  title: string;
  description: string;
}

interface FeatureSectionProps {
  features: Feature[];
}

export const FeatureSection = ({ features }: FeatureSectionProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="flex items-start space-x-4"
        >
          <div className="flex-shrink-0">
            <CheckCircle className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-neutral-800">{feature.title}</h3>
            <p className="mt-2 text-sm text-neutral-600">{feature.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};