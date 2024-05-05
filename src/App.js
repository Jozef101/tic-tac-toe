import React from 'react';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Home from './components/Home';
import { Route, Routes, BrowserRouter as Router} from 'react-router-dom';
import SignIn from './components/SignIn';
import { Container } from 'react-bootstrap';
import { AuthProvider, useAuth } from './components/contexts/AuthContext';
import Profile from './components/Profile';
import Dashboard from './components/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import Products from './components/Products';
import ForgottenPassword from './components/ForgottenPassword';
import LogoutButton from './components/LogoutButton';
import AnonymousRoute from './components/AnonymousRoute';
import Signup from './components/Signup';


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
      <AuthProvider>
        <Navbar />
      <div>
            <Routes>

              <Route exact path="/" element={<Home />} />
              <Route exact path="/dashboard" element={<Dashboard />}/>
              
              <Route element={<AnonymousRoute />} >
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/sign-in" element={<SignIn />}/>
                <Route exact path="/sign-up" element={<Signup />}/>
                <Route exact path="/forgotten-password" element={<ForgottenPassword />} />
              </Route>

              <Route element={<PrivateRoute />} >
                <Route  path="/products" element={<Products />} />                
                <Route exact path="/profile" element={<Profile />} />
                <Route exact path="/logoutButton" element={<LogoutButton />} />
              </Route>

            </Routes>
      </div>
      </AuthProvider>
    </>
  );
}

export default App;
