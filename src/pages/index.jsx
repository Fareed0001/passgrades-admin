import Image from "next/image";
import React from "react";

const index = () => {
  return (
    <section className="signinPage h-screen flex flex-col item-center justify-center ">
      <div className="container-fluid signin-container `">
        <div className="row ">
          <div className="col-12 col-lg-6 sign-in-first-col">
            <Image
              height={400}
              width={600}
              className="sign-in-img h-[]"
              src="/images/signin-image/sign-in.gif"
              alt="sign-in.gif"
            />
          </div>
          <div className="col-12 col-lg-6 sign-in-second-col">
            <div className="container">
              {/* <!-- FORM  --> */}
              <form
                className="row g-2 needs-validation form signin-form"
                validate=""
              >
                <div className="col-md-12">
                  <label
                    htmlFor="email"
                    className="form-label signin-form-label"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    required
                  />
                </div>

                <div className="col-md-12">
                  <label
                    htmlFor="inputPassword"
                    className="form-label signin-form-label"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="inputPassword"
                    required
                  />
                </div>

                {/* <!-- BOTTON  --> */}
                <div className="">
                  <button
                    className="btn btn-primary create-account-button"
                    type="submit"
                  >
                    Sign in
                  </button>
                </div>
                {/* <!-- BUTTON  --> */}
              </form>
              {/* <!-- FORM  --> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
