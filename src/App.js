import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Router/Routes/Routes';
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


function App() {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
 <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
