import React from 'react';
import './App.css';
import LinkButton from './components/LinkButton/LinkButton';
import Navbar from './components/Navbar/Navbar';
import CardsContainer from './components/ProjectList/CardsContainer';
import SocialShare from './components/SocialShare/SocialShare';

const App = () => {
  return (
    <div className="App">
        <Navbar />
        <div className="App-header">
            <h1>Welcome to Kiet Project Bank! </h1>
            
        </div>
        <div className='App-header'>
            <h3>Get Started with Choosing a Project to Contribute.</h3>
        </div>
        <LinkButton />
        <CardsContainer />
        <SocialShare/>
    </div>
  );
}

export default App;
