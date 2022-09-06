import { createContext, useState } from "react";

const Context = createContext()

const ProviderForm = ({children}) => {
  const [firstValue, setFirstValue] = useState("");
  const [secondValue, setSecondValue] = useState("");
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassWord, setConfirmPassWord] = useState("");
  const [address, setAdress] = useState("");
  const [zipcode, setZipcode] = useState("");
  const value = {
    firstValue,setFirstValue,secondValue,setSecondValue,step,setStep,email,setEmail,username,setUsername,password,setPassword,
    confirmPassWord,setConfirmPassWord, address,setAdress,zipcode,setZipcode,
  }

    return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  );
}

export {Context,ProviderForm} 