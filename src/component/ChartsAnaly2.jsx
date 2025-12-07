"use client";
import React, { useContext } from "react";
import dynamic from 'next/dynamic';
import { AppContext } from "@/context/ContextMenu";

const ReactApexChart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
  loading: () => <div>Loading chart...</div>
});

const ChartsAnaly2 = () => {
  const { themeMode } = useContext(AppContext);
  
  const mode = String(themeMode).toLowerCase(); 
  const isDarkMode = mode === 'dark' || mode === 'true'; 
  const textColor = isDarkMode ? '#5e5d72' : '#f0f0f0';
  const trackBg = isDarkMode ? '#f2f2f2' : '#f2f2f2';

  
  const options = {
    chart: {
      height: 350,
      type: 'radialBar',
      toolbar: { show: false }
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: '16px',
            fontWeight: 600,
            color: textColor
          },
          value: {
            fontSize: '20px',
            fontWeight: 700,
            color: textColor,
            formatter: (val) => val + "%"
          }
        },
        hollow: { size: '40%' },
        track: { background: trackBg }
      }
    },
    colors: ['#48A3D7', '#22c55e', '#ff6b6b'],
    labels: ['Completed', 'Active', 'Assigned'],
    legend: {
      show: true,
      position: 'bottom',
      horizontalAlign: 'center',
      fontSize: '14px',
      labels: { colors: textColor }
    }
  };

  const series = [80, 63, 71];

  return (
    <div>
      <div id="chart">
        <ReactApexChart 
          key={isDarkMode ? 'dark' : 'light'}
          options={options} 
          series={series} 
          type="radialBar" 
          height={350} 
        />
      </div>
    </div>
  );
};

export default ChartsAnaly2;