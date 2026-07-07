
// /**@typedef {string} type */
// /**@param {string | undefined | number} value */
export function validateInputs(type='', value='') {
    console.log('validateInputs:', type, value);
    switch (type) {
        case 'select-one':
            return {valid: value !== ''};
        case 'text':
            if (/^[A-Za-z]+$/.test(value)) {
                return {valid: value.trim() !== ''};
            } else {
                return {valid: false, message: 'Please enter only letters.'};
            }
        case 'textarea':
            if (value.trim() !== '') {
                return {valid: true};
            } else {
                return {valid: false, message: 'This field is required.'};
            }
        case 'email':
            if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                return {valid: true};
            } else {
                return {valid: false, message: 'Please enter a valid email address.'};
            }
        case 'tel':
            if (/^\+?[0-9\s\-()]{7,}$/.test(value)) {
                return {valid: true};
            } else {
                return {valid: false, message: 'Please enter a valid phone number.'};
            }
        default:
            return {valid: false};
    }
}
