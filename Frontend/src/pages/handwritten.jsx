import React, { useState } from "react";
import { Link } from "react-router-dom";

function Handwritten() {
  const [selectedFile, setSelectedFile] = useState(null);

  const fileSelectedHandler = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const fileUploadHandler = () => {
    // Add code to handle file upload
  };

  const dragOverHandler = (event) => {
    event.preventDefault();
  };

  const dropHandler = (event) => {
    event.preventDefault();
    setSelectedFile(event.dataTransfer.files[0]);
  };

  return (
    <div className="signup-body">
      <div className="container_sb">
      
        <div className="form-body">
        {/* <div className="file-path text-left text-white">
            <span> Home / Handwriten Images insertion page </span>
        </div> */}
          <div
            className="mt-[50px] border-dashed border-2 border-sky-500 p-[60px]"
            onDragOver={dragOverHandler}
            onDrop={dropHandler}
          >
            <i className="fa fa-cloud-upload text-[160px] text-white"></i>
            <label htmlFor="file-upload" className="custom-file-upload cursor-pointer">
              Drag you Image file or Choose File
            </label>
            <input id="file-upload" type="file" onChange={fileSelectedHandler} style={{ display: "none" }} />
            <button onClick={fileUploadHandler} className="p-4 bg-white rounded-lg w-48 uppercase text-bold mt-[20px]">
              Upload
            </button>
          </div>

          <div className="upload-status">
            {selectedFile && <p><strong>Selected file:</strong> {selectedFile.name}</p>}
          </div>
        </div>
      </div>

      <div className="text-center mt-[20px]">
        <Link to="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">
          Back to Options
        </Link>
      </div>
    </div>
  );
}

export default Handwritten;
