import React, { Component } from "react";
import { useState } from "react";
import "../auth/login.css";
import { Button, Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import InputField from "../../components/InputField";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

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
    height: "100%",
    width: "70%",
    ["@media (max-width:1200px)"]: {
      width: "80%",
    },
    ["@media (max-width:1000px)"]: {
      width: "100%",
    },
    ["@media (max-width:650px)"]: {
      width: "120%",
    },
    ["@media (max-width:550px)"]: {
      width: "150%",
    },
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
  tableCell: {
    padding: 10,
    borderBottom: "0px",
  },
  tableHeading: {
    fontWeight: "600 !important",
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

const IncomeInfo = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.marginTop}>
        <Typography variant="h5" className={classes.typoMarginTop}>
          Notice Of Assessment (History)
        </Typography>
        <TableContainer>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow className={classes.cell}>
                <TableCell
                  className={` ${classes.tableCell} ${classes.tableHeading}`}
                >
                  Year Of Assessment
                </TableCell>
                <TableCell
                  className={`${classes.tableHeading} ${classes.tableCell}`}
                >
                  2019
                </TableCell>
                <TableCell
                  className={`${classes.tableHeading} ${classes.tableCell}`}
                >
                  2018
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow className={classes.tableRow}>
                <TableCell className={classes.tableCell}>Employment</TableCell>
                <TableCell className={classes.tableCell}>182,500.00</TableCell>
                <TableCell className={classes.tableCell}>172,500.00</TableCell>
              </TableRow>
              <TableRow className={classes.tableRow}>
                <TableCell className={classes.tableCell}>Trade</TableCell>
                <TableCell className={classes.tableCell}>0.00</TableCell>
                <TableCell className={classes.tableCell}>0.00</TableCell>
              </TableRow>
              <TableRow className={classes.tableRow}>
                <TableCell className={classes.tableCell}>Interest</TableCell>
                <TableCell className={classes.tableCell}>32,000.00</TableCell>
                <TableCell className={classes.tableCell}>30,000.00</TableCell>
              </TableRow>
              <TableRow className={classes.tableRow}>
                <TableCell className={classes.tableCell}>Rent</TableCell>
                <TableCell className={classes.tableCell}>0.00</TableCell>
                <TableCell className={classes.tableCell}>0.00</TableCell>
              </TableRow>
              <TableRow className={classes.tableRow}>
                <TableCell className={classes.tableCell}>
                  Total Income
                </TableCell>
                <TableCell className={classes.tableCell}>214,500.00</TableCell>
                <TableCell className={classes.tableCell}>202,500.00</TableCell>
              </TableRow>
              <TableRow className={classes.tableRow}>
                <TableCell className={classes.tableCell}>
                  Tax Clearence
                </TableCell>
                <TableCell className={classes.tableCell}>N</TableCell>
                <TableCell className={classes.tableCell}>N</TableCell>
              </TableRow>

              {/* {!loading && listingData?.length === 0 && (
                <TableRow>
                  <TableCell colSpan="12">No data found</TableCell>
                </TableRow>
              )} */}
            </TableBody>
          </Table>
        </TableContainer>
        <Typography variant="h5" className={classes.typoMarginTop}>
          Other Income Information
        </Typography>
        <Grid container className={classes.grid}>
          <Grid item>
            <div className={classes.fdInfo}>
              <div className={classes.title}>
                Ownership Of Private Residential Property
              </div>
              <div className={classes.info}>No</div>
            </div>
          </Grid>
        </Grid>
        <Typography variant="h5" className={classes.typoMarginTop}>
          CPF Account Balance
        </Typography>
        <TableContainer>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow className={classes.cell}>
                <TableCell
                  className={` ${classes.tableCell} ${classes.tableHeading}`}
                ></TableCell>
                <TableCell
                  className={`${classes.tableHeading} ${classes.tableCell}`}
                ></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow className={classes.tableRow}>
                <TableCell className={classes.tableCell}>
                  Ordinary Account (OA) (S$)
                </TableCell>
                <TableCell className={classes.tableCell}>227,700.00</TableCell>
              </TableRow>
              <TableRow className={classes.tableRow}>
                <TableCell className={classes.tableCell}>
                  Special Account (OA) (S$)
                </TableCell>
                <TableCell className={classes.tableCell}>59,400.00</TableCell>
              </TableRow>
              <TableRow className={classes.tableRow}>
                <TableCell className={classes.tableCell}>
                  Ordinary Account (OA) (S$)
                </TableCell>
                <TableCell className={classes.tableCell}>79,200.00</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Typography className={classes.typoMarginTop} variant="h5">
          CPF Contribution History
        </Typography>
        <TableContainer>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow className={classes.cell}>
                <TableCell
                  className={` ${classes.tableCell} ${classes.tableHeading}`}
                >
                  For Month
                </TableCell>
                <TableCell
                  className={`${classes.tableHeading} ${classes.tableCell}`}
                >
                  Paid On
                </TableCell>
                <TableCell
                  className={`${classes.tableHeading} ${classes.tableCell}`}
                >
                  Amount(S$)
                </TableCell>
                <TableCell
                  className={`${classes.tableHeading} ${classes.tableCell}`}
                >
                  Employer
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow className={classes.tableRow}>
                <TableCell className={classes.tableCell}>Feb 2019</TableCell>
                <TableCell className={classes.tableCell}>15 Feb 2019</TableCell>
                <TableCell className={classes.tableCell}>3,750.00</TableCell>
                <TableCell className={classes.tableCell}>
                  NEED ALL COMPANY
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};

export default IncomeInfo;
