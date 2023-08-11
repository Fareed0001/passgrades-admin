import React, { useState } from "react";

const Index = () => {
  const [showContent, setShowContent] = useState([false, false, false, false]);

  const toggleContent = (index) => {
    setShowContent((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <section className="addNewCourse">
      <div className="container-fluid dashboard-messages-body-content h-screen">
        <p className="admin-header-text">Received messages</p>

        <form className="d-flex search-div" role="search">
          <input className="form-control me-2" type="search" placeholder="Search by message title" aria-label="Search" />
          <button className="btn btn-outline-primary" type="submit">
            Search
          </button>
        </form>

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
          {[0, 1, 2, 3].map((index) => (
            <div className="col" key={index}>
              <div className="card">
                <div className="card-body">
                  <p className="card-title message-card-title">Message title</p>
                  {showContent[index] && (
                    <p className="card-text message-card-text">
                      the message enters here the message enters here
                      the message enters here the message enters here
                      the message enters here the message enters here
                      the message enters here the message enters here
                    </p>
                  )}
                  <div className="message-card-footer">
                    <small className="message-details-text" onClick={() => toggleContent(index)}>
                      {showContent[index] ? "Hide Details" : "Details"}
                    </small>
                    <small className="message-delete-text">delete</small>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Index;
