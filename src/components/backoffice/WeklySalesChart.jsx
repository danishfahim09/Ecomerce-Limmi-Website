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
        <div className="bg-card border border-border rounded-lg p-8 shadow-md dark:shadow-lg">
            <h2 className="text-xl font-semibold text-foreground mb-4">Weekly Sales Chart</h2>
            <div className="p-4">
                <div className="text-sm font-medium text-center border-b border-border">
                    <ul className="flex flex-wrap -mb-px p-4">
                        {tabs.map((item, i) => {
                            return (
                                <li className="me-2" key={i}>
                                    <button
                                        onClick={() => setChartTodoDisplay(item.type)}
                                        className={ChartTodoDisplay == item.type ?
                                            'inline-block p-4 text-lime-600 dark:text-lime-400 border-b-2 border-lime-600 dark:border-lime-500 rounded-t-lg font-semibold transition-colors'
                                            :
                                            'inline-block p-4 border-b-2 border-transparent rounded-t-lg text-muted-foreground hover:text-foreground hover:border-muted-foreground transition-colors'
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
