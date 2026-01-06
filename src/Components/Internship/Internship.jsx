import React, { useRef } from 'react'
import './Internship.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useScroll } from "framer-motion";

const Courses = [
  {
    id: 1,
    title: "Data Science",
    img: "./assets/Images/Internship images/data-science.jpg",
    text: "Data science extracts insights from data, enabling informed decisions and predictions",
    tag: "Trending"
  },
  {
    id: 2,
    title: "Data Analytics",
    img: "./assets/Images/Internship images/data-analytics.jpg",
    text: "Data analytics transforms data into insights for better decision-making",
    tag: "Trending"
  },
  {
    id: 3,
    title: "Artificial Intelligence",
    img: "./assets/Images/Internship images/AI.jpg",
    text: "Artificial Intelligence enables machines to learn, reason, and solve problems",
    tag: "Trending"
  },
  {
    id: 4,
    title: "Full Stack Development",
    img: "./assets/Images/Internship images/MERN-stack.jpg",
    text: "Full Stack Development builds both front-end and back-end applications",
    tag: "Trending"
  },
  {
    id: 5,
    title: "Python",
    img: "./assets/Images/Internship images/python.jpg",
    text: "Python is a versatile language for web development and data analysis",
    tag: ""
  },
  {
    id: 6,
    title: "Java",
    img: "./assets/Images/Internship images/java.jpg",
    text: "Java is a object-oriented language for building scalable applications and systems",
    tag: ""
  },
  {
    id: 7,
    title: "Web Development",
    img: "./assets/Images/Internship images/webdev.jpg",
    text: "Web development creates interactive websites and applications for the internet",
    tag: ""
  },
  {
    id: 8,
    title: "Software Testing",
    img: "./assets/Images/Internship images/software-testing.jpg",
    text: "Software testing ensures quality by identifying and fixing bugs in applications",
    tag: ""

  },
  {
    id: 9,
    title: "UI / UX Design",
    img: "./assets/Images/Internship images/UIUX.jpg",
    text: "UI/UX design focuses on creating user-friendly and visually appealing interfaces",
    tag: "Trending"

  },
  {
    id: 10,
    title: "CCNA",
    img: "./assets/Images/Internship images/CCNA.jpg",
    text: "CCNA certifies networking skills for configuring and managing Cisco networks",
    tag: "Trending"
  },
  {
    id: 11,
    title: "Tally",
    img: "./assets/Images/Internship images/Tally.jpg",
    text: "Tally is an accounting software used for financial management and bookkeeping",
    tag: "Trending"
  },
  {
    id: 12,
    title: "Digital Marketing",
    img: "./assets/Images/Internship images/digital-marketing.jpg",
    text: "Digital marketing uses online platforms to promote products and engage audiences.",
    tag: "Trending"
  }]
