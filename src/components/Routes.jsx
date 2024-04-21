import { CourseCreate } from "./CourseCreate";
import { Landing } from "./Landing";

import { Login } from "./Login";
import { Navbar } from "./Navbar";
import { Register } from "./Register";
import { VideoPlayer } from "./VideoPlayer";
import { VideoUpload } from "./VideoUpload";
import { Hero } from "../containers/Hero";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ViewCourse } from "./ViewCourse";

const RouteContainer = () => {
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Navbar /> <Landing />
            </>
          }
        />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/videoplayer" element={<VideoPlayer />} />
        <Route exact path="/videoUpload" element={<VideoUpload />} />
        <Route exact path="/main" element={<Hero />} />
        <Route exact path="/createCourse" element={<CourseCreate />} />
        <Route exact path="/viewCourse" element={<ViewCourse />} />
        <Route path="*" element={<p>There's nothing here: 404!</p>} />
      </Routes>
    </Router>
  );
};

export default RouteContainer;
