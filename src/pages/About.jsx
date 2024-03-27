import { useState } from 'react';
import './About.css';

function About() {
    // contactVisible
    const [contactVisible, setCountactVisible] = useState(false);

    function showData(){
        setCountactVisible(!contactVisible);
    }

    return (
        <div className="about page">
            <h3>Contact Us</h3>

        {contactVisible ? 
        <div className="box">
            <p>
                To get in touch with me, please email:
                <b> zero3095@hotmail.com</b>.
            </p>

        </div>
        : null}
        
        <button onClick={showData} className="btn btn-outline-dark">
            View Contact info</button>
        </div>
    );

}

export default About;