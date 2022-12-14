import React from "react";
import { useState } from "react";
import "./login.css";
import { Button, Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import InputField from "../../components/InputField";
import Axios from "axios";

const baseURL = process.env.REACT_APP_BASE_URL;

const useStyles = makeStyles({
  background: {
    background: "#df808024",
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
    ["@media (max-width:550px)"]: {
      width: "20em",
    },
  },
  grid: {
    display: "flex",
    flexDirection: "column",
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
  typoGrid: {
    marginBottom: 15,
    marginTop: 10,
    fontSize: "2rem",
    textAlign: "center",
  },
  root: {
    minHeight: "80px",
  },
  center: {
    display: "flex",
    justifyContent: "center",
  },
});

const Login = () => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [errorEmail, setErrorEmail] = useState(false);
  const [emailHelperText, setEmailHelperText] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
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

  const onButtonClick = () => {
    let regexEmail = /\S+@\S+\.\S+/;
    if (email === "" || !email.match(regexEmail)) {
      emailErrorHandler();
      return;
    }

    Axios.get(`${baseURL}/api/v1/myinfo/authorize?email=${email}`)
      .then((resp) => {
        const url = resp.data.url;
        window.location.replace(url);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      <div className={classes.background}>
        <Paper className={classes.paper}>
          <Grid container className={classes.grid}>
            <Typography variant="h4" className={classes.typoGrid}>
              Fetch Data
            </Typography>
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
          </Grid>
          <div className={classes.center}>
            <Button className={classes.button} onClick={onButtonClick}>
              Fetch
            </Button>
          </div>
        </Paper>
      </div>
    </>
  );
};

export default Login;
