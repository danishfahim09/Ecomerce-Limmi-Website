import { getServerSession } from 'next-auth'
import React from 'react'
import { authOptions } from '@/lib/authOptions'

export  default async function page() {
    const session =await  getServerSession(authOptions)
    if (!session) return;
    const {user} = session 
  return (
    <div>wellcome {user?.name}</div>
  )
}

 