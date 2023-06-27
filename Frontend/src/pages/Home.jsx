import React , {useState} from "react";
import '../rootstyles.css';
import heroImage from '../images/hero1.jpg';
import herobanner from '../images/hero2.png';




const Home = () => {

    return (

        <div className="hero-banner">
            
        <img src={heroImage} alt="Hero Banner" />


        <div className="hero-content font-link">
            <div className="hero-heading-text">
            {/* <div className="file-path text-left text-white">
            <span> Home </span>
            </div> */}
                <h1>Your Ultimate Document<br/>generating partner</h1>
                <p>Click here to convert your hand written images <br/>into a fully digitalized document</p>
                <a href=""><button type="button" className="hero-btn bg-white">Start now</button></a>
            </div>


            <div className="hero-side-img">
                <img src={herobanner} alt="content image" />
            </div>


        </div>
        
    </div>
    )
}


export default Home;


