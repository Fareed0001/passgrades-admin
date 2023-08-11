import { getcourses } from "@/utils/queries";
import React, { useRef, useEffect, useState } from "react";


const Index = () => {
  const [Courses, setCourses] = useState([]);
  const courseRef = useRef();

  useEffect(() => {
    const fetchCourses = async () => {
      const response = await getcourses();
      setCourses(response.data);
    };
    fetchCourses();
  }, []);

  return (
    <section className="addNewCourse">
      <div className="container new-course-container bg-[#ebeefd] h-full w-full overflow-auto">
        <p className="admin-header-text">Send Message</p>
        <form action="">
          <div className="row container">
            <div className="input-field-div col-12">
              <label htmlFor="messageTitle" className="form-label admin-form-label">
                Message title
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter message title"
                id="messageTitle"
              />
            </div>

            <div className="input-field-div col-lg-12">
              <label
                htmlFor="messageContent"
                className="form-label admin-form-label"
              >
                Message content
              </label>
              <textarea
                className="form-control admin-text-area"
                placeholder="Enter the message content"
                id="messageContent"
              ></textarea>
            </div>

            <p className="admin-header-text">send to:</p>

            <div className="input-field-div col-12 col-md-4">
              <label className="form-label admin-form-label" htmlFor="">
                Send to users with course enrolled
              </label>
              <select className="form-select" ref={courseRef} required>
                <option value="" disabled>Send to users with course enrolled</option>
                {Courses.map((course) => (
                  <option key={course._id} value={course._id}>
                    {course.title}
                  </option>
                ))}
              </select>
            </div>

            <div className="input-field-div col-12 col-md-4">
              <label htmlFor="userEmail" className="form-label admin-form-label">
                User with email
              </label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter user email"
                id="messageTitle"
              />
            </div>

            <div className="input-field-div col-12 col-md-4">
              <label className="form-label admin-form-label" htmlFor="">
                Send to instructor, agent or student
              </label>
              <select className="form-select">
                <option selected>Select by role</option>
                <option value="1">All admins</option>
                <option value="2">All instructors</option>
                <option value="3">All agents</option>
                <option value="4">All students</option>
              </select>
            </div>

          </div>
          <button
            className="btn btn-primary add-new-course-button"
            type="submit"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Index;