import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="projects" element={<Projects/>}/>
          <Route path="resume" element={<Resume/>}/>  
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
