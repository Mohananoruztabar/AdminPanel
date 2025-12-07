"use client";
import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "@/context/ContextMenu";
import dynamic from 'next/dynamic';

const ReactApexChart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
  loading: () => <div>Loading chart...</div>
});

const ChartsCrm = () => {
  const { themeMode } = useContext(AppContext);
  
  const [options, setOptions] = useState({
    chart: {
      height: 350,
      type: 'area',
      toolbar: {
        show: false
      },
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth',
      width: 3
    },
    fill: {
      enabled: false
    },
    markers: {
      size: 6,
      colors: ['#48A3D7'],
      strokeColors: '#fff',
      strokeWidth: 2,
      hover: {
        size: 8
      }
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
      labels: {
        style: {
          colors: '#333333',
          fontSize: '12px'
        }
      },
      axisBorder: {
        show: true,
        color: '#CCCCCC'
      },
      axisTicks: {
        show: true,
        color: '#CCCCCC'
      }
    },
    yaxis: {
      min: 0,
      max: 40000,
      labels: {
        style: {
          colors: '#333333'
        },
        formatter: function (value) {
          const ticks = [0, 10000, 20000, 30000, 40000];
          if (ticks.includes(value)) {
            if (value === 0) return '$0';
            return '$' + (value / 1000).toFixed(0) + '.000';
          }
          return '';
        }
      }
    },
    colors: ['#48A3D7'],
    tooltip: {
      theme: 'light',
      x: {
        show: true
      },
      y: {
        formatter: function(value) {
          return '$' + value.toLocaleString('en-US', {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
          });
        }
      }
    },
    grid: {
      borderColor: '#E0E0E0',
      strokeDashArray: 4
    },
    legend: {
      show: false
    }
  });

  const data = [0, 10000, 5000, 15000, 10000, 20000, 15000, 25000, 20000, 30000];

  const [series] = useState([{
    name: 'Earning',
    data: data
  }]);

  useEffect(() => {
    const mode = String(themeMode).toLowerCase();
    const isDarkMode = mode === 'dark' || mode === 'true';
    
    const textColor = isDarkMode ? '#5e5d72' : '#b4b4b4'; 
    const borderColor = isDarkMode ? '#5e5d72' : '#b4b4b4'; 
    const gridColor = isDarkMode ? '#b4b4b4' : '#b4b4b4';  
    
    setOptions(prev => ({
      ...prev,
      xaxis: {
        ...prev.xaxis,
        labels: {
          ...prev.xaxis.labels,
          style: {
            ...prev.xaxis.labels.style,
            colors: textColor
          }
        },
        axisBorder: {
          ...prev.xaxis.axisBorder,
          color: borderColor
        },
        axisTicks: {
          ...prev.xaxis.axisTicks,
          color: borderColor
        }
      },
      yaxis: {
        ...prev.yaxis,
        labels: {
          ...prev.yaxis.labels,
          style: {
            ...prev.yaxis.labels.style,
            colors: textColor
          }
        }
      },
      tooltip: {
        ...prev.tooltip,
        theme: isDarkMode ? 'dark' : 'light'
      },
      grid: {
        ...prev.grid,
        borderColor: gridColor
      }
    }));
  }, [themeMode]);

  return (
    <div>
      <div id="chart">
        <ReactApexChart 
          key={themeMode}
          options={options} 
          series={series} 
          type="area" 
          height={350} 
        />
      </div>
    </div>
  );
};

export default ChartsCrm;