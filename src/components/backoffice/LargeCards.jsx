import React from "react";
import LargCard from "./LargCard";

function LargeCards({ sales }) {
  const totalSales = sales.reduce((acc, item) => acc + item.total, 0).toFixed(2) ?? 0
  const orders = [
    {
      period: "Today-Order",
      sales: 110000,
      color: "bg-orange-400",
      darkMode: "dark:bg-orange-700",
    },
    {
      period: "Yesterday-Order",
      sales: 130000,
      color: "bg-blue-400",
      darkMode: "dark:bg-blue-700",
    },
    {
      period: "This Month",
      sales: 300000,
      color: "bg-pink-400",
      darkMode: "dark:bg-pink-700",
    },
    {
      period: "All Time-Orders",
      sales: totalSales,
      color: "bg-purple-400",
      darkMode: "dark:bg-purple-700",
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

      {orders?.map((item, i) => {
        return (
          <LargCard className="bg-orange-700" key={i} data={item} />
        )
      })}
    </div>
  );
}

export default LargeCards;
