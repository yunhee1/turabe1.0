import React from 'react';
import './App.css';
import { Route, Routes, Link } from "react-router-dom";
import MainPage from './pages/MainPage/MainPage';
import DetailPage from './pages/DetailPage/DetailPage';

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/detail">클래스</Link>
        </li>
      </ul>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/detail" element={<DetailPage />} />
    </Routes>
    </div>

  );
}

export default App;
