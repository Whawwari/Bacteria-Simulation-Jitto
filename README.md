Bacterial-Simulation

Hello, Welcome to my Jitto assessment. I'm proud to show you what I have been working on.

Overview
This project simulates the growth patterns of a bacterial colony within a confined space, represented by a grid. The simulation follows specific biological rules, allowing cells to divide and spread based on their environment. The application is built using React with strict TypeScript, ensuring type safety and efficient state management. The simulation can be started, paused, reset, and adjusted for growth intervals.

Features:
Adjustable Grid: A grid and slider that allow the user to adjust the size from 1x1 to 30x30.
Custom Timer: The ability to customize the interval timer as desired (in milliseconds).
Start/Restart Button: Two simple buttons to run, pause, and reset the simulation.
Bacteria Count Display: A dynamic display that shows an accurate number of infected cells.

Structure
The code is made up of three components and the App.tsx file. The components Cell.tsx and OccupiedCell.tsx are very simple, while the Grid.tsx component is a lot more complex as it handles the majority of the simulation.

Source
-assets
-components
--Cell.tsx
--Grid.tsx
--OccupiedCells.tsx
-App.tsx

Assumptions
The main assumption I made is that Tailwind CSS isn't allowed to be used. Other than that, I stuck to the criteria.

Additional Features
Added a slider to change the grid size.
Added a cell count display to show the occupied cells.

Analysis
Overall, I am very satisfied with my work. I believe that it delivers all that is expected and more. The code could not be done in a simpler manner; having the grid handle most of the data allows for ease of understanding and debugging. The deployment on Netlify could not have been smoother, and finally, the speed and response time of the simulation are extraordinary.

Without installing any external libraries, the metrics I could gather are:
The code compiles and runs in under one second.
The input response is under one second.
The rendering is fast.
These metrics are based on my personal timing.