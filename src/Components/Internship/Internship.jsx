import { useRef, useState, useEffect } from 'react'
import './Internship.css'
import Banner from '../Banner/Banner';
import Testimonials from './Testimonials';
// import bgicon from './assets/Images/Internship images/data-science.jpg'
const bgicon = "src/assets/Images/Internship images/course_shape02.png"
const bgicon1 = "src/assets/Images/Internship images/blog_shape01.png"
const bgicon2 = "src/assets/Images/Internship images/categories_shape02-1.png"
const bgicon3 = "src/assets/Images/Internship images/categories_shape01.png"

const Internship = () => {
  const join = [{
    id: 1,
    title: "Ambitious College Students",
    desc: "Whether you're in your first year or final semester, our internship gives you practical exposure to the tech world. Build skills, create projects, and get placement-ready.",
  }, {
    id: 2,
    title: "Fresh Graduates",
    desc: "Just out of college and unsure how to break into tech? Our internship bridges the gap between academics and industry with real-world experience and mentoring.",
  }, {
    id: 3,
    title: "Pre-placed Candidates",
    desc: "Got an offer letter but nervous about training or probation? Strengthen your core concepts and gain confidence before joining your MNC.",
  }, {
    id: 4,
    title: "Working Professionals",
    desc: "Want to switch to tech from a non-technical role? Our internship is designed to help you build real-world skills in development, testing, or UI/UX from the ground up.",
  }]
  const courseinfo = [
    {
      id: 1,
      title: "Data Science",
      img: "src/assets/Images/Internship images/data-science.jpg",
      text: "Data science extracts insights from data, enabling informed decisions and predictions",
      tag: "Trending"
    },
    {
      id: 2,
      title: "Data Analytics",
      img: "src/assets/Images/Internship images/data-analytics.jpg",
      text: "Data analytics transforms data into insights for better decision-making",
      tag: "Trending"
    },
    {
      id: 3,
      title: "Artificial Intelligence",
      img: "src/assets/Images/Internship images/AI.jpg",
      text: "Artificial Intelligence enables machines to learn, reason, and solve problems",
      tag: "Trending"
    },
    {
      id: 4,
      title: "Full Stack Development",
      img: "src/assets/Images/Internship images/MERN-stack.jpg",
      text: "Full Stack Development builds both front-end and back-end applications",
      tag: "Trending"
    },
    {
      id: 5,
      title: "Python",
      img: "src/assets/Images/Internship images/python.jpg",
      text: "Python is a versatile language for web development and data analysis",
      tag: ""
    },
    {
      id: 6,
      title: "Java",
      img: "src/assets/Images/Internship images/java.jpg",
      text: "Java is a object-oriented language for building scalable applications and systems",
      tag: ""
    },
    {
      id: 7,
      title: "Web Development",
      img: "src/assets/Images/Internship images/webdev.jpg",
      text: "Web development creates interactive websites and applications for the internet",
      tag: ""
    },
    {
      id: 8,
      title: "Software Testing",
      img: "src/assets/Images/Internship images/software-testing.jpg",
      text: "Software testing ensures quality by identifying and fixing bugs in applications",
      tag: ""

    },
    {
      id: 9,
      title: "UI / UX Design",
      img: "src/assets/Images/Internship images/UIUX.jpg",
      text: "UI/UX design focuses on creating user-friendly and visually appealing interfaces",
      tag: "Trending"

    },
    {
      id: 10,
      title: "CCNA",
      img: "src/assets/Images/Internship images/CCNA.jpg",
      text: "CCNA certifies networking skills for configuring and managing Cisco networks",
      tag: "Trending"
    },
    {
      id: 11,
      title: "Tally",
      img: "src/assets/Images/Internship images/Tally.jpg",
      text: "Tally is an accounting software used for financial management and bookkeeping",
      tag: "Trending"
    },
    {
      id: 12,
      title: "Digital Marketing",
      img: "src/assets/Images/Internship images/digital-marketing.jpg",
      text: "Digital marketing uses online platforms to promote products and engage audiences.",
      tag: "Trending"
    }]
  const [Courses, setCourses] = useState([]);
  useEffect(() => {
    console.log(1)
    setCourses(courseinfo)
  }, [])
  const Form = useRef(null);
  const toForm = () => {
    Form.current?.scrollIntoView({ behavior: 'smooth' });
  }


  return (
    <div className='internship-container'>

      {/* Internship Text */}
      <div className='bg_icon'>
        <img src={bgicon} alt="" className="bg_icon_1" />
        <img src={bgicon1} alt="" className="bg_icon_2" />
      </div>
      <div className='internship-content'>
        <div id='itext'>
          <h1 id='ihead' className='title'>Discover your <span id='intern-text'>passion</span>,
            acquire the <span id='intern-text'>skills</span>, and upscale your <span id='intern-text'>talent</span>...</h1>
          <p id='ipara'>Experience practical expertise, workplace familiarity and greater knowledge of industry.</p>
        </div>
        <div id='iimg'>
          <img src="https://metaloopglobal.com/assets/images/about-image.png" height={350} alt='wrong'></img>
        </div>
      </div>
      <div className="intern-banner">
        <h1> Explore our <span className='swoosh-wrap'> IT courses,
          <svg className="swoosh" viewBox="0 0 300 60" preserveAspectRatio="none" aria-hidden="true">
            <path d="M10 40 C50 25, 250 25, 290 40" stroke="#93ed25ff" strokeWidth="6" fill="none" stroke-linecap="round" />
            <path d="M10 48 C50 33, 250 26, 290 48" stroke="#93ed25ff" strokeWidth="4" fill="none" stroke-linecap="round" />
          </svg>

        </span> designed to equip you with the latest tech skills...</h1>
      </div>
      {/* Trending Technologies */}
      <div className="internship-courses">
        <div className='intern_bg_icon'>
          <img src={bgicon2} alt="" />
        </div>
        <div className="trending" >
          {
            Courses.map((course, i) => {
              const showtag = [0, 1, 2, 3]
              const show = showtag.includes(i)
              return (
                <div className="card1" key={i}>
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

      {/* <div className="intern-banner">
          <h1>Join our <span className='swoosh-wrap'>internship program
            <svg className="swoosh" viewBox="0 0 300 60" preserveAspectRatio="none" aria-hidden="true">
              <path d="M10 40 C50 25, 250 25, 290 40" stroke="#f3c042" strokeWidth="6" fill="none" stroke-linecap="round" />
              <path d="M10 48 C50 33, 250 26, 290 48" stroke="#f3c042" strokeWidth="4" fill="none" stroke-linecap="round" />
            </svg>
          </span> and kickstart your career in technology!</h1>
        </div> */}
      <Banner one="Join our " two="internship program" three="and kickstart your career in technology!"></Banner>

      {/* Internship Form  */}

      <div className="neumorph box" ref={Form}>
        <div className="neoParent">
          <div className="neoForm">
            <div className="neoMain">
              <div className="neoimg_bg">
                <div className="neoIcon">
                  <img src="src/assets/Images/Enquire/logo.png" id="formlogo" alt='logo' />
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
              {join.map((e) => (
                <div className="form-con" key={e.id}>
                  <div className="form-con-btn">
                    <button id="form-one">{e.id}</button>
                  </div>
                  <div className="form-con-content">
                    <h3>{e.title}</h3>
                    <p>{e.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Testimonials bgicon3={bgicon3} bgicon={bgicon} />
    </div >
  )
}

export default Internship
