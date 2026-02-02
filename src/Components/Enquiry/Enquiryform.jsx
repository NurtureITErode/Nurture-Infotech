import React, { useEffect, useState } from "react";
import "./EnquiryForm.css";
import CoursesTitles from '../Courses/CoursesTitle.json'
import FAQ from "./FAQ";
import Banner from "../Banner/Banner";
function Enquiryform() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [mail, setMail] = useState("");

  const Regex =
    /([a-zA-z0-9. -_]{1,20})+@+([a-zA-Z]{1,10})+\.+([a-zA-Z]{1,10})/;
  const submitForm = (e) => {
    e.preventDefault();
    if (!Regex.test(mail)) {
      alert(`Your Mail Id  ${mail} is incorrect`);
    }
  };

  const [course, setCourse] = useState([])
  useEffect(() => {
    setCourse(CoursesTitles)
  }, [])
  const info = [
    {
      id: 1,
      title: "College Students",
      desc: "Students of all semesters eventually looking to get placed in IT Companies"
    },
    {
      id: 2,
      title: "Fresher Graduates",
      desc: "Students with or without backpapers looking for a job in software industry"
    },
    {
      id: 3,
      title: "Placed Students",
      desc: "Computer/Non-Computer students placed in MNCs like infy, UST looking to pass their probationary exams"
    },
    {
      id: 4,
      title: "Professionals",
      desc: "People looking to switch their non-tech career to design/development/testing"
    }
  ]

  return (
    <div className="main_form">
      <div className="Enquiry">
        <div className="Enquiry_head">
          <div className="enquiry_bg_img">
            <img src="/assets/Images/Enquire/career.webp" id="enquiry_bg_img" alt="wrong" />
          </div>
          <div className="enquiry_bg_text">
            <h1 id="enquiry_bg_text">The <span id="bg_text">beautiful</span> thing about learning is that nobody <span id="bg_text">can take it away</span> from you</h1>
          </div>
        </div>
      </div>
      <Banner one="Start your journey in " two="IT with expert" three=" guidance and hands-on training!" />
      <div className="form-container" >
        <div className="form-content"
        >
          <h1 id="form_head">
            Who Can Join Us ?
          </h1>
          <div className="form-content-sub">
            {
              info.map((e) => (
                <div key={e.id} className="sideline">
                  <div className="form-con">
                    <div className="form-con-btn">
                      <button id="form-one">{e.id}</button>
                    </div>
                    <div className="form-con-content">
                      <span>{e.title}</span>
                      <p>
                        {e.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        {/* Enquire Form */}
        <div className="mainparent" >
          <div className="subparent">
            <div className="enquiry_bg">
              <div className="form-main form-border" id="form-main-border" >
                <div className="logoanimate">
                  <div className="enquiry_logo">
                    <div>
                      <img src="/assets/Images/Enquire/logo.png" id="formlogo1" alt="wrong" />
                    </div>
                    <h1 id="formHead1">Let's Connect with us!</h1>
                  </div>
                </div>
                <div className="glowborder">
                  <span className="spanborder" id="s1"></span>
                  <span className="spanborder" id="s2"></span>
                  <span className="spanborder" id="s3"></span>
                  <span className="spanborder" id="s4"></span>
                </div>
                <form autoComplete="on" className="form-sub-content">
                  <div>
                    <label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        required
                        id="form-name"
                        spellCheck="false"
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                      />
                    </label>
                    <br />
                    <label>
                      <input
                        type="number"
                        name="number"
                        placeholder="Enter your Mobile Number"
                        id="form-num"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        required
                      />
                    </label>
                    <br />
                    <label>
                      <input
                        type="email"
                        name="mail"
                        placeholder="Enter your E-mail"
                        id="form-mail"
                        value={mail}
                        onChange={(e) => setMail(e.target.value)}
                        required
                      />
                    </label>
                    <br />
                  </div>
                  <br />
                  <div className="choose_drop">
                    <div className="course-select">
                      <select id="course-select">
                        <option hidden>Qualification</option>
                        <option>PG</option>
                        <option>UG</option>
                        <option>Diploma</option>
                        <option>School</option>
                      </select>
                    </div>
                    <br />
                    <div className="course-select">
                      <select id="course-select">
                        <option hidden >Select Course</option>
                        {course.map((e, i) => (
                          <option key={i}>{e.title}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="radiolg">
                    <div id="form-radio">
                      <span>Mode of Training : </span>
                      <div id="form-radio-btn">
                        <span>
                          <label>
                            <input type="radio" name="mode" value="online" />  Online
                          </label>
                        </span>
                        <span>
                          <label>
                            <input type="radio" name="mode" value="offline" /> Offline
                          </label>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="form-btn1">
                    <button className="form-btn" onClick={submitForm}>
                      Enquire
                    </button>
                  </div>
                </form>
              </div>
              <div className="form-main-box"></div>
              <div className="form-main-box2"></div>
              <div className="form-main-box3"></div>
              <div className="form-main-box4"></div>
            </div>
          </div>
        </div>
      </div>
      <Banner one="Learn, build, and " two="grow with us" three="in the world of technology!" />
      <FAQ />
    </div>
  );
}

export default Enquiryform;
