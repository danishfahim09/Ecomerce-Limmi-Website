import React from "react";
import LargCard from "./LargCard";

function LargeCards() {
  const orders = [
    {
      period: "Today-Order",
      sales: 110000,
      color: "bg-orange-700",
    },
    {
      period: "Yesterday-Order",
      sales: 130000,
      color: "bg-blue-600",
    },
    {
      period: "This Month",
      sales: 300000,
      color: "bg-pink-600",
    },
    {
      period: "All Time-Orders",
      sales: 50000,
      color: "bg-purple-600",
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      
      {orders.map((item,i)=>{
        return(
          <LargCard className="bg-orange-700" key={i} data={item}/>
        )
      })}
    </div>
  );
}

export default LargeCards;
