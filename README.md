# CPU Scheduler

**CPU Scheduler** is a simulation tool designed to visualize and compare different CPU scheduling algorithms. This project allows users to analyze how various algorithms manage processes in a system, providing insights into their performance under different conditions.

## Features

- **Multiple Scheduling Algorithms**:
  - First Come First Serve (FCFS)
  - Shortest Job First (SJF)
  - Round Robin (RR)
  - Priority Scheduling
- **Visualization**: Displays Gantt charts to show the scheduling of processes over time.
- **Performance Metrics**: Calculates key metrics such as waiting time, turnaround time, and CPU utilization.
- **Interactive Input**: Users can input custom processes, burst times, priorities, and time quanta.
- **Comparison Tool**: Compare the performance of different algorithms with the same set of processes.

## Technologies Used

- **Python**: Core language used for algorithm simulation.
- **Tkinter**: For building the graphical user interface (GUI).
- **Matplotlib**: For plotting Gantt charts and visualizing CPU scheduling.
- **NumPy**: For efficient data handling and calculations.

## Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/Shailsharma2604/CPU_Scheduler.git
    ```

2. Install dependencies:
    ```bash
    pip install -r requirements.txt
    ```

3. Run the application:
    ```bash
    python scheduler.py
    ```

## Usage

1. **Input Process Details**: Add process IDs, burst times, priorities, and time quanta (for RR).
2. **Select a Scheduling Algorithm**: Choose one of the available CPU scheduling algorithms to simulate.
3. **View Gantt Chart**: After running the simulation, the Gantt chart will display the process execution timeline.
4. **Compare Algorithms**: Optionally, run the same process set through different algorithms and compare the performance metrics.

## Demo

[Link to Demo Video](#) (Add your demo link here)

## Contributing

Contributions are welcome! Feel free to fork the repository, create issues, or submit pull requests.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries, please contact:
- **Shail Sharma** - shailsharma@example.com
