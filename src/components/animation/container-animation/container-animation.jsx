import { motion } from "framer-motion";

export const ContainerAnimation = ({
  children,
  variants,
  className,
  initial,
  animate,
  exit,
}) => {
  return (
    <motion.main
      className={className}
      variants={variants}
      initial={initial}
      animate={animate}
      exit={exit}
    >
      {children}
    </motion.main>
  );
};
