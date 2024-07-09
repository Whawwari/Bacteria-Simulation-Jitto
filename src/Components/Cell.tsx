import React from 'react';


interface CellProps {
  isOccupied: boolean;
  onClick: () => void;
}

const Cell: React.FC<CellProps> = ({ isOccupied, onClick }) => {
  return (
    <div
      className={`cell ${isOccupied ? 'occupied' : ''}`}
      onClick={onClick}
    ></div>
  );
};


export default Cell;

