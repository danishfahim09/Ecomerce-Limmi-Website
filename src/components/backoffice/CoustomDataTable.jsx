"use client"
import React from 'react'
import { useState } from 'react';
import data from '../../../data.json'
import { color } from 'chart.js/helpers';




function CoustomDataTable() {

    const arry = [1, 2, 3, 4, 5]
    const Page_Size = 10;
    const [Current_Page, setCurrent_Page] = useState(1);
    const Start_Index = (Current_Page - 1) * Page_Size;
    const End_Index = Start_Index + Page_Size
    const Current_Displayed_Data = data.slice(Start_Index, End_Index)
    const totalPages = Math.ceil(data.length / Page_Size)
    const ItemstartIndex = Start_Index + 1
    const ItemEndIndex = Math.min(Start_Index + Page_Size, data.length)

    return (
        <div className='dark:text-white text-black dark:bg-slate-800 bg-white mt-10 ' >
            <h2 className='text-xl font-bold mb-5 p-8 md:p-2 lg:p-4 xl:p-8' >
                Data Table
            </h2>

            {/*Table*/}
            <div className=" overflow-x-auto shadow-md sm:rounded-lg  ">
                <table className="w-full overflow-x-scroll text-sm text-left rtl:text-right text-gray-500 border dark:border-gray-700  dark:text-gray-300 p-1">
                    <thead className="text-xs text-gray-900 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-300 font-extralight">
                        <tr>
                            <th scope="col" className="p-4">
                                <div className="flex items-center">
                                    <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                                </div>
                            </th>
                            <th scope="col" className="px-6 py-3">
                                ID
                            </th>
                            <th scope="col" className="px-6 py-3">
                                First_Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Lirst_Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Email
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Gender
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Current_Displayed_Data.map((item, i) => {
                                return (
                                
                                    <tr key={i} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800" >
                                        <td className="w-4 p-4">
                                            <div className="flex items-center">
                                                <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-white dark:border-white" />
                                                <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                                            </div>
                                        </td>
                                        <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap ">
                                            {item.id}
                                        </th>
                                        <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap">
                                            {item.first_name}
                                        </th>
                                        <td className="px-6 py-4">
                                            {item.last_name}
                                        </td>
                                        <td className="px-6 py-4">
                                            {item.email}
                                        </td>
                                        <td className="px-6 py-4">
                                            {item.gender}
                                        </td>
                                        <td className="px-6 py-4">
                                            <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                

            </div>
            <div className='w-full lg:flex flex-row justify-between lg:pr-10 pb-1 bg-white dark:bg-slate-900 xl:pl-10 pt-6'>
                    <div className='flex gap-2 pt-2 '>
                        <p className=' text-gray-600 dark:text-white'>Showing</p>
                        <span className='text-red-300'>
                            {ItemstartIndex}-{ItemEndIndex}
                        </span>
                        <p className=' text-gray-600 dark:text-white'>of </p>
                        <p className=' text-red-300'> 100</p>

                    </div>

                    <ul className="flex  items-center  h-10 text-base ">
                        <li>
                            <button
                                className="flex items-center justify-center  px-2  sm:px-1 md:px-2 xl:px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                onClick={() => setCurrent_Page(Current_Page - 1)}
                                disabled={Current_Page === 1}
                            >
                                Previous
                            </button>
                        </li>
                        {Array.from({ length: totalPages }, (_,index) => {
                            return (
                                    <li key={index}>
                                        <button
                                            className={Current_Page == index + 1 ?
                                                "flex items-center justify-center sm:px-2 px-1 md:px-2  lg:px-4   h-10 leading-tight  text-gray-900 bg-blue-200 border border-gray-300  hover:text-gray-700 dark:bg-gray-600 dark:border-gray-700 dark:text-gray-400 "
                                                :
                                                "flex items-center justify-center px-1  sm:px-2 md:px-2 lg:px-2  h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-200 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                            }
                                            onClick={() => { setCurrent_Page(index + 1) }}
                                            disabled={Current_Page == index + 1}
                                        >
                                            {index + 1}
                                        </button>
                                    </li>
                            )
                        })}
                        <li>
                            <button
                                className="flex items-center justify-center px-1 lg:px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                onClick={() => setCurrent_Page(Current_Page + 1)}
                                disabled={totalPages === Current_Page}>
                                Next
                            </button>
                        </li>
                    </ul>
                </div> 

        </div>
    )
}

export default CoustomDataTable