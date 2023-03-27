import { useState } from "react";

import { emailValidator, passwordValidator, fnameValidator, lnameValidator } from "../components/Validator";

const touchErrors = errors => {
  return Object.entries(errors).reduce((acc, [field, fieldError]) => {
    acc[field] = {
      ...fieldError,
    };
    return acc;
  }, {});
};

export const useLoginFormValidator = (form, email) => {
  const [errors, setErrors] = useState({
    email: {
      error: true,
      message: "",
    },
    password: {
      error: true,
      message: "",
    },
    fname: {
      error: true,
      message: "",
    },
    lname: {
      error: true,
      message: "",
    },
  });

  const validateForm = ({ email, form, field, errors, forceTouchErrors = false }) => {
    let isValid = true;

    // Create a deep copy of the errors
    let nextErrors = JSON.parse(JSON.stringify(errors));

    // Force validate all the fields
    if (forceTouchErrors) {
      nextErrors = touchErrors(errors);
    }

    const { password, fname, lname } = form;

    if ((field ? field === "email" : true)) {
      const emailMessage = emailValidator(email);
      nextErrors.email.error = !emailMessage;
      nextErrors.email.message = emailMessage;
      if (!emailMessage) isValid = false;

    }

    // if ((field ? field === "password" : true)) {
    //   const passwordMessage = passwordValidator(password, form);
    //   nextErrors.password.error = !passwordMessage;
    //   nextErrors.password.message = passwordMessage;
    //   if (!passwordMessage) isValid = false;
    // }

    // if ((field ? field === "fname" : true)) {
    //   const fnameMessage = fnameValidator(fname, form);
    //   nextErrors.fname.error = !fnameMessage;
    //   nextErrors.fname.message = fnameMessage;
    //   if (!fnameMessage) isValid = false;
    // }

    // if ((field ? field === "lname" : true)) {
    //   const lnameMessage = lnameValidator(lname, form);
    //   nextErrors.lname.error = !lnameMessage;
    //   nextErrors.lname.message = lnameMessage;
    //   if (!lnameMessage) isValid = false;
    // }

    setErrors(nextErrors);

    return {
      isValid,
      errors: nextErrors,
    };
  };

  const onBlurField = e => {
    const field = e.target.name;
    const fieldError = errors[field];
    if (fieldError) return;

    const updatedErrors = {
      ...errors,
      [field]: {
        ...errors[field]
      },
    };

    validateForm({ email, form, field, errors: updatedErrors });
  };

  return {
    validateForm,
    onBlurField,
    errors,
  };
};
