import { LoaderIcon, Plus } from 'lucide-react'
import React from 'react'

function SubmitButton({
    isLoding = false,
    ButtonTittle,
    loddingButtonTiittle }) {

    return (
        <div>
            {isLoding ?
                <button type="submit" class="flex flex-row gap-3 text-white bg-black hover:bg-slate-700 focus:outline-none
                 focus:ring-4 focus:ring-lime-300 font-medium rounded-full text-sm my-4 px-5 py-2.5 text-center
                  me-2 mb-2 dark:bg-lime-700 dark:hover:bg-lime-800 dark:focus:ring-lime-800"
                >
                    <LoaderIcon className='w-5 h-5'/>
                    {loddingButtonTiittle}
                </button>
                :
                <button type="submit" class="flex flex-row gap-1 justify-center  text-white
                 bg-black hover:bg-slate-700 focus:outline-none focus:ring-4
                  focus:ring-blue-300 font-medium rounded-lg text-sm my-4 px-5 py-2.5 text-center
                  me-2 mb-2 dark:bg-lime-700 dark:hover:bg-lime-800 dark:focus:ring-lime-800"
                >
                    <Plus className='w-5 h-5'/>
                    {ButtonTittle}
                </button>
            }
        </div>
    )
}

export default SubmitButton