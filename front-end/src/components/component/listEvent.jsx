import React from 'react'
import { format } from 'date-fns';
import NavBar from './navBar'
import { useNavigate } from 'react-router-dom';
import DropDown from './dropDown';
import UpdateEvent from '../forms/updateEvent';
import useDisplayEvent from '../../hooks/useDisplayEvents';

export default function ListEvent() {

  const { Events, error, dropDown, showDropDown, activeEvent, updateEvent, recivedUpdateEvent, hidePopUpUpdateEvent, showPopUpUpdateEvent, deleteEvent } = useDisplayEvent();

    const navigate = useNavigate();
    const redirect = () => {
        navigate('/dashboard');
    }

  return (
    <>
      <div className=" w-full h-screen bg-gray-50">
          
          <div className=" grid grid-cols-12 justify-center items-start w-full h-full  overflow-y-scroll">
            <div className=" col-span-12 h-14">
              <div className=" w-full bg-white fixed z-50">
                <NavBar />
              </div>
            </div>
            <div className=" col-span-12 grid grid-cols-12 justify-center items-start gap-8 py-3 px-20">

              <div className=" col-span-12 flex justify-between items-center">
                <div className=" flex justify-center items-center gap-4">
                  <button onClick={ redirect }><i class="fa-solid fa-arrow-left fa-lg w-8 h-8 flex justify-center items-center hover:bg-gray-700 hover:bg-opacity-15 hover:duration-500 rounded-md text-purple-700"></i></button>
                  <h1 className=' font-semibold text-2xl'> Events </h1>
                </div>
                <div className=" flex justify-center items-center gap-4">
                  <button><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="none" stroke="#222831" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6.75c0-1.768 0-2.652.55-3.2C4.097 3 4.981 3 6.75 3s2.652 0 3.2.55c.55.548.55 1.432.55 3.2s0 2.652-.55 3.2c-.548.55-1.432.55-3.2.55s-2.652 0-3.2-.55C3 9.403 3 8.519 3 6.75m0 10.507c0-1.768 0-2.652.55-3.2c.548-.55 1.432-.55 3.2-.55s2.652 0 3.2.55c.55.548.55 1.432.55 3.2s0 2.652-.55 3.2c-.548.55-1.432.55-3.2.55s-2.652 0-3.2-.55C3 19.91 3 19.026 3 17.258M13.5 6.75c0-1.768 0-2.652.55-3.2c.548-.55 1.432-.55 3.2-.55s2.652 0 3.2.55c.55.548.55 1.432.55 3.2s0 2.652-.55 3.2c-.548.55-1.432.55-3.2.55s-2.652 0-3.2-.55c-.55-.548-.55-1.432-.55-3.2m0 10.507c0-1.768 0-2.652.55-3.2c.548-.55 1.432-.55 3.2-.55s2.652 0 3.2.55c.55.548.55 1.432.55 3.2s0 2.652-.55 3.2c-.548.55-1.432.55-3.2.55s-2.652 0-3.2-.55c-.55-.548-.55-1.432-.55-3.2"></path></svg></button>
                  <button><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 16 16"><path fill="#060608" fillRule="evenodd" d="M1 3.25a.75.75 0 0 1 .75-.75h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 3.25M3 8a.75.75 0 0 1 .75-.75h8.5a.75.75 0 0 1 0 1.5h-8.5A.75.75 0 0 1 3 8m3.75 4a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5z" clipRule="evenodd"></path></svg></button>
                </div>
              </div>

              {Events.map( event => (
                   <div className=" col-span-4 border border-gray-200 rounded-xl shadow-xl hover:translate-x-0">
                   <div className=" p-3">
                     <img className='h-52 w-full rounded-xl' src={ event.image } alt="" />
                   </div>
                   <div className=" w-full h-28 rounded-xl px-3 flex flex-col gap-2">
                     <div className=" relative flex justify-between items-center ">
                       <h1 className=' font-semibold text-md text-gray-800'> { event.title }</h1>
                       <button onClick={ () => showDropDown(event._id, event) }><i class="fa-solid fa-ellipsis-vertical text-gray-800 mr-2 py-2 px-3.5 rounded-full hover:bg-purple-600 hover:bg-opacity-25 hover:duration-500"></i></button>
                       { activeEvent === event._id && dropDown && <DropDown showPopUpUpdate={ showPopUpUpdateEvent } showData={ recivedUpdateEvent } deleteEvent={ deleteEvent } /> }
                     </div>
                     
                     <div className=" flex gap-4">
                       <div className=" flex flex-col justify-center items-start gap-4">
                         <div className=" flex justify-start items-center gap-2 ">
                           <i class="fa-solid fa-xs fa-clock text-gray-800"></i>
                           <p className=' text-xs font-medium text-[#9333ea] px-1 py-0.5 bg-[#9333ea] rounded-md bg-opacity-10 border border-[#9333ea]'> 
                            {format(new Date(event.startDate), 'dd MMM, yyyy : hh:mma')} -  {format(new Date(event.endDate), 'hh:mma')} 
                            </p>
                         </div>
                         <div className="  flex justify-start items-center gap-3">
                           <i class="fa-regular fa-user fa-sm text-gray-800"></i>
                           <p className=' text-xs font-medium text-purple-800'>{ event.participants.length } Number</p>
                         </div>
                       </div>
                       <div className="  flex flex-col justify-start items-start gap-3">
                         <div className=" flex justify-start items-center gap-3 ">
                           <i class="fa-solid fa-sm fa-location-dot text-gray-800"></i>
                           <p className=' text-xs font-medium text-purple-800'> { event.location } </p>
                         </div>
                          { new Date(event.startDate) <= Date.now() && new Date(event.endDate) >= Date.now() &&
                            <div className=" flex justify-start items-center gap-3">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path fill="#9333ea" d="M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8A8 8 0 0 1 12 20Z" opacity="0.5" />
                                <path fill="#9333ea" d="M20 12h2A10 10 0 0 0 12 2V4A8 8 0 0 1 20 12Z">
                                  <animateTransform attributeName="transform" dur="2.3s" from="0 12 12" repeatCount="indefinite" to="360 12 12" type="rotate" />
                                </path>
                              </svg>
                              <p className=' text-[#9333ea] text-xs font-medium'>Now running ...</p>
                            </div>
                          }
                       </div>
                     </div>
                   </div>
                 </div> 
                  ))}
              

        

            </div>
            

          </div>
        </div>

        { updateEvent && <UpdateEvent hidePopUpUpdateEvent={ hidePopUpUpdateEvent } /> }
    </>
  )
}
