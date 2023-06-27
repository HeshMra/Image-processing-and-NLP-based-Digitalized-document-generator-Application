import React, { useState, useEffect} from "react";

import doc1 from "../images/doc1.jpg";

function PreviewImages() {

  const [imageCount, setImageCount] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [hasAddImageBox, setHasAddImageBox] = useState(false);

  // Function to add one more image box
  const addImageBox = () => {
    setImageCount(imageCount + 1);
    setHasAddImageBox(true);
  }

  // Function to handle pagination clicks
  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

  // Calculate the total number of pages based on image count
  useEffect(() => {
    setTotalPages(Math.ceil(imageCount / 4));
  }, [imageCount]);

  return (
    <div className="c-body">
      
        <div className="form-body-common p-[20px]  ">
              {/* <div className="file-path text-left text-white">
                    <span> Home / Handwriten Images insertion page / Handwritten Images conversion page </span>
                </div> */}
          <div className="body-content mt-[20px] border-dashed border-2 border-sky-500 rounded-lg p-[20px]">
            <h2 className="font-link text-left text-5xl text-white">
              Check your Images here
            </h2>

            <div className="image-set w-full grid grid-cols-4 gap-4 mt-6">
              {[...Array(imageCount)].map((x, index) => {
                // Determine the row and column number of the image box
                const rowNumber = Math.floor(index / 4) + 1;
                const columnNumber = (index % 4) + 1;

                // Only show image boxes that should be visible on current page
                if (rowNumber === currentPage) {
                  return (
                    <div
                      key={index}
                      className="image-box mb-2"
                      style={{ gridColumn: columnNumber }}
                    >
                      <img src={doc1} alt="Doc1"/>
                    </div>
                  );
                } else {
                  return null;
                }
              })}
              {/* Add an extra image box */}
              {!hasAddImageBox && imageCount < 8 && (
                <div
                  className="image-box bg-white mb-2 cursor-pointer"
                  onClick={addImageBox}
                  style={{ gridColumn: (imageCount % 4) + 1 }}
                >
                  <p>Click to add image</p>
                </div>
              )}
            </div>

            {/* Show pagination if there are more than 8 images */}
            {imageCount > 8 && (
              <div className="pagination mt-4">
                {[...Array(totalPages)].map((x, index) => {
                  const pageNumber = index + 1;
                  return (
                    <button
                      key={index}
                      className={`pagination-button ${
                        pageNumber === currentPage ? "active" : ""
                      }`}
                      onClick={() => handlePageClick(pageNumber)}
                    >
                      {pageNumber}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
          

          <button className=" p-2 my-4 bg-white rounded-lg text-blue-700 text-bold">Submit to proceed</button>
        </div>

                
        
      
    </div>
  );
}

export default PreviewImages;
