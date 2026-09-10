import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import ServiceSingle from "./pages/ServiceSingle";
import BlogSingle from "./pages/BlogSingle";
import ScrollToTop from "./components/Common/ScrollToTop";


const App = () => {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Routes>

        {/* Main Website Layout */}
        <Route element={<MainLayout />}>

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceSingle />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogSingle />} />
          <Route path="/contact" element={<Contact />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
};

export default App;