import React, { useState } from 'react'
import DropDown from './dropDown';


export default function Users({ showPopUpUpdatePartisipent }) {
    
    const [dropDown, setDropDown] = useState(false);
    
    const showDropDown = () => {
        setDropDown( (prevState) => !prevState )
    }


  return (
    <>
        <div className=" col-span-4 h-full rounded-2xl border border-gray-200 overflow-y-auto scrollbar-hide">
                <div className=" border-b border-gray-200">
                  <h1 className=' p-2 font-medium text-xl'> Participants </h1>
                </div>
                <div className=" w-full h-full ">
                <div className=" relative flex justify-between items-center gap-2 p-2 border-b border-gray-200">
                  <div className=" flex justify-start items-center gap-2 ">
                    <img className=' w-10 h-10 rounded-full bg-red-600' src="img.png" alt="" />
                    <div className="">
                      <h1 className=' font-semibold text-gray-800'> Mohammed </h1>
                      <p className=' text-xs text-gray-600'>elghanammohammed@gmaol.com</p>
                    </div>
                  </div>
                  <button onClick={ showDropDown } className=" w-7 h-7 rounded-sm flex justify-center items-center bg-purple-600 bg-opacity-15 hover:bg-opacity-20">
                    <i class="fa-solid fa-ellipsis"></i>
                  </button>
                   
                  { dropDown && <DropDown showPopUpUpdate={ showPopUpUpdatePartisipent } /> }
                </div>
                <div className=" flex justify-start items-center gap-2 p-2 border-b border-gray-200">
                  <img className=' w-10 h-10 rounded-full bg-red-600' src="img.png" alt="" />
                  <div className="">
                    <h1 className=' font-semibold text-gray-800'> Mohammed </h1>
                    <p className=' text-xs text-gray-600'>elghanammohammed@gmaol.com</p>
                  </div>
                </div>
                <div className=" flex justify-start items-center gap-2 p-2 border-b border-gray-200">
                  <img className=' w-10 h-10 rounded-full bg-red-600' src="img.png" alt="" />
                  <div className="">
                    <h1 className=' font-semibold text-gray-800'> Mohammed </h1>
                    <p className=' text-xs text-gray-600'>elghanammohammed@gmaol.com</p>
                  </div>
                </div>
                <div className=" flex justify-start items-center gap-2 p-2 border-b border-gray-200">
                  <img className=' w-10 h-10 rounded-full bg-red-600' src="img.png" alt="" />
                  <div className="">
                    <h1 className=' font-semibold text-gray-800'> Mohammed </h1>
                    <p className=' text-xs text-gray-600'>elghanammohammed@gmaol.com</p>
                  </div>
                </div>
                <div className=" flex justify-start items-center gap-2 p-2 border-b border-gray-200">
                  <img className=' w-10 h-10 rounded-full bg-red-600' src="img.png" alt="" />
                  <div className="">
                    <h1 className=' font-semibold text-gray-800'> Mohammed </h1>
                    <p className=' text-xs text-gray-600'>elghanammohammed@gmaol.com</p>
                  </div>
                </div>
                <div className=" flex justify-start items-center gap-2 p-2 border-b border-gray-200">
                  <img className=' w-10 h-10 rounded-full bg-red-600' src="img.png" alt="" />
                  <div className="">
                    <h1 className=' font-semibold text-gray-800'> Mohammed </h1>
                    <p className=' text-xs text-gray-600'>elghanammohammed@gmaol.com</p>
                  </div>
                </div>
                <div className=" flex justify-start items-center gap-2 p-2 border-b border-gray-200">
                  <img className=' w-10 h-10 rounded-full bg-red-600' src="img.png" alt="" />
                  <div className="">
                    <h1 className=' font-semibold text-gray-800'> Mohammed </h1>
                    <p className=' text-xs text-gray-600'>elghanammohammed@gmaol.com</p>
                  </div>
                </div>
                <div className=" flex justify-start items-center gap-2 p-2 border-b border-gray-200">
                  <img className=' w-10 h-10 rounded-full bg-red-600' src="img.png" alt="" />
                  <div className="">
                    <h1 className=' font-semibold text-gray-800'> Mohammed </h1>
                    <p className=' text-xs text-gray-600'>elghanammohammed@gmaol.com</p>
                  </div>
                </div>
                <div className=" flex justify-start items-center gap-2 p-2 border-b border-gray-200">
                  <img className=' w-10 h-10 rounded-full bg-red-600' src="img.png" alt="" />
                  <div className="">
                    <h1 className=' font-semibold text-gray-800'> Mohammed </h1>
                    <p className=' text-xs text-gray-600'>elghanammohammed@gmaol.com</p>
                  </div>
                </div>
                <div className=" flex justify-start items-center gap-2 p-2 border-b border-gray-200">
                  <img className=' w-10 h-10 rounded-full bg-red-600' src="img.png" alt="" />
                  <div className="">
                    <h1 className=' font-semibold text-gray-800'> Mohammed </h1>
                    <p className=' text-xs text-gray-600'>elghanammohammed@gmaol.com</p>
                  </div>
                </div>
                <div className=" flex justify-start items-center gap-2 p-2 border-b border-gray-200">
                  <img className=' w-10 h-10 rounded-full bg-red-600' src="img.png" alt="" />
                  <div className="">
                    <h1 className=' font-semibold text-gray-800'> Mohammed </h1>
                    <p className=' text-xs text-gray-600'>elghanammohammed@gmaol.com</p>
                  </div>
                </div>
                <div className=" flex justify-start items-center gap-2 p-2 border-b border-gray-200">
                  <img className=' w-10 h-10 rounded-full bg-red-600' src="img.png" alt="" />
                  <div className="">
                    <h1 className=' font-semibold text-gray-800'> Mohammed </h1>
                    <p className=' text-xs text-gray-600'>elghanammohammed@gmaol.com</p>
                  </div>
                </div>
                <div className=" flex justify-start items-center gap-2 p-2 border-b border-gray-200">
                  <img className=' w-10 h-10 rounded-full bg-red-600' src="img.png" alt="" />
                  <div className="">
                    <h1 className=' font-semibold text-gray-800'> Mohammed </h1>
                    <p className=' text-xs text-gray-600'>elghanammohammed@gmaol.com</p>
                  </div>
                </div>
                <div className=" flex justify-start items-center gap-2 p-2 border-b border-gray-200">
                  <img className=' w-10 h-10 rounded-full bg-red-600' src="img.png" alt="" />
                  <div className="">
                    <h1 className=' font-semibold text-gray-800'> Mohammed </h1>
                    <p className=' text-xs text-gray-600'>elghanammohammed@gmaol.com</p>
                  </div>
                </div>
                </div>
                

              </div> 
    </>
  )
}
