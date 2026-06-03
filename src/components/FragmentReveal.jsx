import { motion } from 'framer-motion';

const fromVariants = {
  bottom: { opacity: 0, y: 24, filter: 'blur(5px)' },
  top:    { opacity: 0, y: -24, filter: 'blur(5px)' },
  left:   { opacity: 0, x: -24, filter: 'blur(5px)' },
  right:  { opacity: 0, x: 24, filter: 'blur(5px)' },
  scale:  { opacity: 0, scale: 0.92, filter: 'blur(4px)' },
};

const toVariants = {
  bottom: { opacity: 1, y: 0, filter: 'blur(0px)' },
  top:    { opacity: 1, y: 0, filter: 'blur(0px)' },
  left:   { opacity: 1, x: 0, filter: 'blur(0px)' },
  right:  { opacity: 1, x: 0, filter: 'blur(0px)' },
  scale:  { opacity: 1, scale: 1, filter: 'blur(0px)' },
};

export default function FragmentReveal({ children, delay = 0, from = 'bottom', className = '' }) {
  return (
    <motion.div
      initial={fromVariants[from]}
      whileInView={toVariants[from]}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.16, 1, 0.3, 1],
        filter: { duration: 0.45, delay },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
