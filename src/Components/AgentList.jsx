import React from "react";
import Cookies from "js-cookie";
import Axios from "@/utils/Axios";
import CourseCard from "./CourseCard";
import AgentCard from "./AgentCard";

const AgentList = ({ Agentdata, onDelete }) => {
  const handleDelete = async (id) => {
    try {
      const authToken = Cookies.get("authToken");
      if (!authToken) {
        return null;
      }

      const response = await Axios.delete(
        `http://passmark.eu-north-1.elasticbeanstalk.com/api/v1/admin/agents/${id}/delete`,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      if (onDelete) {
        onDelete(id);
      }
      const responseData = response.data;
      toast.success("sucessful delete");
      console.log(responseData);

      return responseData;
    } catch (error) {}
  };
  return (
    <ul className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
      {Agentdata.map((course) => (
        <AgentCard
          onDelete={(id) => {
            handleDelete(id);
          }}
          title={course.title}
          key={course._id}
          id={course._id}
        />
      ))}
    </ul>
  );
};

export default AgentList;
