import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

export default function Onboarding() {
  const { state } = useLocation();

  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -100, opacity: 0 }}
      className="min-h-screen flex items-center justify-center bg-white dark:bg-zinc-950 text-gray-900 dark:text-white"
    >
      <h1 className="text-2xl font-semibold">
        Onboarding for {state?.role}
      </h1>
    </motion.div>
  );
}
