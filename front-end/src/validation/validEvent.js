
const validateEvent = (title, startDate, endDate, location, description, image) => {
    const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];
    const maxSize = 5 * 1024 * 1024;
    const errors = {
        title: '', startDate: '', endDate: '', location: '', description: '', image: ''
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

    if (!startDate) {
        errors.startDate = 'startDate is required';
    }else if (new Date(startDate).getTime() < Date.now() - 3600 * 1000) {
        errors.startDate = 'Please enter a date greater than the current time.';
    }

    if (!endDate) {
        errors.endDate = 'endDate is required';
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