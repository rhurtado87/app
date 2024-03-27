
import "./Footer.css";

function Footer(){
    return(
        <footer className="bg-dark text-white sticky-bottom">
        <div className="container text-center">
        <div className="row">
            <div className="col-md-6">
            <h5>About Us</h5>
            <p>We are your one-stop shop for all your Commander needs!</p>
            </div>
            <div className="col-md-6">
            <h5>Online Site by</h5>
            <p>Ricardo Hurtado</p>
            </div>
        </div>
        <div className="row mt-3">
            <div className="col">
            <p>&copy; {new Date().getFullYear()} Card Shop</p>
            </div>
        </div>
        </div>
    </footer>
    );
}

export default Footer;