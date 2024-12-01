import { useState, useEffect } from "react";
import axios from "axios";

const useDisplayPartisipent = () => {
    const [participants, setParticipants] = useState([]);
    const [activeParticipant, setActiveParticipant] = useState(null);
    const [error, setError] = useState(null);
    const [dropDown, setDropDown] = useState(false);
    const [updatePartisipent, setupdatePartisipent] = useState();
    
    const showDropDown = (id, participant) => {
        setupdatePartisipent(participant)
        setActiveParticipant(id)
        setDropDown( (prevState) => !prevState )
    }

    const fetchParticipants = async () => {
        try {
        const token = localStorage.getItem('token');
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

    return { participants, error, dropDown, showDropDown, activeParticipant, updatePartisipent};
};

export default useDisplayPartisipent;
