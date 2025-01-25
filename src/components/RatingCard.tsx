import { motion } from "framer-motion";

interface RatingCardProps {
  title: string;
  score: number;
  description: string;
  delay: number;
}

export const RatingCard = ({ title, score, description, delay }: RatingCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="relative p-6 rounded-xl backdrop-blur-sm bg-white/90 shadow-lg border border-neutral-200"
    >
      <div className="absolute -top-3 left-6">
        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-primary text-white">
          {score}/1000
        </span>
      </div>
      <h3 className="mt-3 text-lg font-semibold text-neutral-800">{title}</h3>
      <p className="mt-2 text-sm text-neutral-600">{description}</p>
    </motion.div>
  );
};