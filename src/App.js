import { BrowserRouter as Router, Route, Routes } from 
"react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/footer";
import Contact from "./components/contact";
import Services from "./components/services.jsx";

import "./styles/app.scss";
import "./styles/header.scss";
import "./styles/home.scss"
import "./styles/contact.scss"
import "./styles/mediaquery.scss"


function App(){
  return(
    <Router>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;
