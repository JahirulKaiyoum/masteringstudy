import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../Context/CartContext";

import SingleCourse from "../../Courses/SingleCourse";
import "./DiplomaInEnglish.css";


const DiplomaInEnglish = () => {
  // const { contextCart, setContextCart } = useContext(CartContext);
  const [singleCourse, setSingleCourse] = useState([]);
  const {cart, setCart} = useContext(CartContext);
  
  
  useEffect(() => {
    fetch("http://localhost:5000/singleCourse")
      .then((response) => response.json())
      .then((data) => {
          
        setSingleCourse(data);
        
      });
  }, []);
  // const enrollNow = (course) => {
  //   // const newCart = [...contextCart,course];
  //   // setContextCart(newCart);
  //   const newCart = [...cart,course];
  //   setCart(newCart);
    
  // }

  const enrollNow = (id) => {
    
    const course = singleCourse.find(course => course.id === id);
    const checkCourse = cart.every(item => item.id !== course.id);
    if (checkCourse || cart === null) {
      const newCart = [...cart, course];
      setCart(newCart);
      

    } else {
      alert("Course already added in cart ")
    }
    
  }

  
  return (
    <>
      <section className="course">
        <div className="content-box">
          <div className="row">
          {
            singleCourse.map(course =><SingleCourse handleEnrollNow={enrollNow} course={course} key={course.id}></SingleCourse> )
          }
          </div>
        </div>
        
      </section>
      <section className="overview">
        <div className="row">
          <div className="overview-text">
            <h1>Overview </h1>
            <p>
              The Foundation Diploma in English for Higher Education is a
              one-year pre-university qualification that includes a significant
              degree of English language teaching. The qualification is designed
              to provide an entry route to UK and international university
              courses.
              <br />
              <br />
              The Foundation Diploma in English for Higher Education aims to
              improve general and academic English language ability, enhance
              study skills and cultural understanding and introduce academic
              study in English in the fields of computing and/or business at a
              suitable level.
            </p>
          </div>
        </div>
      </section>
      <section className="courses">
        <div className="row">
          <div className="content-top">
            <h1>Why Choose This Course?</h1>
          </div>
        </div>
        <div className="row">
          <div className="content-bottom">
            <div className="left-content">
              <h2 style={{ textAlign:"center"}}>Improve your skills</h2>
              <p>
                Gain the oral and written English language skills you need for
                degree-level study through our course modules and practical
                exercise.
              </p>
            </div>
            <div className="right-content">
              <h2 style={{ textAlign:"center"}}>Boost your skills</h2>
              <p>
                Start building your knowledge of computing, business and
                management for further study and future work in industry.
              </p>
            </div>
          </div>
        </div>
          </section>
          <section className="requirements">
          <div className="row">
          <div className="requirement-content">
          <div className="requirements-title">
                      <h1>Entry requirements</h1>
                      
          </div>
          <div className="requirements-text">
          <p>For entry onto the Mastering Study Foundation Diploma for Higher
          Education Studies qualification students must have successfully completed
          secondary school education with English language.</p>
          </div>
          
          </div>
        </div>
          </section>
          <section className="modules">
            
      </section>
      <section className="modules">
        <div className="row">
          <div className="module-content">
            <h1>Modules</h1>
            <p>On the Foundation Year, you will study six core modules and have the
            option of choosing papers from across several streams and gain subject
            knowledge relevant to your future degree course as well as being
            introduced to new subjects and approaches.
            <br/>
            You can select the two electives for specialization in computer science,
            business, engineering, health sciences and higher finance.</p>
          </div>
        </div>
        <div className="content-box">
        <h1 style={{textAlign:"center", margin:"45px 0px"}}>The qualification consists of six core modules:</h1>
          <div className="row">
            <div className="module-title">
              
              <h2>Beginner user:</h2>
            </div>
            <div className="module-text">
              <p>Can understand and use familiar everyday expressions and very basic
              phrases aimed at the satisfaction of needs of a concrete type.
              Can introduce themselves and others and can ask and answer questions
              about personal details such as where they live, people they know and
              things they have.
              Can interact in a simple way provided the other person talks slowly and
              clearly and is prepared to help.</p>
            </div>
          </div>
          <div className="row">
            <div className="module-title">
              <h2>Elementary user:</h2>
            </div>
            <div className="module-text">
              <p>Can understand sentences and frequently used expressions related to
              areas of most immediate relevance (e.g. very basic personal and family
              information, shopping, local geography, employment).
              Can communicate in simple and routine tasks requiring a simple and
              direct exchange of information on familiar and routine matters.
              Can describe in simple terms aspects of their background, immediate
              environment and matters in areas of immediate need.</p>
            </div>
          </div>
          <div className="row">
            <div className="module-title">
              <h2>Intermediate user:</h2>
            </div>
            <div className="module-text">
              <p>Can understand the main points of clear standard input on familiar
              matters regularly encountered in work, school, leisure, etc.
              Can deal with most situations likely to arise while travelling in an area
              where the language is spoken.
              Can produce simple connected text on topics that are familiar or of
              personal interest.Can describe experiences and events, dreams, hopes and ambitions and
              briefly give reasons and explanations for opinions and plans.</p>
            </div>
          </div>
          <div className="row">
            <div className="module-title">
              <h2>Upper intermediate user:</h2>
            </div>
            <div className="module-text">
              <p>Can understand the main ideas of complex text on both concrete and
              abstract topics, including technical discussions in their field of
              specialization.
              Can interact with a degree of fluency and spontaneity that makes regular
              interaction with native speakers quite possible without strain for either
              party.
              Can produce clear, detailed text on a wide range of subjects and explain
              a viewpoint on a topical issue giving the advantages and disadvantages of
              various options.</p>
            </div>
          </div>
          <div className="row">
            <div className="module-title">
              <h2>Advanced user:</h2>
            </div>
            <div className="module-text">
              <p>Can understand a wide range of demanding, longer clauses, and
              recognize implicit meaning.
              Can express ideas fluently and spontaneously without much obvious
              searching for expressions.
              Can use language flexibly and effectively for social, academic and
              professional purposes.
              Can produce clear, well-structured, detailed text on complex subjects,
              showing controlled use of organizational patterns, connectors and
              cohesive devices.</p>
            </div>
          </div>
          <div className="row">
            <div className="module-title">
              <h2>Proficient user:</h2>
            </div>
            <div className="module-text">
              <p>Can understand with ease virtually everything heard or read.
              Can summarize information from different spoken and written sources,
              reconstructing arguments and accounts in a coherent presentation.
              
              Can express themselves spontaneously, very fluently and precisely,
              differentiating finer shades of meaning even in the most complex
              situations.</p>
            </div>
          </div>
        </div>
      </section>
                    
      <section className="elective-modules">
        <div className="content-box">
          
          <div className="business-stream">
            <div className="row">
              <div className="content-top">
                <h1>Business Stream</h1>
              </div>
            </div>
            <div className="row">
              <div className="content-left">
                <h3>Introduction to Business-</h3>
                <p>This module provides an introduction to the purpose,
                types and organisation of businesses. Students become familiar with a range of
                business concepts such as basic marketing practices.</p>
              </div>
              <div className="content-right">
              <h3>Introduction to Accounting and Economics–</h3>
                <p>This module introduces the key
                principles of accounting and economics. Students become accustomed to
                concepts such as market structures and monetary policy and also learn how to
                produce simple financial statements.</p>
              </div>
              
            </div>
          </div>

          <div className="Higher-finance-stream">
          <div className="row">
            <div className="content-top">
              <h1>Higher Finance</h1>
            </div>
          </div>
          <div className="row">
            <div className="content-left">
              <h3>Introduction to Accounting and Economics–</h3>
              <p>This module introduces the key
              principles of accounting and economics. Students become accustomed to
              concepts such as market structures and monetary policy and also learn how to
              produce simple financial statements.</p>
            </div>
              <div className="content-right">
              <h3>Further Mathematics–</h3>
                <p>This module provides students with an understanding of
                different mathematical concepts and ideas, building on the work covered in the
                Foundation Mathematics module. It will allow students to develop further algebraic
                techniques on a broad range of mathematical topics, building towards area often seen and used in
                university courses.</p>
              </div>
            
          </div>
          </div>
          
          <div className="computing-stream">
          <div className="row">
            <div className="content-top">
              <h1>Computing Stream</h1>
            </div>
          </div>
          <div className="row">
            <div className="content-left">
              <h3>Introduction to Computer Science–</h3>
              <p>This module provides a basic
              introduction to a range of IT topics including organisation of a computer
              system, the relationship between hardware and software, applications of
              computers, databases, networking (with a focus on the Internet),
              graphics and multimedia.</p>
            </div>
              <div className="content-right">
                <h3>Introduction to Programming–</h3>
                <p>This module exposes students to extensive
                practical use of the modern programming language Visual Basic, to
                illustrate the classic programming principles of sequencing, selection and
                iteration in the context of object-oriented computer programming.</p>
              </div>
            
          </div>
          </div>
          
          <div className="engineering-stream">
          <div className="row">
            <div className="content-top">
              <h1>Engineering Stream</h1>
            </div>
          </div>
          <div className="row">
            <div className="content-left">
              <h3>Further Mathematics–</h3>
              <p>This module provides students with an
              understanding of different mathematical concepts and ideas, building on
              the work covered in the Foundation Mathematics module. It will allow
              students to develop further algebraic techniques on a broad range of
              mathematical topics, building towards area often seen and used in
              university courses.</p>
            </div>
              <div className="content-right">
              <h3>Physics–</h3>
              <p>This module equips students with a fundamental background of
              the principles of physics. It focuses on Newton’s mechanics, electrostatics
              
              and electrodynamics. The principles of thermal physics and magnetism
              are also introduced.</p>
              </div>
            
          </div>
          </div>
          
          <div className="chemical-engineering-stream">
          <div className="row">
            <div className="content-top">
              <h1>Chemical Engineering Stream</h1>
            </div>
          </div>
          <div className="row">
            <div className="content-left">
              <h3>Physics–</h3>
              <p>This module equips students with a fundamental background of
              the principles of physics. It focuses on Newton’s mechanics, electrostatics
              and electrodynamics. The principles of thermal physics and magnetism
              are also introduced.</p>
            </div>
              <div className="content-right">
              <h3>Chemistry–</h3>
              <p>This module enables you to gain an understanding of the
              three main branches of chemistry: inorganic, physical and organic.
              Theoretical concepts will be illustrated using several practical laboratory
              sessions.</p>
              </div>
            
          </div>
          </div>
          
          <div className="health-science-stream">
          <div className="row">
            <div className="content-top">
              <h1>Health Science Stream</h1>
            </div>
          </div>
          <div className="row">
            <div className="content-left">
              <h3>Biology–</h3>
              <p>This module introduces the fundamental ideas of how the
              human body works. Starting with the cell as the building blocks of life
              and the looking at each of the major body systems. The purpose of this
              to give the underpinning knowledge which will prepare students to study
              health related subjects at higher levels.</p>
            </div>
              <div className="content-right">
              <h3>Chemistry–</h3>
              <p>This module enables you to gain an understanding of the
              three main branches of chemistry: inorganic, physical and organic.
              Theoretical concepts will be illustrated using several practical laboratory
              sessions.</p>
              </div>
            
          </div>
          </div>
          
        </div>
      </section>
      <section className="comparison">
        <div className="content-box">
          <div className="row">
            <div className="content-top">
              <h1>Qualifications comparison</h1>
            </div>
            <div className="main-content">
                <p>Based on the research, Mastering Study has developed the following
              comparison table that scales/balance/links the Foundation Diploma
              module passed to CEFR and IELTS overall band scores and
                qualifications to help you make well-informed admissions decisions.</p>
              <br/>
              <p>https://www.ielts.org/about-ielts/ielts-in-cefr-scale</p>
              <br />
              <p>https://englishtest.duolingo.com/scores</p>
            </div>t
          </div>
          
        </div>
      </section>
      <section className="academic-progression">
        <div className="content-box">
          <div className="row">
            <div className="content-top">
              <h1>Academic Progression</h1>
              <p>Mastering Study has agreements with over 100 universities in many
              countries, including the UK, Australia, Canada and the USA. View the
              list of university progression routes available to students that
              complete the Foundation Diploma for Higher Education Studies. <b>New 2021 University Progression Routes:</b></p>
            </div>
            
          </div>
          <div className="row">
            <div className="column-left">
              <ul>
                <li><p>University of Exeter</p></li>
                <li><p> UK La Trobe University</p></li>
                <li><p>Victoria </p></li>
                <li><p>Australia Northwood University</p></li>
                <li><p> Michigan</p></li>
                <li><p>USA Keele University</p></li>
              </ul>
            </div>
            <div className="column-right">
                <ul>
                <li> <p>UK University of Canberra</p></li>
                <li><p>Australia University of Nicosia Medical School</p></li>
                <li> <p>Cyprus Arts University Bournemouth </p></li>
                <li><p>UK Southern Cross University</p></li>
                <li><p>Australia</p></li>
              </ul>
            </div>
            
          </div>
          
        </div>
      </section>
    </>
  );
};

export default DiplomaInEnglish;
