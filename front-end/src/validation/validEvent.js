
const validateEvent = (title, date, location, description, image) => {
    const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];
    const maxSize = 5 * 1024 * 1024;
    const errors = {
        title: '', date: '', location: '', description: '', image: ''
    };

    if (!title || title.trim() === '') {
      errors.title = 'title is required';
    }

    if (!location || location.trim() === '') {
        errors.location = 'location is required';
    }

    if (!description || description.trim() === '') {
        errors.description = 'description is required';
    }else if (description.length > 300) {
        errors.description = 'Description must not exceed 300 characters.';
    }

    if (!date) {
        errors.date = 'date is required';
    }else if (new Date(date).getTime() < Date.now() - 3600 * 1000) {
        errors.date = 'Please enter a date greater than the current time.';
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

export { validateEvent };