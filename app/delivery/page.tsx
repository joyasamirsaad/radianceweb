"use client";

import { useState, useEffect } from "react";
import React from 'react';

import InputField from "@/components/InputField";
import RadioGroup from "@/components/RadioGroup";
import CreditCardFields from "@/components/CreditCardFields";

import Banner from '@/components/Banner';


export default function Delivery() {
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  // Form state
  const [location, setLocation] = useState("");
  const [phone, setPhone] = useState("");

  const [quantity, setQuantity] = useState("");
  const [quantityError, setQuantityError] = useState("");
  // For credit card inputs
  const [cardNumber, setCardNumber] = useState("");
  const [cardNumberError, setCardNumberError] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [expiryDateError, setExpiryDateError] = useState("");
  const [cvv, setCvv] = useState("");
  const [cvvError, setCvvError] = useState("");

  // Error state
  const [locationError, setLocationError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  // Success message visibility
  const [showDeliverySuccess, setShowDeliverySuccess] = useState(false);
  const [showValidationWarning, setShowValidationWarning] = useState(false);

  // Validation regexes
  const locationRegex = /^[A-Za-z\s]+$/;
  const phoneRegex = /^[0-9]+$/;

  // Validation functions
  const validateLocation = (value: string) => {
    if (!value) return "Location is required";
    if (value.length < 2)
    return "Location should be at least 2 characters long";
    if (!locationRegex.test(value)) return "Location can only contain letters and spaces";
    return "";
  };

  const validatePhone = (value: string) => {
    if (!value) return "Phone number is required";
    if (!phoneRegex.test(value)) return "Phone number can only contain digits";
    return "";
  };

  const validateQuantity = (value: string) => {
    if (!value) return "Quantity is required";
    const num = Number(value);
    if (isNaN(num) || num < 1 || num > 120) return "Quantity must be between 1 and 120";
    return "";
  };

  const validateCardNumber = (value: string) => {
    if (!value) return "Card number is required";
    if (!/^\d{13,19}$/.test(value.replace(/\s+/g, ""))) return "Card number must be 13 to 19 digits";
    return "";
  };

  const validateExpiryDate = (value: string) => {
    if (!value) return "Expiry date is required";
    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(value)) return "Expiry date must be MM/YY format";
    return "";
  };

  const validateCvv = (value: string) => {
    if (!value) return "CVV is required";
    if (!/^\d{3,4}$/.test(value)) return "CVV must be 3 or 4 digits";
    return "";
  };

  

  useEffect(() => {
    // Get all payment radio buttons as HTMLInputElements
    const paymentRadios = document.querySelectorAll<HTMLInputElement>('input[name="payment"]');
    const creditInputs = document.querySelectorAll<HTMLInputElement>('.inputform.credit');

    function toggleCreditCardInputs() {
      // Cast to HTMLInputElement to access .checked safely
      const creditCardInput = document.querySelector('input[name="payment"][value="creditcard"]') as HTMLInputElement | null;
      const creditCardSelected = creditCardInput?.checked;

      creditInputs.forEach((input) => {
        if (creditCardSelected) {
          input.disabled = false;
          input.required = true;
        } else {
          input.disabled = true;
          input.required = false;
          input.value = ''; // Clear value when disabled
        }

        // Also clear React state & error messages when deselecting credit card
        if (!creditCardSelected) {
          setCardNumber("");
          setExpiryDate("");
          setCvv("");
          setCardNumberError("");
          setExpiryDateError("");
          setCvvError("");
        }
      });
    }

    paymentRadios.forEach((radio) =>
      radio.addEventListener('change', toggleCreditCardInputs)
    );

    // Initialize on mount
    toggleCreditCardInputs();

    // Cleanup event listeners on unmount
    return () => {
      paymentRadios.forEach((radio) =>
        radio.removeEventListener('change', toggleCreditCardInputs)
      );
    };
  }, []);

  useEffect(() => {
  const formValid =
    !validateLocation(location) &&
    !validatePhone(phone) &&
    !validateQuantity(quantity);

  setIsSubmitDisabled(!formValid);
}, [location, phone, quantity]);



  // Handlers for blur events (to show errors)
  const handleLocationBlur = () => setLocationError(validateLocation(location));
  const handlePhoneBlur = () => setPhoneError(validatePhone(phone));
  const handleQuantityBlur = () => setQuantityError(validateQuantity(quantity));
  const handleCardNumberBlur = () => setCardNumberError(validateCardNumber(cardNumber));
  const handleExpiryDateBlur = () => setExpiryDateError(validateExpiryDate(expiryDate));
  const handleCvvBlur = () => setCvvError(validateCvv(cvv));

  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const quantityErr = validateQuantity(quantity);
    const locationErr = validateLocation(location);
    const phoneErr = validatePhone(phone);

    setQuantityError(quantityErr);
    setLocationError(locationErr);
    setPhoneError(phoneErr);

    const cardNumberErr = validateCardNumber(cardNumber);
    const expiryDateErr = validateExpiryDate(expiryDate);
    const cvvErr = validateCvv(cvv);

    setCardNumberError(cardNumberErr);
    setExpiryDateError(expiryDateErr);
    setCvvError(cvvErr);

    if (isSubmitDisabled) {
    setShowValidationWarning(true);
    return;
  }

    setShowValidationWarning(false);
    setShowDeliverySuccess(true);
    const form = e.target as HTMLFormElement;
    form.reset();

    setQuantity("");
    setLocation("");
    setPhone("");
    setCardNumber("");
    setExpiryDate("");
    setCvv("");
    setCardNumberError("");
    setExpiryDateError("");
    setCvvError("");

    setTimeout(() => {
      setShowDeliverySuccess(false);
    }, 1500);
  };

    return (
      <>
        <Banner heroImageUrl='/deliveryhero.jpg' bannerText="Your perfect skin routine is just one click and quick delivery away..."></Banner>
        <section id="delivery" className="descwhite  container mx-auto px-4">
            <h1 className="text-center">Order Details</h1>
            <div className="delivery">
                <form id="deliveryForm" className="w-full" method="POST" data-netlify="true" onSubmit={handleSubmit} noValidate>
                    <input type="hidden" name="form-name" value="delivery" />
                    {/*<input className={`inputform ${quantityError ? "input-error" : ""}`} type="number" name="quantity" placeholder="Quantity" min="1" max="120" value={quantity} onChange={(e) => setQuantity(e.target.value)} onBlur={handleQuantityBlur} />
                    {quantityError && <span className="error-message">{quantityError}</span>}*/}
                    <InputField type="number" name="quantity" placeholder="Quantity" value={quantity} error={quantityError} onChange={(e) => setQuantity(e.target.value)} onBlur={handleQuantityBlur}/>
                    
                    {/*<input className={`inputform ${locationError ? "input-error" : ""}`} type="text" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} onBlur={handleLocationBlur} required />
                    {locationError && <span className="error-message">{locationError}</span>}*/}
                    <InputField type="text" name="location" placeholder="Location" value={location} error={locationError} onChange={(e) => setLocation(e.target.value)} onBlur={handleLocationBlur}/>
                    {/*<input className={`inputform ${phoneError ? "input-error" : ""}`} type="tel" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} onBlur={handlePhoneBlur} inputMode="numeric" required /> 
                    {phoneError && <span className="error-message">{phoneError}</span>}*/}
                    <InputField type="tel" name="phone" placeholder="Phone Number" value={phone} error={phoneError} onChange={(e) => setPhone(e.target.value)} onBlur={handlePhoneBlur}/>
                    {/*<fieldset className="deliverysections">
                        <legend>Select the delivery speed</legend>
                        <div>
                            <label className="radio-label">
                                <input type="radio" name="speed" value="standard" required></input>
                                Standard (3-5 days) - Free over $50
                            </label>
                            
                            <label className="radio-label">
                                <input type="radio" name="speed" value="express" required></input>
                                Express (1-2 days) - $8.99
                            </label>
                            
                            <label className="radio-label">
                                <input type="radio" name="speed" value="sameday" required></input>
                                Same Day - $15.99
                            </label>
                        </div>
                    </fieldset>*/}
                    <RadioGroup name="speed" legend="Select the delivery speed"
                                options={[
                                  { value: "standard", label: "Standard (3-5 days) - Free over $50" },
                                  { value: "express", label: "Express (1-2 days) - $8.99" },
                                  { value: "sameday", label: "Same Day - $15.99" },
                                ]}
                    />
                    <fieldset className="deliverysections">
                        <legend>Select the payment method</legend>
                        <div>
                            <label className="radio-label">
                                <input type="radio" name="payment" value="cash" required></input>
                                Cash On Delivery
                            </label>
                            
                            <label className="radio-label mb-[0.2em]">
                                <input type="radio" name="payment" value="creditcard" required></input>
                                Credit Card
                                
                            </label>
                            {/*<div className="deliverynested">
                              <input className={`inputform credit ${cardNumberError ? "input-error" : ""}`} type="text" name="cardNumber" placeholder="Card Number" maxLength={19} value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} onBlur={handleCardNumberBlur}/>
                              {cardNumberError && <span className="error-message">{cardNumberError}</span>}

                              <input className={`inputform credit ${expiryDateError ? "input-error" : ""}`} type="text" name="expiryDate" placeholder="MM/YY" maxLength={5} value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} onBlur={handleExpiryDateBlur}/>
                              {expiryDateError && <span className="error-message">{expiryDateError}</span>}

                              <input className={`inputform credit ${cvvError ? "input-error" : ""}`} type="text" name="cvv" placeholder="CVV" maxLength={4} value={cvv} onChange={(e) => setCvv(e.target.value)} onBlur={handleCvvBlur}/>
                              {cvvError && <span className="error-message">{cvvError}</span>}
                            </div>*/}

                            <CreditCardFields cardNumber={cardNumber} cardNumberError={cardNumberError} setCardNumber={setCardNumber} handleCardNumberBlur={handleCardNumberBlur} expiryDate={expiryDate} expiryDateError={expiryDateError} setExpiryDate={setExpiryDate} handleExpiryDateBlur={handleExpiryDateBlur} cvv={cvv} cvvError={cvvError} setCvv={setCvv} handleCvvBlur={handleCvvBlur}/>

                            <label className="radio-label mb-[0.2em]">
                                <input type="radio" name="payment" value="paypal" required></input>
                                PayPal
                            </label>
                        </div>
                    </fieldset>
                    <button className="btn send" type="submit" disabled={isSubmitDisabled}>Complete Order</button>
                    {showValidationWarning && (<div className="text-center mt-4 text-red-600 font-semibold">Please fill all the required fields before submitting.</div>)}
                    {showDeliverySuccess && ( <div id="deliverysuccessMessage" className="text-center mt-4 text-green-600 font-semibold">Order Completed successfully!</div>)}
                </form>
            </div> 
        </section>
      </>
      
    );
}