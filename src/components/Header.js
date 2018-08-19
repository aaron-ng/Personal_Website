import React from 'react';
import '../css/Header.css';

export class Header extends React.Component {
  constructor(props) {
    super(props);

    this.titleHeader = "mainHeader";
    this.state = {
      navClasses: this.titleHeader
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const currentScrollY = window.pageYOffset;

    if (currentScrollY >= 500) {
      this.setState({
        navClasses: this.titleHeader + " headerTransitionIn"
      })
    } else {
      this.setState({
        navClasses: this.titleHeader + " headerTransitionOut"
      })
    }
  }

  render() {
    return (
      <nav className={this.state.navClasses}>
        <ul className="headerList">
          <li>
            <a href="#About">About Me</a>
          </li>
          <li>
            <a href="#Education">Education</a>
          </li>
          <li>
            <a href="#Skills">Skills</a>
          </li>
          <li>
            <a href="#WorkExperience">Work Experience</a>
          </li>
          <li>
            <a href="#Projects">Projects</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
          </li>
        </ul>
      </nav>
    );
  }

}