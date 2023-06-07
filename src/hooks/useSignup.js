import { useState } from 'react';
import { useAuthContext } from './useAuthContext';

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { dispatch } = useAuthContext(); // dispatch is the function that will update the state in the auth context

  const signup = async (email, password) => {
    setLoading(true);
    setError(null);

    const response = await fetch('http://localhost:4001/api/user/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      setError(data.message);
      setLoading(false);
    }

    if (response.ok) {
      // save the user to local storage
      localStorage.setItem('user', JSON.stringify(data));
      // set the user in the auth context
      dispatch({ type: 'LOGIN', payload: data });
      setLoading(false);
    }
  };
  return { signup, error, loading };
};
