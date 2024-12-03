import { useState, useEffect } from "react";
import axios from "axios";

const useDisplayPartisipent = () => {
    const token = localStorage.getItem('token');
    const [participants, setParticipants] = useState([]);
    const [activeParticipant, setActiveParticipant] = useState(null);
    const [error, setError] = useState(null);
    const [dropDown, setDropDown] = useState(false);
    const [updatePartisipent, setupdatePartisipent] = useState();


    const sorting = () =>{
        const sorted =  participants.sort((a, b) => {
            return a.name - b.name;
        }); 
        setParticipants(sorted);
        console.log(sorted);
        
    }





    
    const showDropDown = (id, participant) => {
        setupdatePartisipent(participant)
        setActiveParticipant(id)
        setDropDown( (prevState) => !prevState )
    }

    const deleteParticipant = async (participantId) => {
        try {
          const response = await axios.delete(`http://localhost:5001/participant/${participantId}`, {
            headers: {
            'Authorization': `Bearer ${token}`
            }
        });
    
        if (response.status === 200) {
            setParticipants(participants.filter(participant => participant._id !== participantId));
            console.log(`Participant with ID ${participantId} has been removed from event ${participantId}.`);
        } else {
            console.log('Failed to remove participant.');
          }
        } catch (error) {
          console.error('Error deleting participant:', error);
        }
    };

    const fetchParticipants = async () => {
        try {
        const response = await axios.get('http://localhost:5001/participant', {
            headers: {
            'Authorization': `Bearer ${token}`
            }
        });

        setParticipants(response.data);
        } catch (err) {
        console.error('Error fetching participants:', err.message);
        setError(err.message);
        }
    };

    useEffect(() => {
        fetchParticipants();
    }, []); 

    return { participants, error, dropDown, showDropDown, activeParticipant, updatePartisipent, deleteParticipant, sorting};
};

export default useDisplayPartisipent;
