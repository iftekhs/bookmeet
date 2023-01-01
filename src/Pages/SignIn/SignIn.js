import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import setAuthToken from '../../api/Auth/Auth';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { cl } from '../../Helpers/Helpers';
import './SignIn.css';

const SignIn = () => {
  const { login, providerLogin, setLoading, trigger, setTrigger } = useContext(AuthContext);
  const [error, setError] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || '/';

  //   Providers
  const googleProvider = new GoogleAuthProvider();

  const handleSubmit = (event) => {
    event.preventDefault();

    setError(null);

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
      .then((result) => {
        const user = result.user;
        const currentUser = {
          email: user.email,
        };
        setAuthToken(currentUser)
          .then((data) => {
            setTrigger(!trigger);
            if (data.accessToken) {
              navigate(from, { replace: true });
            }
          })
          .catch(console.error);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        saveUser(user.displayName, user.email, 'user');
      })
      .catch(console.error);
  };

  const saveUser = (name, email) => {
    const user = { name, email };
    const currentUser = {
      email,
    };
    fetch(cl('/users'), {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then(() => {
        setAuthToken(currentUser)
          .then((data) => {
            setTrigger(!trigger);
            if (data.accessToken) {
              navigate('/');
            }
          })
          .catch(console.error);
      });
  };

  return (
    <section className="bg-gradient-to-tr from-blue-400 to-blue-500 px-2">
      <div className="mh-100  flex items-center justify-center">
        <div className="auth-form bg-white flex items-center justify-center flex-col w-full rounded p-4 max-w-2xl">
          <form onSubmit={handleSubmit}>
            <h2 className="text-4xl text-center font-bold">
              Book
              <span className="text-blue-500">Meet</span>
            </h2>
            <p className="mt-3 text-cgray text-center">
              Sign In to your account using your credentials to manage your meetings
            </p>
            <div className="flex flex-col mt-5 w-full">
              <label htmlFor="email">Email</label>
              <input
                name="email"
                type="email"
                required
                className="p-2 mt-1 rounded focus:border-blue-00 w-full outline-none border"
              />
            </div>
            <div className="flex flex-col mt-5 w-full">
              <label htmlFor="password">Password</label>
              <input
                name="password"
                type="password"
                required
                className="p-2 mt-1 rounded focus:border-blue-00 w-full outline-none border"
              />
            </div>
            <p className="text-rose-500 my-5">{error}</p>
            <button className="mt-5 bg-blue-500 px-4 py-2 rounded text-white hover:bg-blue-600 transition-all">
              Sign In
            </button>

            <button
              onClick={handleGoogleSignIn}
              className="flex items-center justify-center gap-2 mt-5 p-2 py-3 rounded border w-full transition-all hover:bg-gray-100">
              <FaGoogle></FaGoogle>
              Sign In using Google
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
