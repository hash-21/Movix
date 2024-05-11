export const validateName = (name) => {
    const isNameValid = /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/.test(name);
    return isNameValid ? null : "Full Name not valid";
  };
  

export const checkValidData= (email,password)=>{
   
    const isEmailValid=/^([a-zSA-Z0-9._%-]+@[a-zSA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);


    if(!isEmailValid) return "Email Id is not valid";
    if(!isPasswordValid) return "Password is not valid";
   
    // if(name!=null)
    //  if(!isNameValid) return "Name is not valid";

    return null;

}

