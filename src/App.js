import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Pages from "./pages/Pages";
import Footer from "./pages/Footer";
import Navbarr from "./pages/Navbarr";
import Feature from "./pages/Feature";
import OurDoctor from "./pages/OurDoctor";
import Appointment from "./pages/Appointment";
import Testimonial from "./pages/Testimonial";
import Portfolio from "./Portfolio";

function App(){  
return (
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/portfolio" element={<Portfolio/>}></Route>
        <Route path="/" element={
          <>
            <Navbarr></Navbarr>
            <Home/>
            <Footer/>
          </>
        }></Route>
        <Route path="/about" element={
          <>
            <Navbarr></Navbarr>
            <About/>
            <Footer/>
          </>
        }></Route>
        <Route path="/service" element={
          <>
            <Navbarr></Navbarr>
            <Service/>
            <Footer/>
          </>
        }></Route>
        <Route path="/pages" element={
          <>
            <Navbarr></Navbarr>
            <Pages/>
            <Footer/>
          </>
        }></Route>
        <Route path="/feature" element={
          <>
            <Navbarr></Navbarr>
            <Feature/>
            <Footer/>
          </>
        }></Route>
        <Route path="/doctor" element={
          <>
            <Navbarr></Navbarr>
            <OurDoctor/>
            <Footer/>
          </>
        }></Route>
        <Route path="/appointment" element={
          <>
            <Navbarr></Navbarr>
            <Appointment/>
            <Footer/>
          </>
        }></Route>
        <Route path="/testimonial" element={
          <>
            <Navbarr></Navbarr>
            <Testimonial/>
            <Footer/>
          </>
        }></Route>
      </Routes>
    </BrowserRouter>
  
  </>
  );
}
export default App;
