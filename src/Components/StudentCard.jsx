import Image from "next/image";
import React from "react";

const StudentCard = (props) => {
  const { firstName, lastname, email, phonenumber } = props;
  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
      <div className="col see-all-col">
        <div className="see-all-card">
          <Image
            src="https://picsum.photos/id/64/200/300
"
            width={300}
            height={400}
            className="card-img-top see-all-card-img"
            alt=""
          />

          {/* you can comment out my tailwind styles */}
          <div className="see-all-card-body text-center text-sm font-bold">
            <p className="see-all-card-title">{firstName}</p>
            <p>{lastname}</p>
            <p>{email}</p>
            <p>{phonenumber}</p>
            <div class="d-grid">
              <button type="button" class="btn btn-outline-danger">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentCard;
