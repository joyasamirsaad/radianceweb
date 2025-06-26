"use client";
import { useState, useEffect } from 'react';

import RadioGroup from "@/components/RadioGroup";

interface RadioOption {
  value: string;
  label: string;
}

interface RadioFormProps {
    name: string;
    legend: string;
    options: RadioOption[];
}

export default function RadioForm( {name, legend, options}: RadioFormProps) {
    const [selectedOption, setSelectedOption] = useState<string>("");
    const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    
    useEffect(() => {
        setIsSubmitDisabled(selectedOption === "");
    }, [selectedOption]);

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        //if not selected do not enable button and return;
        if (!selectedOption) return;
        setShowSuccessMessage(true); //show option selected also
        //reset fields
        setTimeout(() => {setShowSuccessMessage(false); setSelectedOption("");} , 1000);
    };
    return (
        <div className="contactus">
            <form method="POST" data-netlify="true" id="contactForm" onSubmit={handleSubmit} noValidate>
                <RadioGroup name={name} legend={legend} options={options} selected={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}/>
                <button className="btn send" type="submit" disabled={isSubmitDisabled}>Submit</button>
                {showSuccessMessage && ( <div id="contactsuccessMessage" className="text-center mt-4 text-green-600 font-semibold">
                    You submitted the following: <span>{selectedOption}</span></div>)}
            </form>
        </div>
    );
}