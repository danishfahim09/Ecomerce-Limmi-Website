import Link from "next/link";
import MarketList from '@/components/frontend/MarketList'
import Hero from '@/components/frontend/Hero'
import CategoryList from '@/components/frontend/CategoryList'
import CummunittyTrainnig from '@/components/frontend/CummunittyTrainnig'
import { getData } from "@/lib/getData";

export default async function Home() {
  const categories = await getData('categories')
  
  return (
    <div className=" min-h-screen sm:px-3  ">
      <Hero />
      <MarketList />


      {categories.map((category,i) => {
        return (
          <div key={i} className="my-9">
            <CategoryList category={category}/>
          </div>
        );
      })}


      <div className="my-9">
        <CummunittyTrainnig />
      </div>

      <h2 className="text-4xl">Wellcome To Limmi Ecoumerce Website</h2>
      <Link href='/register-farmer' className="my-4 underline">Become a farmer/Vendor/Suppker </Link>
    </div>
  );
}
