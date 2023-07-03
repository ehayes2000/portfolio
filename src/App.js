import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Project1 from "./pages/Project1";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<HomePage/>}/>
          <Route path="projects/project-1" element={<Project1/>}/>  
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
