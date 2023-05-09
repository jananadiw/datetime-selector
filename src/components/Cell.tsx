import React from 'react';
import '../styles/layout.scss';

interface Props extends React.PropsWithChildren {
  onClick?: () => void;
  className?: string;
}

export const Cell: React.FC<Props> = ({ className, children, onClick }) => {
  return (
    <div onClick={onClick} className={className}>
      {children}
    </div>
  );
};
