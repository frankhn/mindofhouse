/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { Fragment } from 'react';
import './footer.scss';
import { Link } from 'react-router-dom';

const Footer = () => (
  <Fragment>
    <footer className="footer">
      <div className="container-fluid">
        <div className="row">
          <div className="container">
            <div className="row">
              <div className="markt col-md-4 col-sm-6 col-xs-12">
                <ul className="list-holder">
                  <h3>Company Business</h3>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Mission and Objectives</a>
                  </li>
                  <li>
                    <a href="#">Commission pricing</a>
                  </li>
                  <li>
                    <a href="#">Buy, Sell, Post your house</a>
                  </li>
                </ul>
              </div>

              <div className="markt col-md-4 col-sm-6 col-xs-12">
                <ul className="list-holder">
                  <h3>Connect with Us</h3>
                  <li>
                    <a href="#">YouTube</a>
                  </li>
                  <li>
                    <a href="#">Instagram</a>
                  </li>
                  <li>
                    <a href="#">Whassap</a>
                  </li>
                  <li>
                    <a href="#">Facebook</a>
                  </li>
                </ul>
              </div>

              <div className="markt col-md-4 col-sm-6 col-xs-12">
                <ul className="list-holder">
                  <h3>Hot Line</h3>
                  call: +2507879....
                  <li>
                    <a href="#">Email Us at ....</a>
                  </li>
                </ul>
              </div>

              <div className="endfooter">
                    <p id="endtext">You've reached a great solution, MindOfHouse is Your Great choice.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>  </Fragment>
);
export default Footer;
