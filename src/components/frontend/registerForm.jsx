"use client";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import SubmitButton from "../InputForm/SubmitButton";
import TextInput from "../InputForm/TextInput";

export default function RegisterForm({ role = "USER" }) {
    const router = useRouter(); // redirect on the client side
    const searchParams = useSearchParams()
    const plan = searchParams.get("plan")
    console.log(plan,"this is my plan")
    const {
        register,
        handleSubmit,
        reset,
        defaultValue,
        formState: { errors },
    } = useForm();
    const [loading, setLoading] = useState(false);
    const [emailErr, setEmailErr] = useState("");

    async function onSubmit(data) {
        data.plan = plan
        console.log(data)
        try {
            console.log(data);
            setLoading(true);
            const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
            const response = await fetch(`${baseUrl}/api/users`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const responseData = await response.json();
            console.log(response)

            if (response.ok) {
                console.log('response data is coming here', responseData)
                setLoading(false);

                toast.success("User Created Successfully");
                reset();
                //if role = user => home
                //if role => farmer => onboarding
                //const  userRole = responseData.data.role
                if (role === "USER") {
                    router.push("/")
                } else {
                    const  { data} =  responseData
                    router.push(`/VerifyEmail?userId=${data.id}`);
                }

            } else {
                setLoading(false);
                if (response.status === 409) {
                    setEmailErr("User with this Email already exists");
                    toast.error("User with this Email already exists");
                } else {
                    // Handle other errors
                    console.error("Server Error:", responseData.error);
                    toast.error("Oops Something Went wrong");
                }
            }
        } catch (error) {
            setLoading(false);
            console.error("Network Error:", error);
            toast.error("Something Went wrong, Please Try Again");
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className=" ">
            <TextInput
                lable=""
                name="role"
                register={register}
                errors={errors}
                type="hidden"
                defaultvalue={role}
                className="sm:col-span-2 mt-3"
            />
            <TextInput
                lable="Your Full Name"
                name="name"
                register={register}
                errors={errors}
                type="text"

                className="sm:col-span-2 mt-3"
            />
            <TextInput
                lable="Email Eddress"
                name="email"
                register={register}
                errors={errors}
                type="email"
                className="sm:col-span-2 mt-3"
            />
            {emailErr && <small className="text-red-800 mt-4">{emailErr}</small>}
            <TextInput
                lable="Password"
                name="password"
                register={register}
                errors={errors}
                type="password"
                className="sm:col-span-2 mt-3"
            />
            <SubmitButton
                isLoding={loading}
                ButtonTittle='Register'
                loddingButtonTiittle="Creating Please Wait"
            />
            <div className="flex items-center ">
                <div className="w-full bg-slate-500 h-[1px]"></div>
                <span className="mx-2">or</span>
                <div className="w-full bg-slate-500 h-[1px]"></div>
            </div>
            <div className="flex justify-between gap-2 py-5">
                <p className="  text-[0.75rem] font-light text-gray-500 dark:text-gray-400">
                    Already have an account?{" "}
                    <Link
                        href="/login"
                        className="font-medium text-purple-600 hover:underline dark:text-purple-500"
                    >
                        Login
                    </Link>
                </p>
                {role === "USER" ? (
                    <p className="text-[0.75rem] font-light text-gray-500 dark:text-gray-400">
                        Are you a Farmer?{" "}
                        <Link
                            href="/farmer-pricing"
                            className="font-medium text-purple-600 hover:underline dark:text-purple-500"
                        >
                            Register Here
                        </Link>
                    </p>
                ) : (
                    <p className="text-[0.75rem] font-light text-gray-500 dark:text-gray-400">
                        Are you a  User?{" "}
                        <Link
                            href="/register"
                            className="font-medium text-purple-600 hover:underline dark:text-purple-500"
                        >
                            Register Here
                        </Link>
                    </p>
                )}

            </div>
        </form>
    );
}