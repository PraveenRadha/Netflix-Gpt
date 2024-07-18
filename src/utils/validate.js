export const checkValidData = (email,password) => {

//  const isNameValid = /^[a-zA-Z0-9_-]{4,16}$/.test(name);
 const isEmailValid = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
 const isPasswordValid = /^\S*(?=\S{6,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/.test(password);

//  if(!isNameValid)return "Name is not valid"
 if(!isEmailValid)return "Email ID is not valid";
 if(!isPasswordValid)return "Password is not valid";

 return null;

};