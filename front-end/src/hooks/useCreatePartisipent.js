import { useState, useEffect } from "react";
import axios from "axios";
import { validatePartisipent } from "../validation/validPartisipent";

const useCreatePartisipent = () => {
    const [events, setEvents] = useState([]);
    const [name, setName] = useState();
    const [email, setEmail] = useState('');
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [image, setImage] = useState(null);
    const [errors, setErrors] = useState({ name: '', email: '', image: '' });


    useEffect(() => {
        const fetchEvents = async () => {
          try {
            const token = localStorage.getItem('token');
            const response = await axios.get('http://localhost:5001/event/', {
                headers: {
                'Authorization': `Bearer ${token}`
                }
            });
            const eventsData = response.data; 
            const formattedOptions = eventsData.map(event => ({
              value: event._id,
              label: event.title,
            }));
            setEvents(formattedOptions);
          } catch (error) {
            console.error("Failed to fetch users:", error);
          }
        };
    
        fetchEvents();
    }, []);


    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors({ name: '', email: '', image: '' });

        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('events', JSON.stringify(selectedOptions));
        formData.append('image', image);
        

        const validationErrors = validatePartisipent(name, email, image);
        setErrors(validationErrors);

        if (!validationErrors.name && !validationErrors.email) {

            try {
                const token = localStorage.getItem('token');
                const response = await axios.post('http://localhost:5001/participant/', formData, {
                    headers: {
                      'Authorization': `Bearer ${token}`, 
                      'Content-Type': 'multipart/form-data', 
                    }
                });

                if (response.status === 201) {
                    setName('');
                    setEmail('');
                    setSelectedOptions('');
                    setImage('')
                    console.log('Participant created successfully:', response.data);
                }

            } catch (error) {
                if (error.response && error.response.status === 400) {
                    console.log('Error create Participant:', error.response.data.message);
                } else {
                    console.log('error');
                    console.log('Error create Participant:', error.response.data.message);
                }
                
            }  

        }

    }

    return {
        events,
        name,
        setName,
        email,
        setEmail,
        selectedOptions,
        setSelectedOptions,
        setImage,
        errors,
        handleSubmit,
    }
}

export default useCreatePartisipent;