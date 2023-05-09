import React from 'react';
import '../styles/layout.scss';

interface Props extends React.PropsWithChildren {
  className?: string;
}

export const Cell: React.FC<Props> = ({ className, children }) => {
  return <div className={className}>{children}</div>;
};
