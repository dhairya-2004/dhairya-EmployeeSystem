// import React, { useState,useEffect } from 'react';
// import { listEmployees ,createEmployee} from '../services/SignupService';
// import { Link } from 'react-router-dom';
// import './login.css';

// const Login = () => {
//   const [isSignIn, setIsSignIn] = useState(true);
//   const [employees, setEmployees] = useState([]);
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [email, setEmail] = useState('');
  


//   useEffect(() => {
//     getAllEmployees();
//   }, []);

//   const getAllEmployees = () => {
//     listEmployees()
//       .then((response) => {
//         setEmployees(response.data);
//         console.log(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };


//   const toggleForm = () => {
//     setIsSignIn((prevIsSignIn) => !prevIsSignIn);
//   };

  
//   const handleSignup = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await createEmployee({ username, password, email });
//       console.log('Signup successful', response.data);
//       getAllEmployees();

//       const signInButton = document.getElementById('signInButton');
//       if (signInButton) {
//         signInButton.click();
//       }
//     } catch (error) {
//       console.error('Signup failed', error.response.data);
//     }
//   };


//   return (
//     <div className={`container ${isSignIn ? '' : 'sign-up-mode'}`}>
//       <div className="forms-container">
//         <div className="signin-signup">
//           {isSignIn ? (
//             <form action="#" className="sign-in-form">
//               <h2 className="title">Sign in</h2>
//               <div className="input-field">
//                 <i className="fas fa-user"></i>
//                 <input type="text" placeholder="Username" />
//               </div>
//               <div className="input-field">
//                 <i className="fas fa-lock"></i>
//                 <input type="password" placeholder="Password" />
//               </div>
//               <input type="submit" value="Login" className="btn solid" />
//               <p className="social-text">Or Sign in with social platforms</p>
//               <div className="social-media">
//                 {/* <Link to="#" className="social-icon">
//                   <i className="fab fa-facebook-f"></i>
//                 </Link> */}
//                 <Link to="#" className="social-icon">
//                   <i className="fab fa-twitter"></i>
//                 </Link>
//                 <Link to="#" className="social-icon">
//                   <i className="fab fa-google"></i>
//                 </Link>
//                 <Link to="#" className="social-icon">
//                   <i className="fab fa-linkedin-in"></i>
//                 </Link>
//               </div>
//               <button type="button" className="btn transparent" onClick={toggleForm}>
//                 Sign up
//               </button>
//             </form>
//           ) : null}

//           {!isSignIn ? (
//             <form action="#" onSubmit={handleSignup} className="sign-up-form">
//               <h2 className="title">Sign up</h2>
//               <div className="input-field">
//                 <i className="fas fa-user"></i>
//                 <input type="text" placeholder="Username" />
//               </div>
//               <div className="input-field">
//                 <i className="fas fa-envelope"></i>
//                 <input type="email" placeholder="Email" />
//               </div>
//               <div className="input-field">
//                 <i className="fas fa-lock"></i>
//                 <input type="password" placeholder="Password" />
//               </div>
//               <input type="submit" className="btn" value="Sign up" />
//               <p className="social-text">Or Sign up with social platforms</p>
//               <div className="social-media">
//                 {/* <Link to="#" className="social-icon">
//                   <i className="fab fa-facebook-f"></i>
//                 </Link> */}
//                 <Link to="#" className="social-icon">
//                   <i className="fab fa-twitter"></i>
//                 </Link>
//                 <Link to="#" className="social-icon">
//                   <i className="fab fa-google"></i>
//                 </Link>
//                 <Link to="#" className="social-icon">
//                   <i className="fab fa-linkedin-in"></i>
//                 </Link>
//               </div>
//               <button type="button" className="btn transparent" onClick={toggleForm}>
//                 Sign in
//               </button>
//             </form>
//           ) : null}
//         </div>
//       </div>

//       <div className="panels-container">
//         <div className="panel left-panel">
//           <div className="content">
//             <h3>New to our community ?</h3>
//             <p>
//               Discover a world of possibilities! Join us and explore a vibrant
//               community where ideas flourish and connections thrive.
//             </p>
//             <button type="button" className="btn transparent" onClick={toggleForm}>
//               {isSignIn ? 'Sign up' : 'Sign in'}
//             </button>
//           </div>
//         </div>

