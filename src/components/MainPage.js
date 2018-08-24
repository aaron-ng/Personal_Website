import React from 'react';
import { Header } from './Header';
import { TitlePage } from './TItlePage';
import ScrollableAnchor from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor';
import { AboutMe } from './AboutMe';
import { Education } from './Education';
import { Skills } from './Skills';
import { WorkExperience } from './WorkExperience';
import { Projects } from './Projects';
import { Contact } from './Contact';


export class MainPage extends React.Component {

  componentWillMount() {
    configureAnchors({offset: -56.16});
  }

  render() {
    return (
      <div>
        <Header />
        <TitlePage />
        <AboutMe />
        <Education />
        <Skills />
        <WorkExperience />
        <Projects />
        <Contact />

      </div>
    )
  }
  
}