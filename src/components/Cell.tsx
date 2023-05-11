import React from 'react';
// import '../styles/calendar.scss';
import '../styles/cell.scss';

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
