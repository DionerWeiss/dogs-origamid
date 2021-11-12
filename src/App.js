import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login/Login';
import './App.css';
import { UserStorage } from './UserContext';
import User from './components/User/User';
import ProtectedRoute from './components/Helper/ProtectedRoute';
import Photo from './components/Photo/Photo';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login/*" element={<Login />} />
            <ProtectedRoute path="/conta/*" element={<User />} />
            <Route path="/foto/:id" element={<Photo />} />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
