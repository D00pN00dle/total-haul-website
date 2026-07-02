
/**@param {string} type */
/**@param {string | undefined | number} value */
export function validateInputs(type, value) {
    switch (type) {
        case 'select-one':
            return value !== '';
        case 'text':
            return value.trim() !== '';
        case 'textarea':
            return value.trim() !== '';
        case 'email':
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        case 'tel':
            return /^\+?[0-9\s\-()]{7,}$/.test(value);
        default:
            return false;
    }
}
