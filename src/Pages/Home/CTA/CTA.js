import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import useRole from '../../../hooks/useRole';

const CTA = () => {
  const { user } = useContext(AuthContext);
  const [userRole] = useRole(user?.email);

  const getStartedLink =
    user && user.uid && userRole === 'admin'
      ? '/admin/dashboard'
      : userRole === 'user'
      ? '/my/meetings'
      : '/login';
  return (
    <section className="mt-10 bg-gradient-to-tr from-blue-500 to-blue-400 py-32 px-2">
      <div className="container mx-auto flex flex-col items-center justify-center gap-5">
        <h2 className="text-5xl font-bold text-white">Get started in seconds</h2>
        <Link to={getStartedLink}>
          <div className="flex gap-5">
            <button className="bg-white px-4 py-2 rounded">Start for free</button>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default CTA;
