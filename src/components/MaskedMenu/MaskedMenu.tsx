import { useState, useRef, type ReactNode, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFixedBody } from '../../hooks/use-fixed-body';
import { Mask } from './Mask';
import { Menu } from './Menu';
import { ToggleButton } from './ToggleButton';

type MaskedMenuProps = {
  children: ReactNode;
};

export const MaskedMenu = ({ children }: MaskedMenuProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const focusRef = useRef<HTMLButtonElement>(null);
  const navigate = useNavigate();

  useFixedBody(isMenuOpen);

  const handleClick = () => {
    setIsMenuOpen((prevIsOpen) => !prevIsOpen);

    if (!isMenuOpen && focusRef.current) {
      focusRef.current.focus();
    }
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (isMenuOpen && event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <div className="relative">
      <Mask isMenuOpen={isMenuOpen}>
        <Menu
          isOpen={isMenuOpen}
          handleNavigation={handleNavigation}
          ref={focusRef}
        />
      </Mask>
      <div aria-hidden={isMenuOpen ? true : false}>{children}</div>
      <ToggleButton isMenuOpen={isMenuOpen} handleClick={handleClick} />
    </div>
  );
};
