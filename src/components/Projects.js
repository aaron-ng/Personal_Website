import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import { GithubLink } from './GithubLink';
import { SectionTitle } from './SectionTitle';
import '../css/Projects.css';
import '../css/Generic.css';


export class Projects extends React.Component {

  render() {
    return (
      <ScrollableAnchor id={`Projects`}>
        <div className="project">
          <SectionTitle title="Projects." />
          <div className="projectContainer">
            <div className="rowContainer">
              <div className="projectItemContainer">
                <div className="projectItemRight">
                  <div>
                    <h4>
                      A Hiker's Guide to the Galaxy
                </h4>
                  </div>
                  <div>
                    <p>
                      <i>
                        Co-Creator
                    </i>
                      <br />
                      Designed and Implemented a hiking database with a simple user interface. The database can store a large variety of information on a trail such as but no included: trail length, trail distance from user, trail geocaches, trail activities etc. The project was built on php and sql.
                    <br />
                      <br />
                      This project was created as a final project for my database design class. At the time of this creation there wasn't any hiking databases that tracked both geocaches and trails at the same time. Most hiking databases would only keep track of one or the other but never both simultaneously, thus this was born.
                  </p>
                  </div>
                  <GithubLink link="https://github.com/aaron-ng/Hikers_Guide" />
                </div>
              </div>


              <div className="projectItemContainer">
                <div className="projectItemLeft">
                  <div>
                    <h4>Personal Website</h4>
                  </div>
                  <div>
                    <p>
                      <i>
                        Creator
                    </i>
                      <br />
                      Designed and created the personal website that you are on now. I use this website as a way to compile all of my work experience and projects under one roof. The website is built on javascript and the react framework.
                    <br />
                      <br />
                      This website was created with the knowledge learned at my time at Intuit. I came into the co-op position without any front end experience at all, however my time there has given me a great oppurtunity to self teach myself javascript as well as the react framework.
                  </p>
                  </div>

                </div>
              </div>
            </div>

            <div className="rowContainer">
              <div className="projectItemContainer">
                <div className="projectItemLeft">
                  <div>
                    <h4>Big 2 Poker</h4>
                  </div>
                  <div>
                    <p>
                      <i>
                        Creator
                    </i>
                      <br />
                      Created a model, view and controller for the Big 2 Poker game. The project currently has a functioning logic as well as a simple command line user interface. In the future the project will include a couple bots with varying difficulties. At each setting the bots will play differently based on strategy and probability. Lastly the project will later include a fully functional graphic user interface.
                    <br />
                      <br />
                      Big 2 is a chinese card game played by 4 players. I started this project the semester after the class on object oriented design. This project was created by me to showcase what I have learnt in class, with a more object oriented approach to programming.
                    <br />
                      <br />
                      You can find the github repo below.
                  </p>
                  </div>
                  <GithubLink link="https://github.com/aaron-ng/Big-2-Poker" />

                </div>
              </div>

              <div className="projectItemContainer">
                <div className="projectItemLeft">
                  <div>
                    <h4>Hong Kong University Engineering Summer Camp for the Elite</h4>
                  </div>
                  <div>
                    <p>
                      <i>
                        Project Champion
                    </i>
                      <br />
                      Led a team to create a battle robot. Coded and built a battle robot to compete against other groups. The robot was graded in three different categories: aesthetics, complexity and combat effeciency. The aesthetics was judged on a vote by professors as well as particpants in the other projects. The complexity of the bot was judged by the professors that were running the event. Lastly the combat effeciency was judged on how the bot would fair on a free for all between multiple teams. Our battle bot was able to place first place in the first two categories and took third in combat effeciency.
                    <br />
                      <br />
                      This project was my first introduction to coding and creating something with code. The bot was built on scratch and legos. Looking back it was funny that I used scratch, now I would not even consider it as a proper language. However it was my first introduction to programming, and therefore I consider it as one of the most important projects I have built.
                  </p>
                  </div>
                </div>
              </div>




            </div>
          </div>
        </div>
      </ScrollableAnchor>
    );
  }

}