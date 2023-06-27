import React from "react";
import '../footer.css';



const Footer =() => 
{
    return (

        <div className="footer">
            <div className="sb_footer section_padding">
                <div className="sb_footer-links">


                    <div className="sb_footer-links-div">
                        <h4>Quick Links</h4>
                        <a href="/home">
                            <p>Home</p>
                        </a>
                        <a href="/aboutus">
                            <p>About Us</p>
                        </a>
                        <a href="/features">
                            <p>Features</p>
                        </a>
                        <a href="/contact">
                            <p>Contact</p>
                        </a>
                    </div>



                    <div className="sb_footer-links-div">
                        <h4>Resources</h4>
                        <a href="/howtouse">
                            <p>How to use</p>
                        </a>
                        <a href="/pricing">
                            <p>Pricing and Packages</p>
                        </a>

                    </div>


                    <div className="sb_footer-links-div">
                        <h4>Extras</h4>
                        <a href="/tc">
                            <p>Terms & Conditions</p>
                        </a>
                        <a href="/pricing">
                            <p>Privacy Policy</p>
                        </a>

                    </div>


                    <div className="sb_footer-links-div">
                        <div className="sg-box">
                        <div className="suggest">
                            <div className="sug-topic">
                                <h3>Add your Suggestions here</h3>

                                <input type="text" placeholder="Your Email"/>
                               
                            </div>
                        </div>
                        </div>

                    </div>



                </div>
            </div>
        </div>
    )
}

export default Footer;