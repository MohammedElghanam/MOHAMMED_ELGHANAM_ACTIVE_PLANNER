import React, { useState } from 'react'
import NavBar from './navBar'
import { useNavigate } from 'react-router-dom';
import DropDown from './dropDown';

export default function ListEvent() {

    const navigate = useNavigate();
    const redirect = () => {
        navigate('/dashboard');
    }

    const [dropDown, setDropDown] = useState(false);
    
    const showDropDown = () => {
        setDropDown( (prevState) => !prevState )
    }


  return (
    <>
      <div className=" w-full h-screen bg-gray-50">
          
          <div className=" grid grid-cols-12 justify-center items-start w-full h-full  overflow-y-scroll">
            <div className=" col-span-12 bg-green-700 h-14">
              <div className=" w-full bg-white fixed z-50">
                <NavBar />
              </div>
            </div>
            <div className=" col-span-12 grid grid-cols-12 justify-center items-center gap-8 py-3 px-20">

              <div className=" col-span-12 flex justify-between items-center">
                <div className=" flex justify-center items-center gap-4">
                  <button onClick={ redirect }><i class="fa-solid fa-arrow-left fa-lg w-8 h-8 flex justify-center items-center hover:bg-gray-700 hover:bg-opacity-15 hover:duration-500 rounded-md"></i></button>
                  <h1 className=' font-semibold text-2xl'> Events </h1>
                </div>
                <div className=" flex justify-center items-center gap-4">
                  <button><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="none" stroke="#222831" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6.75c0-1.768 0-2.652.55-3.2C4.097 3 4.981 3 6.75 3s2.652 0 3.2.55c.55.548.55 1.432.55 3.2s0 2.652-.55 3.2c-.548.55-1.432.55-3.2.55s-2.652 0-3.2-.55C3 9.403 3 8.519 3 6.75m0 10.507c0-1.768 0-2.652.55-3.2c.548-.55 1.432-.55 3.2-.55s2.652 0 3.2.55c.55.548.55 1.432.55 3.2s0 2.652-.55 3.2c-.548.55-1.432.55-3.2.55s-2.652 0-3.2-.55C3 19.91 3 19.026 3 17.258M13.5 6.75c0-1.768 0-2.652.55-3.2c.548-.55 1.432-.55 3.2-.55s2.652 0 3.2.55c.55.548.55 1.432.55 3.2s0 2.652-.55 3.2c-.548.55-1.432.55-3.2.55s-2.652 0-3.2-.55c-.55-.548-.55-1.432-.55-3.2m0 10.507c0-1.768 0-2.652.55-3.2c.548-.55 1.432-.55 3.2-.55s2.652 0 3.2.55c.55.548.55 1.432.55 3.2s0 2.652-.55 3.2c-.548.55-1.432.55-3.2.55s-2.652 0-3.2-.55c-.55-.548-.55-1.432-.55-3.2"></path></svg></button>
                  <button><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 16 16"><path fill="#060608" fillRule="evenodd" d="M1 3.25a.75.75 0 0 1 .75-.75h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 3.25M3 8a.75.75 0 0 1 .75-.75h8.5a.75.75 0 0 1 0 1.5h-8.5A.75.75 0 0 1 3 8m3.75 4a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5z" clipRule="evenodd"></path></svg></button>
                </div>
              </div>

              <div className=" col-span-4 border border-gray-200 rounded-xl shadow-xl hover:translate-x-0">
                <div className=" p-3">
                  <img className='h-52 w-full rounded-xl' src="img.png" alt="" />
                </div>
                <div className=" w-full h-28 rounded-xl px-3 flex flex-col gap-2">
                  <div className=" relative flex justify-between items-center ">
                    <h1 className=' font-semibold text-md text-gray-800'> Jornée D'integration</h1>
                    <button onClick={ showDropDown }><i class="fa-solid fa-ellipsis-vertical text-gray-800 mr-2"></i></button>
                    { dropDown && <DropDown /> }
                  </div>
                  <div className=" flex gap-4">
                    <div className=" flex flex-col justify-center items-start gap-4">
                      <div className=" flex justify-start items-center gap-2 ">
                        <i class="fa-solid fa-xs fa-clock text-gray-800"></i>
                        <p className=' text-xs font-medium text-[#4ef037] px-1 py-0.5 bg-[#4ef037] rounded-md bg-opacity-10 border border-[#4ef037]'> 2024-12-30T10:00:00Z </p>
                      </div>
                      <div className="  flex justify-start items-center gap-3">
                        <i class="fa-regular fa-user fa-sm text-gray-800"></i>
                        <p className=' text-xs font-medium text-gray-800'>124 Number</p>
                      </div>
                    </div>
                    <div className="  flex flex-col justify-start items-center gap-3">
                      <div className=" flex justify-start items-center gap-3 ">
                        <i class="fa-solid fa-sm fa-location-dot text-gray-800"></i>
                        <p className=' text-xs font-medium text-gray-800'> New Stadium, City Y </p>
                      </div>
                      <div className=" flex justify-start items-center gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><circle cx={12} cy={2} r={0} fill="#4ef037"><animate attributeName="r" begin={0} calcMode="spline" dur="2s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0"></animate></circle><circle cx={12} cy={2} r={0} fill="#4ef037" transform="rotate(45 12 12)"><animate attributeName="r" begin="0.25s" calcMode="spline" dur="2s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0"></animate></circle><circle cx={12} cy={2} r={0} fill="#4ef037" transform="rotate(90 12 12)"><animate attributeName="r" begin="0.5s" calcMode="spline" dur="2s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0"></animate></circle><circle cx={12} cy={2} r={0} fill="#4ef037" transform="rotate(135 12 12)"><animate attributeName="r" begin="0.75s" calcMode="spline" dur="2s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0"></animate></circle><circle cx={12} cy={2} r={0} fill="#4ef037" transform="rotate(180 12 12)"><animate attributeName="r" begin="1s" calcMode="spline" dur="2s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0"></animate></circle><circle cx={12} cy={2} r={0} fill="#4ef037" transform="rotate(225 12 12)"><animate attributeName="r" begin="1.25s" calcMode="spline" dur="2s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0"></animate></circle><circle cx={12} cy={2} r={0} fill="#4ef037" transform="rotate(270 12 12)"><animate attributeName="r" begin="1.5s" calcMode="spline" dur="2s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0"></animate></circle><circle cx={12} cy={2} r={0} fill="#4ef037" transform="rotate(315 12 12)"><animate attributeName="r" begin="1.75s" calcMode="spline" dur="2s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0"></animate></circle></svg>
                        <p className=' text-[#4ef037] text-xs font-medium'>Now running ...</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className=" col-span-4 h-72 bg-purple-700 rounded-xl"></div>
              <div className=" col-span-4 h-72 bg-purple-700 rounded-xl"></div>
              <div className=" col-span-4 h-72 bg-purple-700 rounded-xl"></div>
              <div className=" col-span-4 h-72 bg-purple-700 rounded-xl"></div>
              <div className=" col-span-4 h-72 bg-purple-700 rounded-xl"></div>
              <div className=" col-span-4 h-72 bg-purple-700 rounded-xl"></div>
              <div className=" col-span-4 h-72 bg-purple-700 rounded-xl"></div>
              <div className=" col-span-4 h-72 bg-purple-700 rounded-xl"></div>

            </div>
            

          </div>
        </div>
    </>
  )
}
