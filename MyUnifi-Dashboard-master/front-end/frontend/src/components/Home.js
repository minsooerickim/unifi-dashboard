import React, { Component } from "react";
import { Link } from "react-router-dom";

import Bar from "./Bar";
import "../css/Home.css";
import castingImg from "../assets/casting.png";
import creativeImg from "../assets/creative.png";
import marketingImg from "../assets/marketing.png";
import techImg from "../assets/tech.png";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Bar name="Home" />
        <div className="images">
          <div className="row1">
            <Link to="/casting">
              <img
                src={castingImg}
                // src="https://lh4.googleusercontent.com/r6Fmw3pjOK4MwFLoSBV76jk_5LGNaP42hX_3BQzPhnSBQaJbyytRhT6AAKjNhbSUaCZS5tCzReOZRwErLcH8J6All-5ms1tHpEfTUxqpE-Wjx5uHtUM=w1280"
                alt={castingImg}
                className="image"
              ></img>
            </Link>

            <Link to="/creative">
              <img
                // src="https://lh6.googleusercontent.com/rElN5tEVzQcrLQZ_ZCWMAJJaxGp0ujpFEFWoN2OeltTTRtODNMOx-f57qjbI1aSkhIJh-3_nEr_VlLeCwuH_DCx21a5YChQizyXhRznEkQZMeV42UPI=w1280"
                // alt="bbbb"
                src={creativeImg}
                alt={creativeImg}
                className="image"
              ></img>
            </Link>
          </div>

          <div className="row2">
            <Link to="/marketing">
              <img
                // src="https://lh6.googleusercontent.com/2wClS_-hBP8Xhh6OgqbgEfzRoqXrS1tq4sWENS7pDIgfrRlmlK9YrmXQLS0GLG1xY1Gu-b_T6evhRvC3dYgzXl0H_RWKGowAig-cVJV-PDZhbeKfNkV_=w1280"
                // alt="cccc"
                src={marketingImg}
                alt={marketingImg}
                class="image"
              ></img>
            </Link>
            <Link to="/tech">
              <img
                // src={
                //   "https://lh4.googleusercontent.com/0yuXIfpgmc0reG4Qd3G3EZxVGeiXknOW1bIZAeJMyx9xiw29oHNpUO1xikaMQgsG-GHvlZfR8CZ1xFtcg5IGFlyZkHBnh0zyEhU4FI9QS8Jak-aT1-Fp=w1280"
                // }
                // alt="dddd"
                src={techImg}
                alt={techImg}
                className="image"
              ></img>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
