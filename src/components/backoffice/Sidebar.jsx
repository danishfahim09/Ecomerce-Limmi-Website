"use client"

import Link from 'next/link'
import React, { use, useState } from 'react'
import { LayoutDashboard, Flower, Users, Store, Settings, Truck, User, LogOut, Contact2 } from 'lucide-react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'


function Sidebar() {
  const usepath = usePathname()
  console.log(usepath)
  const SideBarLinks = [
    {
      id: 1,
      tittle: 'Coustemers',
      icon: Users,
      link: '/dashboard/coustomers'
    },
    {
      id: 2,
      tittle: 'Markets',
      icon: Store,
      link: '/dashboard/markets'
    },
    {
      id: 3,
      tittle: 'Farmers',
      icon: Contact2,
      link: '/dashboard/farmers'
    },
    {
      id: 4,
      tittle: 'Orders',
      icon: Truck,
      link: '/dashboard/orders'
    },
    {
      id: 5,
      tittle: 'OurStaf',
      icon: User,
      link: '/dashboard/staff'
    },
    {
      id: 6,
      tittle: 'Setting',
      icon: Settings,
      link: '/dashboard/settings'
    },
    {
      id: 7,
      tittle: 'Online Store',
      icon: Store,
      link: '/dashboard/onlinestore'
    },
  ]

  const [SideBoarder, setSideBoarder] = useState(SideBarLinks[0].id)

  const ShowSideBorder = () => {

  }


  return (
    <div id="sidebar-multi-level-sidebar" className="fixed dark:text-slate-800 dark:bg-slate-700 bg-white text-gray-700 space-y-6 h-screen w-64  top-0 left-0 border-2 dark:border-gray-700 border-gray-100" >
      <Image
        className='ml-4 mt-4 text-center p-2 '
        src='/applogo.png'
        width={150}
        height={150}
        alt="App Main Logo"
      />
      <div className="h-full   overflow-y-auto mt-2 ">
        <ul className="space-y-10 font-medium mt-12">

          <li className={usepath == '/dashboard'?
            'border-l-4 dark:border-lime-400 border-emerald-700 text-emerald-600 dark:text-lime-500'
            :
            'text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'}>
            <Link href='/dashboard' className="flex items-center p-2 pl-5 rounded-lg group">
              <Flower />
              <span className="ms-5">Dashboard</span>
            </Link>
          </li>

          <li className={ usepath == '/dashboard/catalogy' ?
            'border-l-4 dark:border-lime-400 border-emerald-700 text-emerald-600 dark:text-lime-500'
            :
            'text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'}>
            <Link href='/dashboard/catalogy' className="flex items-center p-2 pl-5  rounded-lg group">
              <LayoutDashboard />
              <span className="ms-5">Catalogy</span>
            </Link>
          </li>


          {
            SideBarLinks.map((item, i) => {
              const Icon = item.icon
              const ShowSideBorder = (id) => {
                setSideBoarder(id)
              }

              return (
                <li key={i}
                  className={item.link == usepath ?
                    'border-l-4 dark:border-lime-400 border-emerald-700 text-emerald-600 dark:text-lime-500'
                    :
                    'text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'}
                  onClick={() => ShowSideBorder(item.id)}
                >
                  <Link
                    href={item.link}
                    className="flex items-center p-2 pl-5  rounded-lg    group"
                  >
                    <Icon />
                    <span className="ms-5">{item.tittle}</span>
                  </Link>
                </li>)
            })
          }
        </ul>
        <button className="w-52 h-12 flex items-center gap-5  bg-green-700 hover:bg-green-800 text-white font-semibold rounded-xl my-6 mx-4">
          <LogOut className='ml-9 w-6 h-6' />
          Log Out
        </button>
      </div>
    </div>

  )
}

export default Sidebar