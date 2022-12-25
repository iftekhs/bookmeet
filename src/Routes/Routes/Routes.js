import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layouts/Main/Main';
import Home from '../../Pages/Home/Home';
import SignIn from '../../Pages/SignIn/SignIn';
import SignUp from '../../Pages/SignUp/SignUp';

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
]);

export default routes;
