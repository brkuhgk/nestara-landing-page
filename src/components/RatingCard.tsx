import { motion } from "framer-motion";
import { Smile, Star } from "lucide-react";

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
          {score}/10
        </span>
      </div>
      <div className="flex flex-col items-center mb-4">
        <div className="relative">
          <div className="bg-primary/10 rounded-full p-3">
            <Smile className="w-8 h-8 text-primary" />
          </div>
          <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex -space-x-1">
            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                className={`w-4 h-4 ${
                  index < Math.floor(score)
                    ? "text-primary fill-primary"
                    : "text-neutral-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      <h3 className="mt-3 text-lg font-semibold text-neutral-800 text-center">{title}</h3>
      <p className="mt-2 text-sm text-neutral-600 text-center">{description}</p>
    </motion.div>
  );
};