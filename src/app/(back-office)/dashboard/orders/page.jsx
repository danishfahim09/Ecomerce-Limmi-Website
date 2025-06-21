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
  if (orders.length === 0 || !orders) {
    return <p>No Orders Yet</p>
  }
  const userOrders =Array.isArray(orders) ? orders.filter((order) => order.userId === userId):[]
  console.log("this is my order ", orders)
  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20">
      <div className="px-4 m-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-6xl mx-auto">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">Your Order</h1>
            <p className="mt-2 text-sm font-normal text-gray-600">Check the status of recent and old orders & discover more products</p>
          </div>

          <ul className="mt-8 space-y-5 lg:mt-12 sm:space-y-6 lg:space-y-10">
            {orders?.map((order, i) => {
              return <OrderCard key={i} order={order} />
            })}

          </ul>
        </div>
      </div>
    </section>
  )
}

export default page