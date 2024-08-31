"use client"
import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);
const data = {
  labels: ['Cabbage', 'Watermelon', 'Broccoli', 'Maize',],
  responsive:true,
  datasets: [
    {
      label: '# of Votes',
      data: [50, 10,20, 20],
      backgroundColor: [
        'rgb(0, 4, 130 , 0.7)',
        'rgba(124, 3, 125, 0.7)',
        'rgba(2, 139, 71, 0.7)',
        'rgba(0, 0, 0, 0.7)',
      ],
      borderColor: [
        'rgba(0, 126, 191)',
        'rgba(0, 0, 0, 0.7)',
        'rgba(128, 1, 32)',
        'rgba(94, 98, 99,0.7)',
      ],
      borderWidth: 1,
    },
  ],
};
function BestSellingProducts() {
  return (
    <div className='dark:bg-slate-700 dark:text-white text-gray-500 bg-white dark:border-none rounded-lg p-8 shadow-lg dark:shadow-none shadow-gray-300'>
        <h2 className='text-xl font-bold mb-5 p-3'>BestSellingChart</h2>
        <div className='px-6'>
        <Pie data={data}/>
        </div>
        {/**/}
        
    </div>
  )
}

export default BestSellingProducts