import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import { AuthContext } from '../Contexts/AuthProvider/AuthProvider';


const SignUp = () => {
  useTitle('Sign Up')
  
    const [error,setError] =useState('')
  const { googleLogIn, createUser, updateUserProfile } =
  useContext(AuthContext);

const navigate = useNavigate();

const handleSubmit = (event) => {
  event.preventDefault();
  const form = event.target;
  const name = form.name.value;
  const photoURL = form.photoURL.value;
  const email = form.email.value;
  const password = form.password.value;
  createUser(email, password)
    .then((result) => {
      form.reset();
      setError('')
      profileUpdate(name,photoURL);
      navigate("/");
    })
    .catch((error) => {
      console.error(error);
    setError(error.message)
    
    });
};

const handleGoogleSignIn = () => {
  googleLogIn()
    .then((result) => {
      navigate("/");
    })
    .catch((error) => console.error(error));
};

const profileUpdate = (name, photoURL) => {
    updateUserProfile(name, photoURL)
      .then(() => {})
      .catch((error) => console.error(error));
  };
    return (
        <div>
            <div data-aos="fade-up" data-aos-duration="1500" >
  <div>
    <h2 className='text-3xl font-semibold text-center mt-10'> Sign Up</h2>
    <div data-aos="fade-up" data-aos-duration="1500" class="flex mx-auto mt-6 card w-96  border-2 border-sky-300 shadow-xl">
   

<div class="card-body">
        <form onSubmit={handleSubmit} >

        <div class="form-control">
          <label class="label">
            <span class="label-text">Name</span>

          </label>
          <input name='name' type="text" placeholder="your full name" class="input input-bordered" />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">PhotoURL</span>

          </label>
          <input name='photoURL' type="text" placeholder="photo URL" class="input input-bordered" />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input name='email' type="text" placeholder="email" class="input input-bordered" required />
        </div>
        
        <div class="form-control">
          <label class="label">
            <span class="label-text">Password</span>
          </label>
          <input name='password' type="text" placeholder="password" class="input input-bordered" required/>
          <label class="label">
            <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        
        
        <div class="form-control mt-6 ">
          <button  type='submit' class="btn btn-outline btn-info ">Sign Up</button>
        </div>
        </form>
        <p className='text-red-500'>{error}</p>
        <small>Already have an account?<Link to='/login'><span className='text-sky-400'> Please Login</span></Link></small>
      </div>
</div>
<div className='text-center mt-5 mb-3'>
   <button  onClick={handleGoogleSignIn} class="btn btn-outline btn-info ">Google Sign up</button>
   </div>
   
    </div>
  </div>  
        </div>
    );
};

export default SignUp;