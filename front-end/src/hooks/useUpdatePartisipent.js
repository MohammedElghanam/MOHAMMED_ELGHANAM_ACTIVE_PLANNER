import { useState } from "react";
import axios from "axios";
import { validatePartisipent } from "../validation/validPartisipent";

const useUpdatePartisipent = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState('');
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [image, setImage] = useState(null);
    const [errors, setErrors] = useState({ name: '', email: '', image: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors({ name: '', email: '', image: '' });

        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('events', JSON.stringify(selectedOptions));
        formData.append('image', image);
        
        console.log(name);
        console.log(email);
        
        

        // const validationErrors = validatePartisipent(name, email, image);
        // setErrors(validationErrors);

        // if (!validationErrors.name && !validationErrors.email) {

        //     try {
        //         const token = localStorage.getItem('token');
        //         const response = await axios.post(`http://localhost:5001/participant/${id}`, formData, {
        //             headers: {
        //               'Authorization': `Bearer ${token}`, 
        //               'Content-Type': 'multipart/form-data', 
        //             }
        //         });

        //         if (response.status === 201) {
        //             setName('');
        //             setEmail('');
        //             setSelectedOptions('');
        //             setImage('')
        //             console.log('Participant created successfully:', response.data);
        //         }

        //     } catch (error) {
        //         if (error.response && error.response.status === 400) {
        //             console.log('Error create Participant:', error.response.data.message);
        //         } else {
        //             console.log('error');
        //             console.log('Error create Participant:', error.response.data.message);
        //         }
                
        //     }  

        // }

    }

    return {
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

export default useUpdatePartisipent;