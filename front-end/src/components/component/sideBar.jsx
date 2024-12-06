import React from 'react'

export default function SideBar({ showPopUpEvent, showPopUpPartisipent }) {
    
  return (
    <>
        <div className="h-full w-1/5 rounded-2xl border border-gray-200 p-4 flex flex-col gap-2">
            <div className=" pl-4 flex justify-start items-center gap-3 mb-3">
              <div className=" flex justify-center items-center p-3 rounded-md bg-gray-200">
                <div className=" w-5 h-5 rounded-full bg-purple-600"></div>
              </div>
              <h1 className=' font-semibold text-3xl'>PLANNER</h1>
            </div>
            <div className=" flex justify-start items-center gap-3 bg-gray-100 p-2 px-4 rounded-lg hover:bg-gray-200">
              <i class="fa-solid fa-house text-purple-600"></i>
              <h1 className=' font-semibold text-purple-600'>Dashboard</h1>
            </div>
            <button  onClick={ showPopUpEvent } className=" flex justify-start items-center gap-3 bg-gray-100 p-2 px-4 rounded-lg hover:bg-gray-200">
              <i class="fa-solid fa-calendar-days text-purple-600"></i>
              <h1 className=' font-semibold text-purple-600'> Create Event</h1>
            </button>
            <button onClick={ showPopUpPartisipent } className=" flex justify-start items-center gap-3 bg-gray-100 p-2 px-4 rounded-lg hover:bg-gray-200">
              <i class="fa-solid fa-user text-purple-600"></i>
              <h1 className=' font-semibold text-purple-600'> Create Participant</h1>
            </button>
          </div>
    </>
  )
}
