export default function Home() {
  const data = "i am daniish"
  console.log(data)
  
  return (
    <div className="flex items-center flex-col justify-center min-h-screen">
      <h2 className="text-4xl">Limmi Ecoumerce Website</h2>
      {data}
    </div>
  );
}
