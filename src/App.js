import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home/Home"
import Whychess from './pages/Whychess/Whychess';
import Courses from "./pages/Courses/Courses"
import Contact from "./pages/Contact/Contact"
import About from "./pages/About/About"
// import Blog from "./pages/Blog/Blog"
import Whyus from './pages/Whyus/Whyus';
import Btnc from "./components/Button/btnc/Btnc"
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/whychess" element={<Whychess />} ></Route>
          <Route path="/courses" element={<Courses />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/whyus" element={<Whyus />}></Route>
        </Routes>
        <Btnc />
        <Footer />
      </Router>

    </>
  );
}

export default App;