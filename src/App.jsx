import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/NavBarDesign/Navbar";
import Home from "./Components/NavBarDesign/Home";
import Internship from "./Components/Internship/Internship";
import Footer from "./Components/NavBarDesign/Footer/Footer";
import Enquiryform from "./Components/Enquiry/Enquiryform";
import Contact from "./Components/Contact/Contact";
import Hireus from "./Components/HireUs/Hireus";
import Gallery from "./Components/Gallery/Gallery";
import Courses from "./Components/Courses/Courses";
import Python from "./Components/Courses/Course View/Python";
import Java from "./Components/Courses/Course View/Java";
import WebDesign from "./Components/Courses/Course View/WebDesign";
import Typescript from "./Components/Courses/Course View/Typescript";
import ReactBook from "./Components/Courses/Course View/ReactBook";
import NodeExpress from "./Components/Courses/Course View/NodeExpress";
import Mongodb from "./Components/Courses/Course View/Mongodb";
import MernStack from "./Components/Courses/Course View/MernStack";
import Automation from "./Components/Courses/Course View/Automation";
import Php from "./Components/Courses/Course View/MyPhp";
import Laravel from "./Components/Courses/Course View/Laravel";
import Django from "./Components/Courses/Course View/Django";
import Angular from "./Components/Courses/Course View/Angular";
import MeanStack from "./Components/Courses/Course View/MeanStack";
import Excel from "./Components/Courses/Course View/Excel";
import PowerBi from "./Components/Courses/Course View/PowerBi";
import DataAnalytics from "./Components/Courses/Course View/DataAnalytics";
import About from "./Components/About/About";

function App() {
  return (
    <div>
      <Router>
        <Navbar></Navbar>

        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/intern" element={<Internship></Internship>}></Route>
          <Route path="/enquire" element={<Enquiryform></Enquiryform>}></Route>
          <Route path="/courses" element={<Courses></Courses>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
          <Route path="/hireus" element={<Hireus></Hireus>}></Route>
          <Route path="/gallery" element={<Gallery></Gallery>}></Route>

          <Route path="/courses/python" element={<Python></Python>}></Route>
          <Route path="/courses/java" element={<Java></Java>}></Route>
          <Route
            path="/courses/webdesign"
            element={<WebDesign></WebDesign>}
          ></Route>
          <Route
            path="/courses/typescript"
            element={<Typescript></Typescript>}
          ></Route>
          <Route
            path="/courses/react"
            element={<ReactBook></ReactBook>}
          ></Route>
          <Route
            path="/courses/node"
            element={<NodeExpress></NodeExpress>}
          ></Route>
          <Route path="/courses/mongodb" element={<Mongodb></Mongodb>}></Route>
          <Route path="/courses/mern" element={<MernStack></MernStack>}></Route>
          <Route path="/courses/mean" element={<MeanStack></MeanStack>}></Route>
          <Route
            path="/courses/automation"
            element={<Automation></Automation>}
          ></Route>
          <Route path="/courses/php" element={<Php></Php>}></Route>
          <Route path="/courses/laravel" element={<Laravel></Laravel>}></Route>
          <Route path="/courses/django" element={<Django></Django>}></Route>
          <Route path="/courses/angular" element={<Angular></Angular>}></Route>
          <Route path="/courses/excel" element={<Excel></Excel>}></Route>
          <Route path="/courses/powerbi" element={<PowerBi></PowerBi>}></Route>
          <Route
            path="/courses/dataanalytics"
            element={<DataAnalytics></DataAnalytics>}
          ></Route>
        </Routes>

        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
