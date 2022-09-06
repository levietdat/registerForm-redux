import React, { useContext } from "react";
import {
  Container,
  Button,
  ButtonGroup,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useDispatch } from "react-redux";
import { Context } from "../Context";
import { style } from "../styles";
import {
  handleChangeFirstValue,
  handleChangeSecondValue,
  handleNext,
  handlePre,
  handleSubmit,
} from "../handler";
const RegisterForm = () => {
  const context = useContext(Context);
  const dispatch = useDispatch();
  return (
    <Container style={style.container} maxwidth="sm">
      <Typography variant="h3">REGISTER FORM</Typography>
      {context.step === parseInt(1) && (
        <Container style={style.containerForm}>
          <Typography variant="h4" fontSize={"24px"} marginBottom="1rem">
            Step One
          </Typography>
          <Box
            component="span"
            sx={style.progressOne}
          >
            {" "}
          </Box>
          <TextField
            style={{ marginBottom: "1rem" }}
            label="Email"
            variant="outlined"
            onChange={(e) => handleChangeFirstValue(e, context)}
            value={context.firstValue || ""}
          />
          <TextField
            onChange={(e) => handleChangeSecondValue(e, context)}
            label="UserName"
            variant="outlined"
            value={context.secondValue || ""}
          />
        </Container>
      )}

      {context.step === parseInt(2) && (
        <Container style={style.containerForm}>
          <Typography variant="h4" fontSize={"24px"} marginBottom="1rem">
            Step Two{" "}
          </Typography>
          <Box
            component="span"
            sx={style.progressTwo}
          >
            {" "}
          </Box>
          <TextField
            onChange={(e) => handleChangeFirstValue(e, context)}
            style={{ marginBottom: "1rem" }}
            type={"password"}
            label="PassWord"
            variant="outlined"
            value={context.firstValue || ""}
          />
          <TextField
            onChange={(e) => handleChangeSecondValue(e, context)}
            type={"password"}
            label="ConfirmPassWord"
            variant="outlined"
            value={context.secondValue || ""}
          />
        </Container>
      )}

      {context.step === parseInt(3) && (
        <Container style={style.containerForm}>
          <Typography variant="h4" fontSize={"24px"} marginBottom="1rem">
            Step Third{" "}
          </Typography>
          <Box
            component="span"
            sx={style.progressThird}
          >
            {" "}
          </Box>
          <TextField
            onChange={(e) => handleChangeFirstValue(e, context)}
            style={{ marginBottom: "1rem" }}
            label="Address"
            variant="outlined"
            value={context.firstValue || ""}
          />
          <TextField
           onChange={(e) => handleChangeSecondValue(e, context)}
            label="Zipcode"
            variant="outlined"
            value={context.secondValue || ""}
          />
        </Container>
      )}

      <ButtonGroup maxwidth="sm" variant="outlined">
        <Button
          onClick={() => handlePre(context)}
          disabled={context.step === parseInt(1)}
        >
          PREVIOUS
        </Button>
        <Button
          onClick={() => handleNext(context)}
          disabled={context.step === parseInt(3)}
          style={{ margin: "0 1rem" }}
        >
          NEXT
        </Button>
        <Button
          disabled={context.step < parseInt(3)}
          onClick={e =>handleSubmit(e,context,dispatch)}
          type="submit"
        >
          SUBMIT
        </Button>
      </ButtonGroup>
    </Container>
  );
};

export default RegisterForm;
