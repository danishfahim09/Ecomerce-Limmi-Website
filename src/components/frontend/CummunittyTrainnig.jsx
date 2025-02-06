import React from 'react'
import Link from 'next/link'
import CummunittyTrainnigCarasoule from '@/components/frontend/CummunittyTrainnigCarasoule'
import { getData } from '@/lib/getData'

 async function CummunittyTrainnig() {
    const training =await getData('training')
    
    return (
        <div>
            <div className=' bg-white rounded-lg  border-1 border-gray-200 dark:bg-gray-700  shadow-lg dark:shadow-sm shadow-gray-300 dark:shadow-gray-500border-gray-200 dark:border-slate-600'>
                <div className='px-3 rounded-t-lg  text-slate-900 py-2  bg-slate-100 dark:text-slate-50 dark:bg-gray-800 bold flex justify-between items-center border border-gray-200 dark:border-slate-600'>
                    <h2>Comunity</h2>
                    <Link href='#' className='bg-lime-700 hover:bg-lime-800 text-slate-50 rounded-md px-4 py-2  duration-300 transition-all' >
                        See All
                    </Link>
                </div>
                <div className="bg-white p-4 dark:bg-slate-700">
                    <CummunittyTrainnigCarasoule training={training}/>
                </div>

            </div>
        </div>
    )
}

export default CummunittyTrainnig