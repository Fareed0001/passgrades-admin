import Image from "next/image";
import React from "react";

const index = () => {
  return (
    <section className="bg-[#ebeefd] h-full fixed w-full overflow-auto py-10">
      <div className="container  new-course-container h-screen">
        <p className="admin-header-text">Verify new agent</p>

        <div className="agent-verification-div">
          {/* <!-- NEW AGENT CARD START  --> */}
          <div className="row row-cols-1 row-cols-md-2  row-cols-lg-3 g-4">

            {/* <div className="col agent-col">
              <div className="new-agent-card">
                <Image src="" className="card-img-top courses-card-img" alt="sat" />
                <div className="agent-card-body">
                  <p className="agent-card-title">Temitope David</p>
                  <div className="row">
                    <div className="col-6 d-grid">
                      <button
                        type="button"
                        className="btn agent-card-button btn-outline-primary"
                      >
                        Accept
                      </button>
                    </div>
                    <div className="col-6 d-grid">
                      <button
                        type="button"
                        className="btn agent-card-button btn-outline-danger"
                      >
                        Reject
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}

          </div>
        </div>
      </div>

      {/* <!-- NEW AGENT CARD END  --> */}
    </section>
  );
};

export default index;
