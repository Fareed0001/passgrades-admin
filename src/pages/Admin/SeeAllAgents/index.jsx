import AgentCard from "@/Components/AgentCard";
import Axios from "@/utils/Axios";
import { getagent, getagents } from "@/utils/queries";
import Cookies from "js-cookie";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const agenturl = "/agents";

const Index = () => {
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    const fetchAgents = async () => {
      try {
        const authToken = Cookies.get("authToken");
        if (!authToken) {
          return null;
        }

        const response = await Axios.get(agenturl, {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });

        const responseData = response.data;
        setAgents(responseData?.data);
        console.log(agents);

        toast.success(responseData?.message);
      } catch (error) {
        console.log("Error fetching agent data:", error.message);
        return null;
      }
    };

    fetchAgents();
  }, []);

  return (
    <section className="addNewCourse">
      <div className="container body-content">
        <p className="admin-header-text">See all Agents</p>

        <div className="see-all-div">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
            {agents.map((agent) => (
              <AgentCard
                key={agent._id}
                firstName={agent.firstname}
                lastname={agent.lastname}
                email={agent.email}
                number={agent.number}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
