"use client";
import React from "react";
import { useState } from "react";
import dynamic from 'next/dynamic';
 
const ReactApexChart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
  loading: () => <div>Loading chart...</div>
});


export default function ChartsEco1(props) {

    const [state, setState] = React.useState({
    series: [{
        name: 'XYZ MOTORS',
        data: props.data
    }],
    options: {
        chart: {
            type: 'area',
            stacked: false,
            height: 80,
            zoom: { enabled: false }, 
            toolbar: { show: false },
            sparkline: { 
                enabled: true
            },
            animations: {
                enabled: true, 
                easing: 'easeout',  
                speed: 800,
                animateGradually: {
                    enabled: true,
                    delay: 150 
                },
                dynamicAnimation: {
                    enabled: true,
                    speed: 350 
                }
            }
        },
        dataLabels: { enabled: false },
        markers: {
            size: 0,  
            colors: [props.color],  
            strokeColors: '#ffffff', 
            strokeWidth: 2,
            hover: {
                size: 5,  
                sizeOffset: 21,
                fillColor: props.color
            }
        },
        title: { show: false },
        fill: {
            type: 'gradient',
            colors: [props.color],
            gradient: {
                shadeIntensity: 1,
                inverseColors: false,
                opacityFrom: 0.7, 
                opacityTo: 0.2,
                stops: [0, 50, 100],
            },
        },
        yaxis: {
            show: false,
            min: function(min) { 
                const range = Math.max(...props.data.map(d => d[1])) - Math.min(...props.data.map(d => d[1]));
                return min - (range * 0.1); 
            },
            max: function(max) { 
                const range = Math.max(...props.data.map(d => d[1])) - Math.min(...props.data.map(d => d[1]));
                return max + (range * 0.1);
            }
        },
        xaxis: {
            type: 'datetime',
            show: false,
        },
        tooltip: { 
            enabled: true,
            theme: 'light',
            marker: {
                show: true,
                fillColors: [props.color] 
            },
            x: {format: 'dd MMM yyyy'  },
            y: {formatter: function(value) {
                return value.toFixed(0);},
                title: {
                    formatter: function() {
                    return 'value:'; }
                }
            }
        },
        grid: { show: false },
        stroke: {
            curve: 'smooth',
            width: 2, 
            colors: [props.color]
        },
        plotOptions: {
            area: {
                fillTo: 'origin'
            }
        }
    },
});

return (
    <div className="w-full h-full ">
        <div id="chart" className="h-20">
            <ReactApexChart 
                options={state.options} 
                series={state.series} 
                type="area" 
                height={80}
                width="100%" 
            />
        </div>
        <div id="html-dist"></div>
    </div>
);
}
