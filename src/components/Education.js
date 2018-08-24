import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import '../css/Education.css';
import { SectionTitle } from './SectionTitle';

export class Education extends React.Component {

  render() {
    return (
      <ScrollableAnchor id={`Education`}>
        <div className="education">
          <div className="educationContent">
            <div className="educationLeftSide">
              <div className="educationText">

                <SectionTitle title="Education." />

                <div className="educationInfo">
                  <p>
                    Currently: Studying at Northeastern University pursuing a Bachelors in Computer Science and Buisness Administration.
                  </p>
                  <br />
                  <p>
                    Previously: Studied at Discovery College and finished with a International Baccalaureate Diploma.
              </p>
                </div>
              </div>
            </div>
            <img className="neuImg" src={require("../img/neupic.jpg")} />
          </div>

        </div>
      </ScrollableAnchor>
    );
  }

}