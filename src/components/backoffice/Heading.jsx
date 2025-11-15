import React from 'react'

function Heading({tittle}) {
  return (
    <div className='text-2xl font-semibold text-foreground mb-6'>
        {tittle}
    </div>
  )
}

export default Heading