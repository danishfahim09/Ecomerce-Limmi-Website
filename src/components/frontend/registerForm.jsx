 
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
    console.log(plan, "this is my plan")
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
                    const { data } = responseData
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
            {emailErr && <small className="text-destructive mt-2 block">{emailErr}</small>}
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
            <div className="flex items-center my-4">
                <div className="w-full bg-border h-[1px]"></div>
                <span className="mx-3 text-sm text-muted-foreground">or</span>
                <div className="w-full bg-border h-[1px]"></div>
            </div>
            <div className="flex flex-col gap-3 py-3">
                <p className="text-sm font-light text-muted-foreground text-center">
                    Already have an account?{" "}
                    <Link
                        href="/login"
                        className="font-medium text-lime-600 hover:text-lime-700 dark:text-lime-400 dark:hover:text-lime-300 hover:underline"
                    >
                        Login
                    </Link>
                </p>
                {role === "USER" ? (
                    <p className="text-sm font-light text-muted-foreground text-center">
                        Are you a Farmer?{" "}
                        <Link
                            href="/farmer-pricing"
                            className="font-medium text-lime-600 hover:text-lime-700 dark:text-lime-400 dark:hover:text-lime-300 hover:underline"
                        >
                            Register Here
                        </Link>
                    </p>
                ) : (
                    <p className="text-sm font-light text-muted-foreground text-center">
                        Are you a User?{" "}
                        <Link
                            href="/register"
                            className="font-medium text-lime-600 hover:text-lime-700 dark:text-lime-400 dark:hover:text-lime-300 hover:underline"
                        >
                            Register Here
                        </Link>
                    </p>
                )}
            </div>
        </form>
    );
}