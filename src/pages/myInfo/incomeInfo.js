import React, { useEffect } from "react";
import { useState } from "react";
import "../auth/login.css";
import { Grid, makeStyles, Typography } from "@material-ui/core";
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
    color: "#82889c",
    marginBottom: "10px",
  },
  info: {
    fontSize: "16px",
    fontWeight: 500,
    color: "#050d33",
    fontFamily: "Manrope,sans-serif",
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

const IncomeInfo = ({ employeeData }) => {
  const classes = useStyles();
  const [noaArray, setNoaArray] = useState([]);

  useEffect(() => {
    if (employeeData?.noahistory?.noas?.length > 0) {
      structureNoaHistory();
    }
  }, []);

  const structureNoaHistory = () => {
    const arr = [...employeeData?.noahistory?.noas];
    let structuredArr = {
      yearofassessment: ["Year Of Assessment"],
      employment: ["Employment"],
      trade: ["Trade"],
      interest: ["Interest"],
      rent: ["Rent"],
      amount: ["Total Income"],
      taxclearance: ["Tax Clearence"],
    };

    for (let i = 0; i < arr.length; i++) {
      for (const property in arr[i]) {
        structuredArr[`${property}`]?.push(
          arr[i][property] ? arr[i][property] : "N/A"
        );
      }
    }

    const finalArr = [];
    for (const property in structuredArr) {
      finalArr.push(structuredArr[property]);
    }

    setNoaArray(finalArr);
  };

  return (
    <>
      <div className={classes.marginTop}>
        {employeeData?.noahistory?.noas?.length > 0 && (
          <>
            <Typography variant="h5" className={classes.typoMarginTop}>
              Notice Of Assessment (History)
            </Typography>
            <TableContainer>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  {noaArray.map((element, index) => {
                    return (
                      <>
                        {index == 0 && (
                          <TableRow className={classes.cell}>
                            {element.map((eachElement) => {
                              return (
                                <>
                                  <TableCell
                                    className={` ${classes.tableCell} ${classes.tableHeading}`}
                                  >
                                    {eachElement}
                                  </TableCell>
                                </>
                              );
                            })}
                          </TableRow>
                        )}
                      </>
                    );
                  })}
                </TableHead>
                <TableBody>
                  {noaArray.map((element, index) => {
                    return (
                      <>
                        {index > 1 && (
                          <TableRow className={classes.tableRow}>
                            {element.map((eachElement, indexing) => {
                              return (
                                <>
                                  <TableCell
                                    className={`${classes.tableCell} ${
                                      indexing == 0 ? classes.tableHeading : {}
                                    }`}
                                  >
                                    {eachElement}
                                  </TableCell>
                                </>
                              );
                            })}
                          </TableRow>
                        )}
                      </>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </>
        )}

        <Typography variant="h5" className={classes.typoMarginTop}>
          Other Income Information
        </Typography>
        <Grid container className={classes.grid}>
          <Grid item>
            <div className={classes.fdInfo}>
              <div className={classes.title}>
                Ownership Of Private Residential Property
              </div>
              <div className={classes.info}>
                {employeeData?.ownerprivate === "true" ? "Yes" : "No"}
              </div>
            </div>
          </Grid>
        </Grid>
        {employeeData?.cpfbalances && (
          <>
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
                    <TableCell className={classes.tableCell}>
                      {employeeData?.cpfbalances?.oa !== ""
                        ? employeeData?.cpfbalances?.oa
                        : "N/A"}
                    </TableCell>
                  </TableRow>
                  <TableRow className={classes.tableRow}>
                    <TableCell className={classes.tableCell}>
                      Special Account (SA) (S$)
                    </TableCell>
                    <TableCell className={classes.tableCell}>
                      {employeeData?.cpfbalances?.sa !== ""
                        ? employeeData?.cpfbalances?.sa
                        : "N/A"}
                    </TableCell>
                  </TableRow>
                  <TableRow className={classes.tableRow}>
                    <TableCell className={classes.tableCell}>
                      Medisave Account (MA) (S$)
                    </TableCell>
                    <TableCell className={classes.tableCell}>
                      {employeeData?.cpfbalances?.ma !== ""
                        ? employeeData?.cpfbalances?.ma
                        : "N/A"}
                    </TableCell>
                  </TableRow>
                  {employeeData?.cpfbalances?.ra !== "" && (
                    <TableRow className={classes.tableRow}>
                      <TableCell className={classes.tableCell}>
                        Retirement Account (RA) (S$)
                      </TableCell>
                      <TableCell className={classes.tableCell}>
                        {employeeData?.cpfbalances?.ra !== ""
                          ? employeeData?.cpfbalances?.ra
                          : "N/A"}
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </>
        )}
        {employeeData?.cpfcontributions?.history?.length > 0 && (
          <>
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
                  {employeeData?.cpfcontributions?.history.map((element) => {
                    return (
                      <>
                        <TableRow className={classes.tableRow}>
                          <TableCell className={classes.tableCell}>
                            {element?.month !== "" ? element?.month : "N/A"}
                          </TableCell>
                          <TableCell className={classes.tableCell}>
                            {element?.date !== "" ? element?.date : "N/A"}
                          </TableCell>
                          <TableCell className={classes.tableCell}>
                            {element?.amount !== "" ? element?.amount : "N/A"}
                          </TableCell>
                          <TableCell className={classes.tableCell}>
                            {element?.employer !== ""
                              ? element?.employer
                              : "N/A"}
                          </TableCell>
                        </TableRow>
                      </>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </>
        )}
      </div>
    </>
  );
};

export default IncomeInfo;
