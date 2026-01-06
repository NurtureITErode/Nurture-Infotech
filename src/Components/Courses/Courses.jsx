import React, { useEffect, useState } from "react";
import "./Courses.css";
import CoursesTitles from "./CoursesTitle.json";
import { Link } from "react-router-dom";
function Courses() {
  const [course, setCourse] = useState([]);
  useEffect(() => {
    setCourse(CoursesTitles);
  }, []);
  return (
    <div>
      <section className="Course_Main">
        <div className="courses_banner">
          <h2>Course</h2>
        </div>
        <div className="CourseTitles">
          {course.map((e, i) => {
            return (
              <Link to={e.navlink} key={i} className="CourseLink">
                <img src={e.src} height={250}></img>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Courses;
