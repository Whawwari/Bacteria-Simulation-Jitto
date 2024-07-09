import React from 'react';

interface OccupiedCellsCountProps {
  grid: boolean[][];
}

const OccupiedCellsCount: React.FC<OccupiedCellsCountProps> = ({ grid }) => {
  const countOccupiedCells = () => {
    return grid.flat().filter(cell => cell).length;
  };

  return (
    <div>
      <h2>Occupied Cells: {countOccupiedCells()}</h2>
    </div>
  );
};

export default OccupiedCellsCount;
