import React, { useRef, useState, useEffect, Suspense } from 'react';
import './Internship.css';
import Banner from '../Banner/Banner';
const Testimonials = React.lazy(() => import('./Testimonials'));

const bgicon = "/assets/Images/Internship images/course_shape02.png";
const bgicon1 = "/assets/Images/Internship images/blog_shape01.png";
const bgicon2 = "/assets/Images/Internship images/categories_shape02-1.png";
const bgicon3 = "/assets/Images/Internship images/categories_shape01.png";

const Internship = () => {
  const join = [
    { id: 1, title: "Ambitious College Students", desc: "Whether you're in your first year or final semester, our internship gives you practical exposure to the tech world. Build skills, create projects, and get placement-ready." },
    { id: 2, title: "Fresh Graduates", desc: "Just out of college and unsure how to break into tech? Our internship bridges the gap between academics and industry with real-world experience and mentoring." },
    { id: 3, title: "Pre-placed Candidates", desc: "Got an offer letter but nervous about training or probation? Strengthen your core concepts and gain confidence before joining your MNC." },
    { id: 4, title: "Working Professionals", desc: "Want to switch to tech from a non-technical role? Our internship is designed to help you build real-world skills in development, testing, or UI/UX from the ground up." }
  ];

  const courseinfo = [
    { id: 1, title: "Data Science", img: "/assets/Images/Internship images/data-science.webp", text: "Data science extracts insights from data, enabling informed decisions and predictions", tag: "Trending" },
    { id: 2, title: "Data Analytics", img: "/assets/Images/Internship images/data-analytics.webp", text: "Data analytics transforms data into insights for better decision-making", tag: "Trending" },
    { id: 3, title: "Artificial Intelligence", img: "/assets/Images/Internship images/AI.webp", text: "Artificial Intelligence enables machines to learn, reason, and solve problems", tag: "Trending" },
    { id: 4, title: "Full Stack Development", img: "/assets/Images/Internship images/MERN-stack.webp", text: "Full Stack Development builds both front-end and back-end applications", tag: "Trending" },
    { id: 5, title: "Python", img: "/assets/Images/Internship images/python.webp", text: "Python is a versatile language for web development and data analysis", tag: "" },
    { id: 6, title: "Java", img: "/assets/Images/Internship images/java.webp", text: "Java is an object-oriented language for building scalable applications and systems", tag: "" },
    { id: 7, title: "Web Development", img: "/assets/Images/Internship images/webdev.webp", text: "Web development creates interactive websites and applications for the internet", tag: "" },
    { id: 8, title: "Software Testing", img: "/assets/Images/Internship images/software-testing.webp", text: "Software testing ensures quality by identifying and fixing bugs in applications", tag: "" },
    { id: 9, title: "UI / UX Design", img: "/assets/Images/Internship images/UIUX.webp", text: "UI/UX design focuses on creating user-friendly and visually appealing interfaces", tag: "Trending" },
    { id: 10, title: "CCNA", img: "/assets/Images/Internship images/CCNA.webp", text: "CCNA certifies networking skills for configuring and managing Cisco networks", tag: "Trending" },
    { id: 11, title: "Tally", img: "/assets/Images/Internship images/Tally.webp", text: "Tally is an accounting software used for financial management and bookkeeping", tag: "Trending" },
    { id: 12, title: "Digital Marketing", img: "/assets/Images/Internship images/digital-marketing.webp", text: "Digital marketing uses online platforms to promote products and engage audiences.", tag: "Trending" }
  ];

  const [visibleCount, setVisibleCount] = useState(4);
  const [Courses, setCourses] = useState([]);
  const loadMoreRef = useRef(null);

  useEffect(() => { setCourses(courseinfo); }, []);

  useEffect(() => {
    if (!loadMoreRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisibleCount(prev => Math.min(prev + 6, Courses.length));
        }
      },
      { root: null, rootMargin: "200px", threshold: 0 }
    );
    observer.observe(loadMoreRef.current);
    return () => observer.disconnect();
  }, [Courses.length]);

  const Form = useRef(null);
  const toForm = () => { Form.current?.scrollIntoView({ behavior: 'smooth' }); }

  return (
    <main className='internship-container'>
      {/* Background Icons */}
      <div className='bg_icon'>
        <img src={bgicon} alt="decorative icon" className="bg_icon_1" />
        <img src={bgicon1} alt="decorative icon" className="bg_icon_2" />
      </div>

      {/* Internship Intro */}
      <div className='internship-content'>
        <div id='itext'>
          <h1 id='ihead' className='title'>
            Discover your <span id='intern-text'>passion</span>, acquire the <span id='intern-text'>skills</span>, and upscale your <span id='intern-text'>talent</span>...
          </h1>
          <p id='ipara'>Experience practical expertise, workplace familiarity and greater knowledge of industry.</p>
        </div>
        <div id='iimg'>
          <img src="/assets/Images/Internship images/about-image.png" height={350} width={500} style={{ aspectRatio: '5/3' }} alt='Internship overview' />
        </div>
      </div>

      {/* Banner Section */}
      <div className="intern-banner">
        <h1>
          Explore our <span className='swoosh-wrap'>IT courses
            <svg className="swoosh" viewBox="0 0 300 60" preserveAspectRatio="none" aria-hidden="true">
              <path d="M10 40 C50 25, 250 25, 290 40" stroke="#93ed25ff" strokeWidth="6" fill="none" strokeLinecap="round" />
              <path d="M10 48 C50 33, 250 26, 290 48" stroke="#93ed25ff" strokeWidth="4" fill="none" strokeLinecap="round" />
            </svg>
          </span> designed to equip you with the latest tech skills...
        </h1>
      </div>

      {/* Courses */}
      <section className="internship-courses">
        <div className='intern_bg_icon'>
          <img src={bgicon2} alt="decorative background" />
        </div>

        <div className="trending">
          {Courses.slice(0, visibleCount).map((course, i) => (
            <div className="card1" key={course.id}>
              <span className="tagname">{i < 4 ? "Trending" : "Recommended"}</span>

              <div className="card-logo">
                <img
                  src={course.img}
                  alt={course.title}
                  width={320}
                  height={200}
                  style={{ width: '100%', height: '150px', objectFit: 'cover' }}
                  loading="lazy"
                  decoding="async"
                  className="loaded"
                />
              </div>

              <div className="card-body">
                <h1 className="card-title">{course.title}</h1>
                <p className="card-text">{course.text}</p>
                <button className="card-button" onClick={toForm}>Explore</button>
              </div>
            </div>
          ))}
        </div>


        {visibleCount < Courses.length && <div ref={loadMoreRef} style={{ height: '50px' }} />}
      </section>

      <Banner one="Join our " two="internship program" three="and kickstart your career in technology!" />

      {/* Internship Form */}
      <div className="neomorph box" ref={Form}>
        <div className="neoParent">
          <div className="neoForm">
            <div className="neoMain">
              <div className="neoimg_bg">
                <div className="neoIcon">
                  <img src="/assets/Images/Enquire/logo.png" id="formlogo" alt='Company Logo' />
                </div>
              </div>
              <div className="neoHead">
                <h2>Let's Connect with Us !!</h2>
              </div>
              <div className="neoContent">
                <form autoComplete="on">
                  <div className="neoformdata">
                    <label htmlFor="neoname" className="sr-only">Name</label>
                    <input type="text" name="name" id="neoname" placeholder="Name" />
                  </div>
                  <div className="neoformdata">
                    <label htmlFor="neonum" className="sr-only">Mobile Number</label>
                    <input type="text" name="mobile" id="neonum" placeholder="Mobile Number" />
                  </div>
                  <div className="neoformdata">
                    <label htmlFor="neomail" className="sr-only">Email Address</label>
                    <input type="text" name="mail" id="neomail" placeholder="E-mail Address" />
                  </div>

                  <div className="neoselect">
                    <div className="formqualify">
                      <label htmlFor="neoqua" className="sr-only">Qualification</label>
                      <select id="neoqua" name="qualification" defaultValue="">
                        <option value="" disabled hidden>Qualification</option>
                        <option value="PG">PG</option>
                        <option value="UG">UG</option>
                        <option value="Diploma">Diploma</option>
                        <option value="School">School</option>
                      </select>
                    </div>
                    <div className="formcourse">
                      <label htmlFor="neocourse" className="sr-only">Course</label>
                      <select id="neocourse" name="course" defaultValue="">
                        <option value="" disabled hidden>Course</option>
                        <option value="Python">Python</option>
                        <option value="Java">Java</option>
                        <option value="Tally">Tally</option>
                        <option value="Data Analytics">Data Analytics</option>
                      </select>
                    </div>
                  </div>

                  <div className="enq_btn">
                    <input type="submit" value="Enquire" id="neobtn" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Who Can Apply */}
        <div className="neoright">
          <div className="form-contents">
            <div className="form-content-sub">
              <h2 id="form_head">Who Can Apply for Our Internship?</h2>
              <div className='intern_text'>
                {join.map(e => (
                  <div className="intern-form-con" key={e.id}>
                    <div className="intern-circle">
                      <button id="form-one">{e.id}</button>
                    </div>
                    <div className="intern-content">
                      <h3>{e.title}</h3>
                      <p>{e.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lazy-loaded Testimonials */}
      <Suspense fallback={<div style={{ height: '300px' }} />}>
        <Testimonials bgicon3={bgicon3} bgicon={bgicon} />
      </Suspense>
    </main>
  );
}

export default Internship;
