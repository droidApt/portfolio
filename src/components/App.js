import React, { Component } from 'react';
import './App.scss';

import Navbar from './Navbar/Navbar';
import IntroPage from './IntroPage/IntroPage';
import SkillsPage from './SkillsPage/SkillsPage';
import ResumePage from './ResumePage/ResumePage';
import ContactPage from './ContactPage/ContactPage';

class App extends Component {
  constructor(props) {
	  super(props);

  }

  render() {
    return (
      <div id="container">
        <IntroPage />
        <SkillsPage />
        <ResumePage />
        <ContactPage />
        <Navbar />
      </div>
    );
  }
}

export default App;
