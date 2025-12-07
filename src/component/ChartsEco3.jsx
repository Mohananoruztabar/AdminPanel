"use client"
import React from "react";
import { useState } from "react";
import dynamic from 'next/dynamic';

const ReactApexChart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
  loading: () => <div>Loading chart...</div>
});

const ChartsEco3 = () =>{

  const [state, setState] = React.useState({
          
    series: [547, 176, 398, 605, 398],
    options: {
      chart: {
        type: 'donut',
      },
      colors: ['#de2fff', '#ffc107', '#3B82F6', '#22c55e', '#ff304f'],
      labels: ['Pending', 'Refunded', 'Shipped', 'Received', 'Cancelled'], 
      legend: {
        show: false 
      },
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          },   
        }
      }]
    },
  });

  return (
    <div>
      <div id="chart">
        <ReactApexChart options={state.options} series={state.series} type="donut" />
      </div>
      <div id="html-dist"></div>
    </div>
  );
}

export default ChartsEco3