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
        <div className="container mx-auto px-6 py-12">
            <div className="text-center mb-8">
                <h1 className="text-3xl font-semibold text-foreground mb-4">
                    Choose A Plan Which Suits You
                </h1>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    Discover simplicity in pricing with us. Our straightforward and competitive rates ensure you get the best value. No hidden fees, just transparent options to meet your needs. Choose clarity, choose Limmi Ecommerce.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                {plans?.map((plan, i) => (
                    <div key={i} className={`w-full max-w-sm border rounded-lg shadow-md dark:shadow-lg flex flex-col transition-all duration-200 hover:shadow-lg dark:hover:shadow-xl ${plan.isRecommendend ? 'border-lime-500 bg-lime-50/50 dark:bg-lime-900/10' : 'border-border bg-card'}`}>
                        <div className="border-b border-border py-6 px-6">
                            <div className="flex items-center justify-between mb-3">
                                <span className="text-lg font-semibold text-foreground">{plan.title}</span>
                                {plan.isRecommendend && (
                                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-lime-600 text-white border border-lime-700">
                                        Recommended
                                    </span>
                                )}
                            </div>
                            <p className="text-muted-foreground my-3 text-sm">{plan.description}</p>
                            <h2 className="text-3xl font-bold text-lime-600 dark:text-lime-400 my-2">
                                {plan.price}
                                <span className="text-lg font-normal text-muted-foreground">/mo</span>
                            </h2>
                        </div>

                        <ul role="list" className="space-y-3 my-6 mx-6 flex-1">
                            {plan.features?.map((item, i) => (
                                <li key={i} className="flex items-center gap-2">
                                    <svg className="shrink-0 w-5 h-5 text-lime-600 dark:text-lime-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                    </svg>
                                    <span className="text-sm font-medium text-foreground">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        <div className="flex items-center justify-center mt-auto mx-6 mb-6">
                            <Link 
                                href={`/register-farmer?plan=${plan.title.toLowerCase()}`} 
                                className="w-full text-center text-white bg-lime-600 hover:bg-lime-700 dark:bg-lime-600 dark:hover:bg-lime-700 font-medium rounded-lg text-sm px-5 py-2.5 shadow-md hover:shadow-lg transition-all duration-200"
                            >
                                Get Started
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
