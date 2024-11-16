import React from "react";
import { IoPawSharp } from "react-icons/io5";
function AboutUs() {

    return (
        <div>
        <div className="container fade-in card">
            <h2 className="card-title">How we started  <IoPawSharp/></h2> 
            <p className="card-description">
            Two friends, John and Jane, frequently cared for stray animals in their community.
            They realized that there was a need for a safe and loving environment for pets in need. <br></br><br></br>
            Hence, Pet Heaven was born, to fill the first gap. <br></br><br></br>
            Providing a safe and loving environment for pets in need.
            With the help of volunteers and donations, Pet Heaven has been able to provide shelter, food, and medical care for hundreds of pets in need.

            </p>
        </div>
    
        <div className="container fade-in card">
            <h2 className="card-title">Our Team</h2>
            <p className="card-description">
            Our team is made up of passionate individuals who are dedicated to finding loving homes for pets in need. 
            We are committed to providing a safe and loving environment for every pet, and we are here to support you through the adoption process and beyond.
            </p>
        </div>
        </div>
    );
}

export default AboutUs;