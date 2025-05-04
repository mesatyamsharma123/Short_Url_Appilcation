import React from "react";
import img2 from "../../../public/illustration-working.svg";
import Form from "../../components/form/Form";
function Home() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-2 md:py-20">
      <div className="relative flex flex-col md:flex-row text-center md:text-left space-y-6 md:space-y-0">
        <div className="md:absolute right-0 top-0 md:max-w-xl mt-8">
          <img  src={img2}></img>
        </div>
        <div className="space-y-4 md:mt-14 text-gray-700 md:text-2xl md:max-w-sm md:space-y-12 flex flex-col font-bold ">
          <h2 className="text-3xl md:text-5xl ">More than just a Shorter links</h2>
          <p className="text-gray-500">
            Build your brand recognition and get detailed insight on how your
            links are performing.
          </p>
        </div>
      </div>
      <Form/>
    </section>
  );
}

export default Home;
