import { Row } from "react-bootstrap";
import React from "react";

const Team = (props) => {
  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md col-md-offset-2 section-title">
          <h2>Meet the Team</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
        </div>
        <Row id="row">
          <div className="col-md-3 col-sm-6 team">
            <div className="thumbnail">
              <img src="img/team/01.jpg" alt="..." className="team-img" />
              <div className="caption">
                <h4>John Doe</h4>
                <p>Director</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 team">
            <div className="thumbnail">
              <img src="img/team/02.jpg" alt="..." className="team-img" />
              <div className="caption">
                <h4>John Doe</h4>
                <p>Director</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 team">
            <div className="thumbnail">
              <img src="img/team/03.jpg" alt="..." className="team-img" />
              <div className="caption">
                <h4>John Doe</h4>
                <p>Director</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 team">
            <div className="thumbnail">
              <img src="img/team/04.jpg" alt="..." className="team-img" />
              <div className="caption">
                <h4>John Doe</h4>
                <p>Director</p>
              </div>
            </div>
          </div>
        </Row>
      </div>
    </div>
  );
};
export default Team;
