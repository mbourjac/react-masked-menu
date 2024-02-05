import { forwardRef } from 'react';
import { NavButton } from './NavButton';

type MenuProps = {
  isOpen: boolean;
  handleNavigation: (path: string) => void;
};

export const Menu = forwardRef<HTMLButtonElement, MenuProps>(
  ({ isOpen, handleNavigation }, focusRef) => {
    return (
      <div
        className="fixed left-0 top-0 h-screen w-full overflow-y-auto bg-primary px-[--main-padding] "
        aria-hidden={isOpen ? false : true}
      >
        <nav className="h-full">
          <ul className="flex min-h-full flex-col items-center justify-center gap-14 py-[96px] text-2xl">
            <li>
              <NavButton onClick={() => handleNavigation('/')} ref={focusRef}>
                Home
              </NavButton>
            </li>
            <li>
              <NavButton onClick={() => handleNavigation('projects')}>
                Projects
              </NavButton>
            </li>
            <li>
              <NavButton onClick={() => handleNavigation('about')}>
                About
              </NavButton>
            </li>
          </ul>
        </nav>
      </div>
    );
  },
);

Menu.displayName = 'Menu';
