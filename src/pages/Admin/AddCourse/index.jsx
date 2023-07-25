import React, { useRef, useState } from "react";
import Axios from "@/utils/Axios";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { toast } from "react-hot-toast";

const CourseCreate_URL = "/create/course";

const Index = () => {
  const router = useRouter();
  const imageref = useRef(null);
  const coursetitleref = useRef(null);
  const courseDescriptionref = useRef(null);
  const studentPriceref = useRef(null);
  const AgentPriceRef = useRef(null);
  const adddurationref = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const coverImageRef = useRef(null); // Define the coverImageRef reference here

  const HandleSubmit = async (event) => {
    event.preventDefault();

    const title = coursetitleref.current.value;
    const description = courseDescriptionref.current.value;
    const agent_price = AgentPriceRef.current.value;
    const student_price = studentPriceref.current.value;
    const duration = adddurationref.current.value;
    const imagedata = imageref.current.value;

    const formdata = new FormData();

    formdata.append("title", title);
    formdata.append("description", description);
    formdata.append("agent_price", agent_price);
    formdata.append("student_price", student_price);
    formdata.append("duration", duration);
    formdata.append("cover_image", imagedata);


    try {
      const response = await Axios.post(CourseCreate_URL, formdata, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${Cookies.get("authToken")}`,
        },
      });

      console.log(response?.status);
      toast.success("sucessfully Added a course");
      router.push("/Admin");
      imageref.current.value = "";
      courseDescriptionref.current.value = "";
      coursetitleref.current.value = "";
      AgentPriceRef.current.value = "";
      studentPriceref.current.value = "";
      adddurationref.current.value = "";
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <section className="addNewCourse">
      <div className="container new-course-container">
        <p className="admin-header-text">Add a new course</p>
        <form onSubmit={HandleSubmit}>
          <div className="row container">
            <div className="admin-input-field-div col-12 col-lg-6">
              <label htmlFor="coverImage" className="form-label admin-form-label">
                Select course cover image
              </label>
              <input
                ref={imageref}
                class="form-control"
                type="file"
                id="coverImage"
                accept="image/*"
              />
            </div>

            <div className="input-field-div col-12 col-lg-6">
              <label htmlFor="courseTitle" className="form-label admin-form-label">
                Course title
              </label>
              <input
                ref={coursetitleref}
                type="text"
                className="form-control"
                placeholder="Enter course title"
                id="courseTitle"
              />
            </div>

            <div className="input-field-div col-lg-12">
              <label
                htmlFor="courseDescription"
                className="form-label admin-form-label"
              >
                Course description
              </label>
              <textarea
                ref={courseDescriptionref}
                className="form-control admin-text-area"
                placeholder="Enter the course description"
                id="courseDescription"
              ></textarea>
            </div>

            <div className="input-field-div col-12 col-lg-6">
              <label htmlFor="studentPrice" className="form-label admin-form-label">
                Student price
              </label>
              <div className="input-group">
                <span className="input-group-text">₦</span>
                <input
                  ref={studentPriceref}
                  id="studentPrice"
                  type="number"
                  className="form-control"
                  aria-label="Amount (to the nearest naira)"
                />
                <span className="input-group-text">.00</span>
              </div>
            </div>

            <div className="input-field-div col-12 col-lg-6">
              <label htmlFor="agentPrice" className="form-label admin-form-label">
                Agent price
              </label>
              <div className="input-group">
                <span className="input-group-text">₦</span>
                <input
                  ref={AgentPriceRef}
                  id="agentPrice"
                  type="number"
                  className="form-control"
                  aria-label="Amount (to the nearest dollar)"
                />
                <span className="input-group-text">.00</span>
              </div>
            </div>

            <div className="input-field-div col-lg-12">
              <label
                htmlFor="classDuration"
                className="form-label admin-form-label"
              >
                Class duration in days
              </label>
              <input
                ref={adddurationref}
                type="number"
                className="form-control"
                placeholder="Enter class duration in days"
                id="classDuration"
              />
            </div>
          </div>
          <button className="btn btn-primary add-new-course-button" type="submit">
            Add new course
          </button>
        </form>
      </div>
    </section>
  );
};

export default Index;