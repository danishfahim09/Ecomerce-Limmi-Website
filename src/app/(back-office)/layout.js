import React from 'react'
import Sidebar from '../../components/backoffice/Sidebar'
import Navbare from '../../components/backoffice/Navbare'

function Layout({ children }) {
    
    return (
        <div className='flex w-full'>

            {/*SideBar*/}
            <Sidebar />
            <div className='w-full'>
                {/*Navbare*/}
                <Navbare />
                 {/*Main*/}
                <main className=' ml-60 mt-16 p-10 bg-white dark:bg-slate-900 text-slate-50 min-h-screen'>{children}</main>
            </div>
        </div>
    )
}

export default Layout