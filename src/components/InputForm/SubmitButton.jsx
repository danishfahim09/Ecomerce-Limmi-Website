import { Loader2, Plus } from 'lucide-react'
import React from 'react'
import { Button } from "@/components/ui/button"

function SubmitButton({
    isLoding = false,
    ButtonTittle,
    loddingButtonTiittle }) {

    return (
        <div>
            {isLoding ?
                <Button 
                    type="submit" 
                    disabled
                    className="gap-2 shadow-md hover:shadow-lg transition-shadow duration-200"
                >
                    <Loader2 className='w-4 h-4 animate-spin'/>
                    {loddingButtonTiittle}
                </Button>
                :
                <Button 
                    type="submit"
                    className="gap-2 shadow-md hover:shadow-lg transition-shadow duration-200"
                >
                    <Plus className='w-4 h-4'/>
                    {ButtonTittle}
                </Button>
            }
        </div>
    )
}

export default SubmitButton