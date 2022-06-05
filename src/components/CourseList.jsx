import React from "react";
import useCourseStore from "../app/store";

const CourseList = () => {
  const {courses, removeCourse, toggleCourse} = useCourseStore((state) => ({
      courses: state.courses,
      removeCourse: state.removeCourse,
      toggleCourse: state.toggleCourse
  }));

  return (
      <>
        {
            courses.map((item, i) => (
                <div key={i} className="course-container" style={{backgroundColor: item.completed ? "#f0f478" : "#FFFFFF"}}>
                    <input 
                        type="checkbox"
                        checked={item?.completed}
                        onChange={(e) => toggleCourse(item.id)}
                    />
                    <span>{item.title}</span>
                    <button onClick={() => {
                        removeCourse(item.id)
                    }}>Delete</button>
                </div>
            ))
        }
      </>
  )
};

export default CourseList;
