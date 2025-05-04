import React from "react";
import img2 from "../../../public/illustration-working.svg";
import Form from "../../components/form/Form";
import brand from "../../../public/icon-brand-recognition.svg";
import detail from "../../../public/icon-detailed-records.svg";
import img3 from "../../../public/icon-fully-customizable.svg";
function Home() {
  return (
    <main>
      <section className="max-w-6xl mx-auto px-6 py-2 md:py-20">
        <div className="relative flex flex-col md:flex-row text-center md:text-left space-y-6 md:space-y-0">
          <div className="md:absolute right-0 top-0 md:max-w-xl mt-8">
            <img src={img2}></img>
          </div>
          <div className="space-y-4 md:mt-14 text-gray-700 md:text-2xl md:max-w-sm md:space-y-12 flex flex-col font-bold ">
            <h2 className="text-3xl md:text-5xl ">
              More than just a Shorter links
            </h2>
            <p className="text-gray-500">
              Build your brand recognition and get detailed insight on how your
              links are performing.
            </p>
          </div>
        </div>
        <Form />
        {/* another design section */}
      </section>

      <section className="max-w-6xl mx-auto  py-20 flex  items-center px-8 flex-col  text-center">
        <div className="space-y-10 ">
          <h1 className="text-3xl md:text-5xl font-bold text-slate-800">
            Advanced Statistics
          </h1>
          <p className="md:text-2xl text-gray-500">
            Track how your links performing across the we with our advanced
            Statistics dashboard
          </p>
        </div>

        {/* grid style */}
      </section>
      <section className=" px-8 max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between md:gap-20">
        <div className="relative flex flex-col md:flex-row mt-6 mx-auto   ">
          <div className="border md:h-80 py-10 px-6 text-left mt-6 space-y-4">
            <div className="  absolute  flex x-2 w-20 h-15 py-4 top-0 rounded-4xl  bg-slate-800 items-center justify-center">
              <img className="  " src={brand}></img>
            </div>
            <h1 className="text-3xl text-teal-900">Brand</h1>
            <p className="text-gray-500 font-bold">
              {" "}
              Boost your brand recognition with each click.Generic links dont
              means a thing. Branded links help instil confidence in your
              content
            </p>
          </div>
        </div>
        <div className="relative flex flex-col md:flex-row mt-6 md:mt-30 mx-auto   ">
          <div className="border md:h-80 py-10 px-6 text-left mt-6 space-y-4">
            <div className="  absolute  flex x-2 w-20 h-15 py-4 top-0 rounded-4xl  bg-slate-800 items-center justify-center">
              <img className="  " src={img3}></img>
            </div>
            <h1 className="text-3xl text-teal-900">Fully Customizable</h1>
            <p className="text-gray-500 font-bold">
              {" "}
             Improve brand awareness and content discoverability through customizable links,supercharging audience engagement
            </p>
          </div>
        </div>
        <div className="relative flex flex-col md:flex-row mt-6 md:mt-60 mx-auto   ">
          <div className="border md:h-80 py-10 px-6 text-left mt-6 space-y-4">
            <div className="  absolute  flex x-2 w-20 h-15 py-4 top-0 rounded-4xl  bg-slate-800 items-center justify-center">
              <img className="  " src={detail}></img>
            </div>
            <h1 className="text-3xl text-teal-900">Detailed Records</h1>
            <p className="text-gray-500 font-bold">
              {" "}
              Gain insight into who is clicking your links knowing when and where people engage with your content helps inform better decisions.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
