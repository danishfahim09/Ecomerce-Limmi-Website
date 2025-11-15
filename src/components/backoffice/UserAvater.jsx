'use client'
import React from 'react'
import Image from 'next/image'
import { LogOut } from 'lucide-react'
import { LayoutDashboard } from 'lucide-react'
import { Cog } from 'lucide-react'
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/dropdown";

import { useRouter } from 'next/navigation'
import { signOut } from 'next-auth/react'
import Link from 'next/link'
import { generateInitials } from '@/lib/generateinitials'



function UserAvater({ user = {} }) {
  const { name, image } = user
  const initials = generateInitials(name)
  const role = user?.role
  const router = useRouter()
  async function handdleLougOut() {
    await signOut()
    router.push('/')
  }
  return (
    <Dropdown>
      <DropdownTrigger>
        <button className="w-10 h-10 rounded-full flex items-center justify-center bg-lime-600 hover:bg-lime-700 border-2 border-lime-500 dark:border-lime-400 text-white font-semibold shadow-md hover:shadow-lg transition-all">
          {image ? (
            <Image
              width={40}
              height={40}
              src={image || "/profile.jpg"}
              alt='profile'
              className="w-10 h-10 rounded-full object-cover"
            />
          ) : (
            <span className="text-sm">{initials}</span>
          )}
        </button>
      </DropdownTrigger>

      <DropdownMenu aria-label="User Menu" className="w-56">
        <DropdownItem key="name" className="p-0">
          <div className='border-b border-border text-center py-3 px-4'>
            <h2 className='text-foreground font-semibold'>{name}</h2>
            {role && (
              <span className='text-xs text-muted-foreground'>{role}</span>
            )}
          </div>
        </DropdownItem>
        <DropdownItem key="dashboard">
          <Link href="/dashboard" className="flex gap-3 items-center p-2 text-foreground hover:text-lime-600 dark:hover:text-lime-400 transition-colors">
            <LayoutDashboard className='w-4 h-4' />
            <span>Dashboard</span>
          </Link>
        </DropdownItem>
        <DropdownItem key="profile">
          <Link href="/dashboard/profile" className='flex gap-3 items-center p-2 text-foreground hover:text-lime-600 dark:hover:text-lime-400 transition-colors'>
            <Cog className='w-4 h-4' />
            <span>Edit Profile</span>
          </Link>
        </DropdownItem>
        {role === "USER" && (
          <DropdownItem key="orders">
            <Link href="/dashboard/orders" className='flex gap-3 items-center p-2 text-foreground hover:text-lime-600 dark:hover:text-lime-400 transition-colors'>
              <Cog className='w-4 h-4' />
              <span>My Orders</span>
            </Link>
          </DropdownItem>
        )}
        <DropdownItem key="logout">
          <button className='flex gap-3 items-center p-2 text-foreground hover:text-destructive transition-colors w-full text-left' onClick={handdleLougOut}>
            <LogOut className='w-4 h-4' />
            <span>Log Out</span>
          </button>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}

export default UserAvater