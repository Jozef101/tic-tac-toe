import React from 'react';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import SignIn from './components/SignIn';
import { Container } from 'react-bootstrap';
import { AuthProvider } from './components/contexts/AuthContext';

function AuthRoute({ element }) {
  return (
    <AuthProvider>
      <Container className='d-flex align-items-center justify-content-center' style={{minHeight: "100vh"}}>
        <div className='w-100' style={{maxWidth:"400px"}}>
          {element}
        </div>
      </Container>
    </AuthProvider>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<AuthRoute element={<Login />} />} />
          <Route exact path="/sign-in" element={<AuthRoute element={<SignIn />} />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
