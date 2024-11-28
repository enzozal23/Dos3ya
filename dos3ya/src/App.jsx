import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

// Importación del Navbar
import Navbar from './pages/Navbar'; // Ajusta la ruta si es necesario
import ImagePng from './pages/ImagePng.jsx';
import Slider from './pages/Slider.jsx';
import Help from './pages/Help.jsx';
import Brands from './pages/Brands.jsx';

function App() {
  return (
    <div className="flex">
      {/* Navbar ocupa la parte izquierda */}
      <Navbar />

      {/* Contenido principal */}
      <div className="flex-1 ml-0 mt-16 md:ml-16 md:mt-0 ">
        <Brands />
        <Help />
        <Slider />
        <ImagePng />
      </div>
    </div>
  );
}

export default App;
