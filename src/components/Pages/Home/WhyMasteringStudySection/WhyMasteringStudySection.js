import React from "react";
import "./WhyMasteringStudySection.css";

const WhyMasteringStudySection = () => {
  return (
    <section className="importance">
      <div className="content-box">
        <div className="row">
          <div className="importance-top">
            <h1>Why Mastering Study?</h1>
          </div>
        </div>

        <div className="row">
          <div className="importance-content">
          <div className="importance-title">
            <h1>What makes Mastering Study unique?</h1>
          </div>

          <div className="importance-text">
            <p>
              Mastering Study is a leading awarding body in Computing, Business
              and Law, providing assessment and certification through recognised
              British qualifications throughout the world. We design
              qualifications and teaching programmes which allow candidates to
              progress through levels on their degree journey at their own pace
              and receive a certificate at each stage. We currently have more
              than 50 centres running our qualifications and programmes.
            </p>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyMasteringStudySection;
