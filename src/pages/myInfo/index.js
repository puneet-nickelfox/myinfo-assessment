import React, { Component } from "react";
import { useState } from "react";
import "../auth/login.css";
import { Button, Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import InputField from "../../components/InputField";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ContactInfo from "./contactInfo";
import IncomeInfo from "./incomeInfo";
import OtherInfo from "./otherInfo";
import PersonalInfo from "./personalInfo";

const useStyles = makeStyles({
  background: {
    height: "100vh",
    width: "100vw",
    background: "black",
  },
  paper: {
    padding: 30,
    gridGap: 30,
    height: "100%",
    width: "100%",
    overflowY: "auto",
    overflowX: "auto",
  },
  toggleDiv: {
    display: "flex",
    flexDirection: "column",
    width: "50%",
  },
  selected: {
    border: "none !important",
    borderBottom: "3px solid black !important",
    background: "white !important",
  },
  label: {
    textTransform: "capitalize !important",
  },
});

const MyInfo = () => {
  const classes = useStyles();
  const [activeTab, setActiveTab] = useState("CONTACT");

  const changeTab = (e, value) => {
    if (value) {
      setActiveTab(value);
    }
  };

  return (
    <>
      <div className={classes.background}>
        <Paper className={classes.paper}>
          <div className={classes.toggleDiv}>
            <ToggleButtonGroup
              value={activeTab}
              onChange={changeTab}
              exclusive={true}
              size="large"
            >
              <ToggleButton
                classes={{
                  selected: classes.selected,
                  label: classes.label,
                }}
                style={{ border: "none" }}
                value="CONTACT"
              >
                Contact Info
              </ToggleButton>
              <ToggleButton
                classes={{
                  label: classes.label,
                  selected: classes.selected,
                }}
                // style={{
                //   background: "#EDECF5",
                //   color: "#82889C",
                // }}
                style={{ border: "none" }}
                value="PERSONAL"
              >
                Personal Info
              </ToggleButton>
              <ToggleButton
                classes={{
                  label: classes.label,
                  selected: classes.selected,
                }}
                // style={{
                //   background: "#EDECF5",
                //   color: "#82889C",
                // }}
                style={{ border: "none" }}
                value="INCOME"
              >
                Income Info
              </ToggleButton>
              <ToggleButton
                classes={{
                  label: classes.label,
                  selected: classes.selected,
                }}
                // style={{
                //   background: "#EDECF5",
                //   color: "#82889C",
                // }}
                style={{ border: "none" }}
                value="OTHER"
              >
                Other Info
              </ToggleButton>
            </ToggleButtonGroup>
            {activeTab === "CONTACT" && <ContactInfo />}
            {activeTab === "PERSONAL" && <PersonalInfo />}
            {activeTab === "INCOME" && <IncomeInfo />}
            {activeTab === "OTHER" && <OtherInfo />}
          </div>
        </Paper>
      </div>
    </>
  );
};

export default MyInfo;
