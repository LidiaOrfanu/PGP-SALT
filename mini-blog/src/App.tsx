import React from "react";
import Blog from "./components/Blog";
import './App.css'
import './components/Footer.css'
import { Footer } from "./components/Footer";

const App = () => {
  return (
    <div>
      <h1 className="blog__title">Welcome to TinyBlog</h1>
      <Blog />
      <Footer />
    </div>
  );
};

export default App;