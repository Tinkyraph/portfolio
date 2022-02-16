import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Art from "./pages/Art";
import NotFound from "./pages/NotFounds";



const App = () => {
  return (
    <BrowserRouter>
       <Routes>
         <Route path="/" exact element={<Home />} />
         <Route path="/about" element={<About />} />
         <Route path="/work" element={<Work />} />
         <Route path="/art" element={<Art />} />
         <Route path="*" exact element={<NotFound />} />
       </Routes>
    </BrowserRouter>
  );
};

export default App;
