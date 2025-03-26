import Link from 'next/link'
import React from 'react'

export default function Page() {
    const plans = [
        {
            title: "Free",
            isRecommendend: false,
            description: "+5% transaction fee its good for starter",
            price: "$0",
            features: ["all features", "unlimited Products", "Unlimited revenue"],
        },
        {
            title: "Silver",
            isRecommendend: true,
            description: "+2% transaction fee. its good if your revenue is above $500",
            price: "$20",
            features: ["all features", "unlimited Products", "Unlimited revenue"],
        },
        {
            title: "Gold",
            isRecommendend: false,
            description: "No transaction fee. Good if you are earning more than $5000 in revenue",
            price: "$90",
            features: ["all features", "unlimited Products", "Unlimited revenue"],
        },
    ];
     
    return (
        <div className="p-6">
            <button className='text-black dark:text-black text-center text-sm mt-2 rounded-md bg-slate-300 py-1 px-3'>
                Choose A Plan Which Suits You
            </button>
            <br />
            <button className='max-w-2xl text-black dark:text-white text-center text-sm mt-2 rounded-md py-1 px-3'>
                Discover simplicity in pricing with us. Our straightforward and competitive rates ensure you get the best value. No hidden fees, just transparent options to meet your needs. Choose clarity, choose Limmi Ecommerce.
            </button>

            <div className="grid grid-cols-3 gap-6 my-6">
                {plans.map((plan, i) => (
                    <div key={i} className="w-full max-w-sm border border-gray-300 rounded-lg shadow-sm dark:border-gray-200 flex flex-col">
                        <div className="border-b border-gray-200 py-4 px-5">
                            <div className="flex items-center justify-between">
                                <span className="text-md font-semibold">{plan.title}</span>
                                {plan.isRecommendend && (
                                    <button className="relative inline-flex items-center justify-center overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                                        <span className="relative px-2 py-1 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                                            Recommended
                                        </span>
                                    </button>
                                )}
                            </div>
                            <p className="text-gray-400 my-3 text-sm">{plan.description}</p>
                            <h2 className="text-3xl text-lime-500 my-2">
                                {plan.price}
                                <span className="text-medium text-slate-400">/mo</span>
                            </h2>
                        </div>

                        <ul role="list" className="space-y-4 my-6 mx-4">
                            {plan.features.map((item, i) => (
                                <li key={i} className="flex items-center">
                                    <svg className="shrink-0 w-4 h-4 text-lime-700 dark:text-lime-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                    </svg>
                                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        {/* Dynamic Link based on Plan */}
                        <div className="flex items-center justify-center mt-auto mx-7 my-6">
                            <Link href={`/register-farmer?plan=${plan.title.toLowerCase()}`} className="text-white bg-lime-700 hover:bg-lime-800 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-900 font-medium rounded-3xl text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">
                                Get Started
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
