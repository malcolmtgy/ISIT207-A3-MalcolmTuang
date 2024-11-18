import React from "react";
import paynowImage from "../assets/paynow.jpg";
import {FaPaw} from "react-icons/fa";

const DonationPage = () => (
    <div className="container fade-in">
        <div className="card form-container">
            <h2 className="card-title">Monetary Donation  <FaPaw/></h2>
            <p className="card-description">For monetary donations
                Please transfer to the following account: 
                <ul>
                    <ol>Account Number: 123456789</ol>
                    <ol>Bank: Bank of Singapore</ol>
                    <ol>Account Name: Pet Heaven</ol>
                </ul>
                Alternatively, you can also donate via PayNow to UEN: 20202020A or scan the QR code below.<br /><br />
                <img src= {paynowImage} alt="QR Code" height={200} width={200}/>
            </p>

            <h2 className="card-title">In-kind Donation  <FaPaw/></h2>
            <p className="card-description">For in-kind donations, please drop off the items at our shelter located at 123 Pet Heaven Lane, Singapore 123456. 
                Alternatively, you can also arrange for a pick-up by calling us or messaging on Whatsapp @ 91450888. <br /><br />
                Accepted items include:
                <ul>
                    <li>Food (Dry and Wet)</li>
                    <li>Bedding</li>
                    <li>Leashes and Clilars</li>
                    <li>Medication</li>
                    <li>Bath supplies</li>
                    <li>Toys</li>
                </ul>
            </p>
        </div>
    </div>
);

export default DonationPage;