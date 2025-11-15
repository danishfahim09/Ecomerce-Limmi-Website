export const dynamic = 'force-dynamic'
import React from 'react'
import OrderCard from '@/components/Order/OrderCard'
import { getData } from '@/lib/getData'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/authOptions'

async function page() {
  //fetch order by UserID
  const orders = await getData(`orders`)

  const session = await getServerSession(authOptions)
  if (!session) return
  // Filter by User Id
  const userId = session?.user?.id
  const userOrders = Array.isArray(orders) ? orders.filter((order) => order.userId === userId) : []
  
  if (userOrders.length === 0 || !userOrders) {
    return (
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-semibold text-foreground sm:text-3xl">Your Orders</h1>
          <p className="mt-2 text-sm text-muted-foreground">Check the status of recent and old orders & discover more products</p>
        </div>
        <div className="flex flex-col items-center justify-center py-16">
          <p className="text-lg text-muted-foreground">No Orders Yet</p>
        </div>
      </div>
    )
  }
  console.log("this is my order ", orders)
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-foreground sm:text-3xl">Your Orders</h1>
        <p className="mt-2 text-sm text-muted-foreground">Check the status of recent and old orders & discover more products</p>
      </div>

      <ul className="space-y-6">
        {userOrders?.map((order, i) => {
          return <OrderCard key={i} order={order} />
        })}
      </ul>
    </div>
  )
}

export default page