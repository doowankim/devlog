const Validator = require('validator');
const is_Empty = require('./isEmpty');

module.exports = function validatePostInput(data){
    let errors = {};

    data.text = !is_Empty(data.text) ? data.text : '';
    data.title = !is_Empty(data.title) ? data.title: '';

    if(!Validator.isLength(data.text, { min: 10, max: 10000 })){
        errors.text = 'Post must be between 10 and 10000 characters'
    }

    if(!Validator.isLength(data.title, { min: 1, max: 100 })){
        errors.title = 'Post must be between 1 and 100 characters'
    }

    if(Validator.isEmpty(data.text)){
        errors.text = 'Text is required'
    }

    if(Validator.isEmpty(data.title)){
        errors.title = 'Title is required'
    }

    return {
        errors,
        isValid: is_Empty(errors)
    }
};