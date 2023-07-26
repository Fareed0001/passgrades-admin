import StudentCard from "@/Components/StudentCard";
import Axios from "@/utils/Axios";
import { getstudent, getstudents } from "@/utils/queries";
import Cookies from "js-cookie";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const studenturl = "/students";

const Index = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const authToken = Cookies.get("authToken");
        if (!authToken) {
          return null;
        }

        const response = await Axios.get(studenturl, {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });

        const responseData = response.data;
        setStudents(responseData?.data);
        console.log(students);

        toast.success(responseData?.message);
      } catch (error) {
        console.log("Error fetching student data:", error.message);
        return null;
      }
    };

    fetchStudents();
  }, []);

  return (
    <section className="addNewCourse">
      <div className="container body-content">
        <p className="admin-header-text">See all Students</p>

        <div className="see-all-div">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">

            {students.map((student) => (
              <StudentCard
                key={student._id}
                firstName={student.firstname}
                lastname={student.lastname}
                email={student.email}
                number={student.number}
              />
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Index;
