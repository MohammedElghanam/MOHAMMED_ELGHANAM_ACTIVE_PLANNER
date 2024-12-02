import { useState, useEffect } from "react";
import axios from "axios";

const useDisplayEvent = () => {
    const token = localStorage.getItem('token');
    const [Events, setEvents] = useState([]);
    const [activeEvent, setActiveEvent] = useState(null);
    const [error, setError] = useState(null);
    const [dropDown, setDropDown] = useState(false);
    const [ recivedUpdateEvent, setRecivedUpdateEvent] = useState();
    const [updateEvent, setUpdateEvent] = useState(false);

    const showDropDown = (id, events) => {
        setRecivedUpdateEvent(events)
        setActiveEvent(id)
        setDropDown( (prevState) => !prevState )
    }

    

      const showPopUpUpdateEvent = () => {
        setUpdateEvent(true)
       }
    
       const hidePopUpUpdateEvent = () => {
        setUpdateEvent(false)
       }

    const fetchEvents = async () => {
        try {
        const response = await axios.get('http://localhost:5001/event/', {
            headers: {
            'Authorization': `Bearer ${token}`
            }
        });

        setEvents(response.data);
        } catch (err) {
            console.error('Error fetching Events:', err.message);
            setError(err.message);
        }
    };

    const deleteEvent = async (eventId) => {
        try {
          const response = await axios.delete(`http://localhost:5001/event/${eventId}`, {
            headers: {
            'Authorization': `Bearer ${token}`
            }
        });
    
          if (response.status === 200) {
            setEvents(Events.filter(event => event._id !== eventId));
            console.log(`Event with ID ${eventId} has been deleted.`);
          } else {
            console.log('Failed to delete event.');
          }
        } catch (error) {
          console.error('Error deleting event:', error);
        }
    };

    useEffect(() => {
        fetchEvents();
    }, []); 

    return { Events, error, dropDown, showDropDown, activeEvent, updateEvent, recivedUpdateEvent, hidePopUpUpdateEvent, showPopUpUpdateEvent, deleteEvent};
};

export default useDisplayEvent;
