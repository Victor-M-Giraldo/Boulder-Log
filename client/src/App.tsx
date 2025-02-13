import { createBrowserRouter, RouterProvider } from 'react-router';
import Layout from './Layout';
import HomePage from './HomePage';
import RegistrationPage from './RegistrationPage';
import PostClimbPage from './PostClimbPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        element: <HomePage/>,
        path: '/'
      },
      {
        element: <RegistrationPage/>,
        path: '/register'
      },
      {
        element: <PostClimbPage/>,
        path: '/climb/new'
      }
    ]
    },
])

function App() {
  return <RouterProvider router={router} />;
}

export default App;
