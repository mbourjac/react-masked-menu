import type { ReactNode } from 'react';

type ParagraphProps = {
  children: ReactNode;
};

export const Paragraph = ({ children }: ParagraphProps) => {
  return <p className="text-6xl font-medium text-white">{children}</p>;
};
