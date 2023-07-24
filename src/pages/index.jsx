import Image from "next/image";
import { useRouter } from "next/router";
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
      setLoading(true);
      const response = await Axios.post(LOGIN_URL, JSON.stringify(data), {
        headers: {
          "Content-Type": "application/json",
        },
      });
      Cookies.set("authToken", response?.data?.token, { expires: 7 });
      const cookies = Cookies.get("authToken");
      toast.success("Successful admin Login ✅");
      router.push("/Admin");
      emailref.current.value = "";
      passwordref.current.value = "";
    } catch (error) {
      setLoading(false);
      if (!error?.response) {
        toast.error("Error: No server response!");
      } else {
        toast.error(`Error ${error.response?.status}`);
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
