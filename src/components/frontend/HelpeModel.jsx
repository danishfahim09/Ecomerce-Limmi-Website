"use client";
import Link from "next/link";
import { Button, Modal } from "flowbite-react";
import { ArrowBigLeft, CornerDownLeft, Headphones, HelpCircle, MessageCircle, MessageCircleCode, MessageSquare, Truck } from "lucide-react";
import { useState } from "react";

export default function HelperModel() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      {/* <Button onClick={() => setOpenModal(true)}>Help</Button> */}

      <button onClick={() => setOpenModal(true)} className='flex items-center space-x-1 text-green-950 dark:text-white'>
        <HelpCircle />
        <span>Help</span>
      </button>

      <Modal show={openModal} size="md" className="mt-[20%]" onClose={() => setOpenModal(false)}>
        <Modal.Header>Need Help Talk Our D=Help Desk</Modal.Header>
        <div className="grid items-center  grid-cols-2 gap-4 gap-y-12 py-8">
          <Link href="/"  className='flex gap-1 items-center justify-center space-x-1 text-green-950 dark:text-white'>
            <Headphones className="w-7 h-7 p-[4px]  bg-lime-200 rounded-xl text-green-600"/>
            <span>Call: 349 93934 3</span>
          </Link>
          <Link href="/" className='flex gap-1  items-center justify-center space-x-1 text-green-950 dark:text-white'>
            <Truck className="w-7 h-7 p-[4px]  bg-lime-200 rounded-xl text-green-600"/>
            <span>Track Your Order</span>
          </Link>
          <Link href="/"  className='flex gap-1 items-center justify-center space-x-1 text-green-950 dark:text-white'>
            <CornerDownLeft className="w-7 h-7 p-[4px] bg-lime-200 rounded-xl text-green-600"/>
            <span>Return & Refunds</span>
          </Link>
          <Link href="/"  className='flex gap-1 items-center justify-center space-x-1 text-green-950 dark:text-white'>
           <MessageSquare className="w-7 h-7 p-[4px]  bg-lime-200 rounded-xl text-green-600"/>
            <span>Chat With  Us</span>
          </Link>

        </div>

      </Modal>
    </>
  );
}
