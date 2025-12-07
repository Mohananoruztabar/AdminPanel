"use client";
import React from "react";
import { useState } from "react";
import dynamic from 'next/dynamic';
 
const ReactApexChart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
  loading: () => <div>Loading chart...</div>
});

const ChartsEco4 = () =>{

  const [state, setState] = React.useState({
    series: [67],
    options: {
      chart: {
        height: 350,
          type: 'radialBar',
          offsetY: -10
      },
      plotOptions: {
        radialBar: {
          startAngle: -180,
          endAngle: 180,
          dataLabels: {
            name: {
              fontSize: '16px',
              color: '#22c55e',
              offsetY: -10
            },
            value: {
              offsetY: 76,
              fontSize: '22px',
              color: '#22c55e',
              offsetY: 20,
              formatter: function (val) {
                return val + "%";
              }
            }
          }
        }
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          type: 'horizontal',
          gradientToColors: ['#EC4899'], 
          stops: [0, 100]
        },
      },
      colors: ['#3B82F6'],
      stroke: {
        dashArray: 4
      },
      labels: ['Weekly Status'],
    },
          
  });      

  return (
    <div>
      <div id="chart">
        <ReactApexChart options={state.options} series={state.series} type="radialBar" height={350} />
      </div>
      <div id="html-dist"></div>
    </div>
  );
}

export default ChartsEco4