import React from "react";
  function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white p-4">
    <img 
      src={process.env.PUBLIC_URL + "/images/resume.png"} 
      alt="Resume"
      className="max-w-full max-h-[80vh] object-contain mb-4"
    />
    <a href={process.env.PUBLIC_URL + "/images/resume.pdf"} download="Resume.png" className="px-6 py-3 text-white rounded-md bg-slate-600 hover:bg-slate-500 transition-colors">
      Download
    </a>
  </div>
  );
}

export default App;

