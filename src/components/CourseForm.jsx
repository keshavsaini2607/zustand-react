import React, { useState } from "react";
import useCourseStore from "../app/store";

const CourseForm = () => {
  const addCourse = useCourseStore((state) => state.addCourse);
  const [courseTitle, setCourseTitle] = useState("");

  const addCourseToStore = (e) => {
      e.preventDefault();
    if(courseTitle.length < 1) return alert('Please add a course title');
    addCourse({
        title: courseTitle,
        id: Math.ceil(Math.random() * 100000)
    })
    setCourseTitle("")
  }

  return (
      <form className="form-container" onSubmit={addCourseToStore}>
        <input
            placeholder="Course Name"
            value={courseTitle}
            onChange={(e) => setCourseTitle(e.target.value)}
        />
        <button className="form-button" type="submit">Add Course</button>
      </form>
  )
};

export default CourseForm;
