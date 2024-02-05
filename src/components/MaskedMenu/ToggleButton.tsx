import { motion } from 'framer-motion';
import { ToggleIcon } from './ToggleIcon';

type ToggleButtonProps = {
  isMenuOpen: boolean;
  handleClick: () => void;
};

export const ToggleButton = ({
  isMenuOpen,
  handleClick,
}: ToggleButtonProps) => {
  return (
    <motion.button
      onClick={handleClick}
      className="fixed bottom-[--main-padding] right-[--main-padding] flex aspect-square w-[--mask-size] items-center justify-center rounded-full"
      animate={{
        background: isMenuOpen ? 'var(--off-black)' : 'var(--primary-color)',
      }}
      transition={{ delay: isMenuOpen ? 0 : 0.2, duration: 0.2 }}
    >
      <ToggleIcon
        aria-hidden="true"
        animate={{
          color: isMenuOpen ? 'var(--primary-color)' : 'var(--off-black)',
          rotate: isMenuOpen ? 90 : 0,
        }}
        transition={{ delay: isMenuOpen ? 0 : 0.1, duration: 0.3 }}
      />
      <span className="sr-only">{`${isMenuOpen ? 'Close' : 'Open'} menu`}</span>
    </motion.button>
  );
};
