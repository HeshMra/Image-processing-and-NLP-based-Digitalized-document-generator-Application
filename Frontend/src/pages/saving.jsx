import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import doc1 from "../images/doc1.jpg";
import doc2 from "../images/doc2.jpg";
import doc3 from "../images/doc3.jpg";

function Save() {
  const [selected, setSelected] = useState("");

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const handleChange = (e) => {
    setSelected(e.target.value);
  };

  return (
    <div className="c-body">
      <div className="form-body-common">
        <div className="body-content mt-auto flex flex-wrap">


          <div className="panel-options w-full p-[10px] flex flex-wrap justify-between">
            
          <span className="p-3 bg-white rounded-lg mt-3">Document type : <span className="text-blue-700 text-bold"> Business </span></span>
            <span className="p-3 bg-white rounded-lg mt-3">Deadline : <span className="text-blue-700 text-bold"> DD:MM:YY </span></span>
            <span className="p-3 bg-white rounded-lg mt-3">Expire in : <span className="text-red-500 text-bold"> _ Days </span></span>
            
          </div>



          <div className="slider-panel p-5 w-full md:w-1/3 px-4">
            <Slider {...settings}>
              <div className="slider-container">
                <img src={doc1} alt="Image 1" />
              </div>
              <div className="slider-container">
                <img src={doc2} alt="Image 2" />
              </div>
              <div className="slider-container">
                <img src={doc3} alt="Image 3" />
              </div>
            </Slider>
            <div className="slider-arrows mt-2 flex justify-center">
              <div className="slider-arrow-prev mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M13.293 4.293a1 1 0 0 0-1.414 0L6.586 9l5.707 5.707a1 1 0 1 0 1.414-1.414L9.414 9l4.879-4.879a1 1 0 0 0 0-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="slider-arrow-next ml-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.707 4.293a1 1 0 0 1 0 1.414L11.293 9l-4.586 4.586a1 1 0 0 1-1.414-1.414L8.586 9 6.293 6.707a1 1 0 0 1 0-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="content-panel w-full md:w-2/3 px-4 p-5">
            <div className="content-panel-container w-full  p-[10px] text-left font-link text-black">
              
              <h2 className="font-link text-white">Select the Document Format to continue</h2>
              
              <ul className="list-none mx-10">
                <li>
                  <label htmlFor="PNG">
                    <input
                      type="radio"
                      id="apple"
                      name="fruit"
                      value="apple"
                      checked={selected === "PNG"}
                      onChange={handleChange}
                    />
                    <span className="px-2  text-white">PNG</span>
                  </label>
                </li>
                <li>
                  <label htmlFor="JPG">
                    <input
                      type="radio"
                      id="coke"
                      name="drink"
                      value="coke"
                      checked={selected === "JPG"}
                      onChange={handleChange}
                    />
                    <span className="px-2  text-white">JPG</span>
                  </label>
                </li>
                <li>
                  <label htmlFor="PDF">
                    <input
                      type="radio"
                      id="mango"
                      name="fruit"
                      value="mango"
                      checked={selected === "PDF"}
                      onChange={handleChange}
                    />
                    <span className="px-2  text-white">PDF</span>
                  </label>
                </li>

                <li>
                  <label htmlFor="MS Word">
                    <input
                      type="radio"
                      id="MS Word"
                      name="format"
                      value="MS Word"
                      checked={selected === "MS Word"}
                      onChange={handleChange}
                    />
                    <span className="px-2  text-white">MS Word</span>
                  </label>
                </li>

                <li>
                  <label htmlFor="Text file">
                    <input
                      type="radio"
                      id="Text file"
                      name="format"
                      value="Text file"
                      checked={selected === "Text file"}
                      onChange={handleChange}
                    />
                    <span className="px-2  text-white">Text file</span>
                  </label>
                </li>
              </ul>
            </div>
          </div>


        <div className=" w-full control-options flex fles-wrap justify-end mx-1">
          <button className="btn bg-white text-blue-600 text-bold"> Proceed to get the Document</button>
          
        </div>


        </div>
      </div>
    </div>
  );
}

export default Save;
