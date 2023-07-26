import CourseCard from "@/Components/CourseCard";
import Axios from "@/utils/Axios";
import { getcourses } from "@/utils/queries";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { BiLoader } from "react-icons/bi";

const courseurl = "/courses";
const Index = () => {
  const [courses, setCourses] = useState([]);
  const [Loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCourses = async () => {
      setLoading(true);
      try {
        const authToken = Cookies.get("authToken");
        if (!authToken) {
          return null;
        }

        const response = await Axios.get(courseurl, {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });

        const responseData = response.data;
        setCourses(responseData?.data);
        setLoading(false);
      } catch (error) {
        console.log("Error fetching course data:", error.message);
        setLoading(false);
        return null;
      }
    };

    fetchCourses();
  }, []);

  return (
    <>
      <section className="bg-[#ebeefd] h-full fixed w-full overflow-auto py-10">
        {Loading ? (
          <div className="h-screen w-screen bg-white fixed top-0 left-0 flex items-center justify-center">
            <div className="flex items-center justify-center gap-x-3">
              <BiLoader className="animate-spin text-blue-500 text-4xl" />
              <span className="text-base text-blue animate-bounce font-semibold  capitalize ">
                loading available courses
              </span>
            </div>
          </div>
        ) : (
          <div className="container body-content">
            <p className="admin-header-text">See all Courses</p>

            <div className="see-all-div">
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                {courses.map((Courses) => (
                  <CourseCard
                    key={Courses._id}
                    title={Courses.title}
                    cover_image={Courses.cover_image}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Index;
