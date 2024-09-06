import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

function Gallery() {
  const [images, setImages] = useState([]);

  function handleImageChange(e) {
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      if (fileReader.readyState === fileReader.DONE) {
        setImages((prevImages) => [...prevImages, fileReader.result]);
      }
    };
  }

  function handleNext() {
    const gallery = document.getElementById("gallery");
    gallery.scrollLeft += 200;
  }

  function handlePrev() {
    const gallery = document.getElementById("gallery");
    gallery.scrollLeft -= 200;
  }

  return (
    <div className="flex gap-5 bg-[linear-gradient(180deg,rgba(40,40,40,0.1)0%,rgba(248,248,248,0.1)100%),linear-gradient(0deg,rgba(255,255,255,0.05),rgba(255,255,255,0.05))] p-6 rounded-xl shadow-custom-5">
      <div className="flex flex-col gap-custom-105">
        <p className="border border-gray-400 text-gray-400 rounded-full size-4 p-1 text-sm font-medium flex justify-center items-center">
          ?
        </p>
        <div className="grid grid-cols-2 gap-0.5">
          <p className="bg-gray-400 size-1" style={{ borderRadius: "1px" }}></p>
          <p className="bg-gray-400 size-1" style={{ borderRadius: "1px" }}></p>
          <p className="bg-gray-400 size-1" style={{ borderRadius: "1px" }}></p>
          <p className="bg-gray-400 size-1" style={{ borderRadius: "1px" }}></p>
          <p className="bg-gray-400 size-1" style={{ borderRadius: "1px" }}></p>
          <p className="bg-gray-400 size-1" style={{ borderRadius: "1px" }}></p>
        </div>
      </div>
      <div>
        <div className="flex gap-10 items-center mb-4 font-medium">
          <div className="flex space-x-44 text-white">
            <p className="bg-black p-3 text-[20px] rounded-[20px] w-[149px] text-center">
              Gallery
            </p>
            <input
              type="file"
              accept="image/*"
              id="img"
              className="hidden"
              onChange={handleImageChange}
            />
            <label
              htmlFor="img"
              className="bg-gray-700 p-3 rounded-full w-32 shadow-custom-2 text-center cursor-pointer"
            >
              + ADD IMAGE
            </label>
          </div>
          <div className="flex space-x-3">
            <button
              className="bg-black shadow-custom-2 rounded-full text-white size-[45px] flex items-center justify-center"
              onClick={handlePrev}
            >
              <FaArrowLeft />
            </button>
            <button
              className="bg-black shadow-custom-2 rounded-full text-white size-[45px] flex items-center justify-center"
              onClick={handleNext}
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
        {images.length === 0 ? (
          <div className="flex overflow-x-auto gap-2 hideScrollbar">
            <img
              src="https://placehold.co/200"
              alt=""
              className="rounded-3xl w-[190px] h-[179px]"
            />{" "}
            <img
              src="https://placehold.co/200"
              alt=""
              className="rounded-3xl w-[190px] h-[179px]"
            />{" "}
            <img
              src="https://placehold.co/200"
              alt=""
              className="rounded-3xl w-[190px] h-[179px]"
            />
          </div>
        ) : (
          <div
            id="gallery"
            className="flex overflow-x-auto gap-2 hideScrollbar"
            style={{ scrollBehavior: "smooth" }}
          >
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="Gallery Item"
                className="rounded-3xl w-[190px] h-[179px]"
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Gallery;
