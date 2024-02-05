import { type ReactNode, forwardRef } from 'react';

type NavButtonProps = {
  onClick: () => void;
  children: ReactNode;
};

export const NavButton = forwardRef<HTMLButtonElement, NavButtonProps>(
  ({ onClick, children }, focusRef?) => {
    return (
      <button
        className="nav-button relative flex items-center justify-center text-5xl font-bold uppercase"
        onClick={onClick}
        ref={focusRef}
      >
        {children}
      </button>
    );
  },
);

NavButton.displayName = 'NavButton';
