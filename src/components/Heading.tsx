import type { ReactNode } from 'react';

type HeadingProps = {
  children: ReactNode;
};

export const Heading = ({ children }: HeadingProps) => {
  return (
    <h1 className="text-6xl font-medium uppercase text-white">{children}</h1>
  );
};
