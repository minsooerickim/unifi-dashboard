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
      "https://docs.google.com/document/d/1sIkqvFBuFP5hI8jiesyIaxcoYfmzjy2gl_kG-P1HP6E/edit?usp=sharing"
    );
  };

  const redirect2 = () => {
    window.open(
      "https://docs.google.com/document/d/1j4LjuRlWWlVQ1FTOzikDKojJRPdNIAaapR1LFhUjJHc/edit?usp=sharing"
    );
  };

  const redirect3 = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSdswL86GkarBL4wmDTaM52PYc4ToijeVUO-y0PDcBlEmsFiGg/viewform"
    );
  };

  return (
    <div>
      <Bar name="Casting" />
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
            Talent Acquisition
          </Button>
        </div>
        <div>
          <Button
            variant="contained"
            className={classes.button}
            onClick={redirect2}
          >
            EDI
          </Button>
        </div>
        <div>
          <Button
            variant="contained"
            className={classes.button}
            startIcon={<CloudUploadIcon />}
            onClick={redirect3}
          >
            Upload
          </Button>
        </div>
      </div>
    </div>
  );
}

// import React, { Component } from "react";
// import "../css/subpage.css";

// import Bar from "./Bar";

// class Casting extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

//   redirect1 = () => {
//     window.open(
//       "https://docs.google.com/document/d/1sIkqvFBuFP5hI8jiesyIaxcoYfmzjy2gl_kG-P1HP6E/edit?usp=sharing"
//     );
//   };

//   redirect2 = () => {
//     window.open(
//       "https://docs.google.com/document/d/1j4LjuRlWWlVQ1FTOzikDKojJRPdNIAaapR1LFhUjJHc/edit?usp=sharing"
//     );
//   };

//   redirect3 = () => {
//     window.open(
//       "https://docs.google.com/forms/d/e/1FAIpQLSdswL86GkarBL4wmDTaM52PYc4ToijeVUO-y0PDcBlEmsFiGg/viewform"
//     );
//   };

//   render() {
//     return (
//       <div>
//         <Bar name="Casting" />
//         <div className="container">
//           <button onClick={this.redirect1} className="button-group">
//             Talent Acquisition
//           </button>
//         </div>
//         <div>
//           <button onClick={this.redirect2} className="button-group">
//             EDI
//           </button>
//         </div>
//         <div>
//           <img
//             src="https://lh4.googleusercontent.com/qZAhCLPfU8kXSqUOU44pdRd3agh8-UZ9lorPLebb4oRkN9jwb3Ohmj_6SJzrlCVoeiREIVp0byKqtJIOMPS5srJrVeZORU8fa4ybUu88JXNAV1zr6Ws=w1280"
//             alt={`img`}
//             className="submission-img"
//             onClick={this.redirect3}
//           ></img>
//         </div>
//       </div>
//     );
//   }
// }

// export default Casting;
