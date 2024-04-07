import React from 'react';
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

const TopSong = () => {
  const options = {
    indexAxis: 'y',
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    aspectRatio: 2, // Set aspectRatio to stretch the chart content
    plugins: {
      legend: {
        display: false, // Remove the legend
      },
      title: {
        display: true,
      },
      datalabels: {
        anchor: 'end',
        align: 'top',
        offset: 10,
        formatter: function (_, context) {
          const songTitle = dataset1DataText[context.dataIndex];
          return songTitle;
        },
        font: {
          size: 12,
          weight: 'bold',
          color: 'black',
        },
      },
    },
  };

  // Adjust labels, dataset1Data, and dataset1DataText arrays
  const labels = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']; // Added 3 more values
  const dataset1Data = [950, 850, 800, 700, 600, 500, 490, 480, 470, 460]; // Added 3 more values
  const dataset1DataText = ['Song 1', 'Song 2', 'Song 3', 'Song 4', 'Song 5', 'Song 6', 'Song 7', 'Song 8', 'Song 9', 'Song 10']; // Added 3 more values

  // Define colors for each bar
  const barColors = ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)', 'rgb(75, 192, 192)', 'rgb(153, 102, 255)', 'rgb(255, 159, 64)', 'rgb(0, 255, 255)', 'rgb(255, 0, 0)', 'rgb(0, 255, 0)', 'rgb(0, 0, 255)'];

  const data = {
    labels,
    datasets: [
      {
        label: 'Top Songs',
        data: dataset1Data,
        borderColor: barColors,
        backgroundColor: barColors.map(color => `${color}4D`), // Add opacity to the colors
      },
    ],
  };

  return (
    <div style={{ width: '100%', height: '360px', background: 'white', overflow: 'auto' }}>
      <div style={{ minWidth: '100%' }}>
        <Bar options={options} data={data} plugins={[ChartDataLabels]} />
      </div>
    </div>
  );
};

export default TopSong;
