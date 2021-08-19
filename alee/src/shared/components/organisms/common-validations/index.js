

let errors = {}

const checkValidation = () => {
    return errors;
}

const ValidateInfo = (fieldName, value, validation) => {
    debugger

    // var aa = validation.length;
    // for (let i = aa; i <= aa; i++) {

    //     let aa = validation[i] 
    //     var b = aa.split("|")

    //     const required = fieldName + " field is required";
    //     const min = fieldName + " length should be atleast "+ b[1];

    //     if (((value === "") || (value === null)) && validation[i] === "required") {
    //         debugger
    //         //isValid= false;
    //         errors = ({ [fieldName]: required });
    //         console.log(errors)
    //         return <span>{required}</span>
    //     }

    //     if (validation[i] === "min" && value.length < b[1]) {
    //         debugger
    //         //isValid= false;
    //         errors = ({ [fieldName]: min });
    //         console.log(errors)
    //         return <span>{min}</span>
    //     }
    //     //else errors = {}
    // }
}





export const commonValidation = {
    ValidateInfo,
    checkValidation
};

