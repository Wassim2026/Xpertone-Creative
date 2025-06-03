import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import Home from "./Components/Home";
import Digital  from "./Components/DigitalServices";
import Printing from "./Components/Printing Services";
import About from "./Components/About";
import Blog from "./Components/Blog";
import Contact from "./Components/Contact";
import Login from './Components/Login';
import Signup from './Components/SignUp';
import Alert from "./Components/Alert";
import AddProduct from './Components/AddProduct';
import Footer from './Components/Foter';
import FloatingWhatsApp from './Components/FloatingWhatsApp';
import SettingsPage from './Components/Settings';
import SplashScreen from './Components/SplashScreen';







function App() {
    const [alert, setAlert] = useState(null);
    const showAlert = (message, type) => {
        setAlert({
            message,
            type,
        });
        setTimeout(() => setAlert(null), 1000);
    }
  return (
    <Router>
      <Navbar />
       <Alert alert={alert} />
      <div className="container mt-4">
         <FloatingWhatsApp />
        <Routes>
          <Route path="/" element={<SplashScreen />} />
          <Route path="/home" element={<Home />} />
          <Route path="/services" element={<Digital/>} />
          <Route path="/products" element={<Printing />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route  exact path="/login" element={<Login showAlert={showAlert} />} />
          <Route exact path="/createuser" element={<Signup showAlert={showAlert} />} />
          <Route path="/products/add" element={<AddProduct />} />
          <Route path="/settings" element={<SettingsPage />} />
           
        </Routes>
      </div>
       <Footer/>
    </Router>
  );
}

export default App;
