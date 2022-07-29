import React, { Component, useEffect } from "react";
import { useState } from "react";
import "../auth/login.css";
import { Button, Grid, makeStyles, Paper, Typography ,Divider} from "@material-ui/core";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ContactInfo from "./contactInfo";
import IncomeInfo from "./incomeInfo";
import OtherInfo from "./otherInfo";
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
    display:"flex",
    justifyContent:"center",
    background:"rgb(240, 241, 244)",
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
    height:"auto",
    background:"white",
    overflow:"auto",
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
  const email = new URLSearchParams(search)?.get("state");
  const history = useHistory();
  const [employeeData, setEmployeeData] = useState({
    dob: "1988-10-06",
    sex: "MALE",
    name: "ANDY LAU",
    race: "CHINESE",
    email: "",
    regadd: {
      type: "SG",
      unit: "10",
      block: "319",
      floor: "38",
      postal: "542319",
      street: "ANCHORVALE DRIVE",
      country: "SINGAPORE",
      building: "",
    },
    uinfin: "S6005048A",
    hdbtype: "5-ROOM FLAT (HDB)",
    marital: "MARRIED",
    edulevel: "",
    mobileno: "+91-9409372273",
    passtype: "",
    aliasname: "",
    noahistory: {
      noas: [
        {
          rent: 7839,
          trade: 15000,
          amount: 200456.1,
          category: "ADDITIONAL",
          interest: 8123,
          employment: 200000,
          taxclearance: "N",
          yearofassessment: "2021",
        },
        {
          rent: 7789,
          trade: 15360,
          amount: 920896.1,
          category: "ADDITIONAL",
          interest: 9823,
          employment: 206670,
          taxclearance: "N",
          yearofassessment: "2020",
        },
      ],
    },
    cpfbalances: {
      ma: 32455.22,
      oa: 56343.35,
      ra: 89323.58,
      sa: 42521.4,
    },
    housingtype: "",
    marriedname: "",
    nationality: "SINGAPORE CITIZEN",
    birthcountry: "SINGAPORE",
    ownerprivate: "false",
    cpfcontributions: {
      history: [
        {
          date: "2021-05-13",
          month: "2021-05",
          amount: 1055.12,
          employer: "ABC",
        },
        {
          date: "2021-06-13",
          month: "2021-06",
          amount: 1055.12,
          employer: "ABC",
        },
        {
          date: "2021-07-13",
          month: "2021-07",
          amount: 1055.12,
          employer: "ABC",
        },
        {
          date: "2021-08-13",
          month: "2021-08",
          amount: 1055.12,
          employer: "ABC",
        },
        {
          date: "2021-09-13",
          month: "2021-09",
          amount: 1055.12,
          employer: "ABC",
        },
        {
          date: "2021-10-13",
          month: "2021-10",
          amount: 1055.12,
          employer: "ABC",
        },
        {
          date: "2021-11-13",
          month: "2021-11",
          amount: 3300.88,
          employer: "ABC",
        },
        {
          date: "2021-12-13",
          month: "2021-12",
          amount: 1055.12,
          employer: "ABC",
        },
        {
          date: "2022-01-13",
          month: "2022-01",
          amount: 1808.34,
          employer: "ABC",
        },
        {
          date: "2022-02-13",
          month: "2022-02",
          amount: 1055.12,
          employer: "ABC",
        },
        {
          date: "2022-03-13",
          month: "2022-03",
          amount: 1055.12,
          employer: "ABC",
        },
        {
          date: "2022-04-13",
          month: "2022-04",
          amount: 1055.12,
          employer: "ABC",
        },
        {
          date: "2022-05-13",
          month: "2022-05",
          amount: 1055.12,
          employer: "ABC",
        },
        {
          date: "2022-06-13",
          month: "2022-06",
          amount: 1055.12,
          employer: "ABC",
        },
        {
          date: "2022-07-13",
          month: "2022-07",
          amount: 1055.12,
          employer: "ABC",
        },
      ],
    },
    employmentsector: "",
    residentialstatus: "CITIZEN",
  });

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
        console.log(resp)
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
              
            </ToggleButtonGroup>
            <Divider/>
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
