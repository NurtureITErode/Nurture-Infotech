import "./VisionMissionStrategy.css";

const MissionInfographic = () => {
  return (
    <div>
      <section className="mv_container">
        <div className="mv_child1">
          <div className="mv_c1_text1"></div>

          <div className="mv_c1_text2">WHO WE ARE</div>

          <div className="mv_c1_text3" style={{ textAlign: "justify", fontWeight: 400 }}>
            <p>
              Established in 2010, Nurture Institute has evolved into a leading
              IT education and training hub. Our trending courses span
              programming languages such as Java and Python, web development,
              digital marketing, web design, and AI. Backed by a team of
              experienced trainers, we’ve mentored thousands of students
              worldwide, facilitating their transition into successful IT
              careers.
            </p><br></br>
            <p>
              Established in 2010, Nurture Institute has evolved into a leading
              IT education and training hub. Our trending courses span
              programming languages such as Java and Python, web development,
              digital marketing,
            </p>
          </div>

          <div className="mv_c1_btn">
            <button className="mv_btn">
              CONTACT US <img></img>
            </button>
          </div>
        </div>

        <div className="mv_child2">
          <div className="mv_c2_1">
            <div className="mv_c2_icon1">
              <img src="/assets/Images/About/target.svg" alt="logo"></img>
            </div>
            <div className="mv_c2_text1">Mission</div>
            <div className="mv_c2_text2">
              One Solution for Learning IT Firm boasts a team of experienced
              instructors and industry professionals who provide top-notch IT
              education.
            </div>
          </div>

          <div className="mv_c2_2">
            <div className="mv_c2_icon2">
              <img src="/assets/Images/About/vision.png" alt="logo"></img>
            </div>
            <div className="mv_c2_text3"> vision </div>
            <div className="mv_c2_text4">
              Students benefit from hands-on experience and real-world projects,
              preparing them for success in IT careers.
            </div>
          </div>

          <div className="mv_c2_3">
            <div className="mv_c2_icon3">
              <img src="/assets/Images/About/goal.png" alt="logo"></img>
            </div>
            <div className="mv_c2_text5">Goals</div>
            <div className="mv_c2_text6">
              Our firm offers a comprehensive curriculum that covers a wide
              range of IT domains, ensuring students gain a holistic
              understanding of the field.
            </div>
          </div>

          <div className="mv_c2_4">
            <div className="mv_c2_icon4">
              <img src="/assets/Images/About/new-ideas-in-process.png" alt="logo"></img>
            </div>
            <div className="mv_c2_text7">Startergy</div>
            <div className="mv_c2_text8">
              We provide dedicated career support services, including job
              placement assistance and guidance, to help students launch and
              advance their IT careers.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default MissionInfographic;
