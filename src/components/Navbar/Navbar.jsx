import React from 'react';
import './Navbar.css';
import slack from './slack.svg';
import youtube from './youtube.svg';
import twitter  from './twitter.svg';
import github from './github.svg';

const Navbar = () => {
  return (
      <div className="topnav">
          <a href="https://join.slack.com/t/fossc-u/shared_invite/zt-1e9vt5hgk-k5GGNMb7r8mvxXfgbexdvQ"  target="_blank" rel="noopener noreferrer">
              <img src={slack} className="logo" alt="slack logo" />
              <span>Slack</span>
          </a>
          <a href="https://www.youtube.com/channel/UC_h3B9nyJu7s8TMHiccVELw" target="_blank" rel="noopener noreferrer">
              <img  src={youtube} className="logo" alt="youtube logo" />
              <span>Youtube</span>    
          </a>
          <a href="https://twitter.com/fosscuk" target="_blank" rel="noopener noreferrer">
              <img   src={twitter} className="logo" alt="twitter logo" />
              <span>Twitter</span>
          </a>
          <a href="https://github.com/FOSS-Community/KPB-Projects" target="_blank" rel="noopener noreferrer">
              <img  src={github} className="logo" alt="github logo" />
              Github
          </a>
      </div>
  );
};

export default Navbar;
