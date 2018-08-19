import React from 'react';
import '../css/Skills.css';
import '../css/Generic.css';

export class SectionTitle extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="sectionTitle">
        <h2>
          <span>
            {this.props.title}
          </span>
        </h2>
    </div>
    );
  }

}