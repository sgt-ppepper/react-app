import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Register from './components/Register';
import { Route, BrowserRouter, Routes} from 'react-router-dom';
import Login from './components/Login';
import Account from './components/Account';
import Tickets from './components/Tickets'
import Films from './components/Films';
import React from 'react';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/user' element={<Account/>}/>
        <Route path='/tickets' element={<Tickets/>} />
        <Route path='/films' element={<Films/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
