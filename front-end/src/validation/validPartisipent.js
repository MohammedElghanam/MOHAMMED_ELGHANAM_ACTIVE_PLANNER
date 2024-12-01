
const validatePartisipent = (name, email, image) => {
    const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];
    const maxSize = 5 * 1024 * 1024;
    const errors = {
        name: '',
        email: '',
        image: '',
    };

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
        errors.email = 'Email is required';
    } else if (!emailPattern.test(email)) {
        errors.email = 'Please enter a valid email address';
    }

    if (!name) {
      errors.name = 'name is required';
    }

    if (!image) {
        errors.image = 'image is required';
    }else if (!allowedTypes.includes(image.type)) {
        errors.image = 'Invalid file type. Only JPEG and JPG and PNG are allowed.';
    }else if (image.size > maxSize) {
        errors.image = 'File is too large. Maximum size is 5MB.';
    }

    return errors; 
};

export { validatePartisipent };