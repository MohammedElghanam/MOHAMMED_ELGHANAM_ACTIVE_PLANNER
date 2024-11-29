import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Events() {

  const navigate = useNavigate();

  const redirect = () => {
    navigate('/events');
  }

  return (
    <>
        <div className=" col-span-8 h-full flex flex-col gap-3 overflow-y-auto scrollbar-hide">

<div className=" w-full h-72 flex flex-col gap-2 rounded-2xl border border-gray-300 p-4">
  <div className=" flex justify-between items-center"> 
    <div className=" flex justify-start items-center gap-3">
      <h1 className=" font-medium text-xl">Ongoing Event</h1>
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 36 36">
        <path fill="currentColor" d="M20 6.042c0 1.112-.903 2.014-2 2.014s-2-.902-2-2.014V2.014C16 .901 16.903 0 18 0s2 .901 2 2.014z"></path>
        <path fill="currentColor" d="M9.18 36c-.224 0-.452-.052-.666-.159a1.52 1.52 0 0 1-.667-2.027l8.94-18.127c.252-.512.768-.835 1.333-.835s1.081.323 1.333.835l8.941 18.127a1.52 1.52 0 0 1-.666 2.027a1.48 1.48 0 0 1-1.999-.676L18.121 19.74l-7.607 15.425A1.49 1.49 0 0 1 9.18 36"></path>
        <path fill="#58595b" d="M18.121 20.392a1 1 0 0 1-.702-.295L3.512 5.998c-.388-.394-.388-1.031 0-1.424s1.017-.393 1.404 0L18.121 17.96L31.324 4.573a.985.985 0 0 1 1.405 0a1.017 1.017 0 0 1 0 1.424l-13.905 14.1a1 1 0 0 1-.703.295"></path>
        <path fill="#8400c2" d="M34.015 19.385c0 8.898-7.115 16.111-15.894 16.111c-8.777 0-15.893-7.213-15.893-16.111c0-8.9 7.116-16.113 15.893-16.113c8.778-.001 15.894 7.213 15.894 16.113"></path>
        <path fill="#e6e7e8" d="M30.041 19.385c0 6.674-5.335 12.084-11.92 12.084c-6.583 0-11.919-5.41-11.919-12.084C6.202 12.71 11.538 7.3 18.121 7.3c6.585-.001 11.92 5.41 11.92 12.085"></path>
        <path fill="currentColor" d="M30.04 1.257a5.9 5.9 0 0 0-4.214 1.77l8.429 8.544A6.06 6.06 0 0 0 36 7.299c0-3.336-2.669-6.042-5.96-6.042m-24.08 0a5.9 5.9 0 0 1 4.214 1.77l-8.429 8.544A6.06 6.06 0 0 1 0 7.299c0-3.336 2.668-6.042 5.96-6.042"></path>
        <path fill="#414042" d="M23 20h-5a1 1 0 0 1-1-1v-9a1 1 0 0 1 2 0v8h4a1 1 0 1 1 0 2"></path>
      </svg>
    </div>
    <button onClick={ redirect }><p className=" font-normal text-sm text-gray-500 cursor-pointer"> View All</p></button>
  </div>
  <div className=" w-full grid grid-cols-8 gap-6">
    <div className=" col-span-4 h-52  rounded-3xl border border-gray-300">
      <div className=" w-full h-32 flex justify-center items-start bg-[#f4aeba] rounded-t-3xl">
        <img className=' w-36 h-36 ' src="wadifa.svg" alt="" />
      </div>
      <div className=" flex flex-col gap-0.5 w-full h-20 bg-gray-50 rounded-b-3xl px-4 py-2">
        <h1 className=' font-semibold'> Creator Meetup</h1>
        <p className=' text-xs text-gray-500'>10 Aug, 2020 : 10:15AM - 12:30PM</p>
        <p className=' text-xs font-medium text-purple-800'>142 Members</p>
      </div>
    </div>
    <div className=" col-span-4 h-52 rounded-3xl border border-gray-400">
      <div className=" w-full h-32 flex justify-center items-start bg-[#c4c1e0] rounded-t-3xl">
        <img className=' w-36 h-36' src="update.svg" alt="" />
      </div>
      <div className=" flex flex-col gap-0.5 w-full h-20 bg-gray-50 rounded-b-3xl px-4 py-2">
        <h1 className=' font-semibold'> Creator Meetup</h1>
        <p className=' text-xs text-gray-500'>10 Aug, 2020 : 10:15AM - 12:30PM</p>
        <p className=' text-xs font-medium text-purple-800'>142 Members</p>
      </div>
    </div>
  </div>
</div>

<div className=" w-full h-72 rounded-2xl border border-gray-300 flex flex-col gap-2 p-4 ">
  <div className=" flex justify-between items-center"> 
    <h1 className=" font-medium text-xl">Upcoming Events</h1>
    <p className=" font-normal text-sm text-gray-600 cursor-pointer"> View All</p>
  </div>
  <div className=" w-full grid grid-cols-12 gap-6 ">
      <div className=" flex flex-col gap-3 col-span-4 rounded-2xl h-52 p-4 border border-gray-300">
        <h1 className=' font-normal text-3xl flex justify-start items-center gap-1 text-purple-800'>18 <p className=' font-normal text-sm mt-3 text-gray-700'> Aug </p></h1>
        <h1 className=' font-bold text-gray-900'> Desidn Meeting </h1>
        <div className=" flex justify-start items-center gap-3">
          <i class="fa-solid fa-clock text-gray-500"></i>
          <p className=' text-xs font-medium text-gray-500'>10:15AM - 12:30PM</p>
        </div>
        <div className=" flex justify-start items-center gap-3">
          <i class="fa-solid fa-location-dot text-gray-500"></i>
          <p className=' text-xs font-medium text-gray-500'>Las Vegas</p>
        </div>

        <div className="mt-2 flex relative">
          {['img.png', 'img.png', 'img.png'].map((src, index) => (
            <img
              key={index}
              className={`absolute top-0 left-${index * 5} w-8 h-8 rounded-full border-2 border-gray-50 z-${50 - index * 10}`}
              src={src}
              alt={`profile-${index}`}
            />
          ))}
          <div className="absolute top-0 left-16 w-8 h-8 rounded-full z-10 bg-purple-800 flex justify-center items-center">
            <p className="text-xs font-medium text-white">+10</p>
          </div>
        </div>

      </div>
      <div className=" flex flex-col gap-3 col-span-4 rounded-2xl h-52 p-4 border border-gray-300">
        <h1 className=' font-normal text-3xl flex justify-start items-center gap-1 text-purple-800'>18 <p className=' font-normal text-sm mt-3 text-gray-700'> Aug </p></h1>
        <h1 className=' font-bold text-gray-950'> Desidn Meeting </h1>
        <div className=" flex justify-start items-center gap-3">
          <i class="fa-solid fa-clock text-gray-500"></i>
          <p className=' text-xs font-medium text-gray-500'>10:15AM - 12:30PM</p>
        </div>
        <div className=" flex justify-start items-center gap-3">
          <i class="fa-solid fa-location-dot text-gray-500"></i>
          <p className=' text-xs font-medium text-gray-500'>Las Vegas</p>
        </div>

        <div className="mt-2 flex relative">
          {['img.png', 'img.png', 'img.png'].map((src, index) => (
            <img
              key={index}
              className={`absolute top-0 left-${index * 5} w-8 h-8 rounded-full border-2 border-gray-50 z-${50 - index * 10}`}
              src={src}
              alt={`profile-${index}`}
            />
          ))}
          <div className="absolute top-0 left-16 w-8 h-8 rounded-full z-10 bg-purple-600 flex justify-center items-center">
            <p className="text-xs font-medium  text-white">+10</p>
          </div>
        </div>

      </div>
      <div className=" flex flex-col gap-3 col-span-4 rounded-2xl h-52 p-4 border border-gray-300">
        <h1 className=' font-normal text-3xl flex justify-start items-center gap-1 text-purple-800'>18 <p className=' font-normal text-sm mt-3 text-gray-700'> Aug </p></h1>
        <h1 className=' font-bold text-gray-950'> Desidn Meeting </h1>
        <div className=" flex justify-start items-center gap-3">
          <i class="fa-solid fa-clock text-gray-500"></i>
          <p className=' text-xs font-medium text-gray-500'>10:15AM - 12:30PM</p>
        </div>
        <div className=" flex justify-start items-center gap-3">
          <i class="fa-solid fa-location-dot text-gray-500"></i>
          <p className=' text-xs font-medium text-gray-500'>Las Vegas</p>
        </div>

        <div className="mt-2 flex relative">
          {['img.png', 'img.png', 'img.png'].map((src, index) => (
            <img
              key={index}
              className={`absolute top-0 left-${index * 5} w-8 h-8 rounded-full border-2 border-gray-50 z-${50 - index * 10}`}
              src={src}
              alt={`profile-${index}`}
            />
          ))}
          <div className="absolute top-0 left-16 w-8 h-8 rounded-full z-10 bg-purple-600 flex justify-center items-center">
            <p className="text-xs font-medium  text-white">+10</p>
          </div>
        </div>

      </div>
  </div>
</div>

</div>
    </>
  )
}
