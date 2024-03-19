/**
 *  Components:
 * are functions
 * start with capital letters 
 * should always return something 
 * 
 * are usually exported
 */
import "./Navbar.css";

function Navbar(){
    return (
        <div>
        <nav>
            <ul>
            <li>
                <a aria-current="page" href="#">Home</a>
            </li>
            <li>
                <a href="#">About</a>
            </li>
            <li>
                <a href="#">Contact</a>
            </li>
                </ul>
        </nav>
        </div>
    );
};

export default Navbar;