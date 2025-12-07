"use client";
import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "@/context/ContextMenu";
import dynamic from 'next/dynamic';

const ReactApexChart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
  loading: () => <div>Loading chart...</div>
});

const ChartsAnaly1 = () => {

  const { themeMode } = useContext(AppContext);
  const [chartState, setChartState] = useState({
    series: [{
      name: 'Net Profit',
      data: [58, 44, 55, 57, 56, 61, 58, 63, 66]
    }, {
      name: 'Revenue',
      data: [91, 76, 101, 85, 98, 87, 105, 91, 94]
    }],
    options: {
      chart: {
        type: 'bar',
        height: 350,
        toolbar: {
          show: false
        },
      },
      grid: {
        show: true,
        borderColor: '#dee2e6'
      },
      
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          borderRadius: 5,
          borderRadiusApplication: 'end'
        },
      },
      
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
        labels: {
          style: {
            fontSize: '12px',
            colors: '#b4b4b4'
          }
        },
        axisBorder: {
          show: true,
          color: '#b4b4b4'
        },
        axisTicks: {
          show: true,
          color: '#b4b4b4'
        }
      },
      yaxis: {
        labels: {
          style: {
            colors: '#b4b4b4'
          },
        }
      },
      
      fill: {
        opacity: 1
      },
      colors: ['#48A3D7', '#22c55e'],
      tooltip: {
        theme: themeMode === 'dark' ? 'dark' : 'light',
        y: {
          formatter: function(val) {
            return (val / 1000).toFixed(1) + 'k';
          }
        }
      }
      
    }
    
  });

  useEffect(() => {
    const isDarkMode = themeMode === 'dark';
    const labelColor = isDarkMode ? '#b4b4b4' : '#666666';
    const gridColor = isDarkMode ? '#222' : '#b4b4b46f'; 
    
    setChartState(prevState => ({
      ...prevState,
      options: {
        ...prevState.options,
        grid: {
        ...prevState.options.grid,
        borderColor: gridColor   ,
        
      },
        xaxis: {
          ...prevState.options.xaxis,
          labels: {
            style: {
              fontSize: '12px',
              colors: labelColor
            }
          },
          axisBorder: {
            show: true,
            color: labelColor
          },
          axisTicks: {
            show: true,
            color: labelColor
          }
        },
        yaxis: {
          ...prevState.options.yaxis,
          labels: {
            style: {
              colors: labelColor
            },
          }
        },
        tooltip: {
          ...prevState.options.tooltip,
          theme: isDarkMode ? 'dark' : 'light'
        }
      }
    }));
  }, [themeMode]);

  return (
    <div>
      <div id="chart">
        <ReactApexChart 
        key={themeMode}
          options={chartState.options} 
          series={chartState.series} 
          type="bar" 
          height={350} 
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default ChartsAnaly1;