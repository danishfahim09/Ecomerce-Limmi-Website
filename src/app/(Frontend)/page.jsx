import Link from "next/link";
import MarketList from "@/components/frontend/MarketList";
import Hero from "@/components/frontend/Hero";
import CategoryList from "@/components/frontend/CategoryList";
import CummunittyTrainnig from "@/components/frontend/CummunittyTrainnig";
import { getData } from "@/lib/getData";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";

export default async function Home() {
  const categoriesData = await getData("categories");
  const training = await getData("training");

  const categories = Array.isArray(categoriesData)
    ? categoriesData.filter((category) => {
        return category.products.length >= 3;
      })
    : [];
  const session = await getServerSession(authOptions);

  return (
    <div className="min-h-screen sm:px-3">
      <Hero />
      <MarketList />
      {categories?.map((category, i) => {
        return (
          <div key={i} className="my-9">
            <CategoryList category={category} isMarketPage={false} />
          </div>
        );
      })}
      <div className="my-9">
        <CummunittyTrainnig
          title="Featured Trainings"
          trainings={training.slice(0, 3)}
        />
      </div>
      <div className="text-center py-12">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          Welcome To Limmi E-commerce Website
        </h2>
        <Link
          href="/register-farmer"
          className="inline-block text-lime-700 dark:text-lime-400 hover:underline font-medium"
        >
          Become a farmer/Vendor/Supplier
        </Link>
      </div>
    </div>
  );
}
