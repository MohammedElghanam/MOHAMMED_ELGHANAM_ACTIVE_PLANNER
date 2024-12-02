import React, { useState, useEffect } from "react";
import axios from "axios";
import { validateEvent } from "../validation/validEvent";


const useCreateEvent = () => {
    const [users, setUsers] = useState([]);
    const [title, setTitle] = useState();
    const [date, setDate] = useState('');
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [image, setImage] = useState(null);
    const [errors, setErrors] = useState({ title: '', date: '', location: '', description: '', image: '' });

    useEffect(() => {
        const fetchUsers = async () => {
          try {
            const token = localStorage.getItem('token');
            const response = await axios.get('http://localhost:5001/participant', {
                headers: {
                'Authorization': `Bearer ${token}`
                }
            });
            const usersData = response.data; 
            const formattedOptions = usersData.map(user => ({
              value: user._id,
              label: user.name,
            }));
            setUsers(formattedOptions);
          } catch (error) {
            console.error("Failed to fetch users:", error);
          }
        };
    
        fetchUsers();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors({ title: '', date: '', location: '', description: '', image: '' });

        const formData = new FormData();
        formData.append('title', title);
        formData.append('date', date);
        formData.append('location', location);
        formData.append('description', description);
        formData.append('participants', JSON.stringify(selectedOptions));
        formData.append('image', image);
        

        const validationErrors = validateEvent(title, date, location, description, image);
        setErrors(validationErrors);
        // if (Object.keys(validationErrors).length > 0) return;

        // console.log(title);
        // console.log(date);
        // console.log(location);
        // console.log(description);
        // console.log(selectedOptions);
        // console.log(image);
        
        
        
        
        

        if (!validationErrors.title && !validationErrors.date) {

            try {
                const token = localStorage.getItem('token');
                const response = await axios.post('http://localhost:5001/event/', formData, {
                    headers: {
                      'Authorization': `Bearer ${token}`, 
                      'Content-Type': 'multipart/form-data', 
                    }
                });

                if (response.status === 201) {
                    setTitle('');
                    setDate('');
                    setLocation('');
                    setDescription('');
                    setSelectedOptions('');
                    setImage('')
                    console.log('Event created successfully:', response.data);
                }

            } catch (error) {
                if (error.response && error.response.status === 400) {
                  console.log('mmxatx req');
                  
                  console.log('Error create Event:', error.response.data.message);
                } else {
                  console.log('error');
                  console.log('Error create Event:', error.response.data.message);
                }
                
            }  

        }

    }

    return {
        users,
        title,
        setTitle,
        date,
        setDate,
        location,
        setLocation,
        description,
        setDescription,
        selectedOptions,
        setSelectedOptions,
        setImage,
        errors,
        handleSubmit,
    }
}

export default useCreateEvent;