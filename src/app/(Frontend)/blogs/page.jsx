import React from 'react'
import CummunittyTrainnig from '@/components/frontend/CummunittyTrainnig'
import { getData } from '@/lib/getData'

async function page() {
    const training = await getData('training')
    return (
        <div>
            <CummunittyTrainnig title="Read All Our Trainings" trainings={training} />
        </div>
    )
}

export default page