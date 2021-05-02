import React from "react";
import "./Mentor.css";

const Mentor = () => {
  return (
    <>
      <section className="mentor">
        <div className="content-box">
          <div className="row">
            <div className="mentor-top">
              <h1>Mentor</h1>
            </div>
          </div>
          <div className="row">
            <div className="scheme-title">
              <h2>Mentoring-Program/Scheme</h2>
            </div>
            <div className="scheme-text">
              <p>
                Mastering Study mentoring programme provides a package of
                opportunities to raise the aspirations of students and close the
                gap between those aspirations and their attainment. As a
                Mastering Study Registered Mentor, you will enhance the profile
                of your institution and attract students offering the world’s
                best education system to become more confident with more options
                for their successful career
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="mentor-journey">
        <div className="content-box">
          <div className="row">
            <div className="journey-top">
              <h1>Mentoring Journey</h1>
              <p>
                Mastering Study offer a four-stage journey to mentoring success.
                Whatever your starting point, our four levels of service ensure
                that your institution’s develops and maintains a successful
                mentoring culture that becomes the vehicle to connect students
                and a carrier for change.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="description">
              <h4>EXPLORE</h4>
              <p>
                We DESIGN an effective MENTORING FRAMEWORK for your institution
                laying solid foundations for Mentoring success.
              </p>
            </div>
            <div className="description">
              <h4>Establish</h4>
              <p>
                We DEVELOP MENTORS within your institution, including
                comprehensive TRAINING (remote & face to face)
              </p>
            </div>
            <div className="description">
              <h4>Embed</h4>
              <p>
                Supported PRACTICAL EXPERIENCE to cement learning and develop
                MENTORING CHAMPIONS
              </p>
            </div>
            <div className="description">
              <h4>Evolve</h4>
              <p>
                ONGOING SUPPORT to evolve and maintain an effective Mentoring
                Culture and Champions
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="become-mentor">
        <div className="content-box">
          <div className="row">
            <div className="become-mentor-content">
              <h1>How to become mentor?</h1>
              <p>
                If you'd like to apply to become a mentor on our scheme, please
                complete our short application form.
              </p>
              <button>Apply Here</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Mentor;
