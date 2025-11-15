import React from 'react'
import { ConvertIsoDateToNormal } from '@/lib/ConvertIsoDateToNormal'
import Image from 'next/image'
import { generateSlug } from '@/lib/generateSlug'
import Link from 'next/link'

export default function OrderCard({ order }) {
    const orderCreationDate = ConvertIsoDateToNormal(order.creaatedAt)
    const subTotal = order?.orderItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)
    if (order.orderItems.length === 0) {
        return null
    }
    console.log(order, "this is my orders ")
    return (
        <li className="overflow-hidden bg-card border border-border rounded-lg shadow-md dark:shadow-lg">
            <div className="lg:flex">
                <div className="w-full border-b border-border lg:max-w-xs lg:border-b-0 lg:border-r bg-muted/30">
                    <div className="px-4 py-6 sm:p-6 lg:p-8">
                        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-1">
                            <div>
                                <p className="text-sm font-medium text-muted-foreground">Order Number</p>
                                <p className="text-sm font-bold text-foreground mt-0.5">#{order.orderNumber}</p>
                            </div>

                            <div>
                                <p className="text-sm font-medium text-muted-foreground">Date</p>
                                <p className="text-sm font-bold text-foreground mt-0.5">{orderCreationDate}</p>
                            </div>

                            <div>
                                <p className="text-sm font-medium text-muted-foreground">Total Amount</p>
                                <p className="text-sm font-bold text-foreground mt-0.5">UGX {subTotal}</p>
                            </div>

                            <div>
                                <p className="text-sm font-medium text-muted-foreground">Order Status</p>
                                <div className="mt-0.5 flex items-center">
                                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${
                                        order.orderStatus === 'DELIVERED' 
                                            ? 'bg-lime-100 text-lime-700 dark:bg-lime-900/30 dark:text-lime-400 border border-lime-200 dark:border-lime-800'
                                            : order.orderStatus === 'PENDING'
                                            ? 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400 border border-orange-200 dark:border-orange-800'
                                            : 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 border border-blue-200 dark:border-blue-800'
                                    }`}>
                                        {order.orderStatus}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex-1 px-4 py-6 sm:p-6 lg:p-8">
                    <ul className="space-y-7">
                        {order.orderItems.length > 0 ? order.orderItems?.map((item, i) => {
                            const slug = generateSlug(item.title)
                            return (
                                <li key={i} className="relative flex pb-10 sm:pb-0">
                                    <div className="flex-shrink-0">
                                        <Image
                                            width={200}
                                            height={200}
                                            src={item.imageUrl}
                                            alt={item.title}
                                            className="object-cover rounded-lg w-28 h-28 border border-border shadow-sm"
                                        />
                                    </div>

                                    <div className="flex flex-col justify-between flex-1 ml-5">
                                        <div className="sm:grid sm:grid-cols-2 sm:gap-x-5">
                                            <div>
                                                <p className="text-base font-bold text-foreground">{item.title}</p>
                                            </div>

                                            <div className="mt-4 sm:mt-0 flex items-center justify-between">
                                                <p className="text-sm font-medium text-muted-foreground">Qty: {item.quantity}</p>
                                                <p className="text-base font-bold text-left text-foreground sm:text-right">UGX {item.price}</p>
                                            </div>
                                        </div>

                                        <div className="absolute bottom-0 left-0 sm:relative">
                                            <div className="flex space-x-5">
                                                <Link href={`/product/${slug}`} title={item.title} className="p-1 -m-1 text-sm font-medium text-muted-foreground transition-all duration-200 rounded hover:text-foreground hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring"> View Product </Link>
                                                <span className="text-border"> | </span>
                                                <Link href="#" title="" className="p-1 -m-1 text-sm font-medium text-muted-foreground transition-all duration-200 rounded hover:text-foreground hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring"> Similar Product </Link>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            )
                        }) : ""

                        }
                    </ul>

                    <hr className="mt-8 border-border" />

                    <div className="flex items-center mt-8 space-x-5">
                        <button
                            type="button"
                            className="inline-flex items-center justify-center px-4 py-2.5 text-sm font-medium text-foreground transition-all duration-200 bg-background border border-border rounded-md shadow-sm hover:shadow-md hover:bg-muted focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring"
                        >
                            View Order
                        </button>

                        <Link
                            href={`/dashboard/orders/${order.id}/invoice`}
                            className="inline-flex items-center justify-center px-4 py-2.5 text-sm font-medium text-foreground transition-all duration-200 bg-background border border-border rounded-md shadow-sm hover:shadow-md hover:bg-muted focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring"
                        >
                            View Invoice
                        </Link>
                    </div>
                </div>
            </div>
        </li >
    )
}
