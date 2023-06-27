
import React, { useState, useEffect } from "react";


function Download()
{

    const [countdown, setCountdown] = useState(10);

    
  useEffect(() => {
    let timer;
    if (countdown > 0) {
      timer = setInterval(() => {
        setCountdown(countdown - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [countdown]);

    return (

    <div className="c-body">
        <div className="container_sb">
          <div className="form-body p-[20px]">
                <div className="body-content mt-[20px] ">
                <p className="text-white">
              Your download will start within{" "}
              <span className="timeleft text-sky-500">{countdown}</span>{" "}
              seconds. If not please{" "}
              <span className="link-click  text-sky-500 text-bold cursor-pointer underline">
                Click here
              </span>
            </p>
                    <p className="text-left mt-[20px] text-white">Dear User,</p>
                    <p className="text-left mt-[20px] text-white">Thank you for using Digi Doc Gen, if you want to have the backup of your created document please login to the site. </p>
                    <p className="text-left mt-[20px] text-white">Thank You, <br/>Have a nice day!</p>
                    <p className="text-left mt-[20px] text-white">Team Digi Doc Gen</p>
                </div>


                <div className="option-panel mt-[25px] text-center flex flex-col sm:flex-row justify-center items-center ">
                    <div className="info  bg-white rounded-lg drop-shadow-lg mr-0 sm:mr-4 mb-4 sm:mb-0 w-[180px] ">
                        <p>Documet Type</p> <span className="doctype text-blue-600 text-bold ">Business</span>
                    </div>

                    <div className="info  bg-white rounded-lg drop-shadow-lg mr-0 sm:mr-4 mb-4 sm:mb-0 w-[180px] ">
                        <p>Expire In</p> <span className="doctype text-purple-600 text-bold">DD/MM/YY</span>
                    </div>

                    <div className="info  bg-white rounded-lg drop-shadow-lg mr-0 sm:mr-4 mb-4 sm:mb-0 w-[180px] ">
                        <p>Time Left</p> <span className="doctype text-red-600 text-bold">5 Days</span>
                    </div>
              
                </div>


            </div>


          
        </div>
  
    </div>
    );
}

export default Download;