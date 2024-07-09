import React, { useState, useEffect } from 'react';
import Cell from './Cell';
import OccupiedCellsCount from './OccupiedCellsCount';

const Grid: React.FC = () => {
  const [gridSize, setGridSize] = useState(20);
  const [grid, setGrid] = useState<boolean[][]>(
    Array.from({ length: 20 }, () => Array(20).fill(false))
  );
  const [intervalTime, setIntervalTime] = useState(1000);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        setGrid((prevGrid) => {
          const newGrid = prevGrid.map((row) => row.slice());

          for (let rowIndex = 0; rowIndex < gridSize; rowIndex++) {
            for (let colIndex = 0; colIndex < gridSize; colIndex++) {
              if (prevGrid[rowIndex][colIndex]) {
                const adjacentCells = [
                  [rowIndex - 1, colIndex],
                  [rowIndex + 1, colIndex],
                  [rowIndex, colIndex - 1],
                  [rowIndex, colIndex + 1],
                ];
                for (const [adjRow, adjCol] of adjacentCells) {
                  if (
                    adjRow >= 0 &&
                    adjRow < gridSize &&
                    adjCol >= 0 &&
                    adjCol < gridSize &&
                    !prevGrid[adjRow][adjCol]
                  ) {
                    newGrid[adjRow][adjCol] = true;
                    break;
                  }
                }
              }
            }
          }
          return newGrid;
        });
      }, intervalTime);
      return () => clearInterval(interval);
    }
  }, [isRunning, gridSize, intervalTime]);

  const handleCellClick = (row: number, col: number) => {
    setGrid((prevGrid) => {
      const newGrid = prevGrid.map((rowArray, rowIndex) =>
        rowArray.map((cell, colIndex) =>
          rowIndex === row && colIndex === col ? !cell : cell
        )
      );
      return newGrid;
    });
  };

  const handleGridSizeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newSize = parseInt(event.target.value, 10);
    setGridSize(newSize);
    setGrid(Array.from({ length: newSize }, () => Array(newSize).fill(false)));
  };

  const handleIntervalTimeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setIntervalTime(parseInt(event.target.value, 10));
  };

  const toggleSimulation = () => {
    setIsRunning(!isRunning);
  };

  const resetSimulation = () => {
    setIsRunning(false);
    setGrid(Array.from({ length: gridSize }, () => Array(gridSize).fill(false)));
  };

  return (
    <div>
      <label>
        Grid Size: {gridSize} x {gridSize}
        <input
          type="range"
          min="1"
          max="30"
          value={gridSize}
          onChange={handleGridSizeChange}
        />
      </label>
      <label>
        Interval Time (ms): {intervalTime}
        <input
          type="number"
          value={intervalTime}
          onChange={handleIntervalTimeChange}
          min="100"
          step="100"
        />
      </label>
      <button onClick={toggleSimulation}>
        {isRunning ? 'Pause' : 'Start'} Simulation
      </button>
      <button onClick={resetSimulation}>Reset Simulation</button>
      <div
        className="grid"
        style={{
          gridTemplateColumns: `repeat(${gridSize}, 20px)`,
          gridTemplateRows: `repeat(${gridSize}, 20px)`,
        }}
      >
        {grid.map((row, rowIndex) =>
          row.map((isOccupied, colIndex) => (
            <Cell
              key={`${rowIndex}-${colIndex}`}
              isOccupied={isOccupied}
              onClick={() => handleCellClick(rowIndex, colIndex)}
            />
          ))
        )}
      </div>
      <OccupiedCellsCount grid={grid} />
    </div>
  );
};

export default Grid;
