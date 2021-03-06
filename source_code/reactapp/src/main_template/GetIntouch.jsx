import React from "react";
import { Link } from "react-router-dom";

function GetIntouch() {
  return (
    <section>
      <div className="fourth-section">
        <div className="container-four">
          <h2>Let's Work Together</h2>
          <p>Have a project you'd like to discuss?</p>
          <div className="get-link">
            <Link to="/contact">
              <h3>Get in Touch</h3>
            </Link>
          </div>
        </div>
        <div className="container-five">
          <ul className="social-links">
            <li>
              <i
                className="fa fa-envelope"
                style={{ fontSize: "38px", color: "rgb(9, 11, 161)" }}
              ></i>
              <a href="mailto:jericdelacruz1991@gmail.com">JEKCRUZ.COM</a>
            </li>
            <li>
              <i
                className="fa fa-git-square"
                style={{ fontSize: "38px", color: "rgb(9, 11, 161)" }}
              ></i>
              <a href="https://www.facebook.com/Jericfelicilda">On Github</a>
            </li>
            <li>
              <i
                className="fa fa-linkedin-square"
                style={{ fontSize: "38px", color: "rgb(9, 11, 161)" }}
              ></i>
              <a href="https://www.facebook.com/Jericfelicilda">On LinkedIn</a>
            </li>
            <li>
              <i
                className="fa fa-facebook-square"
                style={{ fontSize: "38px", color: "rgb(9, 11, 161)" }}
              ></i>
              <a href="https://www.facebook.com/Jericfelicilda">On Facebook</a>
            </li>
            <li>
              <i
                className="fa fa-youtube-square"
                style={{ fontSize: "38px", color: "rgb(9, 11, 161)" }}
              ></i>
              <a href="https://www.facebook.com/Jericfelicilda">On Youtube</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default GetIntouch;
