"use client";

import { UploadDropzone } from "@/lib/uploadingthings";
import { PencilIcon } from "lucide-react";
import Image from "next/image";
import toast from "react-hot-toast";

export default function ImageInput({
    lable,
    imageUrl,
    setimageUrl,
    className = "col-span-2",
    endPoint = "",
}) {
    return (
        <div className={className}>
            <main className="flex flex-col min-h-10 w-full  justify-between">
                <div className="flex justify-between mt-6">
                    <label htmlFor="lable" className="p-4">{lable}</label>
                    {imageUrl && (
                        <button
                            type="button"
                            onClick={() => setimageUrl("")}
                            className="flex flex-row gap-2 h-11 mt-4 pt-2 px-4 rounded-lg justify-center dark:bg-green-800 bg-black text-white
                            text-center">
                            <PencilIcon className="h-4 mt-1" />
                            <span>Change Image</span>
                        </button>
                    )}
                </div>

                {imageUrl ?
                    (<Image
                        src={imageUrl}
                        width={1000}
                        height={667}
                        className="w-full h-64 object-contain border-0 my-2"
                        alt="Item Image" />)
                    :
                    (
                        <UploadDropzone
                            endpoint={endPoint}
                            onClientUploadComplete={(res) => {
                                console.log(res)
                                setimageUrl(res[0].url); // Set the uploaded image URL
                                toast.success("Upload Completed")
                                console.log("Files: ", res);
                                console.log("Image Upload Complete")
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