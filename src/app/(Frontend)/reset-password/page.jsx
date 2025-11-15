import ResetPasswordForm from "@/components/ResetPasswordForm";

export default function PasswordReset() {
  return (
    <section className="bg-background min-h-screen flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md">
        <div className="bg-card border border-border rounded-lg shadow-lg dark:shadow-xl p-6 sm:p-8">
          <div className="space-y-6">
            <h1 className="text-2xl font-semibold leading-tight tracking-tight text-foreground text-center">
              Reset Password
            </h1>
            <ResetPasswordForm />
          </div>
        </div>
      </div>
    </section>
  );
}