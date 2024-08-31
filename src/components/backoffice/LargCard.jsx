import { Layers } from "lucide-react"

function LargCard({data}) {
    
    return (
        <div className={`${data.color} ${data.darkMode} rounded-lg dark:text-white text-gray-900 p-8 flex items-center flex-col gap-4 py-8 my-8 `}>
            <Layers/>
            <h4 >{data.period}</h4>
            <h2 className="text-2xl lg:text-3xl">UGX{data.sales}</h2>
        </div>
    )
}

export default LargCard
