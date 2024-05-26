function userNameSignUpValidation(name) {
    if (name.trim().length < 3) return "User name must contain at least 3 characters";
    return "";
  }
  
  function userSignUpPasswordValidation(password) {
    const numberRegex = /\d/;
    const specialCharacterRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  
    if (password.trim().length < 8) {
      return "Password should contain at least 8 characters";
    } else if (!numberRegex.test(password)) {
      return "Password should contain numbers";
    } else if (!specialCharacterRegex.test(password)) {
      return "Password should contain special characters";
    }
    return "";
  }
  
  function userPasswordMatching(password, confirmPassword) {
    if (password !== confirmPassword) {
      return "Passwords do not match";
    }
    return "";
  }
  
  export { userNameSignUpValidation, userSignUpPasswordValidation, userPasswordMatching };
  