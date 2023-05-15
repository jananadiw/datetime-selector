import React from 'react';
import '../styles/cell.scss';

interface Props extends React.PropsWithChildren {
  isActive?: boolean;
  isToday?: boolean;
  onClick?: () => void;
  className?: string;
}

export const Cell: React.FC<Props> = ({
  className,
  isToday,
  isActive = false,
  children,
  onClick,
}) => {
  const activeClass = isActive ? 'cell__selected' : isToday ? 'cell__today' : '';
  return (
    <div onClick={isActive ? undefined : onClick} className={`${className}${activeClass}`}>
      {children}
    </div>
  );
};
