"use client"
import React from "react";
import { useState, useContext } from "react";
import dynamic from 'next/dynamic';
import { AppContext } from "@/context/ContextMenu";

const ReactApexChart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
  loading: () => <div>Loading chart...</div>
});

const ChartsEco2 = () => {

    const { themeMode } = useContext(AppContext);


    const data1 = [16800, 16800, 15700, 17800, 15500, 17000, 19000, 16000, 15000, 17000, 18000, 17000];
    const data2 = [16500, 17500, 16200, 17300, 16000, 19500, 16000, 17000, 16000, 19000, 18000, 19000];
   
    const [state] = useState({
        series: [
            {
                name: 'Income',
                data: data1
            },
            {
                name: 'Expenses', 
                data: data2
            }
        ],
        options: {
            chart: {
                height: 350,
                type: 'line',
                toolbar: {
                    show: false
                },
                zoom: {
                    enabled: false
                },
                background : 'transparent'
            },
            colors: ['#d63384', '#22c55e'],
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth',
                width: 3
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                labels: {
                    style: {
                        fontSize: '12px' ,
                        colors: '#b4b4b4' 
                    }
                }
            },
            yaxis: {
                min: 14000,
                max: 20000,
                labels: {
                    style: {
                    colors: '#b4b4b4' 
                },
                    formatter: function(val) {
                        return (val / 1000).toFixed(0) + 'k';
                    }
                }
            },
            legend: {
                position: 'top',
                horizontalAlign: 'right'
            },
            grid: {
            borderColor: 'transparent', 
            row: {
                colors: ['transparent', 'transparent'], 
                opacity: 0
            },
            column: {
                colors: ['transparent', 'transparent'], 
                opacity: 0
            },
        },
            tooltip: {
                theme: themeMode ? 'light' : 'dark',
                y: {
                    formatter: function(val) {
                        return (val / 1000).toFixed(1) + 'k';
                    }
                }
            }
        }
    });

    return (
        <div>
            <div id="chart">
                <ReactApexChart 
                    options={state.options} 
                    series={state.series} 
                    type="line" 
                    height={450} 
                />
            </div>
        </div>
    );
}

export default ChartsEco2;