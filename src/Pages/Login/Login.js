import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';

const Login = () => {
useTitle('Login')

    const navigate = useNavigate();
    const location = useLocation();
    const [error, setError] = useState(null);
   
  
  
      const {providerLogin, logInWithEmailPassword} = useContext(AuthContext)
  
   
    const from = location.state?.from?.pathname || "/";
  
      const googleProvider = new GoogleAuthProvider()
  
  const handleGoogleSignIn = ()=> {
  providerLogin(googleProvider)
  .then(result =>{
    navigate(from, { replace: true });
  })
  .catch(error => {console.error(error)
    setError(error.message);
  });
  
  };
  
      const handleSubmit = event =>{
  
        event.preventDefault();
        setError(null);
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        logInWithEmailPassword(email, password)
          .then((result) => {
            setError(null);
            form.reset();
            setError('')
            navigate(from, { replace: true });
          })
          .catch((error) => setError(error.message));
      }
  
    return (
        <div>
              <div>
            <div>
    <h2 className='text-center text-3xl mt-10 font-semibold'>Login</h2>
   </div>

            <div data-aos="fade-up" data-aos-duration="1500" class="flex mx-auto  card w-96  shadow-xl border-2 border-sky-300 mt-6">
         
  <div  class="card-body">
   
  <form onSubmit={handleSubmit} >
      <div >
        <div class="form-control">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input name='email' type="text" placeholder="email" class="input input-bordered"  required/>
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Password</span>
          </label>
          <input name='password' type="text" placeholder="password" class="input input-bordered" required />
          <label class="label">
            <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div class="form-control mt-6">
          <button type='submit' class="btn btn-outline btn-info">Login</button>
        </div>
        <small>Don't you have account? <Link to='/signUp'><span className='text-sky-400'>Please Sign Up</span></Link></small>
       
      </div>
      <p className='text-red-500'>{error}</p>
    </form>
  </div>
</div>

   <div className='text-center mt-5 mb-3'>
   <button  onClick={handleGoogleSignIn} class="btn btn-outline btn-info ">Google Sign Up</button>
   </div>
   

  </div> 
        </div>
    );
};

export default Login;