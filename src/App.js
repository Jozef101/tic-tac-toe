import React from 'react';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import SignIn from './components/SignIn';
import { Container } from 'react-bootstrap';
import { AuthProvider } from './components/contexts/AuthContext';
import Profile from './components/Profile';
import PrivateRoute from './components/PrivateRoute';
import { useAuth } from './components/contexts/AuthContext';

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
  const auth = null
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          {auth === null ?  console.log("neprihlaseny " + auth) : console.log("prihlaseny")}
          <Route exact path="/login" element={<AuthRoute element={<Login />} />} />
          <Route exact path="/sign-in" element={<AuthRoute element={<SignIn />} />} />
          <Route exact path="/profile" element={<AuthRoute element={<Profile />} />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
