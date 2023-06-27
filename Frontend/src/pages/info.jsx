import React from "react";



function Info()
{


    return (



        <div className="c-body">
      
            <div className="form-body-common p-[20px]  info-c-body">
                <div className="body-content mt-[10px] p-[20px] ">
                {/* <div className="file-path text-left text-white">
                    <span> Home / Allow Options </span>
                </div>  */}
                        <div className="info-panel align-middle text-center">
                            <div className="flex flex-wrap w-full align-middle items-center justify-between p-[20px]">
                                <span className="font-link float-left text-white text-[18pt]">Allow read Outloud</span>
                               
                                <button className="btn float-right bg-white">Allow</button> 
                            </div>
                            
                            <div className="flex flex-wrap w-full align-middle items-center justify-between p-[20px]">   
                                <span className="font-link float-left text-white text-[18pt]">Allow Voice Commands</span>
                                
                                <button className="btn float-right bg-white">Allow</button> 
                            </div>
                           
                        </div>


                            <div className="flex flex-wrap align-middle items-center justify-between p-[20px]">   
                                <button className="btn  bg-white mx-auto">Proceed to browse files</button> 
                            </div>


                        <div className="about-info mt-[10px] font-link border-2 border-dashed p-5 rounded-lg border-blue-500">
                            <h3 className=" text-white text-[14pt]">About Options</h3>
                        
                            <div className="about-option-content text-white ">
                                <ul className="list-disc text-left mx-[10px]">
                                    <li>Read out loud is an option that user will allow to read the entire application procedures properly.</li>
                                    <li>Voice commands are use to add voice commands from the user to control the entire application.</li>
                                </ul>
                            </div>
                        </div>

                </div>
            </div>
        </div>
    );
}


export default Info;