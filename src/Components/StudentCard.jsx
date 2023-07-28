import React from "react";

const StudentCard = ({
  firstName,
  lastname,
  email,
  phone,
  photo,
  id,
  onDelete,
}) => {
  const HandleDelete = (id) => {
    onDelete(id);
  };
  return (
    <div className="col see-all-col">
      <div className="see-all-card">
        <img
          src={photo}
          alt="Yet to update Image"
          className="card-img-top see-all-card-img"
        />

        {/* you can comment out my tailwind styles */}
        <div className="see-all-card-body text-center text-sm font-bold">
          <p className="see-all-card-title">
            {firstName} {lastname}
          </p>
          <p className="see-all-card-title">{email}</p>
          <p className="see-all-card-title">{phone}</p>
          <div class="d-grid">
            <button
              onClick={() => {
                HandleDelete(id);
              }}
              type="button"
              class="btn btn-outline-danger"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentCard;
