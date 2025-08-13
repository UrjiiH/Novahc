import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Bird } from 'lucide-react';
import Logo from "../assets/logo.png";

const Signin = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const register = () =>{

  };

  const login = () =>{

  };

  

  return (
    <div className='w-full h-screen bg-gradient-to-br from-emerald-50 to-blue-50 flex items-center justify-center '>
      <div className='absolute top-6 left-6'>
        <Link to='/' className='flex items-center text-emerald-600 hover:text-emerald-700'>
          <ArrowLeft className='h-4 w-4 mr-1' />
          Back to Home
        </Link>
      </div>

      <div className="bg-white px-10 py-8 rounded-lg shadow-xl w-full max-w-md">
        <div className='flex justify-center mb-6'>
          <img src={Logo} className="w-20 h-20" alt="Logo" />
        </div>

        <div className='text-center mb-6'>
          <h2 className='text-3xl font-bold'>Welcome Back</h2>
          <p className='text-[#6b7280] text-sm mt-1'>
            Sign in to access your Nova Health Consultancy account
          </p>
        </div>

        <div className='mb-4'>
          <label className='text-sm font-medium mb-1 block'>Email Address</label>
          <input
            type="email"
            onChange={(event) => setRegisterEmail(event.target.value)}
            placeholder='Enter your email'
            className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-200'
          />
        </div>

        <div className='mb-2'>
          <label className='text-sm font-medium mb-1 flex justify-between'>
            <span>Password</span>
            <span className='text-emerald-600 cursor-pointer text-sm'>Forgot password?</span>
          </label>
          <input
            type="password"
            placeholder='Enter your password'
            className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-200'
          />
        </div>

        <button className='mt-4 w-full bg-emerald-600 text-white py-2 rounded-md hover:bg-emerald-700 transition'>
          Sign In
        </button>

        <div className='relative py-4'>
          <div className='absolute inset-0 flex items-center'>
            <div className='w-full border-t border-gray-300'></div>
          </div>
          <div className='relative flex justify-center text-sm'>
            <span className='bg-white px-2 text-gray-500'>OR CONTINUE WITH</span>
          </div>
        </div>

        <button className='w-full flex items-center justify-center border border-gray-300 py-2 rounded-md hover:bg-gray-50 transition'>
          <Bird className='h-5 w-5' />
          <span className='ml-2'>Continue with Google</span>
        </button>

        <div className='text-center mt-6'>
          <p className='text-sm text-gray-600'>
            Don't have an account? <Link to='/signup' className='text-emerald-600 hover:underline'>Sign up here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signin;
