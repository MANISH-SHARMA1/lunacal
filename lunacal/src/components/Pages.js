import React, { useState } from "react";

function Pages() {
  const [selectedSection, setSelectedSection] = useState("About Me");

  const renderContent = () => {
    switch (selectedSection) {
      case "About Me":
        return (
          <>
            <p>
              Hello! I'm Dave, your sales rep here at Salesforce. I've been
              working at this awesome company for 3 years now.
            </p>
            <p>
              I was born and raised in Albany, NY, and have been living in Santa
              Carla for the past 10 years with my wife Tiffany and our
              4-year-old twin daughters.
            </p>
          </>
        );
      case "Experiences":
        return (
          <>
            <p>
              I have over 10 years of experience in sales and customer
              relationship management.
            </p>
            <p>
              I've worked with a variety of clients across different industries,
              helping them achieve their business goals.
            </p>
          </>
        );
      case "Recommended":
        return (
          <>
            <p>
              I highly recommend utilizing Salesforce's customer service tools
              to improve client satisfaction.
            </p>
            <p>
              Our platform's automation features can save you time and increase
              your team's productivity.
            </p>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex gap-5 text-gray-300 bg-[linear-gradient(180deg,rgba(40,40,40,0.1)0%,rgba(248,248,248,0.1)100%),linear-gradient(0deg,rgba(255,255,255,0.05),rgba(255,255,255,0.05))] text-[rgba(150,150,150,1)] p-6 rounded-xl shadow-custom-5">
      <div className="flex flex-col gap-custom-105">
        <p className="border border-gray-400 text-gray-400 rounded-full size-4 p-1 text-sm flex justify-center items-center">
          ?
        </p>
        <div className="grid grid-cols-2 gap-0.5">
          <p
            className="bg-gray-400 size-1"
            style={{ borderRadius: "1.16px" }}
          ></p>
          <p
            className="bg-gray-400 size-1"
            style={{ borderRadius: "1.16px" }}
          ></p>
          <p
            className="bg-gray-400 size-1"
            style={{ borderRadius: "1.16px" }}
          ></p>
          <p
            className="bg-gray-400 size-1"
            style={{ borderRadius: "1.16px" }}
          ></p>
          <p
            className="bg-gray-400 size-1"
            style={{ borderRadius: "1.16px" }}
          ></p>
          <p
            className="bg-gray-400 size-1"
            style={{ borderRadius: "1.16px" }}
          ></p>
        </div>
      </div>
      <div>
        <div className="flex gap-2 p-1 bg-black rounded-2xl shadow-custom-4">
          <p
            className={`w-48 text-center text-xl cursor-pointer px-6 py-2 rounded-2xl font-medium ${
              selectedSection === "About Me"
                ? "bg-gray-700 text-white shadow-custom-3"
                : ""
            }`}
            onClick={() => setSelectedSection("About Me")}
          >
            About Me
          </p>
          <p
            className={`w-48 text-center text-xl cursor-pointer px-6 py-2 rounded-2xl font-medium ${
              selectedSection === "Experiences"
                ? "bg-gray-700 text-white shadow-custom-3"
                : ""
            }`}
            onClick={() => setSelectedSection("Experiences")}
          >
            Experiences
          </p>
          <p
            className={`w-48 text-center text-xl cursor-pointer px-6 py-2 rounded-2xl font-medium ${
              selectedSection === "Recommended"
                ? "bg-gray-700 text-white shadow-custom-3"
                : ""
            }`}
            onClick={() => setSelectedSection("Recommended")}
          >
            Recommended
          </p>
        </div>

        <div className="mt-6 space-y-4 text-xl">{renderContent()}</div>
      </div>
      <div className="flex items-center w-2">
        <p className="w-full h-16 bg-gradient-to-b from-gray-500 to-gray-700 rounded"></p>
      </div>
    </div>
  );
}

export default Pages;
