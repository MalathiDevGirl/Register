let password = "";
const isEmpty = value => value.trim() === '';
const checkPassword = value => value.length !== 8;
const validEmail = value =>!value.includes('@');

const isEmail = (email) => {
    const existingData = getLocalStorage("existingData");
    let checkEmail;
    if(existingData !== null){
        checkEmail = existingData.some((value) => {
            return value.email === email;
        })
    }
    else if(existingData === null){
        checkEmail = false;
    }
    return checkEmail;
}

const checkBeforeDate = (value) => {
    const inputDate = new Date(value);
    const currentDate = new Date();
    return inputDate >= currentDate;
 };
 const checkConfirmPassword = value => {
    return password !== value;
 } 

export const getLocalStorage = (itemName) => {
    return JSON.parse(localStorage.getItem(itemName));
}

export const updateLocalStorageItem = (id,statusValue) => {
    let existingData = getLocalStorage("existingData");
        existingData = existingData.map((data) => {
            if(data.id === id){
                return {
                    ...data,
                    status: statusValue,
                }
            }
        return data;
        })
    setLocalStorageItem("existingData",existingData);
}

export const setLocalStorageItem = (itemName, data) =>{
localStorage.setItem(itemName, JSON.stringify(data));
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

export const userEmailChangeHandler = (value) => {
    const payload = {
        value : value,
        error: validEmail(value)
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
   return returnValue;
};
