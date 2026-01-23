import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home/home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './pages/about/about';
import Speaking from './pages/speaking/speaking';
import Ventures from './pages/Ventures/Ventures';
import InsightsBlog from './pages/InsightsBlog/InsightsBlog';
import Contact from './pages/Contact/Contact';
import Appoiment from './pages/appoiment/appoiment';
import Events from './pages/events/events';
import Certificate from './component/certificate/certificate';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router basename="/">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="speaking" element={<Speaking />} />
      <Route path="Ventures" element={<Ventures />} />
      <Route path="Insights" element={<InsightsBlog />} />
      <Route path="contact" element={<Contact/>} />
      <Route path="appoiment" element={<Appoiment/>} />
      <Route path="certificate" element={<Certificate/>} />
      <Route path="events" element={<Events/>} />


      
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
