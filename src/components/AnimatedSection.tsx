import { motion } from "framer-motion";

const defaultVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

interface AnimatedSectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  delayOrder?: number;
}

export const AnimatedSection = ({ children, className = "", delayOrder = 0, id, ...props }: AnimatedSectionProps) => (
  <motion.section
    id={id}
    className={className}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-80px" }}
    variants={defaultVariants}
    custom={delayOrder}
    {...props}
  >
    {children}
  </motion.section>
);

interface AnimatedItemProps {
  children: React.ReactNode;
  className?: string;
  index?: number;
}

export const AnimatedItem = ({ children, className = "", index = 0 }: AnimatedItemProps) => (
  <motion.div
    className={className}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-40px" }}
    variants={defaultVariants}
    custom={index}
  >
    {children}
  </motion.div>
);
