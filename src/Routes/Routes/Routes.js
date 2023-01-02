import { createBrowserRouter } from 'react-router-dom';
import Admin from '../../Layouts/Admin/Admin';
import Main from '../../Layouts/Main/Main';
import AdminDashboard from '../../Pages/Admin/AdminDashboard/AdminDashboard';
import AdminUsers from '../../Pages/Admin/AdminUsers/AdminUsers';
import Home from '../../Pages/Home/Home';
import SignIn from '../../Pages/SignIn/SignIn';
import SignUp from '../../Pages/SignUp/SignUp';
import AdminRoute from '../AdminRoute/AdminRoute';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/signin',
        element: <SignIn></SignIn>,
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: '/admin',
    element: (
      <AdminRoute>
        <Admin></Admin>
      </AdminRoute>
    ),
    children: [
      {
        path: '/admin/dashboard',
        element: <AdminDashboard></AdminDashboard>,
      },
      {
        path: '/admin/users',
        element: <AdminUsers></AdminUsers>,
      },
    ],
  },
]);

export default routes;
