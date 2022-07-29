import React, { useEffect } from "react";
import { useState } from "react";
import "../auth/login.css";
import { makeStyles, Paper, Divider } from "@material-ui/core";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ContactInfo from "./contactInfo";
import IncomeInfo from "./incomeInfo";
import PersonalInfo from "./personalInfo";
import { useLocation, useHistory } from "react-router-dom";
import Axios from "axios";

const baseURL = process.env.REACT_APP_BASE_URL;

const useStyles = makeStyles({
  background: {
    height: "100vh",
    width: "100vw",
    background: "black",
  },
  paper: {
    padding: "0px 30px",
    gridGap: 30,
    height: "100%",
    width: "100%",
    overflowY: "auto",
    overflowX: "auto",
    display: "flex",
    justifyContent: "center",
    background: "rgb(240, 241, 244)",
    ["@media (max-width:800px)"]: {
      width: "100%",
      padding: "0px 0px",
    },
  },
  toggleDiv: {
    padding: 30,
    display: "flex",
    flexDirection: "column",
    width: "70%",
    height: "auto",
    background: "white",
    overflow: "auto",
    ["@media (max-width:800px)"]: {
      width: "100%",
    },
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
  const search = useLocation().search;
  const code = new URLSearchParams(search)?.get("code");
  const history = useHistory();
  const [employeeData, setEmployeeData] = useState({});

  useEffect(() => {
    if (!code) {
      history.push("/login");
      return;
    }
    handleAllData();
  }, []);

  const handleAllData = () => {
    Axios.get(`${baseURL}/api/v1/myinfo?code=${code}`)
      .then((resp) => {
        setEmployeeData(resp.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

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
                style={{ border: "none" }}
                value="INCOME"
              >
                Income Info
              </ToggleButton>
            </ToggleButtonGroup>
            <Divider />
            {activeTab === "CONTACT" && (
              <ContactInfo employeeData={employeeData} />
            )}
            {activeTab === "PERSONAL" && (
              <PersonalInfo employeeData={employeeData} />
            )}
            {activeTab === "INCOME" && (
              <IncomeInfo employeeData={employeeData} />
            )}
          </div>
        </Paper>
      </div>
    </>
  );
};

export default MyInfo;
