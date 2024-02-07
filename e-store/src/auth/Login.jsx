import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './Firebase';
import { NavLink, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate('/home');
        toast.success(`${email} logged in successfully`, {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage);
        toast.error(errorMessage, {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        });
      });
  };

  return (
    <main className="flex items-center justify-center h-screen">
      <section className="bg-white p-8 shadow-md rounded-md w-96">
        <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>

        <form className="space-y-4">
          <div>
            <label htmlFor="email-address" className="block text-sm font-medium text-gray-600">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              required
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <button
              type="submit"
              onClick={onLogin}
              className="w-full bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-700 transition duration-300"
            >
              Login
            </button>
            <ToastContainer />
          </div>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          No account yet?{' '}
          <NavLink to="/signup" className="text-indigo-500 hover:underline">
            Sign up
          </NavLink>
        </p>
      </section>
    </main>
  );
};

export default Login;
