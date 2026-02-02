import React from "react";
import "./SyllabusDesign.css";
import Accordion from "./Accordion";
import Company from "../../NavBarDesign/Company/Company";

import Companylogos from "./Companylogos.json";
import { Link, useNavigate } from "react-router-dom";
const accordionItems = [
  {
    title: "Introduction to Node.js",
    content: (
      <ul className="courseListitem">
        <li>What is Node.js?</li>
        <li>Features of Node.js</li>
        <li>Installing Node.js</li>
        <li>Setting up a Node.js environment</li>
      </ul>
    ),
  },
  {
    title: "Node.js Modules",
    content: (
      <ul className="courseListitem">
        <li>Built-in modules</li>
        <li>Creating custom modules</li>
        <li>Importing and exporting modules</li>
        <li>Using npm for managing modules</li>
      </ul>
    ),
  },
  {
    title: "Node.js File System",
    content: (
      <ul className="courseListitem">
        <li>Reading and writing files</li>
        <li>Working with file paths</li>
        <li>File streaming</li>
        <li>Asynchronous file operations</li>
      </ul>
    ),
  },
  {
    title: "Node.js Event Loop",
    content: (
      <ul className="courseListitem">
        <li>Understanding the event-driven architecture</li>
        <li>Event emitters</li>
        <li>Handling events</li>
        <li>Asynchronous programming with callbacks</li>
      </ul>
    ),
  },
  {
    title: "Node.js HTTP Module",
    content: (
      <ul className="courseListitem">
        <li>Creating an HTTP server</li>
        <li>Handling HTTP requests and responses</li>
        <li>Working with different HTTP methods (GET, POST, PUT, DELETE)</li>
        <li>Parsing request bodies</li>
      </ul>
    ),
  },
  {
    title: "Node.js Streams and Buffers",
    content: (
      <ul className="courseListitem">
        <li>Working with streams</li>
        <li>Reading from and writing to streams</li>
        <li>Piping streams</li>
        <li>Understanding buffers</li>
      </ul>
    ),
  },
  {
    title: "Node.js Error Handling",
    content: (
      <ul className="courseListitem">
        <li>Error types in Node.js</li>
        <li>Using try-catch blocks</li>
        <li>Unmounting phase method (componentWillUnmount)</li>
        <li>Handling asynchronous errors</li>
        <li>Best practices for error handling</li>
      </ul>
    ),
  },
  {
    title: "Introduction to Express.js",
    content: (
      <ul className="courseListitem">
        <li>What is Express.js?</li>
        <li>Installing Express.js</li>
        <li>Setting up a basic Express server</li>
        <li>Middleware in Express.js</li>
      </ul>
    ),
  },
  {
    title: "Routing in Express.js",
    content: (
      <ul className="courseListitem">
        <li>Defining routes</li>
        <li>Route parameters and query strings</li>
        <li>Handling different HTTP methods</li>
        <li>Using Router for modular routes</li>
      </ul>
    ),
  },
  {
    title: "Middleware in Express.js",
    content: (
      <ul className="courseListitem">
        <li>Understanding middleware functions</li>
        <li>Built-in middleware</li>
        <li>Third-party middleware (e.g., body-parser)</li>
        <li>Creating custom middleware</li>
      </ul>
    ),
  },
  {
    title: "Templating in Express.js",
    content: (
      <ul className="courseListitem">
        <li>Using template engines (e.g., EJS, Pug)</li>
        <li>Rendering dynamic HTML</li>
        <li>Passing data to views</li>
      </ul>
    ),
  },

  {
    title: "Handling Forms and File Uploads",
    content: (
      <ul className="courseListitem">
        <li>Parsing form data</li>
        <li>Handling file uploads with multer</li>
        <li>Validating form inputs</li>
        <li>Managing file storage</li>
      </ul>
    ),
  },
  {
    title: "Authentication and Authorization",
    content: (
      <ul className="courseListitem">
        <li>Understanding sessions and cookies</li>
        <li>Implementing authentication with Passport.js</li>
        <li>Role-based access control</li>
        <li>OAuth and third-party authentication</li>
      </ul>
    ),
  },
  {
    title: "Error Handling in Express.js",
    content: (
      <ul className="courseListitem">
        <li>Creating error-handling middleware</li>
        <li>Handling 404 errors</li>
        <li>Catching and logging errors</li>
        <li>Best practices for error responses</li>
      </ul>
    ),
  },
  {
    title: "RESTful API Development",
    content: (
      <ul className="courseListitem">
        <li>Principles of RESTful APIs</li>
        <li>Creating RESTful endpoints</li>
        <li>Versioning APIs</li>
      </ul>
    ),
  },
  {
    title: "Express.js Best Practices",
    content: (
      <ul className="courseListitem">
        <li>Structuring Express applications</li>
        <li>Writing clean and maintainable code</li>
        <li>Logging and monitoring</li>
        <li>Refactoring and code reviews</li>
      </ul>
    ),
  },
  {
    title: "Introduction to Postman",
    content: (
      <ul className="courseListitem">
        <li>What is Postman?</li>
        <li>Installing Postman</li>
        <li>Understanding the Postman interface</li>
        <li>Creating a Postman account and workspace</li>
      </ul>
    ),
  },
  {
    title: "Making API Requests with Postman",
    content: (
      <ul className="courseListitem">
        <li>Creating and sending GET requests</li>
        <li>Creating and sending POST requests</li>
        <li>Sending PUT and DELETE requests</li>
        <li>Understanding request methods and headers</li>
      </ul>
    ),
  },

  {
    title: "Working with Request Parameters",
    content: (
      <ul className="courseListitem">
        <li>Using query parameters</li>
        <li>Sending form-data and x-www-form-urlencoded data</li>
        <li>Setting request body formats (JSON, XML, text)</li>
        <li>Handling URL-encoded data</li>
      </ul>
    ),
  },
];
function NodeExpress() {
  const navigate = useNavigate();
  return (
    <div className="courseNameMain">
      <section
        className="courseNameBanner"
        style={{ position: "relative", zIndex: 1 }}
      >
        <div className="courseName">
          <h5>
            Home {">"} Courses {">"} Node & Express Course
          </h5>
          <h2>Best Node JS Training in Erode</h2>
        </div>
        <div className="courseDetails">
          <div className="course_Details_img">
            <svg
              href="http://www.w3.org/2000/svg"
              width="130"
              height="100"
              preserveAspectRatio="xMidYMid"
              viewBox="0 0 512 314"
              id="nodejs"
              style={{ marginTop: "40px" }}
            >
              <defs>
                <linearGradient
                  id="b"
                  x1="68.188%"
                  x2="27.823%"
                  y1="17.487%"
                  y2="89.755%"
                >
                  <stop offset="0%" stop-color="#41873F"></stop>
                  <stop offset="32.88%" stop-color="#418B3D"></stop>
                  <stop offset="63.52%" stop-color="#419637"></stop>
                  <stop offset="93.19%" stop-color="#3FA92D"></stop>
                  <stop offset="100%" stop-color="#3FAE2A"></stop>
                </linearGradient>
                <linearGradient
                  id="d"
                  x1="43.277%"
                  x2="159.245%"
                  y1="55.169%"
                  y2="-18.306%"
                >
                  <stop offset="13.76%" stop-color="#41873F"></stop>
                  <stop offset="40.32%" stop-color="#54A044"></stop>
                  <stop offset="71.36%" stop-color="#66B848"></stop>
                  <stop offset="90.81%" stop-color="#6CC04A"></stop>
                </linearGradient>
                <linearGradient
                  id="e"
                  x1="-4413.77%"
                  x2="5327.93%"
                  y1="13.43%"
                  y2="13.43%"
                >
                  <stop offset="9.192%" stop-color="#6CC04A"></stop>
                  <stop offset="28.64%" stop-color="#66B848"></stop>
                  <stop offset="59.68%" stop-color="#54A044"></stop>
                  <stop offset="86.24%" stop-color="#41873F"></stop>
                </linearGradient>
                <linearGradient
                  id="f"
                  x1="-4.389%"
                  x2="101.499%"
                  y1="49.997%"
                  y2="49.997%"
                >
                  <stop offset="9.192%" stop-color="#6CC04A"></stop>
                  <stop offset="28.64%" stop-color="#66B848"></stop>
                  <stop offset="59.68%" stop-color="#54A044"></stop>
                  <stop offset="86.24%" stop-color="#41873F"></stop>
                </linearGradient>
                <linearGradient
                  id="g"
                  x1="-9713.77%"
                  x2="27.93%"
                  y1="36.21%"
                  y2="36.21%"
                >
                  <stop offset="9.192%" stop-color="#6CC04A"></stop>
                  <stop offset="28.64%" stop-color="#66B848"></stop>
                  <stop offset="59.68%" stop-color="#54A044"></stop>
                  <stop offset="86.24%" stop-color="#41873F"></stop>
                </linearGradient>
                <linearGradient
                  id="h"
                  x1="-103.861%"
                  x2="100.797%"
                  y1="50.275%"
                  y2="50.275%"
                >
                  <stop offset="9.192%" stop-color="#6CC04A"></stop>
                  <stop offset="28.64%" stop-color="#66B848"></stop>
                  <stop offset="59.68%" stop-color="#54A044"></stop>
                  <stop offset="86.24%" stop-color="#41873F"></stop>
                </linearGradient>
                <linearGradient
                  id="i"
                  x1="130.613%"
                  x2="4.393%"
                  y1="-211.069%"
                  y2="201.605%"
                >
                  <stop offset="0%" stop-color="#41873F"></stop>
                  <stop offset="32.88%" stop-color="#418B3D"></stop>
                  <stop offset="63.52%" stop-color="#419637"></stop>
                  <stop offset="93.19%" stop-color="#3FA92D"></stop>
                  <stop offset="100%" stop-color="#3FAE2A"></stop>
                </linearGradient>
                <path
                  id="a"
                  d="M57.903 1.85a5.957 5.957 0 0 0-5.894 0L3.352 29.933c-1.85 1.04-2.89 3.005-2.89 5.085v56.286c0 2.08 1.156 4.045 2.89 5.085l48.657 28.085a5.957 5.957 0 0 0 5.894 0l48.658-28.085c1.849-1.04 2.89-3.005 2.89-5.085V35.019c0-2.08-1.157-4.045-2.89-5.085L57.903 1.85z"
                ></path>
              </defs>
              <g fill="none">
                <path
                  fill="#539E43"
                  d="M253.11 313.094c-1.733 0-3.351-.462-4.854-1.271l-15.371-9.13c-2.312-1.272-1.156-1.734-.462-1.965 3.12-1.04 3.698-1.272 6.934-3.12.347-.232.81-.116 1.156.115l11.789 7.05c.462.231 1.04.231 1.386 0l46.115-26.698c.462-.231.694-.694.694-1.271v-53.28c0-.579-.232-1.04-.694-1.272l-46.115-26.582c-.462-.232-1.04-.232-1.386 0l-46.115 26.582c-.462.231-.694.809-.694 1.271v53.28c0 .463.232 1.04.694 1.272l12.598 7.281c6.819 3.467 11.095-.578 11.095-4.623v-52.587c0-.693.578-1.387 1.387-1.387h5.894c.694 0 1.387.578 1.387 1.387v52.587c0 9.13-4.97 14.447-13.638 14.447-2.658 0-4.738 0-10.633-2.89l-12.135-6.934c-3.005-1.733-4.854-4.97-4.854-8.437v-53.28c0-3.467 1.849-6.704 4.854-8.437l46.114-26.698c2.89-1.618 6.82-1.618 9.709 0l46.114 26.698c3.005 1.733 4.855 4.97 4.855 8.437v53.28c0 3.467-1.85 6.704-4.855 8.437l-46.114 26.698c-1.503.694-3.236 1.04-4.854 1.04zm14.216-36.637c-20.225 0-24.386-9.246-24.386-17.105 0-.694.578-1.387 1.387-1.387h6.01c.693 0 1.271.462 1.271 1.156.925 6.125 3.583 9.13 15.834 9.13 9.708 0 13.87-2.196 13.87-7.397 0-3.005-1.157-5.2-16.297-6.703-12.598-1.272-20.457-4.045-20.457-14.1 0-9.362 7.86-14.91 21.035-14.91 14.793 0 22.075 5.086 23 16.18 0 .348-.116.694-.347 1.041-.232.231-.578.462-.925.462h-6.01c-.578 0-1.156-.462-1.271-1.04-1.387-6.356-4.97-8.437-14.447-8.437-10.633 0-11.905 3.699-11.905 6.472 0 3.352 1.503 4.392 15.834 6.241 14.216 1.85 20.92 4.508 20.92 14.447-.116 10.171-8.437 15.95-23.116 15.95z"
                ></path>
                <path
                  fill="#333"
                  d="M110.028 104.712c0-2.08-1.156-4.046-3.005-5.086l-49.004-28.2c-.81-.463-1.734-.694-2.658-.81h-.463c-.924 0-1.849.347-2.658.81l-49.004 28.2c-1.85 1.04-3.005 3.005-3.005 5.086l.116 75.817c0 1.04.578 2.08 1.502 2.543.925.578 2.08.578 2.89 0l29.125-16.643c1.849-1.04 3.005-3.005 3.005-5.085v-35.482c0-2.08 1.155-4.045 3.005-5.085l12.366-7.166c.925-.578 1.965-.81 3.005-.81 1.04 0 2.08.232 2.89.81l12.366 7.166c1.85 1.04 3.005 3.004 3.005 5.085v35.482c0 2.08 1.156 4.045 3.005 5.085l29.125 16.643c.925.578 2.08.578 3.005 0 .925-.463 1.503-1.503 1.503-2.543l-.116-75.817zM345.571.347c-.924-.463-2.08-.463-2.89 0-.924.578-1.502 1.502-1.502 2.542v75.125c0 .693-.346 1.386-1.04 1.849-.693.346-1.387.346-2.08 0l-12.251-7.05a5.957 5.957 0 0 0-5.895 0l-49.004 28.316c-1.849 1.04-3.005 3.005-3.005 5.085v56.516c0 2.08 1.156 4.046 3.005 5.086l49.004 28.316a5.957 5.957 0 0 0 5.895 0l49.004-28.316c1.849-1.04 3.005-3.005 3.005-5.086V21.844c0-2.196-1.156-4.16-3.005-5.201L345.572.347zm-4.507 143.776c0 .578-.231 1.04-.694 1.271l-16.758 9.708a1.714 1.714 0 0 1-1.503 0l-16.758-9.708c-.463-.231-.694-.809-.694-1.271v-19.417c0-.578.231-1.04.694-1.271l16.758-9.709a1.714 1.714 0 0 1 1.503 0l16.758 9.709c.463.23.694.809.694 1.271v19.417zM508.648 124.244c1.85-1.04 2.89-3.005 2.89-5.086v-13.753c0-2.08-1.156-4.045-2.89-5.085l-48.657-28.2a5.957 5.957 0 0 0-5.894 0l-49.004 28.315c-1.85 1.04-3.005 3.005-3.005 5.086v56.516c0 2.08 1.155 4.045 3.005 5.085l48.657 27.738c1.85 1.04 4.045 1.04 5.779 0L489 178.45c.925-.463 1.503-1.503 1.503-2.543 0-1.04-.578-2.08-1.503-2.543l-49.235-28.316c-.924-.577-1.502-1.502-1.502-2.542v-17.683c0-1.04.578-2.08 1.502-2.543l15.372-8.784a2.821 2.821 0 0 1 3.005 0l15.371 8.784c.925.578 1.503 1.502 1.503 2.543v13.869c0 1.04.578 2.08 1.502 2.542.925.578 2.08.578 3.005 0l29.125-16.99z"
                ></path>
                <path
                  fill="#539E43"
                  d="M456.293 121.586a1.05 1.05 0 0 1 1.155 0l9.362 5.432c.347.23.578.577.578 1.04v10.864c0 .462-.231.809-.578 1.04l-9.362 5.432a1.05 1.05 0 0 1-1.155 0l-9.362-5.432c-.347-.231-.578-.578-.578-1.04v-10.864c0-.463.231-.81.578-1.04l9.362-5.432z"
                ></path>
                <g transform="translate(134.068 70.501)">
                  <mask id="c" fill="#fff">
                    <use href="#a"></use>
                  </mask>
                  <use fill="url(#b)" href="#a"></use>
                  <g mask="url(#c)">
                    <path d="M51.893 1.85L3.121 29.933C1.27 30.974 0 32.94 0 35.02v56.286c0 1.387.578 2.658 1.502 3.698L56.285 1.156c-1.387-.231-3.005-.116-4.392.693zM56.632 125.053c.462-.116.925-.347 1.387-.578l48.773-28.085c1.85-1.04 3.005-3.005 3.005-5.085V35.019c0-1.502-.694-3.005-1.734-4.045l-51.43 94.079z"></path>
                    <path
                      fill="url(#d)"
                      d="M106.676 29.934L57.788 1.85a8.025 8.025 0 0 0-1.503-.578L1.502 95.12a6.082 6.082 0 0 0 1.619 1.387l48.888 28.085c1.387.809 3.005 1.04 4.507.577l51.432-94.078c-.347-.462-.81-.81-1.272-1.156z"
                    ></path>
                  </g>
                  <g mask="url(#c)">
                    <path d="M109.797 91.305V35.019c0-2.08-1.271-4.045-3.12-5.085L57.786 1.85a5.106 5.106 0 0 0-1.848-.693l53.511 91.42c.231-.347.347-.809.347-1.271zM3.12 29.934C1.272 30.974 0 32.94 0 35.02v56.286c0 2.08 1.387 4.045 3.12 5.085l48.889 28.085c1.156.693 2.427.925 3.814.693L3.467 29.818l-.346.116z"></path>
                    <path
                      fill="url(#e)"
                      fillRule="evenodd"
                      d="M50.391.809l-.693.347h.924l-.231-.347z"
                      transform="translate(0 -9.246)"
                    ></path>
                    <path
                      fill="url(#f)"
                      fillRule="evenodd"
                      d="M106.792 105.636c1.387-.809 2.427-2.196 2.89-3.698L56.053 10.402c-1.387-.231-2.89-.116-4.16.693L3.351 39.065l52.355 95.465a8.057 8.057 0 0 0 2.196-.693l48.889-28.2z"
                      transform="translate(0 -9.246)"
                    ></path>
                    <path
                      fill="url(#g)"
                      fillRule="evenodd"
                      d="M111.3 104.712l-.347-.578v.809l.346-.231z"
                      transform="translate(0 -9.246)"
                    ></path>
                    <path
                      fill="url(#h)"
                      fillRule="evenodd"
                      d="M106.792 105.636l-48.773 28.085a6.973 6.973 0 0 1-2.196.693l.925 1.734 54.089-31.32v-.694l-1.387-2.312c-.231 1.618-1.271 3.005-2.658 3.814z"
                      transform="translate(0 -9.246)"
                    ></path>
                    <path
                      fill="url(#i)"
                      fillRule="evenodd"
                      d="M106.792 105.636l-48.773 28.085a6.973 6.973 0 0 1-2.196.693l.925 1.734 54.089-31.32v-.694l-1.387-2.312c-.231 1.618-1.271 3.005-2.658 3.814z"
                      transform="translate(0 -9.246)"
                    ></path>
                  </g>
                </g>
              </g>
            </svg>
            <h2>Node</h2>
          </div>
          <div className="courseModule">
            <div className="Courseduration">
              <div>
                <svg
                  width="20"
                  height="20"
                  fill="#212216"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M13.125 3.82V2.25h-2.25v1.57a8.953 8.953 0 0 0-3.958 1.506L5.625 4.031 4.031 5.625l1.2 1.2A8.961 8.961 0 0 0 3 12.75c0 4.963 4.037 9 9 9s9-4.037 9-9c0-4.582-3.442-8.375-7.875-8.93ZM12 15a2.25 2.25 0 0 1-.75-4.371V6.375h1.5v4.254A2.25 2.25 0 0 1 12 15Z"></path>
                </svg>
                <span
                  style={{ position: "relative", top: "-5px", left: "5px" }}
                >
                  Duration
                </span>
              </div>
              <div style={{ position: "relative", top: "-5px", left: "5px" }}>
                40 Hours
              </div>
            </div>
          </div>
          <div className="courseHR">
            <hr className="hr"></hr>
          </div>
          <div className="courseModule">
            <div className="Courseduration">
              <div>
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                </svg>
                <span
                  style={{ position: "relative", top: "-5px", left: "5px" }}
                >
                  Modules
                </span>
              </div>
              <div style={{ position: "relative", top: "-5px", left: "5px" }}>
                20+5
              </div>
            </div>
          </div>
          <div className="courseHR">
            <hr className="hr"></hr>
          </div>
          <div className="courseModule">
            <div className="Courseduration">
              <div>
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 3h7v7H3z"></path>
                  <path d="M14 3h7v7h-7z"></path>
                  <path d="M14 14h7v7h-7z"></path>
                  <path d="M3 14h7v7H3z"></path>
                </svg>
                <span
                  style={{ position: "relative", top: "-5px", left: "5px" }}
                >
                  Skill Level
                </span>
              </div>
              <div style={{ position: "relative", top: "-5px", left: "5px" }}>
                Expert
              </div>
            </div>
          </div>
          <div className="courseHR">
            <hr className="hr"></hr>
          </div>
          <div className="courseModule">
            <div className="Courseduration">
              <div>
                <svg
                  version="1.0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 512.000000 512.000000"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <metadata>
                    Created by potrace 1.16, written by Peter Selinger 2001-2019
                  </metadata>
                  <g
                    transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                    fill="#000000"
                    stroke="none"
                  >
                    <path d="M259 4766 c-99 -26 -184 -98 -231 -195 l-23 -46 -3 -1587 c-2 -1586 -2 -1587 19 -1642 27 -74 104 -157 177 -193 l57 -28 1333 -3 1333 -2 -6 -33 c-49 -291 -75 -463 -75 -494 0 -51 41 -135 77 -161 50 -35 113 -48 173 -34 30 7 177 78 346 167 161 85 302 155 314 155 11 0 148 -68 305 -150 304 -161 347 -180 404 -180 58 0 137 45 166 94 41 69 40 108 -4 379 -23 136 -41 250 -41 252 0 2 64 5 143 7 132 3 146 5 199 31 73 36 150 119 177 193 21 55 21 56 19 1642 l-3 1587 -23 47 c-37 74 -96 134 -170 170 l-67 33 -2275 2 c-1782 1 -2285 -1 -2321 -11z m4521 -309 l25 -13 3 -1516 c2 -1380 1 -1518 -14 -1533 -13 -13 -37 -15 -142 -13 l-126 3 -27 165 -26 165 33 46 c56 77 113 203 141 306 34 133 36 316 4 447 -75 310 -312 568 -611 664 -114 37 -182 45 -332 40 -120 -5 -157 -10 -228 -33 -266 -86 -451 -248 -570 -498 -136 -284 -111 -629 63 -894 l53 -81 -23 -143 c-13 -79 -25 -154 -28 -166 l-5 -23 -1314 0 c-1183 0 -1316 2 -1330 16 -15 14 -16 163 -14 1532 l3 1516 25 13 c20 10 470 13 2220 13 1750 0 2200 -3 2220 -13z m-850 -1575 c264 -93 429 -317 430 -583 0 -230 -134 -446 -340 -546 -106 -51 -162 -64 -271 -64 -169 0 -305 57 -430 181 -130 129 -185 273 -177 460 6 126 39 221 112 324 80 112 221 207 360 243 73 18 245 10 316 -15z m-402 -1484 c62 -17 106 -21 222 -21 159 0 234 15 370 72 70 29 70 29 75 8 14 -62 115 -701 111 -705 -3 -2 -91 41 -197 97 -214 113 -264 131 -356 131 -100 0 -144 -16 -356 -128 -109 -57 -201 -102 -203 -99 -5 4 101 681 111 714 3 8 26 2 75 -18 38 -17 105 -39 148 -51z" />
                    <path d="M702 3880 c-101 -62 -97 -216 8 -271 33 -18 101 -19 1795 -19 1694 0 1762 1 1795 19 19 10 46 33 58 52 33 47 28 145 -8 185 -55 58 73 54 -1847 54 -1747 0 -1768 0 -1801 -20z" />
                    <path d="M710 3062 c-105 -56 -109 -210 -8 -272 32 -19 52 -20 813 -20 l780 0 37 25 c67 45 87 152 40 214 -10 14 -31 34 -46 45 -27 21 -37 21 -804 24 -742 2 -779 1 -812 -16z" />
                  </g>
                </svg>
                <span
                  style={{ position: "relative", top: "-5px", left: "5px" }}
                >
                  Certificate
                </span>
              </div>
              <div style={{ position: "relative", top: "-5px", left: "5px" }}>
                Yes
              </div>
            </div>
          </div>
          <div className="courseHR">
            <hr className="hr"></hr>
          </div>
          <div className="courseModule">
            <div className="Courseduration">
              <div>
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
                  <path d="M3 9h18"></path>
                  <path d="M9 21V9"></path>
                </svg>
                <span
                  style={{ position: "relative", top: "-5px", left: "5px" }}
                >
                  Live Project
                </span>
              </div>
              <div style={{ position: "relative", top: "-5px", left: "5px" }}>
                Yes
              </div>
            </div>
          </div>
          <div className="courseHR">
            <hr className="hr"></hr>
          </div>
          <div className="courseModule">
            <div className="Courseduration">
              <div>
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.315 15.444a9 9 0 1 0-16.63-6.888 9 9 0 0 0 16.63 6.888Z"></path>
                  <path d="M5.121 17.804A13.936 13.936 0 0 1 12.001 16c2.5 0 4.846.655 6.878 1.804"></path>
                  <path d="M14.121 12.121A3 3 0 1 0 9.88 7.88a3 3 0 0 0 4.242 4.242Z"></path>
                </svg>
                <span
                  style={{ position: "relative", top: "-5px", left: "5px" }}
                >
                  Mode
                </span>
              </div>
              <div style={{ position: "relative", top: "-5px", left: "5px" }}>
                Offline | Online
              </div>
            </div>
          </div>
          <div className="courseHR">
            <hr className="hr"></hr>
          </div>
          <div className="courseModule">
            <div className="Courseduration">
              <div>
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.315 15.444a9 9 0 1 0-16.63-6.888 9 9 0 0 0 16.63 6.888Z"></path>
                  <path d="M5.121 17.804A13.936 13.936 0 0 1 12.001 16c2.5 0 4.846.655 6.878 1.804"></path>
                  <path d="M14.121 12.121A3 3 0 1 0 9.88 7.88a3 3 0 0 0 4.242 4.242Z"></path>
                </svg>
                <span
                  style={{ position: "relative", top: "-5px", left: "5px" }}
                >
                  Batch
                </span>
              </div>
              <div style={{ position: "relative", top: "-5px", left: "5px" }}>
                Weekdays | Weekend
              </div>
            </div>
          </div>
          <div className="CourseJoin">
            <button onClick={() => navigate("/enquire")}>
              <span>Join Now</span>
            </button>
          </div>
          <div className="CourseJoinWhatsapp">
            <button>
              <span>
                <Link to="https://api.whatsapp.com/send?phone=918610598460">
                  Whatsapp Now
                </Link>
              </span>
            </button>
          </div>
        </div>
      </section>

      <section className="CourseSyllabus">
        <h2>Node js Course Overview</h2>
        <div>
          <p>
            This Node.js and Express Course provides comprehensive training on
            building scalable and efficient server-side applications. You'll
            learn the fundamentals of Node.js, including asynchronous
            programming, event-driven architecture, and file system operations.
            The course covers Express, a robust web application framework for
            Node.js, teaching you how to create RESTful APIs, handle routing,
            middleware, and database integration. Through hands-on projects and
            real-world examples, you'll gain practical experience in developing
            full-stack applications. This course is ideal for JavaScript
            developers looking to enhance their backend development skills and
            build modern web applications.
          </p>
        </div>
        <br></br>
        <h2>Who Can Join</h2>
        <div>
          <ul className="courseul">
            <li>
              BE / BTech / MTech / BCA / MCA graduates aspiring to build a
              career as a Backend or Fullstack Developer.
            </li>
            <li>
              A candidate who would like to restart their career after a gap.
            </li>
            <li>
              Complete beginners interested in server-side development and
              Node.js.
            </li>
            <li>
              Aspiring web developers seeking expertise in Node.js and Express
              for building scalable applications.
            </li>
            <li>
              Professionals aiming to advance their knowledge of modern backend
              technologies and RESTful API development.
            </li>
          </ul>
        </div>
        <br></br>
      </section>
      <section className="CourseAccordionContainer">
        <h2>What You Will Learn</h2>
        <br></br>
        <div className="courseAccordion">
          <Accordion items={accordionItems}></Accordion>

          <div className="realtedCourseBanner">
            <div className="relatedCoursediv">
              <h1>Related Course</h1>
              <div className="relatedcourseList">
                <span>
                  <Link to="/courses/dataanalytics">Data Analytics</Link>
                </span>
                <span>
                  <Link to="/courses/django">Django</Link>
                </span>
                <span>
                  <Link to="/courses/machinelearning">Machine Learning</Link>
                </span>
                <span>
                  <Link to="/courses/datascience">Data Science</Link>
                </span>
                <span>
                  <Link to="/courses/mysql">MySQL</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="Joinnurture">
        <h2>What makes Nurture different</h2>
        <section className="whyus">
          <div className="whybox1">
            <h3>EXPERT TRAINERS</h3>
            <div>
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  width="75"
                  height="100"
                >
                  <path d="M9 0a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3zm6.5 1a.5.5 0 0 0-.5.5v4.91L11.86 7H4.5C2.57 7 1 8.586 1 10.516V17.5a1.5 1.5 0 0 0 3 0v-6.984c0-.276.224-.516.5-.516H5v20.5a1.5 1.5 0 0 0 3 0V23h2v7.5a1.5 1.5 0 0 0 3 0V9.84l2-.375V13.5a.5.5 0 0 0 .5.5h14a.5.5 0 0 0 .5-.5v-12a.5.5 0 0 0-.5-.5h-14zm.5 1h13v11H16V9.277l3.275-.615a1.502 1.502 0 0 0 1.2-1.752 1.492 1.492 0 0 0-1.204-1.193l-.554-.98a.5.5 0 0 0-.871.494l.332.583L16 6.223V2zm1.5 1a.5.5 0 1 0 0 1h9a.5.5 0 1 0 0-1h-9z" />
                </svg>
              </p>
            </div>
          </div>
          <div className="whybox2">
            <h3>Comprehensive Curriculum</h3>
            <div>
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  width="80"
                  height="100"
                >
                  <g data-name="Layer 2">
                    <g data-name="Layer 1">
                      <g data-name="Monitor Cloude Business Grow">
                        <path
                          fill="#000000"
                          d="M512,26V359.46H0V26A26,26,0,0,1,26,0H486A26,26,0,0,1,512,26Z"
                        />
                        <path
                          fill="#FFFFFF"
                          d="M512,359.46v48.17a26,26,0,0,1-26,26H26a26,26,0,0,1-26-26V359.46Z"
                        />
                        <rect
                          width="453.21"
                          height="305.64"
                          x="29.53"
                          y="27.21"
                          fill="#FFFFFF"
                          rx="4.51"
                        />
                        <polygon
                          fill="#000000"
                          points="335.17 481.23 176.84 481.23 197.53 432.84 314.74 432.84 335.17 481.23"
                        />
                        <rect
                          width="244.08"
                          height="30.77"
                          x="134.63"
                          y="481.23"
                          fill="#FFFFFF"
                          rx="6"
                        />
                        <circle
                          cx="256.66"
                          cy="396.69"
                          r="15.99"
                          fill="#000000"
                        />
                        <rect
                          width="319.84"
                          height="8.41"
                          x="143.96"
                          y="303.42"
                          fill="#000000"
                          rx="1.78"
                        />
                        <rect
                          width="31.33"
                          height="149.97"
                          x="390.89"
                          y="134.34"
                          fill="#000000"
                          rx="6.14"
                        />
                        <rect
                          width="31.33"
                          height="133.23"
                          x="339.83"
                          y="151.08"
                          fill="#FFFFFF"
                          rx="6.14"
                        />
                        <rect
                          width="31.33"
                          height="167.3"
                          x="288.77"
                          y="117.01"
                          fill="#000000"
                          rx="6.14"
                        />
                        <rect
                          width="31.33"
                          height="119.6"
                          x="237.71"
                          y="164.71"
                          fill="#FFFFFF"
                          rx="6.14"
                        />
                        <rect
                          width="31.33"
                          height="83.32"
                          x="186.65"
                          y="200.99"
                          fill="#000000"
                          rx="6.14"
                        />
                        <path
                          fill="#FFFFFF"
                          d="M85.5,160.5H196s35.63-12.44,31.09-46.39c0,0-5.26-35.64-45.44-33.25,0,0-12.44-32.28-47.35-29.65,0,0-35.16,2.15-41.61,36.35,0,0-38.51,2.87-38,36.59C54.65,124.15,54.65,151.65,85.5,160.5Z"
                        />
                        <path
                          fill="#000000"
                          d="M212.84,150.37A40.07,40.07,0,0,0,218,123.86S212.46,86.5,170.33,89c0,0-13-33.84-49.63-31.08a50.26,50.26,0,0,0-10.83,2.24,52.65,52.65,0,0,1,24.41-8.94c34.92-2.64,47.36,29.65,47.36,29.65,40.18-2.4,45.43,33.23,45.43,33.23C229.39,131.35,221.34,143,212.84,150.37Z"
                        />
                      </g>
                    </g>
                  </g>
                </svg>
              </p>
            </div>
          </div>
          <div className="whybox3">
            <h3>Hands-on Live Projects</h3>
            <div>
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  enableBackground="new 0 0 64 64"
                  viewBox="0 0 64 64"
                  width="75"
                  height="100"
                >
                  <path
                    d="M62,0.004H44c-1.103,0-2,0.897-2,2v12c0,1.103,0.897,2,2,2h5.719l-0.499,1.994H49c-0.553,0-1,0.447-1,1s0.447,1,1,1h8
		c0.553,0,1-0.447,1-1s-0.447-1-1-1h-0.22l-0.499-1.994H62c1.103,0,2-0.897,2-2v-12C64,0.901,63.103,0.004,62,0.004z M54.72,17.998
		H51.28l0.499-1.994h2.441L54.72,17.998z M61.997,14.004H44v-12h18L61.997,14.004z"
                  />
                  <path d="M48 7.004h6c.553 0 1-.447 1-1s-.447-1-1-1h-6c-.553 0-1 .447-1 1S47.447 7.004 48 7.004zM57 7.004h1c.553 0 1-.447 1-1s-.447-1-1-1h-1c-.553 0-1 .447-1 1S56.447 7.004 57 7.004zM48 11.004h4c.553 0 1-.447 1-1s-.447-1-1-1h-4c-.553 0-1 .447-1 1S47.447 11.004 48 11.004zM58 9.004h-3c-.553 0-1 .447-1 1s.447 1 1 1h3c.553 0 1-.447 1-1S58.553 9.004 58 9.004zM62 44.002H44c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h5.719l-.499 1.994H49c-.553 0-1 .447-1 1s.447 1 1 1h8c.553 0 1-.447 1-1s-.447-1-1-1h-.22l-.499-1.994H62c1.103 0 2-.897 2-2v-12C64 44.899 63.103 44.002 62 44.002zM54.72 61.996H51.28l.499-1.994h2.441L54.72 61.996zM61.996 58.002H44v-12h18L61.996 58.002z" />
                  <path d="M48 51.002h1c.553 0 1-.447 1-1s-.447-1-1-1h-1c-.553 0-1 .447-1 1S47.447 51.002 48 51.002zM52 51.002h6c.553 0 1-.447 1-1s-.447-1-1-1h-6c-.553 0-1 .447-1 1S51.447 51.002 52 51.002zM48 55.002h3c.553 0 1-.447 1-1s-.447-1-1-1h-3c-.553 0-1 .447-1 1S47.447 55.002 48 55.002zM58 53.002h-4c-.553 0-1 .447-1 1s.447 1 1 1h4c.553 0 1-.447 1-1S58.553 53.002 58 53.002zM2 16.004h5.719L7.22 17.998H7c-.553 0-1 .447-1 1s.447 1 1 1h8c.553 0 1-.447 1-1s-.447-1-1-1h-.22l-.499-1.994H20c1.103 0 2-.897 2-2v-12c0-1.103-.897-2-2-2H2c-1.103 0-2 .897-2 2v12C0 15.106.897 16.004 2 16.004zM12.72 17.998H9.28l.499-1.994h2.441L12.72 17.998zM2 2.004h18l-.003 12H2V2.004z" />
                  <path d="M6 7.004h4c.553 0 1-.447 1-1s-.447-1-1-1H6c-.553 0-1 .447-1 1S5.447 7.004 6 7.004zM16 5.004h-3c-.553 0-1 .447-1 1s.447 1 1 1h3c.553 0 1-.447 1-1S16.553 5.004 16 5.004zM12 9.004H6c-.553 0-1 .447-1 1s.447 1 1 1h6c.553 0 1-.447 1-1S12.553 9.004 12 9.004zM16 9.004h-1c-.553 0-1 .447-1 1s.447 1 1 1h1c.553 0 1-.447 1-1S16.553 9.004 16 9.004zM2 60.002h5.719L7.22 61.996H7c-.553 0-1 .447-1 1s.447 1 1 1h8c.553 0 1-.447 1-1s-.447-1-1-1h-.22l-.499-1.994H20c1.103 0 2-.897 2-2v-12c0-1.103-.897-2-2-2H2c-1.103 0-2 .897-2 2v12C0 59.104.897 60.002 2 60.002zM12.72 61.996H9.28l.499-1.994h2.441L12.72 61.996zM2 46.002h18l-.004 12H2V46.002z" />
                  <path d="M6 51.002h2c.553 0 1-.447 1-1s-.447-1-1-1H6c-.553 0-1 .447-1 1S5.447 51.002 6 51.002zM16 49.002h-5c-.553 0-1 .447-1 1s.447 1 1 1h5c.553 0 1-.447 1-1S16.553 49.002 16 49.002zM11 53.002H6c-.553 0-1 .447-1 1s.447 1 1 1h5c.553 0 1-.447 1-1S11.553 53.002 11 53.002zM16 53.002h-2c-.553 0-1 .447-1 1s.447 1 1 1h2c.553 0 1-.447 1-1S16.553 53.002 16 53.002zM39 52.998c.553 0 1-.447 1-1s-.447-1-1-1H25c-.553 0-1 .447-1 1s.447 1 1 1H39zM39 8.998c.553 0 1-.447 1-1s-.447-1-1-1H25c-.553 0-1 .447-1 1s.447 1 1 1H39zM54 40.998V23.004c0-.553-.447-1-1-1s-1 .447-1 1v17.994c0 .553.447 1 1 1S54 41.551 54 40.998zM10 23.004v17.994c0 .553.447 1 1 1s1-.447 1-1V23.004c0-.553-.447-1-1-1S10 22.451 10 23.004zM16 26.998c0 .431.275.813.684.948L23 30.052v6.946c0 1.654 1.346 3 3 3h11.995c.002 0 .003.001.005.001 1.654 0 3.001-1.347 3.001-3.001v-6.946L46 28.385v3.611c0 .553.447 1 1 1s1-.447 1-1v-4.998c0 0 0 0 0-.001l0 0c0-.001-.001-.002-.001-.004 0-.122-.028-.238-.07-.349-.014-.038-.035-.07-.054-.105-.036-.069-.078-.133-.129-.192-.029-.033-.059-.063-.093-.093-.056-.05-.118-.089-.186-.125-.039-.021-.074-.045-.116-.061-.013-.005-.022-.015-.035-.019l-15-5c-.205-.068-.428-.068-.633 0l-15 5C16.275 26.186 16 26.567 16 26.998zM39.001 36.998c0 .551-.448.999-.999 1 0 0-.001 0-.002 0H26c-.552 0-1-.448-1-1v-6.279l6.684 2.228c.103.034.21.052.316.052s.214-.018.316-.052l6.685-2.229V36.998zM32 23.052l8.835 2.945H32c-.553 0-1 .447-1 1s.447 1 1 1h8.841L32 30.944l-11.838-3.946L32 23.052z" />
                </svg>
              </p>
            </div>
          </div>
          <div className="whybox4">
            <h3>Training Certification</h3>
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
                width="80"
                height="100"
              >
                <path d="M58.49,31.616V9.04a1,1,0,0,0-1-1H3a1,1,0,0,0-1,1V43.167a1,1,0,0,0,1,1H45.967a8.987,8.987,0,0,0,1.694,1.675V54.96a1,1,0,0,0,1.378.926l4.236-1.73,3.746,1.713a1,1,0,0,0,1.416-.909V45.84a8.92,8.92,0,0,0,.053-14.224ZM4,42.167V10.04H56.49V30.445a8.913,8.913,0,0,0-3.443-.69c-.264,0-.524.017-.783.04V17.344a1,1,0,0,0-1-1,2.162,2.162,0,0,1-2.16-2.16,1,1,0,0,0-1-1H12.386a1,1,0,0,0-1,1,2.163,2.163,0,0,1-2.161,2.16,1,1,0,0,0-1,1V34.863a1,1,0,0,0,1,1,2.164,2.164,0,0,1,2.161,2.161,1,1,0,0,0,1,1H44.11a8.892,8.892,0,0,0,.681,3.143Zm40.258-5.143H13.264a4.177,4.177,0,0,0-3.039-3.04V18.223a4.176,4.176,0,0,0,3.039-3.039H47.226a4.175,4.175,0,0,0,3.038,3.039V30.2A8.981,8.981,0,0,0,44.258,37.024ZM56.437,53.4l-2.723-1.245a.989.989,0,0,0-.794-.016l-3.259,1.331V46.991a8.895,8.895,0,0,0,6.776,0Zm-3.39-7.741A6.953,6.953,0,1,1,60,38.708,6.961,6.961,0,0,1,53.047,45.661Z" />
                <path d="M44.008 19.943H16.481a1 1 0 000 2H44.008a1 1 0 000-2zM42.3 25.1h-24.1a1 1 0 000 2H42.3a1 1 0 000-2zM35.387 30.265H25.1a1 1 0 000 2H35.387a1 1 0 000-2z" />
              </svg>
            </p>
          </div>
          <div className="whybox5">
            <h3>Affordable Fees</h3>
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                enableBackground="new 0 0 492 492"
                viewBox="0 0 492 492"
                width="80"
                height="100"
              >
                <path
                  d="M420.71,230.89H103.73c-7.72,0-14-6.28-14-14v-159c0-7.72,6.28-14,14-14h316.98c7.72,0,14,6.28,14,14v159
			C434.71,224.61,428.43,230.89,420.71,230.89z M236.43,220.89h184.27c2.21,0,4-1.79,4-4v-159c0-2.21-1.79-4-4-4H103.73
			c-2.21,0-4,1.79-4,4v159c0,2.21,1.79,4,4,4H236.43z"
                />
                <path
                  d="M379.69,194.89h-70.42c-2.76,0-5-2.24-5-5s2.24-5,5-5h66.09c1.77-6.47,6.88-11.58,13.35-13.35v-68.31
			c-6.47-1.77-11.58-6.88-13.35-13.35h-66.09c-2.76,0-5-2.24-5-5s2.24-5,5-5h70.42c2.76,0,5,2.24,5,5c0,4.97,4.04,9.02,9.02,9.02
			c2.76,0,5,2.24,5,5v76.97c0,2.76-2.24,5-5,5c-4.97,0-9.02,4.04-9.02,9.02C384.69,192.65,382.45,194.89,379.69,194.89z
			 M215.17,194.89h-70.43c-2.76,0-5-2.24-5-5c0-4.97-4.04-9.02-9.02-9.02c-2.76,0-5-2.24-5-5V98.9c0-2.76,2.24-5,5-5
			c4.97,0,9.02-4.04,9.02-9.02c0-2.76,2.24-5,5-5h70.43c2.76,0,5,2.24,5,5s-2.24,5-5,5h-66.09c-1.77,6.47-6.88,11.58-13.35,13.35
			v68.31c6.47,1.77,11.58,6.88,13.35,13.35h66.09c2.76,0,5,2.24,5,5S217.93,194.89,215.17,194.89z"
                />
                <path d="M262.22 212.89c-41.63 0-75.5-33.87-75.5-75.5s33.87-75.5 75.5-75.5 75.5 33.87 75.5 75.5S303.85 212.89 262.22 212.89zM262.22 71.88c-36.12 0-65.5 29.38-65.5 65.5s29.38 65.5 65.5 65.5c36.12 0 65.5-29.38 65.5-65.5S298.34 71.88 262.22 71.88zM227.45 449.54c-27.56 0-66.58-9.96-111.9-50.17l-40.56 23.42c-2.39 1.38-5.45.56-6.83-1.83l-42.23-73.14c-.66-1.15-.84-2.51-.5-3.79.34-1.28 1.18-2.37 2.33-3.04l101.6-58.66c.11-.06.23-.12.34-.18 37.24-17.83 50.43-.18 67.13 22.16 13.3 17.8 39.98 26.77 54.71 30.53 18.62 4.76 28.13 13.01 32.98 20.44l66.56-38.43c7.64-4.41 16.57-5.58 25.15-3.28 8.57 2.3 15.73 7.77 20.14 15.41 9.14 15.83 3.7 36.15-12.13 45.29l-113.79 65.7v0C268.89 440.87 253.15 449.54 227.45 449.54zM116.19 388.22c1.22 0 2.42.44 3.36 1.3 85.15 77.39 145.17 42.22 145.77 41.85.04-.02.08-.05.12-.07l113.79-65.7c11.06-6.38 14.86-20.57 8.47-31.63-3.08-5.33-8.07-9.15-14.07-10.75-6-1.61-12.23-.8-17.56 2.28l-67.43 38.93c.07.27.14.53.2.78 2.59 10.94-1.34 22.55-10.26 30.3-10.28 8.92-24.88 10.96-39.09 5.46l-53.8-16.57c-2.64-.81-4.12-3.61-3.31-6.25.81-2.64 3.61-4.12 6.25-3.31l53.97 16.63c.12.04.24.08.35.12 10.74 4.2 21.6 2.85 29.06-3.63 6.1-5.3 8.82-13.13 7.09-20.44-.25-1.07-.59-2.11-1.01-3.13-.09-.18-.17-.36-.23-.54-3.89-8.75-13.94-15.53-28.81-19.33-16-4.09-45.1-13.97-60.24-34.23-16.59-22.2-24.94-33.36-54.63-19.21l-97.1 56.06 37.23 64.48 39.37-22.73C114.47 388.44 115.33 388.22 116.19 388.22z" />
                <path d="M116.19 398.23c-1.73 0-3.41-.9-4.33-2.5l-42.23-73.14c-1.38-2.39-.56-5.45 1.83-6.83s5.45-.56 6.83 1.83l42.23 73.14c1.38 2.39.56 5.45-1.83 6.83C117.9 398.01 117.04 398.23 116.19 398.23zM94.09 410.99c-1.73 0-3.41-.9-4.33-2.5l-42.23-73.14c-1.38-2.39-.56-5.45 1.83-6.83 2.39-1.38 5.45-.56 6.83 1.83l42.23 73.14c1.38 2.39.56 5.45-1.83 6.83C95.8 410.77 94.94 410.99 94.09 410.99zM395.2 322.64h-24.17c-1.34 0-2.56-.53-3.46-1.39-.9.86-2.12 1.39-3.46 1.39H202.85c-2.76 0-5-2.24-5-5s2.24-5 5-5h161.27c1.34 0 2.56.53 3.46 1.39.9-.86 2.12-1.39 3.46-1.39h24.17c32.54 0 59.3-25.17 61.86-57.06H67.38c1.63 19.69 12.81 37.83 30 48.19 2.36 1.43 3.13 4.5 1.7 6.86-1.43 2.36-4.5 3.13-6.86 1.7-21.61-13.03-35.04-36.7-35.04-61.75 0-2.76 2.24-5 5-5h400.08c2.76 0 5 2.24 5 5C467.26 290.32 434.93 322.64 395.2 322.64z" />
              </svg>
            </p>
          </div>
          <div className="whybox6">
            <h3>Placement Support</h3>
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="100"
                enableBackground="new 0 0 66 66"
                viewBox="0 0 66 66"
              >
                <rect width="11.81" height="10.903" x="53.19" y="48.31" />
                <rect width="19.355" height="18.137" x="24.402" y="41.078" />
                <rect width="11.81" height="10.903" x="3.156" y="48.201" />
                <rect width="28.415" height="4.908" x="19.871" y="34.106" />
                <path d="M15.1158781 30.7512531v11.4211292h5.9050798v9.805275c0 1.1017876-.8931751 1.9949608-1.9949627 1.9949608h-.0000038c-1.1017876 0-1.9949627-.8931732-1.9949627-1.9949608v-5.8352547H4.1435685V28.9389172c0-3.5825195 2.9042063-6.4867268 6.4867263-6.4867268h.0000105c2.6991425 0 5.1162214 1.6714115 6.0690775 4.1967697l.0423965.1123638h8.4287434c1.1017876 0 1.9949627.8931751 1.9949627 1.9949627v.0000038c0 1.1017876-.8931751 1.9949627-1.9949627 1.9949627H15.1158781zM53.032032 30.8603535v11.4211292h-5.9050827v9.8052711c0 1.1017876.893177 1.9949646 1.9949646 1.9949646h.0000038c1.1017876 0 1.9949646-.893177 1.9949646-1.9949646V46.251503h12.8874588V29.0480156c0-3.5825195-2.9042053-6.4867249-6.4867249-6.4867249h-.0000114c-2.6991425 0-5.1162224 1.6714115-6.0690804 4.1967697l-.0423965.1123619h-7.4312592c-1.1017876 0-1.9949646.8931751-1.9949646 1.9949646v.0000038c0 1.1017876.893177 1.9949627 1.9949646 1.9949627H53.032032zM64.0025177 14.656105c0 3.2817574-2.6633263 5.9450188-5.9350357 5.9450188-3.2817574 0-5.9450188-2.6632614-5.9450188-5.9450188 0-3.2816954 2.6632614-5.9349728 5.9450188-5.9349728C61.3391914 8.7211323 64.0025177 11.3744097 64.0025177 14.656105zM9.6815176 20.4423161c-2.1677661-.5058079-3.9226575-2.2813015-4.3871965-4.4697342-.2993393-1.3936186-.1135359-2.7252388.4232707-3.8504534-.4852052.3716059-1.0942163.5780754-1.7445586.5884085C2.3420105 12.7208691 1.01039 11.399519 1.0000571 9.7582264.9897242 8.1272039 2.311075 6.7955832 3.9523673 6.7852502c1.6310225-.0103331 2.9626431 1.3110175 2.9729762 2.941977 0 .2890692-.0412688.5574732-.1135359.8155432 1.2387505-1.2903519 3.0555134-2.0232944 5.0478716-1.7755575 2.6323061.3303385 4.7897387 2.4775019 5.1200762 5.109807C17.5062294 17.9752102 13.8313103 21.4023304 9.6815176 20.4423161z" />
              </svg>
            </p>
          </div>
          <div className="whybox7">
            <h3>Career Mentorship</h3>
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                strokeLinejoin="round"
                strokeMiterlimit="2"
                clipRule="evenodd"
                viewBox="0 0 512 512"
                width="80"
                height="100"
              >
                <path
                  d="M645.618,768.591C641.922,767.554 638.025,767 634,767C610.268,767 591,786.268 591,810C591,833.732 610.268,853 634,853C639.577,853 644.908,851.936 649.799,850L743.413,850L728.562,860.883L725.017,856.045C723.399,853.837 720.306,853.34 718.078,854.931L689.541,875.307C682.941,862.65 669.695,854 654.445,854L612.555,854C590.724,854 573,871.724 573,893.555L573,942C573,944.761 575.239,947 578,947L596,947L596,1032C596,1034.76 598.239,1037 601,1037L666,1037C668.761,1037 671,1034.76 671,1032L671,930.341L737.534,881.585C739.761,879.953 740.244,876.824 738.612,874.597L734.473,868.949L760.332,850L1059.38,850C1062.14,850 1064.38,847.761 1064.38,845L1064.38,604C1064.38,601.239 1062.14,599 1059.38,599L650.618,599C647.857,599 645.618,601.239 645.618,604L645.618,768.591ZM723.453,870.829L719.87,865.939L690.264,887.078C688.964,888.006 687.3,888.258 685.784,887.755C684.269,887.252 683.085,886.056 682.597,884.536C678.78,872.629 667.612,864 654.445,864C654.445,864 612.555,864 612.555,864C596.243,864 583,877.243 583,893.555C583,893.555 583,937 583,937L596,937L596,900.5C596,897.74 598.24,895.5 601,895.5C603.76,895.5 606,897.74 606,900.5L606,1027L628.5,1027L628.5,976C628.5,973.24 630.74,971 633.5,971C636.26,971 638.5,973.24 638.5,976L638.5,1027L661,1027L661,900.5C661,897.74 663.24,895.5 666,895.5C668.76,895.5 671,897.74 671,900.5L671,917.943L727.59,876.474L723.453,870.829ZM634,777C652.213,777 667,791.787 667,810C667,828.213 652.213,843 634,843C615.787,843 601,828.213 601,810C601,791.787 615.787,777 634,777ZM773.978,840L1054.38,840C1054.38,805.907 1054.38,609 1054.38,609C1054.38,609 655.618,609 655.618,609L655.618,772.829C668.402,780.286 677,794.147 677,810C677,821.664 672.345,832.25 664.794,840L757.06,840L782.904,821.061C785.13,819.43 788.261,819.913 789.893,822.139C791.524,824.365 791.041,827.496 788.815,829.128L773.978,840ZM813.952,732.195C813.952,729.434 811.714,727.195 808.952,727.195L761.185,727.195C761.185,727.195 761.185,679.428 761.185,679.428C761.185,676.666 758.946,674.428 756.185,674.428C724.302,674.428 698.417,700.312 698.417,732.195C698.417,764.078 724.302,789.963 756.185,789.963C788.067,789.963 813.952,764.078 813.952,732.195ZM803.693,737.195C801.19,761.213 780.86,779.963 756.185,779.963C729.821,779.963 708.417,758.559 708.417,732.195C708.417,707.52 727.167,687.19 751.185,684.687C751.185,684.687 751.185,732.195 751.185,732.195C751.185,734.957 753.423,737.195 756.185,737.195L803.693,737.195ZM865.219,771.202L1006.54,771.202C1009.3,771.202 1011.54,768.961 1011.54,766.202C1011.54,763.442 1009.3,761.202 1006.54,761.202L865.219,761.202C862.46,761.202 860.219,763.442 860.219,766.202C860.219,768.961 862.46,771.202 865.219,771.202ZM865.219,750.618L1006.54,750.618C1009.3,750.618 1011.54,748.377 1011.54,745.618C1011.54,742.858 1009.3,740.618 1006.54,740.618L865.219,740.618C862.46,740.618 860.219,742.858 860.219,745.618C860.219,748.377 862.46,750.618 865.219,750.618ZM865.219,729.678L1006.54,729.678C1009.3,729.678 1011.54,727.437 1011.54,724.678C1011.54,721.918 1009.3,719.678 1006.54,719.678L865.219,719.678C862.46,719.678 860.219,721.918 860.219,724.678C860.219,727.437 862.46,729.678 865.219,729.678ZM771.575,659.037C768.814,659.037 766.575,661.276 766.575,664.037L766.575,716.805C766.575,719.566 768.814,721.805 771.575,721.805L824.343,721.805C827.104,721.805 829.343,719.566 829.343,716.805C829.343,684.922 803.458,659.037 771.575,659.037ZM776.575,669.296C798.949,671.628 816.752,689.431 819.084,711.805C819.084,711.805 776.575,711.805 776.575,711.805L776.575,669.296ZM865.219,708.738L1006.54,708.738C1009.3,708.738 1011.54,706.498 1011.54,703.738C1011.54,700.979 1009.3,698.738 1006.54,698.738L865.219,698.738C862.46,698.738 860.219,700.979 860.219,703.738C860.219,706.498 862.46,708.738 865.219,708.738ZM885.657,687.798L1006.54,687.798C1009.3,687.798 1011.54,685.558 1011.54,682.798C1011.54,680.039 1009.3,677.798 1006.54,677.798L885.657,677.798C882.898,677.798 880.657,680.039 880.657,682.798C880.657,685.558 882.898,687.798 885.657,687.798Z"
                  transform="translate(-562 -562)"
                />
              </svg>
            </p>
          </div>
          <div className="whybox8">
            <h3>Pay in Easy Installment</h3>
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
                width="80"
                height="100"
              >
                <path d="m53,13h-7v-4c0-3.3086-2.6914-6-6-6H12c-3.3086,0-6,2.6914-6,6v46c0,3.3086,2.6914,6,6,6h28c3.3086,0,6-2.6914,6-6v-12h7c2.2061,0,4-1.7944,4-4v-22c0-2.2056-1.7939-4-4-4Zm2,4v2H19v-4h34c1.1025,0,2,.897,2,2Zm0,8H19v-4h36v4Zm-15,34H12c-2.2061,0-4-1.7944-4-4v-2h36v2c0,2.2056-1.7939,4-4,4Zm4-8H8V9c0-2.2056,1.7939-4,4-4h28c2.2061,0,4,1.7944,4,4v4h-25v-3c0-.5522-.4473-1-1-1s-1,.4478-1,1v36c0,.5522.4473,1,1,1s1-.4478,1-1v-3h25v8Zm9-10H19v-14h35.9883c.0036-.0173.0081-.0344.0117-.0518v12.0518c0,1.103-.8975,2-2,2Z" />
              </svg>
            </p>
          </div>
        </section>
      </section>
      <section className="coursecareer">
        <h2>Career Options</h2>
        <div className="CareerPath">
          <ul>
            <li>Node.js Developer</li>
            <li>Full-Stack Developer</li>
            <li>Backend Developer</li>
          </ul>
          <ul>
            <li>DevOps Engineer</li>
            <li>API Developer</li>
            <li>Software Engineer</li>
          </ul>
        </div>
      </section>
      <section className="studentWorked">
        <h2>Our Students work at</h2>
        <div className="comp1">
          <Company></Company>
        </div>
        <div className="comp2">
          <div className="cmplogos">
            {Companylogos.map((e) => {
              return <img src={e.src}></img>;
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default NodeExpress;
