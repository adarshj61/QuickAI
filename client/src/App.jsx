import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./assets/pages/Home";
import Layout from "./assets/pages/Layout";
import Dashboard from "./assets/pages/Dashboard";
import GenerateImages from "./assets/pages/GenerateImages";
import RemoveBackground from "./assets/pages/RemoveBackground";
import RemoveObject from "./assets/pages/RemoveObject";
import ReviewResume from "./assets/pages/ReviewResume";
import Community from "./assets/pages/Community";
import WriteArticle from "./assets/pages/WriteArticle";
import BlogTitles from "./assets/pages/BlogTitles";
import { useAuth } from "@clerk/clerk-react";
import { useEffect } from "react";
import {Toaster} from 'react-hot-toast';
const App = () => {

 
  return (
    <div>
      <Toaster position="top-center" reverseOrder={false}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ai" element={<Layout />}>
          <Route index element={<Dashboard/>}  />
          <Route path="write-article" element={<WriteArticle/>} />
          <Route path="blog-titles" element={<BlogTitles/>} />
          <Route path="generate-images" element={<GenerateImages/>} />
          <Route path="remove-background" element={<RemoveBackground/>} />
          <Route path="remove-object" element={<RemoveObject/>} />
          <Route path="review-resume" element={<ReviewResume/>} />
          <Route path="community" element={<Community/>} />
        </Route>
      </Routes>
      
    </div>
  );
};

export default App;
