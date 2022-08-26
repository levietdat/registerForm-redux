import React, { useState } from "react";
import {
  Container,
  Button,
  ButtonGroup,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import {addUser}  from "../redux/userSlice";
import { useDispatch } from "react-redux";
const RegisterForm = () => {
  const dispatch = useDispatch();
  const [firstValue, setFirstValue] = useState("");
  const [secondValue, setSecondValue] = useState("");
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassWord, setConfirmPassWord] = useState("");
  const [address, setAdress] = useState("");
  const [zipcode, setZipcode] = useState("");
  const handleChangeFirstValue = (e) => {
    setFirstValue(e.target.value);
  };
  const handleChangeSecondValue = (e) => {
    setSecondValue(e.target.value);
  };
  const handlePre = () => {
    if (step === parseInt(2)) {
      setFirstValue(email);
      setSecondValue(username);
    }
    if (step === parseInt(3)) {
      setFirstValue(password);
      setSecondValue(confirmPassWord);
    }
    setStep(step - 1);
  };
  const handleNext = () => {
    const expreg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (step === parseInt(1) && firstValue !== "" && secondValue !== "") {
      if (!expreg.test(firstValue)) {
        alert("Invalid Email");
      } else { 
        setEmail(firstValue);
        setUsername(secondValue);
        setFirstValue("");
        setSecondValue("");
        setStep(step + 1);
      }
    }
    if (step === parseInt(2) && firstValue !== "" && secondValue !== "") {
      if (firstValue !== secondValue) {
        alert("Fail to confirmPassWord");
      } else {
        setPassword(firstValue);
        setConfirmPassWord(secondValue);
        setFirstValue("");
        setSecondValue("");
        setStep(step + 1);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstValue === "" || secondValue === "") {
      alert("Please enter input value");
    } else {
      setAdress(firstValue)
      setZipcode(secondValue)
      dispatch( addUser({
        email: email,
        username: username,
        password: password,
        confirmPassword: confirmPassWord,
        address: address,
        zipcode: zipcode,
      }))
    }
  };
  return (
    <Container
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        border: "1px solid #ccc",
        marginTop: "2rem",
        alignItems: "center",
        minHeight: "90vh",
      }}
      maxwidth="sm"
    >
      <Typography variant="h3">REGISTER FORM</Typography>
      <Container
        style={{
          display: `${step === parseInt(1) ? "flex" : "none"}`,
          flexDirection: "column",
          // width:'60%',
          marginTop: "2rem",
          marginBottom: "2rem",
        }}
      >
        <Typography variant="h4" fontSize={"24px"} marginBottom="1rem">
          Step One
        </Typography>
        <Box
          component="span"
          sx={{
            width: "33%",
            height: 5,
            backgroundColor: "#80c783",
            marginBottom: "1rem",
          }}
        >
          {" "}
        </Box>
        <TextField
          style={{ marginBottom: "1rem" }}
          id="outlined-basic"
          label="Email"
          variant="outlined"
          onChange={handleChangeFirstValue}
        />
        <TextField
          onChange={handleChangeSecondValue}
          id="outlined-basic"
          label="UserName"
          variant="outlined"
        />
      </Container>

      <Container
        style={{
          display: `${step === parseInt(2) ? "flex" : "none"}`,
          flexDirection: "column",
          // width:'60%',
          marginTop: "2rem",
          marginBottom: "2rem",
        }}
      >
        <Typography variant="h4" fontSize={"24px"} marginBottom="1rem">
          Step Two{" "}
        </Typography>
        <Box
          component="span"
          sx={{
            width: "66%",
            height: 5,
            backgroundColor: "#80c783",
            marginBottom: "1rem",
          }}
        >
          {" "}
        </Box>
        <TextField
          onChange={handleChangeFirstValue}
          style={{ marginBottom: "1rem" }}
          id="outlined-basic"
          type={"password"}
          label="PassWord"
          variant="outlined"
        />
        <TextField
          onChange={handleChangeSecondValue}
          id="outlined-basic"
          type={"password"}
          label="ConfirmPassWord"
          variant="outlined"
        />
      </Container>

      <Container
        style={{
          display: `${step === parseInt(3) ? "flex" : "none"}`,
          flexDirection: "column",
          // width:'60%',
          marginTop: "2rem",
          marginBottom: "2rem",
        }}
      >
        <Typography variant="h4" fontSize={"24px"} marginBottom="1rem">
          Step Third{" "}
        </Typography>
        <Box
          component="span"
          sx={{
            width: "100%",
            height: 5,
            backgroundColor: "#80c783",
            marginBottom: "1rem",
          }}
        >
          {" "}
        </Box>
        <TextField
          onChange={handleChangeFirstValue}
          style={{ marginBottom: "1rem" }}
          id="outlined-basic"
          label="Address"
          variant="outlined"
        />
        <TextField
          onChange={handleChangeSecondValue}
          id="outlined-basic"
          label="Zipcode"
          variant="outlined"
        />
      </Container>
      <ButtonGroup maxwidth="sm" variant="outlined">
        <Button
          onClick={handlePre}
          disabled={step > parseInt(1) ? false : true}
        >
          PREVIOUS
        </Button>
        <Button
          onClick={handleNext}
          disabled={step <= parseInt(2) ? false : true}
          style={{ margin: "0 1rem" }}
        >
          NEXT
        </Button>
        <Button
          disabled={step === parseInt(3) ? false : true}
          onClick={handleSubmit}
          type="submit"
        >
          SUBMIT
        </Button>
      </ButtonGroup>
    </Container>
  );
};

export default RegisterForm;
