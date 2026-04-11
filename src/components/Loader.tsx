import { motion } from "framer-motion";

export default function Loader({ onComplete }: { onComplete: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-page"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 1.2, duration: 0.5 }}
      onAnimationComplete={onComplete}
    >
      <motion.div className="relative flex flex-col items-center gap-4">
        {/* Logo mark */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent"
        >
          <span className="font-heading text-2xl font-bold text-white">D</span>
        </motion.div>

        {/* Loading bar */}
        <div className="h-0.5 w-32 overflow-hidden rounded-full bg-border-subtle">
          <motion.div
            className="h-full bg-accent"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
