import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';

const RevenueChart = () => {
  const chartContainer = useRef(null);
  const chartInstance = useRef(null);
  const [selectedWeek, setSelectedWeek] = useState('Week 1');
  const [chartDimensions, setChartDimensions] = useState({ width: '100%', height: '200px' }); // Initial chart dimensions
  
  const chartData = {
    'Week 1': {
      labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      expenses: [400, 200, 150, 300, 250, 350, 400],
      albumSales: [500, 600, 700, 800, 900, 800, 1200],
    },
    'Week 2': {
      labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      expenses: [150, 300, 200, 400, 350, 500, 600],
      albumSales: [900, 800, 900, 1000, 1200, 1400, 1600],
    },
    'Week 3': {
      labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      expenses: [200, 400, 300, 500, 450, 600, 700],
      albumSales: [700, 1000, 1200, 1400, 1600, 1800, 2000],
    },
    'Week 4': {
      labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      expenses: [250, 500, 400, 600, 550, 700, 800],
      albumSales: [800, 1200, 1400, 1600, 1800, 2000, 2200],
    },
  };

  useEffect(() => {
    if (chartContainer && chartContainer.current) {
      Chart.register(CategoryScale);
      chartInstance.current = new Chart(chartContainer.current, {
        type: 'line',
        data: {
          labels: chartData[selectedWeek].labels,
          datasets: [
            {
              label: 'Expenses',
              data: chartData[selectedWeek].expenses,
              borderColor: '#C70000',
              backgroundColor: '#C70000',
            },
            {
              label: `Album Sales`,
              data: chartData[selectedWeek].albumSales,
              borderColor: '#4CAF50',
              backgroundColor: '#4CAF50',
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
          layout: {
            padding: {
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
            },
          },
          plugins: {
            legend: {
              display: true,
              position: 'top',
            },
          },
          maintainAspectRatio: false,
          responsive: true,
        },
      });
    }

    // Dynamically adjust chart dimensions based on parent container's size
    const parentWidth = chartContainer.current.parentNode.offsetWidth;
    const parentHeight = chartContainer.current.parentNode.offsetHeight;
    setChartDimensions({ width: parentWidth, height: parentHeight });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [selectedWeek]);

  const handleWeekChange = (e) => {
    setSelectedWeek(e.target.value);
  };

  return (
    <div style={{ height: '300px', backgroundColor: 'transparent', float: 'right', border: 'none', marginRight: '20px', color: '#1E1E1E', marginTop: '20px' }}>
      <h4 className="mb-0" style={{ display: 'inline-block', marginRight: '10px' }}>Revenue</h4>
      <select value={selectedWeek} onChange={handleWeekChange} style={{ float: 'right', border: 'none', backgroundColor: 'transparent', color: '#1E1E1E' }}>
        <option value="Week 1">Week 1</option>
        <option value="Week 2">Week 2</option>
        <option value="Week 3">Week 3</option>
        <option value="Week 4">Week 4</option>
      </select>
      <canvas ref={chartContainer} style={{ width: chartDimensions.width, height: chartDimensions.height, marginTop:'20px', marginLeft:'20px', backgroundColor:'white' }} />
    </div>
  );
};

export default RevenueChart;
