import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import "../css/NotFound.css";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    padding: "40px 30px",
  },
  back: {
    flexGrow: 1,
    background: "green",
  },
}));

const NotFound = () => {
  const classes = useStyles();

  return (
    <div className="container">
      <h2>
        You do not have access to the requested resource or it does not exist
      </h2>

      <div className="back-button">
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <Button variant="contained" color="primary" className={classes.back}>
            Back
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
