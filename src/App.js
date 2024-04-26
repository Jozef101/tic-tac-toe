import React from 'react';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Home from './components/Home';
import { Route, Routes, BrowserRouter as Router} from 'react-router-dom';
import SignIn from './components/SignIn';
import { Container } from 'react-bootstrap';
import { AuthProvider } from './components/contexts/AuthContext';
import Profile from './components/Profile';
import Dashboard from './components/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import Products from './components/Products';
import ForgottenPassword from './components/ForgottenPassword';
import LogoutButton from './components/LogoutButton';
import { getIsLogged } from './components/auth';

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
      <AuthProvider>
        <Navbar />
      </AuthProvider>
      <div>
          {/* <Router> */}
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/login" element={<AuthRoute element={<Login />} />} />
              <Route exact path="/sign-in" element={<AuthRoute element={<SignIn />} />} />
              <Route exact path="/dashboard" element={<AuthRoute element={<Dashboard />} />} />
              <Route exact path="/forgotten-password" element={<AuthRoute element={<ForgottenPassword />} />} />
              <Route element={<AuthRoute element={<PrivateRoute />} />}>
                <Route  path="/products" element={<AuthRoute element={<Products />} />} />                
                <Route exact path="/profile" element={<AuthRoute element={<Profile />} />} />
                <Route exact path="/logoutButton" element={<AuthRoute element={<LogoutButton />} />} />
              </Route>
            </Routes>
          {/* </Router> */}
      </div>
    </>
  );
}

export default App;
