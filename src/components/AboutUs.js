import React from "react";
import { IoPawSharp } from "react-icons/io5";
function AboutUs() {

    return (
        <div>
            <div className="container fade-in card">
                <h2 className="card-title">How we started  <IoPawSharp/></h2> 
                <p className="card-description">
                At Pet Heaven, we believe that every pet deserves a loving home. Founded in 2010 by John Doe, our mission is to provide a safe and caring environment for pets who have been abandoned or no longer have a place to call home. What began as a small effort to care for stray cats and dogs in John's neighborhood has blossomed into a full-fledged charity organization dedicated to the welfare of pets in need.
                <br /> <br />
                Our organization specializes in caring for abandoned pets, including those surrendered by their owners who are no longer able to care for them. By working tirelessly with a team of compassionate staff and vliunteers, we strive to give these pets a second chance at finding a loving family.
                </p>
            </div>

            <div className="container fade-in card">
                <h2 className="card-title">Our Mission <IoPawSharp/></h2> 
                <p className="card-description">
                We aim to:</p>
                <li>Rescue and care for abandoned pets, ensuring their physical and emotional well-being.</li>
                <li>Facilitate the adoption of pets into suitable and loving homes.</li>
                <li>Provide support and resources to pet owners who can no longer care for their pets.</li>
                <li>Foster a community of pet lovers through membership and engagement.</li>
                
            </div>

            <div className="container fade-in card">
                <h2 className="card-title"> How you can help <IoPawSharp/></h2>
                <p className="card-description"></p>
                    There are many ways you can support our cause: <br /> <br />
                    <li>Adopt a pet from our shelter and give them a loving home.</li>
                    <li>Donate to help cover the costs of food, medical care, and shelter for our pets.</li>
                    <li>Volunteer your time to help care for our pets and assist with daily operations.</li>
                    <li>Spread the word about our organization and encourage others to get involved.</li>
                    <p>If you are passionate about animal welfare and want to make a difference in the lives of pets in need, we invite you to join us in our mission. Together, we can create a brighter future for all pets.
                    </p>
            </div>
        </div>
    );
}

export default AboutUs;