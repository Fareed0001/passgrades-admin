import AgentCard from "@/Components/AgentCard";
import Axios from "@/utils/Axios";
import { getagent, getagents } from "@/utils/queries";
import Cookies from "js-cookie";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { BiLoader } from "react-icons/bi";

const agenturl = "/agents";

const Index = () => {
  const [Loading, setLoading] = useState(false);
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    const fetchAgents = async () => {
      setLoading(true);
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
        setLoading(false);
      } catch (error) {
        console.log("Error fetching agent data:", error.message);
        setLoading(false);
        return null;
      }
    };

    fetchAgents();
  }, []);

  return (
    <>
      {Loading ? (
        <div className="h-screen w-screen bg-white fixed top-0 left-0 flex items-center justify-center">
          <div className="flex items-center justify-center gap-x-3">
            <BiLoader className="animate-spin text-blue-500 text-4xl" />
            <span className="text-base text-blue animate-bounce font-semibold  capitalize ">
              loading available agents
            </span>
          </div>
        </div>
      ) : (
        <section className="bg-[#ebeefd] h-full fixed w-full overflow-auto">
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
      )}
    </>
  );
};

export default Index;
