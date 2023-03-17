import React from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";
import MainHeader from './components/MainHeader';
import ClassHeader from './components/ClassHeader';
import TestHeader from './components/TestHeader';
import Logo from './components/Logo';

function App() {

  return (
  <div>
    <Logo/>
    <Routes>
      <Route path="/" element={<TestHeader />} />
      <Route path="/detail" element={<ClassHeader />} />
    </Routes>
    </div>

  );
}

export default App;