//         <div className="panel right-panel">
//           <div className="content">
//             <h3>One of Our Valued Members</h3>
//             <p>
//               Thank you for being part of our community. Your presence enriches our
//               shared experiences. Let's continue this journey together!
//             </p>
//             <button type="button" className="btn transparent" onClick={toggleForm}>
//               Sign in
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;


// Login.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createEmployee, listEmployees } from '../services/SignupService';
import {login} from '../services/LoginService'
import './login.css';

const Login = () => {
  const navigate = useNavigate();
  const [isSignIn, setIsSignIn] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [employees, setEmployees] = useState([]);
  const [user, setUser] = useState(null);

  const toggleForm = () => {
    setIsSignIn((prevIsSignIn) => !prevIsSignIn);
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await createEmployee({ username, password, email });
      console.log('Signup successful', response.data);
      getAllEmployees();
      // Programmatically trigger click on the sign-in button after successful signup
      const signInButton = document.getElementById('signInButton');
      if (signInButton) {
        signInButton.click();
      }
    } catch (error) {
      console.error('Signup failed', error.response.data);
    }
  };

 
  




  // const handleLogin = async () => {
  //   try {
  //     const response = await login({ username, password });
  //     console.log('Login Response:', response);
  
  //     const user = response.data;
  //     console.log('User Details:', user);
  
  //     if (user) {
  //       // Set user session here
  //       console.log('Login successful');
  //       navigate('/home');
  //     } else {
  //       console.log('Invalid username or password');
  //     }
  //   } catch (error) {
  //     console.error('Error during login: ', error);
  //   }
  // };
  


  const handleLogin = async () => {
    try {
      const response = await login({ username, password });
      console.log('Login Response:', response);
  
      const user = response.data;
      console.log('User Details:', user);
  
      // Check if the response data indicates successful authentication
      if (user && user.id) {
        // Set user session here
        console.log('Login successful');
        navigate('/home');
      } else {
        console.log('Invalid username or password');
      }
    } catch (error) {
      // Handle network errors, server errors, or any other unexpected issues
      console.error('Error during login: ', error);
  
      // Check if the error message or response body indicates authentication failure
      if (error.response && error.response.data) {
        const responseData = error.response.data;
  
        // Customize this condition based on the actual response structure
        if (responseData.error && responseData.error.toLowerCase().includes('invalid')) {
          console.log('Invalid username or password');
        } else {
          // Handle other error scenarios
          console.log('Authentication error: ', responseData.error || 'Unknown error');
        }
      }
    }
  };
  
  
  

  const getAllEmployees = async () => {
    try {
      const response = await listEmployees();
      setEmployees(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={`container ${isSignIn ? '' : 'sign-up-mode'}`}>
      <div className="forms-container">
        <div className="signin-signup">
          {isSignIn ? (
            <form action="#" className="sign-in-form">
              <h2 className="title">Sign in</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Username" />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Password" />
              </div>
              <input type="submit" value="Login" className="btn solid" onClick={handleLogin} />
              <p className="social-text">Or Sign in with social platforms</p>
              <div className="social-media">
                {/* ... social media links ... */}
              </div>
              <button type="button" className="btn transparent" onClick={toggleForm}>
                Sign up
              </button>
            </form>
          ) : (
            <form onSubmit={handleSignup} className="sign-up-form">
              <h2 className="title">Sign up</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="input-field">
                <i className="fas fa-envelope"></i>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <input type="submit" className="btn" value="Sign up" />
              <p className="social-text">Or Sign up with social platforms</p>
              <div className="social-media">
                {/* ... social media links ... */}
              </div>
              <button
                type="button"
                id="signInButton"
                className="btn transparent"
                onClick={toggleForm}
              >
                Sign in
              </button>
            </form>
          )}
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New to our community ?</h3>
            <p>
              Discover a world of possibilities! Join us and explore a vibrant
              community where ideas flourish and connections thrive.
            </p>
            <button type="button" className="btn transparent" onClick={toggleForm}>
              {isSignIn ? 'Sign up' : 'Sign in'}
            </button>
          </div>
        </div>

        <div className="panel right-panel">
          <div className="content">
            <h3>One of Our Valued Members</h3>
            <p>
              Thank you for being part of our community. Your presence enriches our
              shared experiences. Let's continue this journey together!
            </p>
            <button type="button" className="btn transparent" onClick={toggleForm}>
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

















