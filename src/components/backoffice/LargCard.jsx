import { Layers } from "lucide-react"

function LargCard({data}) {
    
    return (
        <div className={`${data.color} ${data.darkMode} rounded-lg shadow-md dark:shadow-lg dark:text-white text-gray-900 p-8 flex items-center flex-col gap-4 py-8 my-8 transition-shadow duration-200 hover:shadow-lg dark:hover:shadow-xl`}>
            <Layers className="w-6 h-6"/>
            <h4 className="text-sm font-medium">{data.period}</h4>
            <h2 className="text-2xl lg:text-3xl font-bold">UGX {data.sales}</h2>
        </div>
    )
}

export default LargCard
