import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectPage from "./pages/ProjectPage";
import ResumePage from "./pages/ResumePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<HomePage/>}/>
          <Route path="about" element={<AboutPage/>}/>
          <Route path="projects" element={<ProjectPage/>}/>
          <Route path="resume" element={<ResumePage/>}/>  
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
