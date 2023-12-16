
import React  from 'react';
import './App.css';
import Base from './Base.tsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StoreProvider from './store/StoreProvider.js';
import Creacion from './pages/Creacion.js';
import PreReunion from './pages/PreReunion.js';
import EnReunion from './pages/EnReunion.js';
import PostReunion from './pages/PostReunion.js'











function App() {
  return (

   <StoreProvider>
      
        <Router>
        <Base>
          {/* Definición de rutas */}
          <Routes>
            <Route path="/creacion" element={<Creacion />} />
            <Route path="/prereunion" element={<PreReunion />} />
            <Route path="/enreunion" element={<EnReunion />} />
            <Route path="/postreunion" element={<PostReunion />} />
           
         
            {/* Otras rutas si es necesario */}
          </Routes>
        </Base>
      </Router>
      
   </StoreProvider>
   
  );
}

export default App;
