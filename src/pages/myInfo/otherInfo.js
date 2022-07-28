import React, { Component } from "react";
import { useState } from "react";
import "../auth/login.css";
import { Button, Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import InputField from "../../components/InputField";

const useStyles = makeStyles({
  background: {
    height: "100vh",
    width: "100vw",
    background: "black",
  },
  paper: {
    padding: 30,
    gridGap: 30,
    // height: "100%",
    // width: "100%",
  },
  toggleDiv: {
    display: "flex",
    flexDirection: "column",
  },
});

const OtherInfo = () => {
  return (
    <>
      <div> This is Other Info</div>
    </>
  );
};

export default OtherInfo;
