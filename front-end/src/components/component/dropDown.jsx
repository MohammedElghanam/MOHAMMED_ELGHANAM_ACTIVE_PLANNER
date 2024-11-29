import React from 'react'

export default function DropDown() {
  return (
    <>
        <div className=" px-2 py-2 bg-gray-50 absolute -bottom-20 rounded-md border border-gray-200 right-0">
            <div className=" flex justify-start items-center gap-2 mb-2 hover:bg-gray-400 hover:bg-opacity-20 px-2 py-0.5 rounded-md cursor-pointer">
              <i class="fa-solid fa-pen-nib text-green-600"></i>
              <p className=' text-green-600'>Update</p>
            </div>
            <div className=" flex justify-start items-center gap-2 hover:bg-gray-400 hover:bg-opacity-20 px-2 py-0.5 rounded-md cursor-pointer">
              <i class="fa-solid fa-trash text-red-600"></i>
              <p className=' text-red-600'>Delete</p>
            </div>
        </div>
    </>
  )
}
