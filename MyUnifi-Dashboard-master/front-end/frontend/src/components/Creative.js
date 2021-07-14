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

export default function Creative() {
  const classes = useStyles();

  const redirect1 = () => {
    window.open(
      "https://docs.google.com/document/d/1q9327JmfDXVgo-LB_RPn9apofSHR8ORGjmWDjK35D70/edit?usp=sharing"
    );
  };

  const redirect2 = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSfLnUYEmGksBN7xMybeY__j6DOZvy6d93EQkY6RNJZNR0OFOA/viewform"
    );
  };

  return (
    <div>
      <Bar name="Creative" />
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
