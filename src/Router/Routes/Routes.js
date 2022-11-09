import Main from "../../Layout/Main";
import AllServices from "../../Pages/AllServices/AllServices";
import Blog from "../../Pages/Blog/Blog";
import ServiceDetails from "../../Pages/Details/ServiceDetails";
import Home from "../../Pages/Home/Home";
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
            path: '/services',
            element:<AllServices></AllServices>
        },
        {
            path: '/details/:id',
            element:<ServiceDetails></ServiceDetails>,
            loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)
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