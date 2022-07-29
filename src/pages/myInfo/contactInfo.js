import React, { Component } from "react";
import { useState } from "react";
import "../auth/login.css";
import { Button, Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import InputField from "../../components/InputField";
import { CallMissedSharp } from "@material-ui/icons";

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
  marginTop: {
    marginTop: 20,
  },
  grid: {
    display: "flex",
    flexDirection: "column",
    marginTop: 10,
  },
  fdInfo: {
    marginBottom: "22px",
    marginRight: "28px",
    width: "328px",
  },
  title: {
    fontSize: "14px",
    // fontWeight: 600,
    color: "#82889c",
    marginBottom: "10px",
  },
  info: {
    fontSize: "16px",
    fontWeight: 500,
    color: "#050d33",
    fontFamily: "Manrope",
  },
  typoMarginTop: {
    marginTop: 20,
    ["@media (max-width:700px)"]: {
      fontSize: "1.2em",
    },
    ["@media (max-width:550px)"]: {
      fontSize: "1.1em",
    },
  },
});

const ContactInfo = ({ employeeData }) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.marginTop}>
        <Typography variant="h5" className={classes.typoMarginTop}>
          Contact Info
        </Typography>
        <Grid container className={classes.grid}>
          <Grid item>
            <div className={classes.fdInfo}>
              <div className={classes.title}>Mobile Number</div>
              <div className={classes.info}>
                {employeeData?.mobileno ?? "N/A"}
              </div>
            </div>
          </Grid>
          <Grid item>
            <div className={classes.fdInfo}>
              <div className={classes.title}>Email Address</div>
              <div className={classes.info}>
                {employeeData?.email != "" ? employeeData?.email : "N/A"}
              </div>
            </div>
          </Grid>
        </Grid>
        <Typography variant="h5" className={classes.typoMarginTop}>
          Registered Address
        </Typography>
        <Grid container className={classes.grid}>
          <Grid item>
            <div className={classes.fdInfo}>
              <div className={classes.title}>Block Number</div>
              <div className={classes.info}>
                {employeeData?.regadd?.block != ""
                  ? employeeData?.regadd?.block
                  : "N/A"}
              </div>
            </div>
          </Grid>
          <Grid item>
            <div className={classes.fdInfo}>
              <div className={classes.title}>Street Name</div>
              <div className={classes.info}>
                {employeeData?.regadd?.street != ""
                  ? employeeData?.regadd?.street
                  : "N/A"}
              </div>
            </div>
          </Grid>
          <Grid item>
            <div className={classes.fdInfo}>
              <div className={classes.title}>Building Name</div>
              <div className={classes.info}>
                {employeeData?.regadd?.building != ""
                  ? employeeData?.regadd?.building
                  : "N/A"}
              </div>
            </div>
          </Grid>
          <Grid item>
            <div className={classes.fdInfo}>
              <div className={classes.title}>Floor & Unit No</div>
              <div className={classes.info}>
                {`${employeeData?.regadd?.floor} - ${employeeData?.regadd?.unit}`}
              </div>
            </div>
          </Grid>
          <Grid item>
            <div className={classes.fdInfo}>
              <div className={classes.title}>Postal Code</div>
              <div className={classes.info}>
                {employeeData?.regadd?.postal != ""
                  ? employeeData?.regadd?.postal
                  : "N/A"}
              </div>
            </div>
          </Grid>
          <Grid item>
            <div className={classes.fdInfo}>
              <div className={classes.title}>Type Of Housing</div>
              <div className={classes.info}>
                {employeeData?.hdbtype != "" ? employeeData?.hdbtype : "N/A"}
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default ContactInfo;
