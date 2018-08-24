import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import '../css/Contact.css';


export class Contact extends React.Component {

  render() {
    return (
      <ScrollableAnchor id={`Contact`}>
        <div className="contact">
          <div >
            <h2>
              Feel free to contact me either on LinkedIn or through email.
          </h2>
          </div>

          <div className="contactContainer rowContainer">
          <div className="linkedInLink">
            <a href="https://www.linkedin.com/in/aaron-ng-hk" >
              <img className="linkedInImg" src={require("../img/linkedinicon.png")} />
            </a>
          </div>

          <div className="linkedInLink">
            <a href="mailto:ng.h@husky.neu.edu" >
              <img className="linkedInImg" src={require("../img/emailicon.png")} />
            </a>
          </div>
          </div>




        </div>
      </ScrollableAnchor>
    );
  }

}