const Internship = () => {
  const Form = useRef(null);
  const toForm = () => {
    Form.current?.scrollIntoView({ behavior: 'smooth' });
  }
  return (
    <div className='internship-container'>

      {/* Internship Text */}
      <div className='internship-content'>
        <div id='itext'>
          <h1 id='ihead'>Discover your <span id='intern-text'>passion</span>,
            acquire the <span id='intern-text'>skills</span>, and upscale your <span id='intern-text'>talent</span>...</h1>
          <p id='ipara'>Experience practical expertise, workplace familiarity and greater knowledge of industry.</p>
        </div>
        <div id='iimg'>
          <img src="https://metaloopglobal.com/assets/images/about-image.png" height={350} alt='Image'></img>
        </div>
      </div>
      <div className="intern-banner">
        <h1>Explore our IT courses, designed to equip you with the latest tech skills...</h1>
      </div>
      {/* Trending Technologies */}
      <div className="internship-courses">
        <div className="trending" >
          {
            Courses.map((course, i) => {
              const showtag = [0, 1, 2, 3]
              const show = showtag.includes(i)
              return (
                <div className="card1" >
                  <span className='tagname'>
                    {show ? "Trending" : "Recommended"}
                  </span>
                  <div className="card-logo">
                    <img src={course.img} alt="Logo"></img>
                  </div>
                  <div className="card-body">
                    <h2 className="card-title">{course.title}</h2>
                    <p className='card-text'>{course.text}</p>
                    <button class="card-button" onClick={toForm}>Explore</button>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className="intern-banner">
        <h1>Join our internship program and kickstart your career in technology!</h1>
      </div>
      <div className="neumorph box" ref={Form}>
        <div className="neoParent">
          <div className="neoForm">
            <div className="neoMain">
              <div className="neoimg_bg">
                <div className="neoIcon">
                  <img src="./assets/Images/Enquire/logo.png" id="formlogo" />
                </div>
              </div>
              <div className="neoHead">
                <h1>Let's Connect with Us !!</h1>
              </div>
              <div className="neoContent">
                <form autoComplete="off" method="get">
                  <div className="neoformdata">
                    <span id="neoinput"><input type="text" name="name" id="neoname" placeholder="Name" /></span>
                  </div>
                  <div>
                    <span id="neoinput"><input type="text" name="mobile" id="neonum" placeholder="Mobile Number" />
                    </span>
                  </div>
                  <div>
                    <span id="neoinput"><input type="text" name="mail" id="neomail" placeholder="E-mail Address" />
                    </span>
                  </div>
                  <div className="neoselect">
                    <div className="formqualify">
                      <select id="neoqua">
                        <option hidden>Qualification</option>
                        <option>PG</option>
                        <option>UG</option>
                        <option>Diploma</option>
                        <option>School</option>
                      </select>
                    </div>
                    <div className="formcourse">
                      <select id="neocourse">
                        <option hidden>Course</option>
                        <option>Python</option>
                        <option>Java</option>
                        <option>Tally</option>
                        <option>Data Analytics</option>
                      </select>
                    </div>
                  </div>
                  <div className="enq_btn">
                    <span><input type="submit" value="Enquire" id="neobtn" /></span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="neoright">
          <div className="form-contents">
            <div className="form-content-sub">
              <h1 id="form_head">
                Who Can Apply for Our Internship?
              </h1>

              <div className="form-con">
                <div className="form-con-btn">
                  <button id="form-one">1</button>
                </div>
                <div className="form-con-content">
                  <h3>Ambitious College Students</h3>
                  <p>
                    Whether you're in your first year or final semester, our internship gives you practical exposure to the tech world. Build skills, create projects, and get placement-ready.
                  </p>
                </div>
              </div>

              <div className="form-con">
                <div className="form-con-btn">
                  <button id="form-one">2</button>
                </div>
                <div className="form-con-content">
                  <h3>Fresh Graduates</h3>
                  <p>
                    Just out of college and unsure how to break into tech? Our internship bridges the gap between academics and industry with real-world experience and mentoring.
                  </p>
                </div>
              </div>
              <div className="form-con">
                <div className="form-con-btn">
                  <button id="form-one">3</button>
                </div>
                <div className="form-con-content">
                  <h3>Pre-placed Candidates</h3>
                  <p>
                    Got an offer letter but nervous about training or probation? Strengthen your core concepts and gain confidence before joining your MNC.
                  </p>
                </div>
              </div>

              <div className="form-con">
                <div className="form-con-btn">
                  <button id="form-one">4</button>
                </div>
                <div className="form-con-content">
                  <h3>Working Professionals</h3>
                  <p>
                    Want to switch to tech from a non-technical role? Our internship is designed to help you build real-world skills in development, testing, or UI/UX from the ground up.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='internship-testimonials' >
        <section className="testimonials box">
          <h2>What Our Interns Say</h2>
          <blockquote>
            “My time at Nurture Infotech helped me apply classroom knowledge to real-world IT projects. It was a game-changer for my career.”
            <div>— Tamilselvan Rangasamy, <span>Full Stack Development Intern</span></div>
          </blockquote>
          <blockquote>
            “Joining the internship at Nurture Infotech was the best decision. I gained both skills and direction for my future in tech.”
            <div>— Tamilselvan Rangasamy, <span>Data Analytics Intern</span></div>
          </blockquote>
        </section>
      </div>
    </div>
  )
}

export default Internship
