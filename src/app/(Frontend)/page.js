import Link from "next/link";

export default function Home() {
  
  return (
    <div className="flex items-center flex-col justify-center min-h-screen">
      <h2 className="text-4xl">Wellcome To Limmi Ecoumerce Website</h2>
      <Link href='/register-farmer' className="my-4 underline">Become a farmer/Vendor/Suppker </Link>
    </div>
  );
}
