import React, { Component, createContext, useState } from 'react';
import './styles/App.css';
import Header from "./components/Header"
import Body from "./components/Body"
import { Routes, Route } from 'react-router-dom';
import Container from './components/Container';
import Form from './components/Form';
import Liste from './components/Liste';
import Update from './components/update';
import { UserContext } from './components/context/UserContext';


function App( ) {
  
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [matricule, setMatricule] = useState('');


  return (
    <div className="App">
      <Header />
        <UserContext.Provider value={[{nom, setNom}, {email, setEmail}, {matricule, setMatricule}]}>
          <Routes>
              <Route path="/" element={<Body />} ></Route>
              <Route path="/add" element={<Form />} />
              <Route path="/update/:id" element={<Update />} />
              <Route path="/liste" element={<Liste />} />
          </Routes>
        </UserContext.Provider>
    </div>
  );
}

export default App;
