import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { useState, useRef } from "react";
import { toast } from "react-hot-toast";
import { BiLoader } from "react-icons/bi";
import Axios from "@/utils/Axios";
import Cookies from "js-cookie";

const LOGIN_URL = "/login";

const Index = () => {
  const router = useRouter();
  const [Loading, setLoading] = useState(false);
  const emailref = useRef();
  const passwordref = useRef();

  const SubmitHandler = async (event) => {
    event.preventDefault();
    const emaildata = emailref.current.value;
    const passworddata = passwordref.current.value;
    const data = {
      email: emaildata,
      password: passworddata,
    };
    try {
      const response = await Axios.post(LOGIN_URL, JSON.stringify(data), {
        headers: {
          "Content-Type": "application/json",
        },
      });
      Cookies.set("authToken", response?.data?.token, { expires: 7 });
      const cookies = Cookies.get("authToken");
      toast.success("sucessful admin Login ✅");
      router.push("/Admin");
      emailref.current.value = "";
      passwordref.current.value = "";
      setLoading(false);
    } catch (error) {
      if (!error?.response) {
        toast.error("Error: No server response");
      } else if (error.response?.status === 200) {
        toast.error("Error 200");
      } else if (error.response?.status === 201) {
        toast.error("Created");
      } else if (error.response?.status === 202) {
        toast.error("Error 202");
      } else if (error.response?.status === 203) {
        toast.error("Error 203");
      } else if (error.response?.status === 204) {
        toast.error("Error 204");
      } else if (error.response?.status === 205) {
        toast.error("Error 205");
      } else if (error.response?.status === 206) {
        toast.error("Error 206");
      } else if (error.response?.status === 207) {
        toast.error("Error 207");
      } else if (error.response?.status === 208) {
        toast.error("Error 208");
      } else if (error.response?.status === 209) {
        toast.error("Error 209");
      } else if (error.response?.status === 226) {
        toast.error("Error 226");
      }

      else if (error.response?.status === 300) {
        toast.error("Error 300");
      } else if (error.response?.status === 301) {
        toast.error("Err 301");
      } else if (error.response?.status === 302) {
        toast.error("Error 302");
      } else if (error.response?.status === 303) {
        toast.error("Error 303");
      } else if (error.response?.status === 304) {
        toast.error("Error 304");
      } else if (error.response?.status === 305) {
        toast.error("Error 305");
      } else if (error.response?.status === 306) {
        toast.error("Error 306");
      } else if (error.response?.status === 307) {
        toast.error("Error 307");
      } else if (error.response?.status === 308) {
        toast.error("Error 308");
      } else if (error.response?.status === 309) {
        toast.error("Error 309");
      }

      else if (error.response?.status === 400) {
        toast.error("Error 400");
      } else if (error.response?.status === 401) {
        toast.error("Err 401");
      } else if (error.response?.status === 402) {
        toast.error("Error 402");
      } else if (error.response?.status === 403) {
        toast.error("Error 403");
      } else if (error.response?.status === 404) {
        toast.error("Error 404");
      } else if (error.response?.status === 405) {
        toast.error("Error 405");
      } else if (error.response?.status === 406) {
        toast.error("Error 406");
      } else if (error.response?.status === 407) {
        toast.error("Error 407");
      } else if (error.response?.status === 408) {
        toast.error("Error 408");
      } else if (error.response?.status === 409) {
        toast.error("Error 409");
      }

      else if (error.response?.status === 410) {
        toast.error("Error 410");
      } else if (error.response?.status === 411) {
        toast.error("Err 411");
      } else if (error.response?.status === 413) {
        toast.error("Error 412");
      } else if (error.response?.status === 414) {
        toast.error("Error 413");
      } else if (error.response?.status === 415) {
        toast.error("Error 414");
      } else if (error.response?.status === 416) {
        toast.error("Error 416");
      } else if (error.response?.status === 417) {
        toast.error("Error 417");
      } else if (error.response?.status === 418) {
        toast.error("Error 418");
      } else if (error.response?.status === 420) {
        toast.error("Error 420");
      } else if (error.response?.status === 422) {
        toast.error("Error 422");
      } else if (error.response?.status === 423) {
        toast.error("Error 423");
      } else if (error.response?.status === 424) {
        toast.error("Error 424");
      } else if (error.response?.status === 425) {
        toast.error("Error 425");
      } else if (error.response?.status === 426) {
        toast.error("Error 426");
      } else if (error.response?.status === 429) {
        toast.error("Error 429");
      } else if (error.response?.status === 431) {
        toast.error("Error 431");
      } else if (error.response?.status === 444) {
        toast.error("Error 444");
      } else if (error.response?.status === 450) {
        toast.error("Error 450");
      } else if (error.response?.status === 451) {
        toast.error("Error 451");
      } else if (error.response?.status === 494) {
        toast.error("Error 494");
      }

      else if (error.response?.status === 500) {
        toast.error("Error 500");
      } else if (error.response?.status === 501) {
        toast.error("Err 501");
      } else if (error.response?.status === 502) {
        toast.error("Error 502");
      } else if (error.response?.status === 503) {
        toast.error("Error 503");
      } else if (error.response?.status === 504) {
        toast.error("Error 504");
      } else if (error.response?.status === 505) {
        toast.error("Error 505");
      } else if (error.response?.status === 506) {
        toast.error("Error 506");
      } else if (error.response?.status === 507) {
        toast.error("Error 507");
      } else if (error.response?.status === 508) {
        toast.error("Error 508");
      } else if (error.response?.status === 509) {
        toast.error("Error 509");
      } else if (error.response?.status === 510) {
        toast.error("Error 510");
      } else {
        toast.error("Login Failed");
        console.log(error);
      }
    }
  };

  return (
    <section className="signinPage h-screen flex flex-col item-center justify-center ">
      {Loading && (
        <div className="h-screen w-screen fixed top-0 left-0 bg-[#ebeefd] z-30 flex items-center justify-center">
          <div className=" w-1/2 h-1/2 mx-auto z-[32] flex items-center justify-center ">
            <span className="flex text-4xl text-blue-500 capitalize">
              <Image
                src="/favicon.ico"
                alt="passmark logo"
                height={30}
                width={40}
                className="mx-2"
              />
              PassGrades
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

// fetch(Api_Url, requestOptions)
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     } else {
//       toast.success("🚀login sucessful");
//       router.push("/Admin");
//       setLoading(false);
//     }
//     return response.json(); // This is how you access the response data
//   })
//   .then((data) => {
//     // Process the data as needed
//     console.log("Response data:", data);
//     // Check the success status if needed
//   })
//   .catch((error) => {
//     // Handle any errors that occurred during the request
//     console.error("Error:", error.message);
//     setLoading(false);
//     toast.error(error.message);
//   });
