import React from 'react'
import { getData } from '@/lib/getData'
import NewFarmerForm from '@/components/backoffice/NewFarmerForm'

async function page({params: {id}}) {
    const user = await getData(`users/${id}`)
    return (
        <div className='flex flex-col gap-6 p-16'>
            <div className="max-w-4xl p-4 mx-auto">
                <h2>Hellow {user?.name}, Tell More About Your Self</h2>
                <NewFarmerForm user={user}/>
            </div>
        </div>
    )
}

export default page