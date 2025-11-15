"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Link from "next/link";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"

export default function LoginForm() {
  const router = useRouter();
  const { register, handleSubmit, reset, formState: { errors }, } = useForm();
  const [loading, setLoading] = useState(false);

  async function onSubmit(data) {
    console.log(data);
    try {
      setLoading(true);
      console.log("Attempting to sign in with credentials:", data);
      const loginData = await signIn("credentials", {
        ...data,
        redirect: false,
      });
      console.log("SignIn response:", loginData);
      if (loginData?.error) {
        setLoading(false);
        toast.error("Sign-in error: Check your credentials");
      } else {
        // Sign-in was successful
        toast.success("Login Successful");
        reset();
        // Optional: Force session refresh
        router.refresh();

        // Thoda delay de kar redirect karo
        setTimeout(() => {
          router.push("/"); // ya koi aur page
        }, 500);
      }
    } catch (error) {
      setLoading(false);
      console.error("Network Error:", error);
      toast.error("Its seems something is wrong with your Network");
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div>
        <Label
          htmlFor="email"
          className="text-sm font-semibold text-foreground mb-2"
        >
          Your email
        </Label>
        <Input
          {...register("email", { required: true })}
          type="email"
          name="email"
          id="email"
          placeholder="name@company.com"
          className="shadow-sm"
          required
        />
        {errors.email && (
          <small className="text-destructive text-sm mt-1 block">
            This field is required
          </small>
        )}
      </div>
      <div>
        <Label
          htmlFor="password"
          className="text-sm font-semibold text-foreground mb-2"
        >
          Password
        </Label>
        <Input
          {...register("password", { required: true })}
          type="password"
          name="password"
          id="password"
          placeholder="••••••••"
          className="shadow-sm"
          required
        />
        {errors.password && (
          <small className="text-destructive text-sm mt-1 block">
            This field is required
          </small>
        )}
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <Link
            href="/forgot-password"
            className="text-sm font-medium text-lime-600 hover:text-lime-700 dark:text-lime-400 dark:hover:text-lime-300 hover:underline"
          >
            Forgot Password?
          </Link>
        </div>
        {loading ? (
          <Button
            disabled
            type="button"
            className="w-full gap-2 shadow-md"
          >
            <Loader2 className="w-4 h-4 animate-spin" />
            Signing you in please wait...
          </Button>
        ) : (
          <Button
            type="submit"
            className="w-full shadow-md hover:shadow-lg transition-shadow duration-200"
          >
            Login
          </Button>
        )}
      </div>

      <p className="text-sm font-light text-muted-foreground text-center">
        Don't have an account?{" "}
        <Link
          href="/register"
          className="font-medium text-lime-600 hover:text-lime-700 dark:text-lime-400 dark:hover:text-lime-300 hover:underline"
        >
          Sign Up
        </Link>
      </p>
    </form>
  );
}