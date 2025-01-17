"use client"
import React from 'react'
import { Plus, Search, X } from 'lucide-react'
import { useState } from 'react'

function ArrayitemInput({items,setitems,tittle}) {
  const [showTagForm, setshowTagForm] = useState(false)
  const [tagErrorMsg, settagErrorMsg] = useState('')
  
  const [item, setitem] = useState('')


  {/*IF Tag Empty TAg Space Not Showing */}
  let border = 'border-1 dark:border-gray-500 border-gray-300'
  if (items.length > 0) {
    border = 'border-1 dark:border-gray-500 border-gray-300'
  } else {
    border = 'border-none'
  }

  {/*User Tag Input */}
  const onchangeHandller = (event) => {
    setitem(event.target.value)
  }

  {/* Add Tag*/}
  function addItem() {
    if (item.length >= 5) {
      setitems([...items, item])
      setitem('')
      settagErrorMsg('')
    } else {
      settagErrorMsg('Tag Must Be Greater Than 5')
    }
  }

  {/*Remove Tag*/}
  function removeItem(index) {
    const newTag = [...items]
    newTag.splice(index, 1)
    setitems(newTag)
  }
  return (
    <div>

      {/*Tag Btn And Serch Bare*/}
      {showTagForm ?
          (
            // Tag Search BAre
            <div className="sm:grid-cols-2">
              <div className="max-w-md">
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative flex gap-2 ">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                      <Search />
                    </svg>
                  </div>
                  <input onChange={onchangeHandller} value={item} type="search" id="default-search" className="my-2 block w-full p-3 ps-10 text-sm text-gray-900 border
                  border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500
                  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                  dark:focus:border-blue-500" placeholder="Create Tags..."
                  />
                  <button onClick={addItem} type="button" className="flex  gap-1 items-center text-center h-11 mt-2 text-white  bg-blue-700 hover:bg-blue-800
                    focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lgg px-3 
                  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <Plus className='w-5 h-5' />
                    Add
                  </button>
                  <button type="button" className="flex  gap-1 items-center text-center h-11 mt-2 text-white  bg-red-700 hover:bg-red-800
                    focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lgg px-3 
                  dark:bg-red-800 dark:hover:bg-red-900 dark:focus:ring-red-800">
                    <X className='w-5 h-5' onClick={() => { setshowTagForm(false) }} />
                  </button>
                </div>

                {/* Tag Error Msg*/}
                <p className='text-red-800 text-sm'>{tagErrorMsg}</p>
              </div>
            </div>
          )
          :
          (
            // Tag Btn
            <button type="button" onClick={() => { setshowTagForm(true) }}
              className=" flex gap-2 py-2 px-3 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none
              bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10
                focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-slate-800 dark:text-gray-300
              dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
              <Plus className='w-5 h-5' />
              <span>{tittle}</span>
            </button>
          )
        }

        {/* All Tags */}
      <div className={`flex flex-wrap gap-7 rounded-md ${border} p-3 my-2`}>
        {items.map((item, i) => {
          return (
            <div key={i} className="flex gap-1 dark:bg-gray-400 border-1  dark:border-gray-500  py-1 px-2 items-center rounded-md text-center dark:text-gray-800 cursor-pointer">
              <p>{item}</p>
              <X className='w-5 h-5 hover:text-red-700 ' onClick={() => removeItem(i)} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ArrayitemInput