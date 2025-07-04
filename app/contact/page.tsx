"use client";
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from 'react';
import Banner from '@/components/Banner';
import InputField from "@/components/InputField";
import TextareaField from "@/components/TextareaField";
import GridContainer from '@/components/Container';
import RadioForm from '@/components/RadioForm';

export default function ContactUs() {
    // Form state
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    // Error state
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [subjectError, setSubjectError] = useState("");
    const [messageError, setMessageError] = useState("");

    // Submit button enabled
    const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

    // Success message visibility
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    // Validation regexes
    const nameRegex = /^[A-Za-z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validation functions
    const validateName = (value:string) => {
        if (!value) return "Full name is required"; //check if empty
        if (value.length < 2)
        return "Name should be at least 2 characters long"; //check length
        if (!nameRegex.test(value))
        return "Name can only contain letters and spaces"; //check alphabet
        return "";
    };

    const validateEmail = (value:string) => {
        if (!value) return "Email is required"; //check if empty
        if (!emailRegex.test(value)) return "Please enter a valid email address"; //check format
        return "";
    };

    const validateSubject = (value:string) => {
        if (!value.trim()) return "Subject is required"; //check if empty
        return "";
    };

    const validateMessage = (value:string) => { 
        if (!value.trim()) return "Message is required"; //check if empty
        if (value.trim().length < 10)
        return "Message must be at least 10 characters long"; //check length
        return "";
    };

    // Check overall form validity, every time there is a change in [name, email, subject, message]
    useEffect(() => {
        const isValid =
        !validateName(name) &&
        !validateEmail(email) &&
        !validateSubject(subject) &&
        !validateMessage(message);
        setIsSubmitDisabled(!isValid);
    }, [name, email, subject, message, validateName, validateEmail, validateSubject, validateMessage]);

    // Handlers for blur events (to show errors)
    const handleNameBlur = () => setNameError(validateName(name));
    const handleEmailBlur = () => setEmailError(validateEmail(email));
    const handleSubjectBlur = () => setSubjectError(validateSubject(subject));
    const handleMessageBlur = () => setMessageError(validateMessage(message));

    // On form submit
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Final validation before submit
        const nError = validateName(name);
        const eError = validateEmail(email);
        const sError = validateSubject(subject);
        const mError = validateMessage(message);

        setNameError(nError);
        setEmailError(eError);
        setSubjectError(sError);
        setMessageError(mError);

        if (nError || eError || sError || mError) {
        return; // don't submit if invalid
        }

        // Show success message
        setShowSuccessMessage(true);

        // Reset form fields
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");

        setTimeout(() => setShowSuccessMessage(false), 1000);
    };

    return (
        <>
        <Banner heroImageUrl='/contactushero.jpg' bannerText="Your skin questions deserve expert answers - we're here to help!" bgColor='#D9A27F' textColor='#2B2B2B'></Banner>
        <GridContainer title="Get In Touch" description={[
                "Have questions about your skin or need help choosing the right products? Our skincare experts are here to help. Whether you need personalized recommendations or have concerns about your order, we're committed to providing exceptional customer service.",
                "Expert advice for your skincare journey.",
                "We're here to help you glow..."
            ]}
            btnText="Contact Our Team" 
            btnLink="#contact"
            imgSrc="/contact.jpg"
            imgAlt="Friendly customer service representative"
            imagePosition="left"
        />
        <section id="contact" className="descwhite container mx-auto px-4">
        <h1 className="text-center">Send us a message</h1>
        <div className="contactus">
            <form method="POST" data-netlify="true" id="contactForm" onSubmit={handleSubmit} noValidate>
            <InputField type="text" name="name" placeholder="Full Name" value={name} error={nameError} onChange={(e) => setName(e.target.value)} onBlur={handleNameBlur}/>
            {/*<input className={`inputform ${nameError ? "input-error" : ""}`} type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} onBlur={handleNameBlur} pattern="[A-Za-z\s]+" minLength={2} required />
            {nameError && <span className="error-message">{nameError}</span>}*/}
            {/*inputform is always applied. input-error is added only if nameError is truthy*/}
            
            <InputField type="email" name="email" placeholder="your.email@example.com" value={email} error={emailError} onChange={(e) => setEmail(e.target.value)} onBlur={handleEmailBlur}/>
            {/*<input className={`inputform ${emailError ? "input-error" : ""}`} type="email" id="email" placeholder="your.email@example.com" value={email} onChange={(e) => setEmail(e.target.value)} onBlur={handleEmailBlur} required />
            {emailError && <span className="error-message">{emailError}</span>}*/}

            <InputField type="text" name="subject" placeholder="Subject" value={subject} error={subjectError} onChange={(e) => setSubject(e.target.value)} onBlur={handleSubjectBlur}/>
            {/*<input type="text" placeholder="Subject" className={`inputform ${subjectError ? "input-error" : ""}`} value={subject} onChange={(e) => setSubject(e.target.value)} onBlur={handleSubjectBlur} required />
            {subjectError && <span className="error-message">{subjectError}</span>}*/}

            <TextareaField name="message" placeholder="Tell us what you&apos;re looking for..." value={message} error={messageError} onChange={(e) => setMessage(e.target.value)} onBlur={handleMessageBlur}/>
            {/*<textarea className={`inputform formtextarea ${ messageError ? "input-error" : ""}`} id="message" placeholder="Tell us what you're looking for..." value={message} onChange={(e) => setMessage(e.target.value)} onBlur={handleMessageBlur} minLength={10} required />
            {messageError && <span className="error-message">{messageError}</span>}*/}

            <button className="btn send" type="submit" disabled={isSubmitDisabled}><i className="fa-regular fa-paper-plane text-[#fff8f0]"></i> Send</button>
            {/*the button will be disabled if isSubmitDisabled = true*/}
            {showSuccessMessage && ( <div id="contactsuccessMessage" className="text-center mt-4 text-green-600 font-semibold">Message sent successfully!</div>)}
            {/*when showSuccessMessage true, set message to message sent successfully and display*/}
            </form>
        </div> 

        <RadioForm name="meeting" legend="Select the Meeting Request Type"
                            options={[
                                { value: "Phone consultation", label: "Phone consultation" },
                                { value: "Video Call", label: "Video Call" },
                                { value: "In-person Meeting", label: "In-person Meeting" },
                                { value: "No Meeting Needed", label: "No Meeting Needed" },
                            ]}
        />
        </section>
        </>
    );
}