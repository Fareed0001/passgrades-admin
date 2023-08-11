import StudentList from "@/Components/StudentList";
import Axios from "@/utils/Axios";
import Cookies from "js-cookie";
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

        toast.success(responseData?.message);
      } catch (error) {
        console.log("Error fetching student data:", error.message);
        return null;
      }
    };

    fetchStudents();
  }, []);

  const HandleDeleteItem = (studentID) => {
    setStudents((previtem) => {
      const filteredArray = previtem.filter((item) => item._id !== studentID);
      toast.success("deleted");
      return filteredArray;
    });
  };
  return (
    <section className="addNewCourse bg-[#ebeefd] h-full w-full overflow-auto">
      <div className="container body-content h-screen">
        <p className="admin-header-text">See all Students</p>

        <form className="d-flex search-div" role="search">
          <input className="form-control me-2" type="search" placeholder="Search by student name" aria-label="Search" />
          <button className="btn btn-outline-primary" type="submit">Search</button>
        </form>

        <div className="see-all-div">
          {students.length === 0 ? (
            <div className="fixed h-screen w-screen top-0 left-0 flex items-center justify-center text-4xl font-bold capitalize">
              no available Students
            </div>
          ) : (
            <div className="see-all-div">
              <StudentList
                studentdata={students}
                onDelete={(id) => {
                  HandleDeleteItem(id);
                }}
                key={students.length}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Index;
