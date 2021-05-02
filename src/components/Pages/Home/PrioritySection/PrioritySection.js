import React, { useContext } from 'react';
import { CartContext } from '../../../../Context/CartContext';

import "./PrioritySection.css"

const PrioritySection = () => {
  const {cart}=useContext(CartContext)
    return (
        <section className="priority">
        <div className="content-box">
          <div className="row">
            <div className="priority-top">
              <h1>{cart.length}</h1>
              <h1>What Mastering Study Prioritizes</h1>
              <p>
                Mastering Study prioritizes the development of 21st century
                skills— things like self-leading, leading others,
                entrepreneurial thinking, quantitative reasoning, critical
                thinking, managing complex projects, and communication. Most
                institutions hope that students pick up some of these skills
                during their education. At Mastering Study, we intentionally and
                explicitly develop these skills in students through practice,
                on-the-job experience, coaching, and regular feedback.
              
                Mastering Study graduates benefit from an innovative,
                individualized learning experience driven by seven key Meta
                Skills—the 21st-century skills and characteristics that top
                employers around the globe seek and that define leaders and
                entrepreneurs.
             
                This approach is designed to augment academic theory and provide
                you with the development you need to remain relevant in an
                ever-changing world. With these Meta Skills, you’ll answer
                questions like “Who do I lead?” and “How do I lead?”
              </p>
              

              <p>
                With Mastering Study, you’ll prepare for jobs that haven’t even
                been created yet.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
};

export default PrioritySection;