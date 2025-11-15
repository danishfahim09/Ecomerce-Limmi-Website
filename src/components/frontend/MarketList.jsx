export const dynamic = "force-dynamic";
import React from "react";
import MarketCarousole from "@/components/frontend/MarketCarousole";
import { getData } from "@/lib/getData";

async function MarketList() {
  const markets = await getData("markets");

  return (
    <div className="py-8">
      {/*Market Page Carousel*/}
      <div className="bg-white dark:bg-gray-800 text-center rounded-lg p-6 border border-gray-200 dark:border-gray-700 shadow-lg dark:shadow-md">
        <h2 className="text-gray-900 dark:text-gray-100 text-2xl font-bold mb-6">
          Shop By Market
        </h2>
        <MarketCarousole markets={markets} />
      </div>
    </div>
  );
}

export default MarketList;
