import React from 'react';
import '../css/Generic.css';

export const GithubLink = props => {
  return (
    <div className="gitContainer">
      <a href={props.link} id="hikingLink">
        <img className="githubImg" src={require("../img/githubIcon.png")} />
      </a>
    </div>
  );
}