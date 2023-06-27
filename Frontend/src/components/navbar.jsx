import React , {useState} from "react";
import '../navbar.css'
import { Link } from 'react-router-dom';
import logowhite from '../images/logo-white.png'






function Navbar()
{




    const [active, setActive] = useState("nav_menu");
        const navToggle = () => {
            active === "nav_menu" 
            ? setActive("nav_menu nav_active") 
            : setActive ("nav_menu");
        };






    return (
        

        <nav className="nav font-link">
            <a href="#" className="nav_brand "> <img src={logowhite} alt="logo" className="w-[180px]"/> </a>

            <div className="file-path w-[90%] text-left flex flex-wrap absolute mt-[100px] overflow-hidden text-white">
                <span>Home / file path will be appear here </span>
            </div>


            <ul className={active}>
                <li className="nav_item"><a href="#" className="nav_link">Home</a></li>
                <li className="nav_item"><a href="#" className="nav_link">About Us</a></li>
                <li className="nav_item"><a href="#" className="nav_link">Features</a></li>
                <li className="nav_item"><a href="#" className="nav_link">Contact</a></li>
                <li className="nav_item"><a href="#" className="nav_link">Log in</a></li>
                
                
                <li className="nav_item">
                    
                        <div>
                        
                            <button type="button" className="nav-btn bg-white">
                                    Sign up  
                            </button>
                        </div>
                    
                </li>
            </ul>

            


            <div onClick={navToggle} className="nav_toggler">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>

            
        
        </nav>

    )
    
}


export default Navbar;