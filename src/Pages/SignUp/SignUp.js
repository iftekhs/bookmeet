import React, { useContext, useState } from 'react';
import { GoogleAuthProvider } from 'firebase/auth';
import { FaGoogle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import setAuthToken from '../../api/Auth/Auth';
import { cl } from '../../Helpers/Helpers';

const SignUp = () => {
  const [error, setError] = useState(null);
  const { createUser, providerLogin, trigger, setTrigger, updateUserProfile } =
    useContext(AuthContext);

  const navigate = useNavigate();

  //    Providers
  const googleProvider = new GoogleAuthProvider();

  const handleUpdateUserProfile = (name, email, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };
    updateUserProfile(profile)
      .then(() => {
        saveUser(name, email);
      })
      .catch((error) => console.error(error))
      .finally(() => {});
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setError(null);
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        form.reset();
        handleUpdateUserProfile(name, email, photoURL);
      })
      .catch((e) => setError(e.message));
  };

  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        saveUser(user.displayName, user.email);
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
              Sign Up to BookMeet to manage your meetings in a very simplified way
            </p>
            <div className="flex flex-col mt-5 w-full">
              <label htmlFor="name">Name</label>
              <input
                name="name"
                type="text"
                required
                id="name"
                className="p-2 mt-1 rounded focus:border-blue-00 w-full outline-none border"
              />
            </div>
            <div className="flex flex-col mt-5 w-full">
              <label htmlFor="photoURL">Your Photo URL</label>
              <input
                name="photoURL"
                type="text"
                required
                id="photoURL"
                className="p-2 mt-1 rounded focus:border-blue-00 w-full outline-none border"
              />
            </div>
            <div className="flex flex-col mt-5 w-full">
              <label htmlFor="email">Email</label>
              <input
                name="email"
                type="email"
                required
                id="email"
                className="p-2 mt-1 rounded focus:border-blue-00 w-full outline-none border"
              />
            </div>
            <div className="flex flex-col mt-5 w-full">
              <label htmlFor="password">Password</label>
              <input
                name="passwords"
                type="password"
                required
                id="password"
                className="p-2 mt-1 rounded focus:border-blue-00 w-full outline-none border"
              />
            </div>
            <p className="text-rose-500 my-5">{error}</p>
            <button className="mt-5 bg-blue-500 px-4 py-2 rounded text-white hover:bg-blue-600 transition-all">
              Sign Up
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

export default SignUp;
