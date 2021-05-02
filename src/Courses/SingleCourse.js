import React from 'react';
import "./SingleCourse.css"
const SingleCourse = (props) => {
    const { title, duration, price, discount, mode, entry,id } = props.course;
    const handleEnrollNow = props.handleEnrollNow;
    return (
        <>
            <div className="course-details">
            <h1>{title}</h1>
            <p><b>Course Duration:</b>{duration}</p>
            <p><b>Study Mode:</b>{mode}</p>
            <p><>Price:<strike>{price}</strike></></p>
            <h1><b>Discounted Price:</b>{discount}</h1>
            <p><b>Entry:-</b> {entry}</p>
            <p><b>This course is designed for students who have completed high school
            but English is not their first language.</b></p>
            </div>
            <div className="enroll">
                <button onClick={() =>handleEnrollNow(id)}> Enroll now</button>
            </div>
            </>
        
    );
};

export default SingleCourse;

// <button onClick={() =>handleEnrollNow(props.course)}> Enroll now</button>