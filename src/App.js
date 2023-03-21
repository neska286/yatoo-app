import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import paths from "./constants/paths";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import Login from "./pages/Login";
import PostDetails from "./pages/PostDetails";
import About from "./pages/About";
import { useContext } from "react";
import { Context } from "./context/Context";
import Write from "./pages/Write";

function App() {
  const { user } = useContext(Context);
  return (
    <Router>
    <Navbar/>
    <Routes>
    <Route path={paths.home} element={<Home/>} />
    <Route path={paths.register} element={user ? <Home/> : <Register/>} />
   <Route path={paths.login} element={user?  <Home/> :<Login/>} />
   <Route path={paths.postDetails} element={<PostDetails/>} />
   <Route path={paths.about} element={<About/>} />
   <Route path={paths.write} element={<Write/>} />
    </Routes>
     </Router>
  );
}

export default App;
