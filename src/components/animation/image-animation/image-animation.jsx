import { motion } from "framer-motion";

export const ImageAnimation = ({
  src,
  variants,
  alt,
  initial,
  className,
  animate,
  transition,
}) => {
  return (
    <motion.img
      src={src}
      className={className}
      alt={alt}
      initial={initial}
      variants={variants}
      animate={animate}
      transition={transition}
    />
  );
};
