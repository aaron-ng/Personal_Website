import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import '../css/Skills.css';
import '../css/Generic.css';
import { SkillsSubList } from './SkillsSubList';

export class Skills extends React.Component {
  constructor(props) {
    super(props);

    this.languageList = ["Java", "JavaScript", "SQL", "C", "HTML", "CSS/Sass"];
    this.softwareList = ["Intellij", "VS Code", "MySQLWorkBench", "VIM"];
    this.toolsList = ["Github", "Grunt", "Chrome DevTools", "Sinon", "JUnit"];
  }

  render() {
    return (
      <ScrollableAnchor id={`Skills`}>
       <div className="skills">
          <div className="sectionTitle">
            <h2>
              Skills.
            </h2>
          </div>
          <div className="skillsContent">
            <div className="skillsContainer workContainer rowContainer">
              <SkillsSubList title="Languages." items={this.languageList} />
              <SkillsSubList title="Software." items={this.softwareList} />
              <SkillsSubList title="Tools." items={this.toolsList} />
            </div>
          </div>

        </div>
      </ScrollableAnchor>
    );
  }

}