"use client";
import Link from "next/link";
import { Modal } from "flowbite-react";
import { CornerDownLeft, Headphones, HelpCircle, MessageSquare, Share2, Truck } from "lucide-react";
import { useState } from "react";
import { ShareSocial } from 'react-share-social'


export default function ProductdShareButton({ urlToShare }) {
    const [openModal, setOpenModal] = useState(false);

    return (
        <>
            {/* <Button onClick={() => setOpenModal(true)}>Help</Button> */}

            <button onClick={() => setOpenModal(true)} className='flex items-center space-x-1 text-green-950 dark:text-white'>
                <Share2 />

            </button>

            <Modal show={openModal} size="md" className="mt-[20%] " onClose={() => setOpenModal(false)}>
                <Modal.Header>Share Tis Product With Others </Modal.Header>
                <ShareSocial
                    url={urlToShare}
                    socialTypes={['facebook', 'linkedin', 'whatsapp', 'email']}
                />

            </Modal>
        </>
    );
}
