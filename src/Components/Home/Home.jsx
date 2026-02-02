import React from "react";
import "./Home.css";
import WhyChoose from "../NavBarDesign/WhyChoose/WhyChoose";
import CourseBanner from "../NavBarDesign/Courses/CourseBanner";
import CourseDetails from "../NavBarDesign/Courses/CourseDetails";

function Home() {
  return (
    <div>
      <section className="landing-pg">

        <div className="mainHome">
          <div className="mainHeader">
            <h1>Most-Leading and Trusted Training Institute</h1>
            <span id="banner_text">Get trained, Work on live projects and get hired.</span>
            <div style={{ width: "100%", marginBottom: "20px", marginTop: "20px" }}>
              <button className="Homebutton" >
                Explore Courses
              </button>
            </div>
          </div>
          <div className="bannerImg">
            <img src="/assets/banner2.webp" className="bannerImg_size" alt="banner" />
          </div>

        </div>

      </section>
      <CourseBanner></CourseBanner>
      <WhyChoose></WhyChoose>
      <CourseDetails></CourseDetails>
    </div>
  );
}

export default Home;
