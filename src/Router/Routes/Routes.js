import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Home from '../../Pages/Home/Home/Home'
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>, 
      children: [
        {
            path: '/',
            element:<Home></Home>
        },
        {
            path: '/home',
            element:<Home></Home>
        },
        {
            path: '/blog',
            element:<Blog></Blog>
        },
       
        {
            path: '/login',
            element:<Login></Login>
        },
        {
            path: '/signup',
            element:<SignUp></SignUp>
        },
       
      ]
    }
  ]);

  export default router;