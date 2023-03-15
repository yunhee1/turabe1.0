import React from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";
import DetailPage from './pages/DetailPage/DetailPage';
import MainHeader from './components/MainHeader';

function App() {
  return (
    <div>
    <Routes>
      <Route path="/" element={<MainHeader />} />
      <Route path="/detail" element={<DetailPage />} />
    </Routes>
    </div>

  );
}

export default App;
