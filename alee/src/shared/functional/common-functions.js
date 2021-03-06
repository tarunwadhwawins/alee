import React from "react";
import SimpleReactValidator from "simple-react-validator";
import { Label} from "semantic-ui-react";
import { env } from "../functional/global-import";
import moment from 'moment';
import{avatar} from '../functional/global-image-import';

// This function is used to handle common onchange in all the forms in the application.
const onHandleChange = (e, { name, value, type, checked, data }, obj) => {
  const path = data.split(".");
  const depth = path.length;
  const state = { ...obj };
  let ref = state;
  for (let i = 0; i < depth; i += 1) {
    if (i === depth - 1) {
      if (
        type === "text" || type === "radio" || type === "password" || type === "select" ||
        type === "textarea" || type === "multiple-select" || type === "phoneNumber" || type === "number") {
        ref[path[i]] = value;
      } else if (type === "select-int") {
        ref[path[i]] = parseInt(value);
      } else if (type === "checkbox") {
        ref[path[i]] = checked;
      }
    } else {
      ref = ref[path[i]];
    }
  }
  return state;
};

// This function is used to handle common form submit in all the forms in the application.
const onHandleFormSubmit = (e, simpleValidator, forceUpdate) => {              
  e.preventDefault();
  if (simpleValidator.current.allValid() === false) {
    simpleValidator.current.showMessages();
    forceUpdate(true);
    return false;
  } else {
    return true;
  }
};
const initializeSimpleValidator = () => {
  return new SimpleReactValidator({
    element: (message) => (
      <Label basic color="red" pointing="above">
        {message}
      </Label>
    ),
    validators: {
      // For Custom error Message in confirm Passcode field
      validConfirmPasscode: {
        message: "The 'Passcode' and 'Confirm Passcode' doesn't match'",
        rule: (val, params, validator) => {
          if (params[0] !== "undefined" && params[0].length > 1) {
            return val === params[0];
          }
        },
        required: true, // optional
      },

      // For Custom error message in confirm Password field
      validConfirmPassword: {
        message: "The 'Password' and 'Confirm Password' doesn't match'",
        rule: (val, params, validator) => {
          if (params[0] !== "undefined" && params[0].length > 1) {
            return val === params[0];
          }
        },
        required: true, // optional
      },
      validRoles: {
        message: "Must be Select One Roles",
        rule: (val, params, validator) => {
          if (params[0].length > 1) {
            return val === params[0];
          }
        },
        required: true,
      },
    },
  });
}; 
const concatenateImageWithAPIUrl = (Image) => {
  if (Image === null) {
    return `${avatar}`;
  }
  else {
    return `${env.API_URL.replace("/api", "")}${Image}`;
  }
};
const getFormData = (data) => {
  var formData = new FormData();
  Object.entries(data).map(function ([key, val]) {
    if (typeof val !== "undefined") {
      // if (key === "image" && val !== null) {
      //   formData.append(key, val[0].file);
      // }
      if ((key === "file" || key === "pdfFile") && val !== null && (data[key].length > 0)) {
        let file = val[0].file === undefined ? val[0] : val[0].file;
        formData.append(key, file);
      }
      else if (key === "ids" || key === "grades" || key === "standards" || key === "comprehensionStrategies" || key === "valuesTag" || key === "literaryElements") {
            
        var array = val;
        for (var i = 0; i < array.length; i++) {
          formData.append(key, array[i]);
        }
      }
      else if (key === "images" || key === "bookCoverImage") {
        var arr = val;
        for (var i = 0; i < arr.length; i++) {
          let file = val[i].file === undefined ? val[i] : val[i].file;
          formData.append(key, file);
        }
      }
      else {
        formData.append(key, val);
      }
    }
  });
  return formData;
};
const formattedDate = (date) => {
  return moment(date).format("MMM DD, YYYY");
}
const saveFormattedDate = (date) => {
  return moment(date).format("YYYY-MM-DD");
}
const getSingleValue = (globalCodeData, categoryType, codeName) => {
  const singlevalue = globalCodeData && globalCodeData.filter(code => code.categoryName === categoryType && code.codeName === codeName);
  return singlevalue[0].categoryId;
}
const getGlobalCodeDetails = (globalCodeData, categoryType, codeName) => {
  const singlevalue = globalCodeData.filter((code) => {
    return code.categoryName === categoryType && code.codeName === codeName
  });
  return singlevalue[0];
}
export const commonFunctions = {
  onHandleChange,
  onHandleFormSubmit,
  initializeSimpleValidator,
  concatenateImageWithAPIUrl,
  getFormData,
  formattedDate,
  saveFormattedDate,
  getSingleValue,
  getGlobalCodeDetails,
};