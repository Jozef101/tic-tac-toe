import React from 'react';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import SignIn from './components/SignIn';
import { Container } from 'react-bootstrap';
import { AuthProvider } from './components/contexts/AuthContext';

function App() {
  return (
  <>
    <Navbar />
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-in" element={(
          <AuthProvider>
            <Container className='d-flex align-items-center justify-content-center' style={{minHeight: "100vh"}}>
              <div className='w-100' style={{maxWidth:"400px"}}>
                <SignIn />              
              </div>
            </Container>
          </AuthProvider>
        )} />
      </Routes>
    </div>
  </>
  )
}

export default App;
