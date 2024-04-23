import { CourseCreate } from "./components/CourseCreate";
import { Landing } from "./components/Landing";
import { Login } from "./components/Login";
import { Navbar } from "./components/Navbar";
import { Register } from "./components/Register";
import { VideoPlayer } from "./components/VideoPlayer";
import { VideoUpload } from "./components/VideoUpload";
import { Hero } from "./containers/Hero";
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { ReactQueryDevtools } from 'react-query/devtools'
import { QueryClient, QueryClientProvider } from "react-query";
import { ViewCourse } from "./components/ViewCourse";

const App = () => {
  const router = createBrowserRouter([

    {
      path: '/register',
      element: <Register />
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/',
      element: <><Navbar /><Landing /></>
    },
    {
      path: '/hero',
      element: <Hero />
    },
    {
      path: '/videoUpload',
      element: <VideoUpload />
    },
    {
      path: '/coursecreate',
      element: <CourseCreate />
    },
    {
      path: "/:courseId",
      element: <ViewCourse />,
    },
    {
      path: "/video/:videoId",
      element: <VideoPlayer />,
    }
  ])

  const queryClient = new QueryClient()

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
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools intialIsOpen={false} position="bottom-right" />
      </QueryClientProvider>
    </>
  );
}

export default App;
