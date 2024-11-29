import React from 'react'

export default function Statistique() {
  return (
    <>
        <div className=" w-full grid grid-cols-12 justify-center items-center gap-10 px-4 py-4">
              <div className=" flex justify-between items-center p-3 col-span-4 h-24 rounded-lg bg-gray-50 border border-gray-200 ">
                <div className="">
                  <h1 className=' font-semibold text-3xl'>124K</h1>
                  <p className=' font-normal text-gray-400'>Events</p>
                </div>
                <div className=" w-12 h-12 bg-purple-500 bg-opacity-20 flex justify-center items-center rounded-full ">
                  <i class="fa-solid fa-calendar-days text-purple-600 fa-lg"></i>
                </div>
              </div>
              <div className=" flex justify-between items-center p-3 col-span-4 h-24 rounded-lg bg-gray-50 border border-gray-200 ">
                <div className="">
                  <h1 className=' font-semibold text-3xl'>124K</h1>
                  <p className=' font-normal text-gray-400'>Participants</p>
                </div>
                <div className=" w-12 h-12 bg-purple-500 bg-opacity-20 flex justify-center items-center rounded-full ">
                  <i class="fa-solid fa-user-group text-purple-600 fa-lg"></i>
                </div>
              </div>
              <div className=" flex justify-between items-center p-3 col-span-4 h-24 rounded-lg bg-gray-50 border border-gray-200 ">
                <div className="">
                  <h1 className=' font-semibold text-3xl'>124K</h1>
                  <p className=' font-normal text-gray-400'>Events</p>
                </div>
                <div className=" w-12 h-12 bg-purple-500 bg-opacity-25 flex justify-center items-center rounded-full ">
                  <i class="fa-solid fa-calendar-days text-purple-600 fa-lg"></i>
                </div>
              </div>
            </div>
    </>
  )
}
