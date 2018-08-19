import React from 'react';
import '../css/Skills.css';
import '../css/Generic.css';

export class SkillsSubList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="skillsItemList projectItemRight">
        <h3>
          {this.props.title}
        </h3>
        <ul>
          {this.props.items.map((item) => <li>{item}</li>)}
        </ul>
      </div>
    );
  }

}