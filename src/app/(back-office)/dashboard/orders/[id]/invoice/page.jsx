
import SalesInvoice from "@/components/Order/SalesInvoice";
import React from "react";
import { getData } from '@/lib/getData'

export default async function page({ params: { id } }) {
  const order = await getData(`orders/${id}`)
  console.log(order)
  return (
    <div className="flex flex-col">
      {/* <InvoiceDownloadButton/> */}
      <SalesInvoice order={order}/>
    </div>
  );
}