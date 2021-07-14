import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import TodayIcon from "@material-ui/icons/Today";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import CloudUploadOutlinedIcon from "@material-ui/icons/CloudUploadOutlined";
import MailOutlineOutlinedIcon from "@material-ui/icons/MailOutlineOutlined";
import ForumOutlinedIcon from "@material-ui/icons/ForumOutlined";

const useStyles = makeStyles((theme) => ({
  menubutton: {
    color: "white",
    fontFamily:
      "Avenir Next LT W01 Demi,Helvetica Neue Light,Helvetica Neue,Helvetica,Arial,sans-serif",
    fontSize: "16px",
  },
}));

export default function MenuButton(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const redirect1 = () => {
    window.open("https://ufgci.slack.com/");
  };
  const redirect2 = () => {
    window.open("https://mail.google.com/");
  };
  const redirect3 = () => {
    window.open("https://drive.google.com/");
  };
  const redirect4 = () => {
    window.open("https://calendar.google.com/");
  };
  const redirect5 = () => {
    window.open("http://my.unifi.org/logout/", "_self");
  };

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        className={classes.menubutton}
      >
        MyUnifi
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <MenuItem>
            <HomeOutlinedIcon />
            Home
          </MenuItem>
        </Link>
        <MenuItem onClick={redirect1}>
          <ForumOutlinedIcon />
          Slack
        </MenuItem>
        <MenuItem onClick={redirect2}>
          <MailOutlineOutlinedIcon />
          Gmail
        </MenuItem>
        <MenuItem onClick={redirect3}>
          <CloudUploadOutlinedIcon />
          Google Drive
        </MenuItem>
        <MenuItem onClick={redirect4}>
          <TodayIcon />
          Google Calendar
        </MenuItem>

        <MenuItem onClick={redirect5}>Log out</MenuItem>
      </Menu>
    </div>
  );
}
