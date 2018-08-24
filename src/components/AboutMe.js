import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import '../css/AboutMe.css';
import { SectionTitle } from './SectionTitle';

export class AboutMe extends React.Component {

  render() {
    return (
      <ScrollableAnchor id={`About`}>
        <div className="aboutMe">
          <div className="aboutMeContent">
            <div className="aboutMeLeftSide">


              <div className="aboutMeText">
                <SectionTitle title="About Me." />

                <p className="aboutMeFirstText">

                  Hi. My name is Aaron Ng, I was born and raised in Hong Kong and moved to the states for school. I'm currently a university student studying for a Bachelors in a Combined major of Computer Science and Buisness Administration at Northeastern University. This is a website to collage all my projects work experience into one place.
        </p>
                <p>
                  Today I am co-oping at a financial tech firm called Intuit, known for turbotax and quickbooks. I work as a full stack software engineer on quickbooks online.
        </p>
              </div>
            </div>

            <img className="aboutMeImage" src={require("../img/photoofme.jpeg")} />


            
          </div>
        </div>
      </ScrollableAnchor>
    );
  }
  
}