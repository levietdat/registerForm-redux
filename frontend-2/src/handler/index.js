import { addUser } from "../redux/userSlice";


export const handleChangeFirstValue = (e,context) => {
    context.setFirstValue(e.target.value);
  };
export  const handleChangeSecondValue = (e,context) => {
    context.setSecondValue(e.target.value);
  };
export  const handlePre = (context) => {

    if (context.step === parseInt(2)) {
       
      context.setFirstValue(context.email);
      context.setSecondValue(context.username);
    }
    if (context.step === parseInt(3)) {
      context.setFirstValue(context.password);
      context.setSecondValue(context.confirmPassWord);
    }
    context.setStep(context.step - 1);
  };
export  const handleNext = (context) => {
    const expreg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (context.step === parseInt(1) && context.firstValue !== "" && context.secondValue !== "") {
      context.setFirstValue(context.password)
      context.setSecondValue(context.confirmPassWord);
     
      if (!expreg.test(context.firstValue)) {
        alert("Invalid Email");
      } else { 
     
        context.setEmail(context.firstValue);
        context.setUsername(context.secondValue);
        context.setStep(context.step + 1);
      }
    }
 
    if (context.step === parseInt(2) && context.firstValue !== "" && context.secondValue !== "") {
     
      if (context.firstValue !== context.secondValue) {
        alert("Fail to confirmPassWord");
      } else {
        context.setPassword(context.firstValue);
        context.setConfirmPassWord(context.secondValue);
        context.setFirstValue(context.address);
        context.setSecondValue(context.zipcode);
        context.setStep(context.step + 1);
      }
    }
  };

export  const handleSubmit = (e,context,dispatch) => {
    e.preventDefault();
    if (context.firstValue === "" || context.secondValue === "") {
      alert("Please enter input value");
    } else {
      context.setAdress(context.firstValue)
      context.setZipcode(context.secondValue)
      dispatch( addUser({
        email: context.email,
        username: context.username,
        password: context.password,
        confirmPassword: context.confirmPassWord,
        address: context.address,
        zipcode: context.zipcode,
      }))
    }
  };