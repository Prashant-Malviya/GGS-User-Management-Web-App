import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, setUser } from '../../store/slice/authSlice';
import { useNavigate } from 'react-router-dom';
import { toast, Toaster } from 'react-hot-toast'; 

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await dispatch(loginUser({ email, password })).unwrap();
      dispatch(setUser(response)); 
      toast.success('Login successful!'); 
      navigate('/home'); 
    } catch (error) {
      console.error('Login failed:', error); 
      toast.error('Login failed! Please check your credentials.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white shadow-md mx-5">
        <h2 className="text-2xl font-bold text-center">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4 mt-4">
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <button
            type="submit"
            className={`w-full py-2 px-4 ${loading ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-700'} text-white rounded`}
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        {error && <p className="text-red-500 text-center mt-2">{error}</p>}
      </div>

      <Toaster position="top-right" reverseOrder={false} /> 
    </div>
  );
};

export default Login;
