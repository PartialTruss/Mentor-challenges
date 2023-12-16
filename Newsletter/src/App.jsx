import { useState } from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const features = [
    "Product discovery and building what matters",
    "Measuring to ensure updates are a success",
    " And much more! ",
  ];

  const listItems = features.map((feature) => (
    <li key={feature} className="flex gap-3 xl:leading-9 leading-6">
      <img src="icon-list.svg" alt="" />
      {feature}
    </li>
  ));

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isVisible, setIsVisible] = useState(true);
  const [isVerified, setIsVerified] = useState(false);
  const [email, setEmail] = useState("");

  const onSubmit = (data) => {
    setEmail(data.email);
    console.log(data);
    setIsVisible(!isVisible);
    setIsVerified(true);
  };

  const returnToFirstComponent = () => {
    setIsVerified(false);
    setIsVisible(true);
  };

  return (
    <>
      {isVisible && (
        <div className=" min-h-[100vh] flex justify-center items-center ">
          <div className="container flex flex-col xl:flex-row bg-slate-50 xl:w-2/4 h-3/4 xl:p-4  rounded-3xl">
            <div className="left-side-info p-4 order-last xl:order-first">
              <div className="flex flex-col items justify-evenly h-full">
                <h1 className="text-[#242742] font-bold text-4xl">
                  {" "}
                  Stay updated!
                </h1>
                <p className="text-black mt-5">
                  Join 60,000+ product managers receiving monthly updates on:
                </p>
                <ul className=" text-black">{listItems}</ul>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className=" mt-5 flex flex-col gap-2"
                >
                  <div>
                    <label htmlFor="email" className="text-[#242742]">
                      Email address
                    </label>
                    <br />
                    <input
                      className="w-[96%] xl:w-[86%] h-[2.81rem] px-4 border rounded-md border-[#9294a0] bg-white"
                      id="email"
                      placeholder="email@company.com"
                      {...register("email", {
                        required: "Email is required",
                        validate: {
                          maxLength: (v) =>
                            v.length <= 50 ||
                            "The email should have at most 50 characters",
                          matchPattern: (v) =>
                            /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
                              v
                            ) || "Email address must be  valid !",
                        },
                      })}
                    />
                    <section>
                      {errors.email?.message && (
                        <small className="text-red-700 text-md">
                          {errors.email.message}
                        </small>
                      )}
                    </section>
                  </div>
                  <button
                    type="submit"
                    className="bg-[#242742]
                 text-white w-[96%] xl:w-[86%] h-11 rounded-lg hover:bg-gradient-to-r from-[#FF5555] to-[#FF6A6A]"
                  >
                    Subscribe to monthly newsletter
                  </button>
                </form>
              </div>
            </div>
            <div className="right-side-image  ">
              <img
                className="xl:block hidden"
                src="illustration-sign-up-desktop.svg"
                alt=""
              />
              <img
                className="xl:hidden block"
                src="illustration-sign-up-mobile.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      )}
      {isVerified && (
        <div className="main-container min-h-[100vh] flex justify-center items-center ">
          <div className=" mx-3 inner-container bg-white w-full xl:w-1/4 h-full p-11 rounded-3xl">
            <div className="flex flex-col gap-2">
              <img src="icon-success.svg" alt="" width={45} />
              <h1 className="font-bold text-4xl text-black">
                Thanks for <br /> subscribing!
              </h1>
              <section className="w-">
                <p className=" text-black">
                  A confirmation email has been sent to {email}. Please open it
                  and click the button inside to confirm your subscription.
                </p>
              </section>
              <button
                className="bg-[#242742] text-white rounded-lg h-10 hover:bg-gradient-to-r from-[#FF5555] to-[#FF6A6A]"
                onClick={returnToFirstComponent}
              >
                Dismiss message
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
