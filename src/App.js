import React from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";
import MainHeader from './components/MainHeader';
import ClassHeader from './components/ClassHeader';
import TestHeader from './components/TestHeader';

function App() {
  return (
    <div>
    <Routes>
      <Route path="/" element={<TestHeader />} />
      <Route path="/detail" element={<ClassHeader />} />
    </Routes>
    </div>

  );
}

export default App;
