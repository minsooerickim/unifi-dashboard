import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";

import MenuButton from "./Menu";
import { Link, withRouter } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: "linear-gradient(90deg,#ffc029,#4cd8b0)",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: "white",
    fontFamily:
      "Avenir Next LT W01 Demi,Helvetica Neue Light,Helvetica Neue,Helvetica,Arial,sans-serif",
  },
  appbar: {
    background: "linear-gradient(90deg,#ffc029,#4cd8b0)",
  },
  button: {
    color: "white",
    fontFamily:
      "Avenir Next LT W01 Demi,Helvetica Neue Light,Helvetica Neue,Helvetica,Arial,sans-serif",
    fontSize: "16px",
  },
}));

function ButtonAppBar(props) {
  const classes = useStyles();

  const handleClick = () => {
    // props.history.push("/logout");
    window.open("http://my.unifi.org/logout/", "_self");
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            aria-label="menu"
          >
            <MenuButton className={classes.menubutton} />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {props.name}
          </Typography>
          <Button className={classes.button} onClick={handleClick}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withRouter(ButtonAppBar);
