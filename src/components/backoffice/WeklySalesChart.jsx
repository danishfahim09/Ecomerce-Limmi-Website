"use client"
import React, { useState } from "react";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from "@faker-js/faker";



function WeklySalesChart() {


    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
    );

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Chart.js Line Chart',
            },
        },
    };

    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];




    const tabs = [
        {
            id: 1,
            tittle: "Sales",
            type: "sales",
            data: {
                labels,
                datasets: [
                    {
                        label: 'Sales',
                        data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
                        borderColor: 'rgb(255, 99, 132)',
                        backgroundColor: 'rgba(0, 137, 132, 0.5)',
                    }
                ],
            }
        },
        {
            id: 2,
            tittle: "Order",
            type: "order",
            data: {
                labels,
                datasets: [
                    {
                        label: 'Orders',
                        data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
                        borderColor: 'rgb(0, 132, 132)',
                        backgroundColor: 'rgba(255, 99, 132, 0.5)',
                    }
                ],
            }
        }
    ]
    const [ChartTodoDisplay, setChartTodoDisplay] = useState(tabs[0].type)

    return (
        <div className="dark:bg-slate-700 dark:text-white text-gray-500 dark:border-none bg-white  rounded-lg p-8 shadow-lg dark:shadow-none shadow-gray-300">
            <h2 className="text-xl font-bold p-4">WeklySalesChart</h2>
            {/**/}
            <div className="p-4">
                <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
                    <ul className="flex flex-wrap -mb-px p-4 mt-12">
                        {tabs.map((item, i) => {
                            return (
                                <li className="me-2" key={i}>
                                    <button
                                        onClick={() => setChartTodoDisplay(item.type)}
                                        className={ChartTodoDisplay == item.type ?
                                            'inline-block p-4 text-orange-600 border-b-2 border-orange-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500'
                                            :
                                            'inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'
                                        }
                                    >
                                        {item.tittle}
                                    </button>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                {tabs.map((tab, i) => {
                    if (ChartTodoDisplay === tab.type) {
                        return (
                                <div key={i}>
                                    <Line options={options} data={tab.data} />
                                </div>                          
                        )
                    }
                    return null
                })}
            </div>
        </div>
    );
}

export default WeklySalesChart;
