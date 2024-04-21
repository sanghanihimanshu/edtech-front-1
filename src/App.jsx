import { CourseCreate } from "./components/CourseCreate";
import { Landing } from "./components/Landing";
import { Login } from "./components/Login";
import { Navbar } from "./components/Navbar";
import { Register } from "./components/Register";
import { VideoPlayer } from "./components/VideoPlayer";
import { VideoUpload } from "./components/VideoUpload";
import { Hero } from "./containers/Hero";
import { RouterProvider, createBrowserRouter } from 'react-router-dom'


const App = ()=> {
  const router=createBrowserRouter([
    
    {
      path:'/register',
      element:<Register/>
    },
    {
      path:'/login',
      element:<Login/>
    },
    {
      path:'/',
      element:<><Navbar/><Landing/></>
    },
    {
      path:'/hero',
      element:<Hero/>
    },
    {
      path:'/videoUpload',
      element:<VideoUpload/>
    },
    {
      path:'/coursecreate',
      element:<CourseCreate/>
    },
    {
      path:'/videoplayer',
      element:<VideoPlayer/>
    }

])
  return (
    <>
      {/* <Navbar /> */}
      {/* <Landing /> */}
      {/* <Hero /> */}
      {/* <Login /> */}
      {/* <Register /> */}
      {/* <VideoUpload /> */}
      {/* <CourseCreate /> */}
      {/* <VideoPlayer src="https://dyznew8dbds5w.cloudfront.net/java/output.mpd" /> */}
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
