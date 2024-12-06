import React, { useState } from 'react'
import Participant from '../components/forms/participant';
import Event from '../components/forms/event';
import Users from '../components/component/users';
import Events from '../components/component/events';
import Statistique from '../components/component/statistique';
import NavBar from '../components/component/navBar';
import SideBar from '../components/component/sideBar';
import Select from 'react-select';
import UpdateUser from '../components/forms/updateUser';
import UpdateEvent from '../components/forms/updateEvent';
import Test from './test';


export default function Dashboard() {

  const [eventCount, setEventCount] = useState(0);
  const [partisipentCount, setPartisipentCount] = useState(0);
  const [createPartispent, setCreatePartispent] = useState(false);
  const [ceateEvent, setCeateEvent] = useState(false);
  const [updatePartispent, setUpdatePartispent] = useState(false);
  const [recivedDataUpdatePartispent, setRecivedDataUpdatePartispent] = useState({});

  const updatePartisipentCount = (count) => {
    setPartisipentCount(count);
  };
  
  const showPopUpPartisipent = () => {
   setCreatePartispent(true)
  }

  const hidePopUpPartisipent = () => {
    setCreatePartispent(false)
  }

  const showPopUpUpdatePartisipent = (partisipent) => {
    
    setRecivedDataUpdatePartispent(partisipent)
    setUpdatePartispent(true)
   }
 
   const hidePopUpUpdatePartisipent = () => {
    setUpdatePartispent(false)
   }

  const showPopUpEvent = () => {
   setCeateEvent(true)
  }

  const hidePopUpEvent = () => {
   setCeateEvent(false)
  }



  return (
    <div className=" flex justify-center w-full h-screen fixed bg-gray-200 bg-opacity-20">
        <div className=" w-full h-full flex justify-center gap-4 p-3">

          {/* <Test /> */}

          {/* sideBar  */}
          <SideBar showPopUpEvent={ showPopUpEvent } showPopUpPartisipent={ showPopUpPartisipent } />
          
          <div className="h-full w-4/5 rounded-2xl border border-gray-200">

            {/* navbar  */}
            <NavBar />

            {/* statistique  */}
            <Statistique />
 

            <div className=" w-full h-3/4 grid grid-cols-12 gap-2 p-2">
              {/* events  */}
              
              <Events />

              {/* users  */}
              <Users showPopUpUpdatePartisipent={ showPopUpUpdatePartisipent } />

            </div>

          </div>
        </div>

          { createPartispent && <Participant hidePopUpPartisipent={ hidePopUpPartisipent } />}
          { ceateEvent && <Event hidePopUpEvent={ hidePopUpEvent } /> }

          
          { updatePartispent && <UpdateUser hidePopUpUpdatePartisipent={ hidePopUpUpdatePartisipent } recivedDataUpdatePartispent={ recivedDataUpdatePartispent } /> }
          
          
          
    </div>

  )
}
