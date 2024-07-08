import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import SignUp from './pages/sign-up';
import LandingPage from './pages/landing-page';
import { Toaster } from 'react-hot-toast';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './utils/auth-db';
import { useAuthStore } from './store/auth-store';
import Dashboard from './pages/app/dashboard';
import Authenticate from './pages/authenticate';
import Setup from './pages/app/setup';

const App = () => {

  const { getUser, currentUser } = useAuthStore();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      getUser(user?.uid);
      console.log(currentUser);
    });

    return () => { unsubscribe() };

  }, [getUser]);

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Authenticate />} />
        <Route path='/home' element={<LandingPage />} /> 
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/setup' element={<Setup />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
      <Toaster position="top-right" reverseOrder={false} />
    </Router>
  )
}

export default App;