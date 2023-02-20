
export const emailValidator = email => {
  if (!email) {
    return 'Email is required' 
  } else if (!new RegExp(/\S+@\S+\.\S+/).test(email)) {
    return "Invalid Email type" 
  }
  return "";
};

export const passwordValidator = password => {
  if (!password) {
    return "Password is required" 
  } else if (password.length < 8) {
    return "Password must have a minimum 8 characters" 
  }
  return "";
};

export const fnameValidator = fname => {
  if(!fname) {
    return "Firstname is required"
  }
  return "";
}

export const lnameValidator = lname => {
  if(!lname) {
    return "Lastname is required" 
  }
  return "";
}