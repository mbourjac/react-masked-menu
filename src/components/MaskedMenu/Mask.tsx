import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useWindowSize } from '../../hooks/use-window-size';

type MaskProps = {
  isMenuOpen: boolean;
  children: ReactNode;
};

export const Mask = ({ isMenuOpen, children }: MaskProps) => {
  const { windowWidth, windowHeight } = useWindowSize();
  const windowDiagonal = Math.sqrt(windowWidth ** 2 + windowHeight ** 2);

  return (
    <motion.div
      className="mask fixed bottom-0 right-0 aspect-square"
      initial={{
        width: 'var(--mask-div-width)',
        WebkitMaskSize: 'var(--mask-size)',
      }}
      animate={{
        width: isMenuOpen ? windowDiagonal : 'var(--mask-div-width)',
        WebkitMaskSize:
          isMenuOpen ? `${windowDiagonal * 2}px` : 'var(--mask-size)',
      }}
      transition={{ duration: 0.35 }}
    >
      {children}
    </motion.div>
  );
};
