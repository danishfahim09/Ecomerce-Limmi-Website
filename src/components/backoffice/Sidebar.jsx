"use client"

import Link from 'next/link'
import React, { use, useState } from 'react'
import { LayoutDashboard, Flower, Users, Store, Settings, Truck, User, LogOut, Contact2, Minus, ChevronRight, LayoutList, ChevronDownCircle, ChevronDown, Building2, Wallet2Icon, WalletCards } from 'lucide-react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'


import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"



function Sidebar({showSideBar}) {
  const [openMenue, setopenMenue] = useState(false)
  const usepath = usePathname()
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
      tittle: 'Limmi-Comunity',
      icon: Building2,
      link: '/dashboard/comunity'
    },
    {
      id: 7,
      tittle: 'Wallet',
      icon: WalletCards,
      link: '/dashboard/wallet'
    },
    {
      id: 8,
      tittle: 'Setting',
      icon: Settings,
      link: '/dashboard/setting'
    },
    {
      id: 9,
      tittle: 'Online Store',
      icon: Store,
      link: '/dashboard/onlineStore'
    },

  ]

  const CatalogLinks = [
    {
      id: 1,
      tittle: 'Products',
      icon: LayoutList,
      link: '/dashboard/products'
    },
    {
      id: 2,
      tittle: 'Catagories',
      icon: Store,
      link: '/dashboard/catagories'
    },
    {
      id: 3,
      tittle: 'Couponse',
      icon: Contact2,
      link: '/dashboard/couponse'
    },
    {
      id: 4,
      tittle: 'Banners',
      icon: Truck,
      link: '/dashboard/banners'
    },
    {
      id: 5,
      tittle: 'Attributes',
      icon: User,
      link: '/dashboard/attributes'
    },

  ]

  return (
    <div  className={showSideBar ? 
    'overflow-y-scroll block sm:hidden  p-4 fixed w-64 dark:text-slate-800 dark:bg-slate-700 bg-white text-gray-700 space-y-6 h-screen sm:w-64  top-0 left-0 border-2 dark:border-gray-700 border-gray-100"'
    :
    "hidden sm:block  fixed dark:text-slate-800 dark:bg-slate-700 bg-white text-gray-700 space-y-2 h-screen sm:w-64  top-0 left-0 border-2 dark:border-gray-700 border-gray-100 overflow-y-scroll"} >
      <Image
        className={showSideBar ? 'ml-4 text-center mt-20 p-2 ':'ml-4 text-center mt-5 p-2 '}
        src='/applogo.png'
        width={150}
        height={150}
        alt="App Main Logo"
      />
      <div className="relative  ">
        <ul className={showSideBar ?"space-y-8 font-medium mt-1":"space-y-10 font-medium mt-12"}>

          {/*Side Bare Items*/}
          <li className={usepath == '/dashboard' ?
            'border-l-4 dark:border-lime-400 border-emerald-700 text-emerald-600 dark:text-lime-500'
            :
            'text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'}>
            <Link href='/dashboard' className="flex items-center p-1 pl-5 rounded-lg group">
              <Flower />
              <span className="ms-5">Dashboard</span>
            </Link>
          </li>

          {/*Side Bare CataLog And Dropdown Items*/}
          <Collapsible>
            <CollapsibleTrigger>
              {/*CataLog*/}
              <div className="flex items-center p-1 pl-5 rounded-lg  dark:text-gray-300"
                onClick={() => { setopenMenue(!openMenue) }}
                >
                <LayoutDashboard />
                <span className="ms-5">Catalogy</span>
                {openMenue ?  (<ChevronDown className='ml-4' />) :  (<ChevronRight className='ml-4' />)}
              </div>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className='rounded-lg dark:bg-black dark:text-gray-600  mx-3 mt-4'>
                {
                  CatalogLinks.map((item, i) => {
                    return (
                      <Link key={i}
                        href={item.link} className={usepath == item.link ?
                          'border-l-4 dark:border-orange-400 border-emerald-700 text-emerald-600 dark:text-orange-400 flex gap-2 p-1 '
                          :
                          'text-gray-900 dark:text-gray-300 dark:hover:text-gray-400  flex gap-2 p-1 '}
                      >
                        <Minus className='' />
                        <span>{item.tittle}</span>
                      </Link>
                    )
                  })
                }
              </div>
            </CollapsibleContent>
          </Collapsible>

          {/*Side Bare*/}
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
                    'text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}
                >
                  <Link
                    href={item.link}
                    className="flex items-center p-1 pl-5 rounded-lg text-lg"
                  >
                    <Icon />
                    <span className="ms-5">{item.tittle}</span>
                  </Link>
                </li>)
            })
          }

        </ul>
        <button className={openMenue ?
          "fixed   bottom-1  w-48 h-12 flex items-center gap-5  bg-green-700 hover:bg-green-800 text-white font-semibold rounded-xl my-6 " 
          :
          " bottom-3   w-48 h-12 flex items-center gap-5  bg-green-700 hover:bg-green-800 text-white font-semibold rounded-xl my-6 "}
          >
          <LogOut className='ml-9 w-6 h-6' />
          Log Out
        </button>
      </div>
    </div>
  )
}

export default Sidebar