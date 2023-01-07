import axios from 'axios';
import { createBrowserRouter } from 'react-router-dom';
import { cl, config } from '../../Helpers/Helpers';
import Admin from '../../Layouts/Admin/Admin';
import Main from '../../Layouts/Main/Main';
import User from '../../Layouts/User/User';
import AdminDashboard from '../../Pages/Admin/AdminDashboard/AdminDashboard';
import AdminUsers from '../../Pages/Admin/AdminUsers/AdminUsers';
import BookMeeting from '../../Pages/BookMeeting/BookMeeting';
import Home from '../../Pages/Home/Home';
import SignIn from '../../Pages/SignIn/SignIn';
import SignUp from '../../Pages/SignUp/SignUp';
import Bookings from '../../Pages/User/Bookings/Bookings';
import CreateMeeting from '../../Pages/User/CreateMeeting/CreateMeeting';
import MeetingBookings from '../../Pages/User/MeetingBookings/MeetingBookings';
import UserMeetings from '../../Pages/User/UserMeetings/UserMeetings';
import AdminRoute from '../AdminRoute/AdminRoute';
import UserRoute from '../UserRoute/UserRoute';

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
  {
    path: '/my',
    element: (
      <UserRoute>
        <User></User>
      </UserRoute>
    ),
    children: [
      {
        path: '/my/meetings',
        element: <UserMeetings></UserMeetings>,
      },
      {
        path: '/my/create-meeting',
        element: <CreateMeeting></CreateMeeting>,
      },
      {
        path: '/my/bookings',
        element: <Bookings></Bookings>,
      },
      {
        path: '/my/meeting/:id/bookings',
        element: <MeetingBookings></MeetingBookings>,
      },
    ],
  },
  {
    path: '/book/:code',
    element: <BookMeeting></BookMeeting>,
    loader: ({ params }) => axios.get(cl(`/meeting/${params.code}`), config),
  },
]);

export default routes;
