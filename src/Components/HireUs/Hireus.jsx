import React, { useState } from "react";
import "./Hireus.css";
function Hireus() {
  const [selectedTag, setSelectedTag] = useState(null);
  const [HireDatas, setHireDatas] = useState({
    CompanyName: "",
    HRName: "",
    ContactDetails: "",
    Details: "",
  });

  const showImage = (tag) => {
    setSelectedTag(tag);
  };

  const HirehandleChange = (e) => {
    setHireDatas({
      ...HireDatas,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <section className="hireScreen">
        <div className="mainScreen">
          <div className="hireLogo">
            <img
              src="./assets/Images/Hire/rs.png"
              className="hirelogoImg"
              alt="hireLogo"
            ></img>
          </div>
          <div className="hireDetails">
            <div className="hireDetailsHeading">
              <h1 className="hireHeadingOne">
                Hire our Trainees at No Cost Hiring
              </h1>

              <h4 className="hireHeadingthr">
                Hire our Nurture students who are budding React & Full Stack
                Developers at absolutely ZERO Cost involved.
              </h4>
              <div className="hirebtn">
                <button className="hireButton">Get in touch with us</button>
              </div>
            </div>
          </div>
        </div>

        <div className="TrainingModel">
          <div className="TrainingModelHeading">
         
            <h1 className="hireHeadingtwo">
              We strive to provide the best service for our corporate partners.
            </h1>
          </div>
          <div className="TrainingModelDesign">
            <div className="TrainingModelTitle">
              <div className="model1" onClick={() => showImage("Hire3")}>
                <h3>Train and Hire model</h3>
                <p>
                  We will help you build your team by supporting you in all the
                  training and hiring activities.
                </p>
              </div>
              <div className="image-container-mobile">
                <img
                  src={`./assets/Images/Hire/hire1.png`}
                  alt={`Image ${selectedTag}`}
                />
              </div>
              <div className="model2" onClick={() => showImage("Hire2")}>
                <h3>No Cost Hiring</h3>

                <p>
                  Perfect for budding startups with limited hustlers. Fully
                  trained and ready to deploy.
                </p>
              </div>
              <div className="image-container-mobile">
                <img
                  src={`./assets/Images/Hire/hire2.png`}
                  alt={`Image ${selectedTag}`}
                />
              </div>
              <div className="model3" onClick={() => showImage("Hire1")}>
                <h3>Corporate Training</h3>
                <p>
                  We will help you up-skill your existing team and help them
                  adopt the latest industry trends.
                </p>
              </div>
              <div className="image-container-mobile">
                <img
                  src={`./assets/Images/Hire/hire3.png`}
                  alt={`Image ${selectedTag}`}
                />
              </div>
            </div>
            
            <div className="TrainingModelimg">
              {selectedTag ? (
                <div className="image-container">
                  <img
                    src={`./assets/images/hire/${selectedTag}.png`}
                    alt={`Image ${selectedTag}`}
                  />
                </div>
              ) : (
                <div className="image-container">
                  <img
                    src={`./assets/images/hire/hire1.png`}
                    alt={`Image ${selectedTag}`}
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="HireForm">
  
          <h1 className="HRHeading">Hire our Trainees</h1>
          <div className="HRForm">
            <div className="hrimg">
              <img src="./assets/Images/Hire/requirement.gif"></img>
            </div>
            <div className="FormDesign">
              <h1 className="FormDesignHeading">Hire our Trainees</h1>
              <input
                type="text"
                onChange={HirehandleChange}
                autoComplete="off"
                placeholder="Company Name"
                name="CompanyName"
                value={HireDatas.CompanyName}
              ></input>
              <label className="label"></label>
              <input
                type="text"
                onChange={HirehandleChange}
                autoComplete="off"
                placeholder="HR Name"
                name="HRName"
                value={HireDatas.HRName}
              ></input>
              <label className="label"></label>
              <input
                type="text"
                onChange={HirehandleChange}
                autoComplete="off"
                placeholder="Contact Details"
                name="ContactDetails"
                value={HireDatas.ContactDetails}
              ></input>
              <label className="label"></label>
              <textarea
                onChange={HirehandleChange}
                autoComplete="off"
                placeholder="Message"
                name="Details"
                value={HireDatas.Details}
              ></textarea>
              <label className="label"></label>
              <button className="Contactbutton">
                <div class="svg-wrapper-1">
                  <div class="svg-wrapper">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path
                        fill="currentColor"
                        d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <span>Register</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hireus;
