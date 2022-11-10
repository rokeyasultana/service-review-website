import Main from "../../Layout/Main";
import AddService from "../../Pages/AddService/AddService";
import AllServices from "../../Pages/AllServices/AllServices";
import Blog from "../../Pages/Blog/Blog";
import ServiceDetails from "../../Pages/Details/ServiceDetails";
import EditReview from "../../Pages/EditReview/EditReview";
import ErrorElement from "../../Pages/ErrorElement/ErrorElement";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import MyReview from "../../Pages/MyReview/MyReview";
import Reviews from "../../Pages/Reviews/Reviews";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoutes from "./PrivateRoute/PrivateRoutes";
const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>, 
      errorElement:<ErrorElement></ErrorElement>,
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
            loader: ({params})=> fetch(`https://service-review-server-sable.vercel.app/services/${params.id}`)
        },
       
        {
            path: '/login',
            element:<Login></Login>
        },
        {
            path: '/signup',
            element:<SignUp></SignUp>
        },
        {
            path: '/review',
            element:<PrivateRoutes>
                <MyReview></MyReview>
            </PrivateRoutes>
        },
        {
            path: '/review/:id',
            element:<PrivateRoutes>
                <Reviews></Reviews>
            </PrivateRoutes>,
             loader: ({params})=> fetch(`https://service-review-server-sable.vercel.app/services/${params.id}`)
        },
        {path:'/editReview/:id',
        element: <EditReview></EditReview>,
        loader: ({params})=>fetch(`https://service-review-server-sable.vercel.app/reviews/${params.id}`)
        },
        {
            path: '/addservice',
            element:<PrivateRoutes>
            <AddService></AddService>
            </PrivateRoutes>
           
        },
        {
            path: '*',
            element:<ErrorElement></ErrorElement>
           
        },
       
      ]
    }
  ]);

  export default router;