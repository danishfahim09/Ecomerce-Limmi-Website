"use client"
import Link from 'next/link'
import React, { use, useState } from 'react'
import { LayoutDashboard, Flower, Users, Store, Settings, Truck, User, LogOut, Contact2, Minus, ChevronRight, LayoutList, ChevronDownCircle, ChevronDown, Building2, Wallet2Icon, WalletCards } from 'lucide-react'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { signOut, useSession } from 'next-auth/react'

function Sidebar({ showSideBar }) {
  const router = useRouter()
  const [openMenue, setopenMenue] = useState(false);
  const usepath = usePathname();
  const { data: session, status } = useSession()

  if (status === "loading") {
    return <p>Loading...</p>
  }

  const role = session?.user?.role;


  let SideBarLinks = [
    {
      id: 1,
      tittle: 'Coustemers',
      icon: Users,
      link: '/dashboard/customers'
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
      tittle: 'Sales',
      icon: Truck,
      link: '/dashboard/sales'
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
    // {
    //   id: 8,
    //   tittle: 'Setting',
    //   icon: Settings,
    //   link: '/dashboard/setting'
    // },
    // {
    //   id: 9,
    //   tittle: 'Online Store',
    //   icon: Store,
    //   link: '/dashboard/onlineStore'
    // },
  ]

  let CatalogLinks = [
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
      tittle: 'Store Banner',
      icon: Truck,
      link: '/dashboard/banners'
    },
  ]
  if (role === "FARMER") {
    SideBarLinks = [
      {
        tittle: 'Coustomers',
        icon: Truck,
        link: '/dashboard/customers'
      },
      {
        tittle: 'Markets',
        icon: Truck,
        link: '/dashboard/markets'
      },
      {
        tittle: 'Farmers',
        icon: Truck,
        link: '/dashboard/farmers'
      },
      {
        tittle: 'Orders',
        icon: WalletCards,
        link: '/dashboard/orders'
      },
      {
        tittle: 'Sales',
        icon: Settings,
        link: '/dashboard/sales'
      },
      {
        tittle: 'Our Staf',
        icon: Settings,
        link: '/dashboard/staff'
      },
      {
        tittle: 'Limi-Comunity',
        icon: Store,
        link: '/dashboard/comunity'
      },

    ]
    CatalogLinks = [
      {
        id: 2,
        tittle: 'Product',
        icon: Contact2,
        link: '/dashboard/products'
      },
      {
        id: 2,
        tittle: 'Couponse',
        icon: Contact2,
        link: '/dashboard/couponse'
      },

    ]
  }
  if (role === "USER") {
    SideBarLinks = [
      {
        tittle: 'Sales',
        icon: Truck,
        link: '/dashboard/sales'
      },
      {
        tittle: 'Profile',
        icon: Truck,
        link: '/dashboard/profile'
      },
      {
        tittle: 'Online Store',
        icon: Store,
        link: '/dashboard/onlineStore'
      },
      {
        tittle: 'Online Store',
        icon: Store,
        link: '/dashboard/onlineStore'
      },
    ]
    CatalogLinks = []
  }

  async function handdleLougOut() {
    await signOut({ callbackUrl: '/' })
    router.push('/')
  }

  return (
    <div className={showSideBar ?
      'overflow-y-scroll block sm:hidden z-10 p-4 fixed w-64 bg-card border-r border-border text-foreground space-y-6 h-screen sm:w-64 top-0 left-0'
      :
      "hidden sm:block fixed bg-card border-r border-border text-foreground space-y-2 h-screen sm:w-64 top-0 left-0 overflow-y-scroll"} >
      <Image
        className={showSideBar ? 'ml-4 text-center mt-20 p-2 ' : 'ml-4 text-center mt-5 p-2 '}
        src='/applogo.png'
        width={150}
        height={150}
        alt="App Main Logo"
      />
      <div className="relative  ">
        <ul className={showSideBar ? "space-y-8 font-medium mt-1" : "space-y-10 font-medium mt-12"}>

          {/*Side Bare Items*/}
          <li className={usepath == '/dashboard' ?
            'border-l-4 border-lime-500 bg-lime-50 dark:bg-lime-900/20 text-lime-700 dark:text-lime-400'
            :
            'text-foreground hover:bg-muted/50 transition-colors'}>
            <Link href='/dashboard' className="flex items-center p-1 pl-5 rounded-lg group">
              <Flower className="w-5 h-5" />
              <span className="ms-5">Dashboard</span>
            </Link>
          </li>

          {/*Side Bare CataLog And Dropdown Items*/}

          {CatalogLinks.length > 0 && (
            <Collapsible>
              <CollapsibleTrigger>
                {/*CataLog*/}
                <div className="flex items-center p-1 pl-5 rounded-lg text-foreground hover:bg-muted/50 transition-colors cursor-pointer"
                  onClick={() => { setopenMenue(!openMenue) }}
                >
                  <LayoutDashboard className="w-5 h-5" />
                  <span className="ms-5">Catalog</span>
                  {openMenue ? (<ChevronDown className='ml-4 w-4 h-4' />) : (<ChevronRight className='ml-4 w-4 h-4' />)}
                </div>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className='rounded-lg bg-muted/30 mx-3 mt-4 p-2'>
                  {
                    CatalogLinks?.map((item, i) => {
                      const Icon = item.icon
                      return (
                        <Link key={i}
                          href={item.link} className={usepath == item.link ?
                            'border-l-4 border-lime-500 bg-lime-50 dark:bg-lime-900/20 text-lime-700 dark:text-lime-400 flex gap-2 p-2 rounded transition-colors'
                            :
                            'text-foreground hover:bg-muted/50 flex gap-2 p-2 rounded transition-colors'}
                        >
                          <Icon className='w-4 h-4' />
                          <span className="text-sm">{item.tittle}</span>
                        </Link>
                      )
                    })
                  }
                </div>
              </CollapsibleContent>
            </Collapsible>
          )
          }



          {/*Side Bare*/}
          {
            SideBarLinks?.map((item, i) => {
              const Icon = item.icon
              const ShowSideBorder = (id) => {
                setSideBoarder(id)
              }

              return (
                <li key={i}
                  className={item.link == usepath ?
                    'border-l-4 border-lime-500 bg-lime-50 dark:bg-lime-900/20 text-lime-700 dark:text-lime-400'
                    :
                    'text-foreground hover:bg-muted/50 transition-colors'}
                >
                  <Link
                    href={item.link}
                    className="flex items-center p-1 pl-5 rounded-lg"
                  >
                    <Icon className="w-5 h-5" />
                    <span className="ms-5">{item.tittle}</span>
                  </Link>
                </li>)
            })
          }
        </ul>
        <button onClick={handdleLougOut} className={`${openMenue ? "fixed bottom-1" : "bottom-3"} w-48 h-12 flex items-center justify-center gap-2 bg-lime-600 hover:bg-lime-700 dark:bg-lime-600 dark:hover:bg-lime-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 my-6`}>
          <LogOut className='w-5 h-5' />
          Log Out
        </button>
      </div>
    </div>
  )
}

export default Sidebar