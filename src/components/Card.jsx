import { motion } from "motion/react";

const Card = ({ style, text, image, containerRef }) => {
  return image && !text ? (
    <motion.img
      className="absolute w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 cursor-grab object-contain"
      src={image}
      alt={image.split('/').pop().split('.')[0]}
      style={style}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      drag
      dragConstraints={containerRef}
      dragElastic={0.2}
    />
  ) : (
    <motion.div
      className="absolute px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2 text-white font-medium text-xs sm:text-sm md:text-base text-center rounded-full ring-1 ring-gray-700 bg-gray-800 w-16 sm:w-20 md:w-24 lg:w-28 cursor-grab select-none"
      style={style}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      drag
      dragConstraints={containerRef}
      dragElastic={0.2}
    >
      <span className="truncate block">{text}</span>
    </motion.div>
  );
};

export default Card;