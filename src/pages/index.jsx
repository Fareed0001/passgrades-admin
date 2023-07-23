import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { useState, useRef } from "react";
import { toast } from "react-hot-toast";
import { BiLoader } from "react-icons/bi";

const Api_Url =
  "http://passmark.eu-north-1.elasticbeanstalk.com/api/v1/admin/login";

const Index = () => {
  const router = useRouter();
  const [Loading, setLoading] = useState(false);
  const emailref = useRef();
  const passwordref = useRef();

  const SubmitHandler = (event) => {
    event.preventDefault();
    const email1 = emailref.current.value;
    const password2 = passwordref.current.value;

    const data = {
      email: email1,
      password: password2,
    };
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer${Api_token}`,
      },
      body: JSON.stringify(data),
    };

    //     import axios from "axios";
    // import Cookies from "js-cookie";
    // import config from "../utils/config";
    // import BACKEND_URLS from "./urls";

    // export const configOptions = () => {
    //   if (typeof window === "undefined") return {};

    //   if (!Cookies.get(config.key.token)) return {};

    //   const accessToken = Cookies.get(config.key.token);

    //   if (accessToken) {
    //     return {
    //       headers: {
    //         Authorization: `Bearer ${accessToken}`,
    //       },
    //     };
    //   }
    //   return {};
    // };

    // export const instance = axios.create({

    setLoading(true);
    fetch(Api_Url, requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        } else {
          toast.success("🚀login sucessful");
          router.push("/Admin");
          setLoading(false);
        }
        return response.json(); // This is how you access the response data
      })
      .then((data) => {
        // Process the data as needed
        console.log("Response data:", data);
        // Check the success status if needed
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        console.error("Error:", error.message);
        setLoading(false);
        toast.error(error.message);
      });

    emailref.current.value = "";
    passwordref.current.value = "";
  };

  return (
    <section className="signinPage h-screen flex flex-col item-center justify-center ">
      {Loading && (
        <div className="h-screen w-screen fixed top-0 left-0 bg-[#ebeefd] z-30 flex items-center justify-center">
          <div className=" w-1/2 h-1/2 mx-auto z-[32] flex items-center justify-center ">
            <span className="flex text-4xl text-blue-500 capitalize">
              pass
              <Image
                src="/favicon.ico"
                alt="passmark logo"
                height={30}
                width={40}
                className="mx-2"
              />
              mark
            </span>
            <BiLoader className="animate-spin text-5xl text-[blue]" />
          </div>
        </div>
      )}
      <div className="container-fluid signin-container">
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
                onSubmit={SubmitHandler}
                className="row g-2 needs-validation form signin-form"
              >
                <div className="col-md-12">
                  <label
                    htmlFor="email"
                    className="form-label signin-form-label"
                  >
                    Email
                  </label>
                  <input
                    ref={emailref}
                    type="email"
                    className="form-control"
                    id="email"
                    // value={emailref}
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
                    ref={passwordref}
                    type="password"
                    className="form-control"
                    id="inputPassword"
                    // value={passwordref}
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

export default Index;
