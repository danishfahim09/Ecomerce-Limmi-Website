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
      <DropdownTrigger className='text-gray-200'>
        <button className=" w-10 h-10 rounded-full flex items-center justify-center bg-green-600">
          {image ? (
            <Image
              width={200}
              height={200}
              src="/profile.jpg"
              alt='image'
              className=" w-10 h-10 rounded-full "
            />
          ) : (
            <div >
              {initials}
            </div>
          )}
        </button>
      </DropdownTrigger>

      <DropdownMenu aria-label="Static Actions">
        <DropdownItem key="new">

          <h2 className='border-b-1 border-white text-center pb-3 rounded-sm'>{name}</h2>

        </DropdownItem>
        <DropdownItem key="new">
          <Link href="/dashboard" className="flex gap-4  p-2">
            <LayoutDashboard className='w-5 h-6 ' />
            <span className='text-base '>Dashboard</span>
          </Link>
        </DropdownItem>
        <DropdownItem key="new">
          <Link href="/dashboard/profile" className='flex  gap-4  p-2'>
            <Cog className='w-5 h-6 ' />
            <span className='text-base '>Edit Profil</span>
          </Link >
        </DropdownItem>
        {role === "USER" && (
          <DropdownItem key="new">
            <Link href="/dashboard/orders" className='flex  gap-4  p-2'>
              <Cog className='w-5 h-6 ' />
              <span className='text-base '>My Orders</span>
            </Link >
          </DropdownItem>
        )}
        <DropdownItem key="new">
          <button className='flex  gap-4  p-2 ' onClick={handdleLougOut}>
            <LogOut className='w-5 h-6 ' />
            <span className='text-base'>Log Out</span>
          </button>
        </DropdownItem>
        <DropdownItem key="delete" className="text-danger" color="danger">
          Delete file
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}

export default UserAvater