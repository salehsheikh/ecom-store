import React from 'react';
import { auth } from './Firebase';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FiLogOut } from 'react-icons/fi'; // Import the logout icon from react-icons

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.signOut()
      .then(() => {
        navigate('/login');
        toast.success('Logged out successfully', {
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
        console.error('Logout error:', error);
        toast.error('Failed to log out', {
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
    <div className='mr-24'>
      <button
       className="flex items-center  hover:text-indigo-500 transition duration-300 ease-in-out"
        onClick={handleLogout}
      >
        <FiLogOut />{/* Use the logout icon */}
      </button>
      <ToastContainer />
    </div>
  );
};

export default Logout;
