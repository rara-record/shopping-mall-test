import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useLoginForm from '../hooks/useLoginForm';
import LoginForm from '../components/LoginFrom';

function LoginPage() {
  const navigate = useNavigate();

  const [{ accessToken }, store] = useLoginForm();

  useEffect(() => {
    store.reset();
  }, [store]);

  useEffect(() => {
    if (accessToken) {
      store.reset();
      navigate('/');
    }
  }, [accessToken, navigate, store]);

  return (
    <LoginForm />
  );
}

export default LoginPage;
