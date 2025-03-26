import React from "react";
import SmallCard from "./SmallCard";
import { ShoppingCart } from "lucide-react"
import { RefreshCcw } from "lucide-react";
import { CheckCheck } from "lucide-react";
import { Loader2 } from "lucide-react";

function SmallCards({ orders }) {
  const status = {
    pending: "PENDING",
    processing: "PROCESSING",
    shipping: "SHIPPED",
    deliverid: "DELIVERED",
    canceling: "CANCELED",
  }
  function getOrderCountingByStatus(status) {
    const filterdOrders = orders.filter((order) => order.orderStatus === status)
    const count = filterdOrders.length.toString().padStart(2, "0")
    return count
  }
  const ordersCount = orders.length.toString().padStart(2, "0")
  const pendingOrdersCount = getOrderCountingByStatus(status.pending)
  const processingOrdersCount = getOrderCountingByStatus(status.processing)
  const deliveredOrdersCount = getOrderCountingByStatus(status.deliverid)

  const orderStatus = [
    {
      tittle: "Total-Order",
      number: ordersCount,
      iconBg: "dark:bg-orange-700",
      darkMode: "bg-orange-300",
      icon: ShoppingCart,
    },
    {
      tittle: "Orders-Pending",
      number: pendingOrdersCount,
      iconBg: "dark:bg-blue-600",
      darkMode: "bg-blue-300",
      icon: Loader2,
    },
    {
      tittle: "Orders-Processing",
      number: processingOrdersCount,
      iconBg: "dark:bg-pink-600",
      darkMode: "bg-pink-300",
      icon: RefreshCcw,
    },
    {
      tittle: "Orders Delivers",
      number: deliveredOrdersCount,
      iconBg: "dark:bg-purple-600",
      darkMode: "bg-purple-300",
      icon: CheckCheck,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5">

      {orderStatus.map((item, i) => {
        return (
          <SmallCard data={item} key={i} />
        )
      })}
    </div>
  );
}

export default SmallCards;
