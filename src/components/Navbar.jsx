/**
 *  Components:
 * are functions
 * start with capital letters 
 * should always return something 
 * 
 * are usually exported
 */
import "./Navbar.css";

const Navbar = () => {
    return (
    <nav>
        <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        </ul>
    </nav>
    );
};

export default Navbar;