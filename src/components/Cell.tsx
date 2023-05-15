import React from 'react';
import '../styles/cell.scss';

interface Props extends React.PropsWithChildren {
  isActive?: boolean;
  onClick?: () => void;
  className?: string;
}

export const Cell: React.FC<Props> = ({ className, isActive = false, children, onClick }) => {
  const activeClass = isActive ? 'cell__selected' : '';
  console.log('active class', activeClass);
  return (
    <div onClick={isActive ? undefined : onClick} className={`${className}${activeClass}`}>
      {children}
    </div>
  );
};
