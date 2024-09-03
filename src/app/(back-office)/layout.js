"use client"
import React, { useState } from 'react'
import Sidebar from '../../components/backoffice/Sidebar'
import Navbare from '../../components/backoffice/Navbare'

function Layout({ children }) {
    const [showSideBar,setshowSideBar ] = useState(false)
    console.log(showSideBar)
    return (
        <div className='flex w-full'>
            {/*SideBar*/}
            <Sidebar showSideBar={showSideBar}/>
            <div className='w-full'>
                {/*Navbare*/}
                <Navbare showSideBar={showSideBar} setshowSideBar={setshowSideBar}/>
                 {/*Main*/}
                <main className={showSideBar ? 
                ' mt-16 p-10 bg-white dark:bg-slate-900 text-slate-50 min-h-screen'
                :
                'sm:ml-60 mt-16 p-10 bg-white dark:bg-slate-900 text-slate-50 min-h-screen'}>{children}</main>
            </div>
        </div>
    )
}

export default Layout