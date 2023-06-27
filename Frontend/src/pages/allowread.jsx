import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'


function Allowread()
{



    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (date) => {
      setSelectedDate(date);
    };
  
    const handleSkip = () => {
      // handle skip button click
    };
  
    const handleOk = () => {
      // handle ok button click
    };


    return (

        <div className="c-body">
            <div className="form-body-common">
                <div className="body-content mt-[20px]">
                {/* <div className="file-path text-left text-white">
                    <span> Home / Handwriten Images insertion page / Handwritten Images conversion page / Deadline adding page</span>
                </div> */}
                <div className='w-full block text-[20pt]'>
                    <label htmlFor="deadline" style={{ alignSelf: 'flex-start' }} >Detected deadline</label>
                    <div >
                        <DatePicker
                        id="deadline"
                        selected={selectedDate}
                        onChange={handleDateChange}
                        dateFormat="MMMM d, yyyy"
                        className='text-center rounded-xl'
                        
                        />
                        <div className='columns-2 w-[50%] mx-auto my-5 '>
                            <div className="btn-column">
                                <button onClick={handleSkip} className='text-[12pt] bg-white px-[20px] rounded-full text-blue-700 uppercase text-bold shadow-slate-800 shadow-lg'>Skip</button>
                            </div>

                            <div className="btn-column">
                            <button onClick={handleOk} className='text-[12pt]  bg-white px-[20px] rounded-full text-blue-700 uppercase text-bold  shadow-slate-800 shadow-lg'>Ok</button>
                            </div>

                        </div>
                        
                    </div>



                    <label htmlFor="ManuallyED" style={{ alignSelf: 'flex-start' }}>Manually set deadline</label>
                    <div className=''>
                        <DatePicker
                        id="deadline"
                        selected={selectedDate}
                        onChange={handleDateChange}
                        dateFormat="MMMM d, yyyy"
                        className='text-center rounded-xl'
                        />

                        <div className='columns-2 w-[50%] mx-auto my-5 '>
                            <div className="btn-column">
                                <button onClick={handleSkip} className='text-[12pt] bg-white px-[20px] rounded-full text-blue-700 uppercase text-bold  shadow-slate-800 shadow-lg'>Skip</button>
                            </div>

                            <div className="btn-column">
                            <button onClick={handleOk} className='text-[12pt]  bg-white px-[20px] rounded-full text-blue-700 uppercase text-bold  shadow-slate-800 shadow-lg'>Ok</button>
                            </div>

                        </div>
                        
                    </div>


                    </div>


                    <button className="proceed my-[30px] px-[20px] bg-white rounded-full text-purple-700 text-bold">Proceed to convert</button>
                </div>
            </div>

        </div>

    );
}

export default Allowread;