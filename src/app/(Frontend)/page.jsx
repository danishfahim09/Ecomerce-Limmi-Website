import Link from "next/link";
import Hero from '@/components/frontend/Hero'

export default function Home() {
  
  return (
    <div className=" min-h-screen px-6 ">
      <Hero/>
      <h2 className="text-4xl">Wellcome To Limmi Ecoumerce Website</h2>
      <Link href='/register-farmer' className="my-4 underline">Become a farmer/Vendor/Suppker </Link>
    </div>
  );
}
