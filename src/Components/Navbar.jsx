import {Link} from "react-router-dom";
const myStyle = {
    colour:"white",
    backgroundColor:"red",
    padding:"10 px",
}

function Navbar(){
    
    
    }
    return(
        <nav>
            <ul style={myStyle}>
                <li>
                    <Link to ="/about">About</Link>
                </li>
                <li>
                    <Link to ="/services">Services</Link>
                </li>
                <li>
                    <Link to ="/contact"></Link>
                </li>
            </ul>
        </nav>
    )
    
export default Navbar;