import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

import Bar from "./Bar";
import "../css/subpage.css";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    padding: "40px 30px",
  },
  back: {
    flexGrow: 1,
    background: "linear-gradient(90deg,#ffc029,#4cd8b0)",
  },
}));

export default function Tech() {
  const classes = useStyles();

  const redirect1 = () => {
    window.open(
      "https://docs.google.com/spreadsheets/d/13xlnS-lqk297Fp_H2PH-sBjmusumOVT5CbpW0-fVdg8/edit?usp=sharing"
    );
  };

  const redirect2 = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSehkK1L27nwUzzvb2oyjxGUlcQF-MiOnnvolP_JTL6AL8e-ZA/viewform"
    );
  };

  return (
    <div>
      <Bar name="Tech" />
      <div className="container">
        <div className="back-button">
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <Button
              variant="contained"
              color="primary"
              className={classes.back}
            >
              Back
            </Button>
          </Link>
        </div>
        <div>
          <Button
            variant="contained"
            className={classes.button}
            onClick={redirect1}
          >
            View Project DashBoard
          </Button>
        </div>
        <div>
          <Button
            variant="contained"
            className={classes.button}
            startIcon={<CloudUploadIcon />}
            onClick={redirect2}
          >
            Upload
          </Button>
        </div>
      </div>
    </div>
  );
}
