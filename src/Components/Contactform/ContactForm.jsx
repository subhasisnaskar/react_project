import React, { useState } from 'react';
import "./Contact.css";

const ContactForm = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
        formData.append("access_key", "7ac782ae-4131-4e76-a86a-2889d81230f4");
        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setResult("Message sent successfully!");
                event.target.reset();
            } else {
                console.error("Error:", data);
                setResult(data.message || "An error occurred.");
            }
        } catch (error) {
            console.error("Fetch error:", error);
            setResult("Network error. Please try again.");
        }
    };

         


    return (
        <>
            <div className="form-contact">
                <form onSubmit={onSubmit} className='con-form'>
                    <h2>Contact Me</h2>
                    <div className="mb-3 form_box">
                        <input type="text" className="form-control" placeholder="Your Name" name="name" required="required" />
                    </div>
                    <div className="mb-3 form_box">
                        <input type="email" className="form-control" placeholder="Your Email" name="email" required="required" />
                    </div>
                    <div className="mb-3 form_box">
                        <textarea className="form-control" placeholder="Your Message" rows="3" name="message" required="required"></textarea>
                    </div>
                    <div className="mb-3 form_box">
                        <input type="submit" className="form-control" name="" />
                    </div>
                </form>
                <span>{result}</span>
            </div>
        </>
    )
}

export default ContactForm
