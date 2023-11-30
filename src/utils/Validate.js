export const checkValidData = (email , password) => {
    const isEmailValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
 const isPasswordValid = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(password);
//  const isName = /^[a-zA-Z]+ [a-zA-Z]+$/.test(name)

 if(!isEmailValid) return "Email is not valid";
 if(!isPasswordValid) return "Password is incorrect"
//  if(!isName) return "Please Enter valid Data"

 return null;
}; 

