import { ChevronRight, Hourglass } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

function OverveiwCards({ sales, products }) {
    const productCound = products.length.toString().padStart(2, "0");
    const salesCount = sales.length.toString().padStart(2, "0");
    const totalSales = sales.reduce((acc, item) => acc + item.total, 0);
    const analytics = [
        {
            title: "Products",
            count: productCound,
            unit: "",
            link: "/dashboard/products",
            icon: ""
        }, {
            title: "Sales",
            count: salesCount,
            unit: "",
            link: "/dashboard/sales",
            icon: ""
        }, {
            title: "Total Revenue",
            count: totalSales,
            unit: "",
            link: "/dashboard/sales",
            icon: ""
        }
    ]
    return (
        <div className='max-w-7xl grid grid-cols-4 gap-10 mx-auto'>
            {
                analytics.map((item, i) => {
                    return (
                        <div key={i} className="border border-slate-700 rounded-xl ">
                            <div className="flex items-center justify-between px-4 py-3">
                                <h2>{item.title}</h2>
                                <div className="w-12 h-12 rounded-full bg-[rgb(53,54,130)] flex items-center justify-center">
                                    <Hourglass className='w-5 h-5   ' />
                                </div>

                            </div>
                            <h2 className='px-4 pb-8 text-xl ml-1'>{item.count}</h2>
                            <div className="border-t border-slate-700 hover:bg-slate-800 rounded-b-xl">
                                <Link href="#" className="flex items-center justify-between p-4 ">
                                    <p>view report</p>
                                    <ChevronRight />
                                </Link>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default OverveiwCards