import React, { useEffect } from 'react';
import Layout from '../components/landing-page/layout';
import { useAuthStore } from '../store/auth-store';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {

  const { currentUser } = useAuthStore();

  const navigate = useNavigate();

  useEffect(() => {
    if(currentUser) {
      navigate('/');
    }
  }, [currentUser]);

  return (
    <Layout>LandingPage</Layout>
  )
}

export default LandingPage;