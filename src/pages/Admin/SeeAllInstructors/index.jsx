import InstructorCard from "@/Components/InstructorCard";
import Axios from "@/utils/Axios";
import { getinstructors } from "@/utils/queries";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { BiLoader } from "react-icons/bi";

const instructorsurl = "/instructors"; // Change instructorurl to instructorsurl

const Index = () => {
  const [Loading, setLoading] = useState(false);
  const [instructors, setInstructors] = useState([]); // Change setstudents to setInstructors

  useEffect(() => {
    setLoading(true);
    const fetchInstructors = async () => {
      // Change getinstructors to fetchInstructors

      try {
        const authToken = Cookies.get("authToken");
        if (!authToken) {
          return null;
        }

        const response = await Axios.get(instructorsurl, {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });

        const responseData = response.data;
        setInstructors(responseData?.data); // Change students to instructors
        setLoading(false);
      } catch (error) {
        console.log("Error fetching instructor data:", error.message);
        return null;
      }
    };

    fetchInstructors(); // Change getinstructors() to fetchInstructors()
  }, []);

  return (
    <>
      {Loading ? (
        <div className="h-screen w-screen bg-white fixed top-0 left-0 flex items-center justify-center">
          <div className="flex items-center justify-center gap-x-3">
            <BiLoader className="animate-spin text-blue-500 text-4xl" />
            <span className="text-base text-blue animate-bounce font-semibold  capitalize ">
              loading available Instructors
            </span>
          </div>
        </div>
      ) : (
        <section className="addNewCourse">
          <div className="container body-content">
            <p className="admin-header-text">See all Instructors</p>

            <div className="see-all-div">
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                {instructors.map((instructors) => (
                  <InstructorCard
                    key={instructors._id}
                    firstName={instructors.firstname}
                    lastName={instructors.lastname}
                    photo={instructors.photo} // Pass the photo prop here
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Index;
