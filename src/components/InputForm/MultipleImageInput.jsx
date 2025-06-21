"use client";

import { UploadDropzone } from "@/lib/uploadingthings";
import { PencilIcon, XCircle } from "lucide-react";
import Image from "next/image";
import toast from "react-hot-toast";

export default function MultipleImageInput({
    lable,
    imageUrls,
    setimageUrls = [],
    className = "col-span-2",
    endPoint = "",
}) {
    function handleImageRomove(imageIndex) {
        const updateImages = Array.isArray(imageUrls) ? imageUrls.filter((image, index) => index !== imageIndex) : []
        setimageUrls(updateImages)
    }
    return (
        <div className={className}>
            <main className="mb-4 flex flex-col min-h-10 w-full  justify-between">
                <div className="flex justify-between my-3">
                    <label htmlFor="lable" className=" dark:text-gray-300 text-slate-900 font-medium">
                        {lable}
                    </label>
                </div>

                {imageUrls.length > 0 ?
                    (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

                            {imageUrls?.map((imageUrl, i) => {
                                return (
                                    <div
                                        key={i}
                                        className="relative mb-6"
                                    >
                                        <button onClick={() => handleImageRomove(i)}
                                            className="absolute -top-1 -right-1 text-slate-900 rounded-full
                                          bg-slate-100">
                                            <XCircle className="text-red-500" />
                                        </button>
                                        <Image
                                            src={imageUrl}
                                            width={1000}
                                            height={600}
                                            className="w-full h-64 object-cover  "
                                            alt="Item Image" />
                                    </div>
                                )
                            })}
                        </div>
                    )
                    :
                    (
                        <UploadDropzone
                            endpoint={endPoint}
                            onClientUploadComplete={(res) => {
                                toast.success("Upload Completed")
                                console.log(res)
                                const urls = res.map((item) => item.url)
                                setimageUrls(urls)
                            }}
                            onUploadError={(error) => {
                                // Do something with the error.
                                alert(`ERROR! ${error.message}`);
                                toast.error("Image Upload Failed, Please Try Again")
                            }}
                        />
                    )}
            </main>
        </div>
    );
}