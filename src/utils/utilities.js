let password = "";
const isEmpty = value => value.trim() === '';
const isEmail = value => !value.includes('@') ;
const checkPassword = value => value.length !== 8;
const checkBeforeDate = (value) => {
    const inputDate = new Date(value);
    const currentDate = new Date();
    return inputDate >= currentDate;
 };
const checkConfirmPassword = value => {
   return password !== value;
}

export const nameChangeHandler = (value) => {
    const payload = {
        value : value,
        error: isEmpty(value)
    };
    return payload;
}

export const dateChangeHandler = (value) => {   
    const payload = {
        value : value,
        error: checkBeforeDate(value)
    };
    return payload;
}

export const genderChangeHandler = (value) => {   
    const payload = {
        value : value,
        error: isEmpty(value)
    };
    return payload;
}

export const emailChangeHandler = (value) => {
    const payload = {
        value : value,
        error: isEmail(value)
    };
    return payload;
}

export const passwordChangeHandler = (value) => {   
    const payload = {
        value : value,
        error: checkPassword(value)
    };
    password = value;
    return payload;
}

export const confirmPasswordChangeHandler = (value) => {   
    const payload = {
        value : value,
        error: checkConfirmPassword(value)
    };
    return payload;
}

export const hasNoError = (formData) => {
    const returnValue =((Object.values(formData)).every((value)=>{return value.error === false}));
    console.log(returnValue);
   return returnValue;
};

export const signin = () => {
    console.log("SignIn");
}