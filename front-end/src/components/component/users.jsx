import React from 'react'
import DropDown from './dropDown';
import useDisplayPartisipent from '../../hooks/useDisplayPartisipent';

export default function Users({ showPopUpUpdatePartisipent, }) {

  const { participants, dropDown, activeParticipant, showDropDown, updatePartisipent, deleteParticipant, sorting } = useDisplayPartisipent();

  return (
    <>
        <div className=" col-span-4 h-full rounded-2xl border border-gray-200 overflow-y-auto scrollbar-hide">
                <div className=" border-b border-gray-200 flex justify-between items-center px-3">
                  <h1 className=' p-2 font-medium text-xl'> Participants </h1>
                  <button onClick={ () => sorting() }> sort </button>
                </div>

                <div className=" w-full h-full ">
                  { participants.map( participant => (  
                    <div className=" relative flex justify-between items-center gap-2 p-2 border-b border-gray-200">
                      <div className=" flex justify-start items-center gap-2 ">
                        <img className=' w-10 h-10 rounded-full bg-purple-400' src={ participant.image } alt="" />
                        <div className="">
                          <h1 className=' font-semibold text-gray-800'> {participant.name} </h1>
                          <p className=' text-xs text-gray-600'>{participant.email}</p>
                        </div>
                      </div>
                      <button onClick={() => showDropDown(participant._id, participant)} className=" w-7 h-7 rounded-sm flex justify-center items-center bg-purple-600 bg-opacity-15 hover:bg-opacity-20">
                        <i class="fa-solid fa-ellipsis"></i>
                      </button>
                      
                      { activeParticipant === participant._id && dropDown && <DropDown showPopUpUpdate={ showPopUpUpdatePartisipent } showData={ updatePartisipent } deleteEvent={ deleteParticipant } /> }
                    </div>
                  ))}              
                </div>
              </div> 
    </>
  )
}
