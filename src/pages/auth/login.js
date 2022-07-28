import React, { Component } from "react";
import { useState } from "react";
import "./login.css";
import { Button, Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import InputField from "../../components/InputField";
import backgroundPhoto from "./photo.png";
import "./photo.png";
const useStyles = makeStyles({
  background: {
    backgroundImage: `url(${backgroundPhoto})`,
    backgroundSize: "cover",
    height: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  paper: {
    padding: 30,
    gridGap: 30,
    width: "28em",
    // position: "absolute",
    // right: 20,
    // top: 200,
    ["@media (max-width:550px)"]: {
      width: "20em",
    },
  },
  grid: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    // marginTop: 10,
  },
  button: {
    background: "red",
    color: "white",
    marginTop: 10,
    "&:hover": {
      backgroundColor: "red",
      color: "white",
    },
  },
  inputProps: {
    // marginBottom: 10,
  },
  typoGrid: {
    marginBottom: 15,
    marginTop: 10,
    fontSize: "2rem",
    textAlign: "center",
  },
  root: {
    minHeight: "80px",
  },
});

const Login = () => {
  const classes = useStyles();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [errorEmail, setErrorEmail] = useState(false);
  const [emailHelperText, setEmailHelperText] = useState("");
  const [errorName, setErrorName] = useState(false);
  const [nameHelperText, setNameHelperText] = useState("");

  const [errorPassword, setErrorPassword] = useState(false);
  const [passwordHelperText, setPasswordHelperText] = useState("");
  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const emailErrorHandler = () => {
    let regexEmail = /\S+@\S+\.\S+/;
    if (email.match(regexEmail)) {
      setErrorEmail(false);
      setEmailHelperText("");
    } else {
      setErrorEmail(true);
      setEmailHelperText("Please enter a valid Email");
    }
  };

  const nameErrorHandler = () => {
    if (name === "") {
      setErrorName(true);
      setNameHelperText("Name is required");
    } else {
      setErrorName(false);
      setNameHelperText("");
    }
  };

  const passwordErrorHandler = () => {
    if (password === "") {
      setErrorPassword(true);
      setPasswordHelperText("Password is required");
    } else {
      setErrorPassword(false);
      setPasswordHelperText("");
    }
  };
  return (
    <>
      <div className={classes.background}>
        <Paper className={classes.paper}>
          <Grid container className={classes.grid}>
            <Typography variant="h4" className={classes.typoGrid}>
              Login
            </Typography>
            <InputField
              id="Name"
              type="text"
              label="Full Name"
              variant="outlined"
              onChange={handleChangeName}
              error={errorName}
              helperText={nameHelperText}
              classes={{
                root: classes.root,
              }}
              onBlur={nameErrorHandler}
            ></InputField>
            <InputField
              id="email"
              type="text"
              label="Email"
              variant="outlined"
              onChange={handleChange}
              onBlur={emailErrorHandler}
              error={errorEmail}
              helperText={emailHelperText}
              classes={{
                root: classes.root,
              }}
            ></InputField>
            <InputField
              id="password"
              type="password"
              label="Password"
              variant="outlined"
              onChange={handleChangePassword}
              classes={{
                root: classes.root,
              }}
              onBlur={passwordErrorHandler}
              error={errorPassword}
              helperText={passwordHelperText}
            ></InputField>
          </Grid>
          <Button className={classes.button}>Login</Button>
        </Paper>
      </div>
    </>
  );
};

export default Login;