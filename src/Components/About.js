import React from "react";
import "../App.css";
import logo from "../logo-black.png";
import invisible from "../invisible.jpeg";
import hashtag from "../hashtag.jpeg";

export class About extends React.Component {
  render() {
    return (
      <div>
        <div class="jumbotron row" style={{ "background-color": "white" }}>
          <div class="row " style={{ "margin-top": "57px" }}>
            <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div>
            <div
              class="col-xs-8 col-sm-8 col-md-8 col-lg-8"
              style={{ textAlign: "center" }}
            >
              <img src={invisible} style={{ width: "50%" }} />
              <br />
              <br />
              <br />

              <h3
                class="row card-title justify-content-center"
                style={{ textAlign: "center", padding: "10px 10px 10px" }}
              >
                About Us
              </h3>
              <p
                class="row card-title justify-content-center"
                style={{ textAlign: "center", padding: "30px 30px 30px" }}
              >
                <span>
                  <img src={logo} alt='' style={{ height: "20px" }} /> is an
                  easy-to-use web application designed to bridge hawker stalls
                  and restaurant owners in Singapore with all Singaporeasn via a
                  free online platform. Stall owners can easily create a listing
                  to advertize their stall to the masses. Application users can
                  simply select either "dabao" or "delivery", and key in their
                  postal code to browse through listings near their home
                  address. <br/> Sounds too good to be true? What's the catch? Boh
                  leh... Foodleh is a purely non-profit intiative devised to
                  help local F&B stall owners to be seen on online platforms. <br />
                  "If we don't give discounts, we're pretty much invisible on
                  the delivery platform" While that is true of other
                  applications, Foodleh doesn't discriminates, with each listing
                  given an equal opportunity to shine based on their proximity
                  to each User. There's no need to eat into profit margins, and
                  best of all, no more steep 30-40% commision! Steady lah, time
                  to dabao and save our local F&B stall owners! is a web
                  application designed to bridge hawker stalls in Singapore with
                  all Singaporean foodies! With the implementation of the
                  Circuit Breaker in place to fight COVID-19, numerous hawker
                  stalls are struggling to stay open in light of reduced human
                  traffic flow.
                  <br />
                  <br />
                  <br />
                  <b>
                  <img src={hashtag} alt="" style={{ height: "10%" }} />
                  </b>
                </span>
                Please email foodleh@outlook.com for questions, enquiries, or
                concerns.
              </p>
            </div>
            <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div>

            <div class="row">
              <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div>
              <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8"></div>
              <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;