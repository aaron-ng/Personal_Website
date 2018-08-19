import React from 'react';
import { configureAnchors } from 'react-scrollable-anchor';
import ScrollableAnchor from 'react-scrollable-anchor';
import '../css/WorkExperience.css';
import '../css/Generic.css';
import { SectionTitle } from './SectionTitle';

export class WorkExperience extends React.Component {

  componentWillMount() {
    configureAnchors({})
  }

  render() {
    return (
      <ScrollableAnchor id={`WorkExperience`}>
        <div className="workExperience">

          <SectionTitle title="Work Experience" />
          
          <div className="workContainer">
            <div className="rowContainer">
              <div className="workItemImg">
                <div className="workImgCenter">
                  <img className="workImage intuitImg" src={require("../img/intuitimg.png")} />
                </div>

              </div>
              <div className="workItemContent">
                <div className="workItemTitle">
                  <h3>Intuit</h3>
                </div>
                <div className="workItemInfo">
                  <p><strong>
                    Full-Stack Software Engineer
              </strong></p>
                </div>
                <div>
                  <p><strong>Mountain View, CA</strong></p>
                  <p>&nbsp;</p>
                  <p>
                    Created and implemented new ui and backend features.
                    Removed a good portion of bugs created by other people's code.
                    Tested my own and foreign code extensively. 
                  </p>
                </div>
              </div>
            </div>

            {/* Insert next work experience under here */}

          </div>



        </div>
      </ScrollableAnchor>
    );
  }

}