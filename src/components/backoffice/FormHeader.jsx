import React from 'react'

function FormHeader({ tittle }) {
  return (
    <div>
      <h2 className='dark:text-gray-200 text-gray-700 text-lg font-semibold p-2'>
        {tittle}
      </h2>
    </div>
  )
}

export default FormHeader