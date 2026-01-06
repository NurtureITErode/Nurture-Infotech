import React from "react";
import "./Home.css";
import WhyChoose from "./WhyChoose/WhyChoose";
import CourseBanner from "./Courses/CourseBanner";
import CourseDetails from "./Courses/CourseDetails";
import Company from "./Company/Company";

function Home() {
  return (
    <div>
      <section class="landing-pg">

        <div className="mainHome">
          <div className="mainHeader">
            <h1>Most-Leading and Trusted Training Institute</h1>
            <span id="banner_text">Get trained, Work on live projects and get hired.</span>
            <div style={{width:"100%",marginBottom:"20px", marginTop: "20px"}}>
              <button className="Homebutton" >
                Explore Courses
              </button>
            </div>
          </div>
          <div className="bannerImg">
            <img src="src/assets/banner2.webp" className="bannerImg_size" alt="banner" />
          </div>

        </div>

      </section>
      <CourseBanner></CourseBanner>
      <WhyChoose></WhyChoose>
      <CourseDetails></CourseDetails>

      <Company></Company>
    </div>
  );
}

export default Home;
