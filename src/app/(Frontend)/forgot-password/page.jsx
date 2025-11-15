import ForgotPasswordForm from "@/components/ForgotPasswordForm";
//import RegisterForm from "@/components/RegisterForm";

export default function Register() {
  return (
    <section className="bg-background min-h-screen flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md">
        <div className="bg-card border border-border rounded-lg shadow-lg dark:shadow-xl p-6 sm:p-8">
          <div className="space-y-6">
            <h1 className="text-2xl font-semibold leading-tight tracking-tight text-foreground text-center">
              Reset Password
            </h1>
            <ForgotPasswordForm />
          </div>
        </div>
      </div>
    </section>
  );
}