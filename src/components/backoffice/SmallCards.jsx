import React from "react";
import SmallCard from "./SmallCard";
import { ShoppingCart } from "lucide-react"
import { RefreshCcw } from "lucide-react";
import { CheckCheck } from "lucide-react";
import { Loader2 } from "lucide-react";

function SmallCards() {
  const orders = [
    {
      tittle: "Total-Order",
      number: 500,
      iconBg: "dark:bg-orange-700",
      darkMode: "bg-orange-300",
      icon: ShoppingCart,
    },
    {
      tittle: "Orders-Pending",
      number: 300,
      iconBg: "dark:bg-blue-600",
      darkMode: "bg-blue-300",
      icon: Loader2,
    },
    {
      tittle: "Orders-Processing",
      number: 200,
      iconBg: "dark:bg-pink-600",
      darkMode: "bg-pink-300",
      icon: RefreshCcw,
    },
    {
      tittle: "Orders Delivers",
      number: 100,
      iconBg: "dark:bg-purple-600",
      darkMode: "bg-purple-300",
      icon: CheckCheck,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5">

      {orders.map((item, i) => {
        return (
          <SmallCard data={item} key={i} />
        )
      })}
    </div>
  );
}

export default SmallCards;
