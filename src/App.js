import React from 'react';
import './App.css';

import MainMenu from './components/MainMenu';
import ArtCard from './components/ArtCard';
import FooterMenu from './components/FooterMenu';



function App() {
  const imgsPath = ['img.png', 'img.png', 'img.png', 'img.png', 'img.png', 'img.png', 'img.png', 'img.png', 'img.png', 'img.png', 'img.png', 'img.png', 'img.png'];
  return (
    <div className='App'>
      <MainMenu />
      <div className='Exposure'>
      {imgsPath.map(img => (
        <ArtCard imgName={img}/>
      ))}
      </div>
      <FooterMenu />
    </div>
  );
}

export default App;
