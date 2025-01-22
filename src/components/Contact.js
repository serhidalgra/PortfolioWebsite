import { Container, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import React, { useRef, useState } from 'react';
import contactImg from "../assets/img/contact-img.svg";
import emailjs from '@emailjs/browser';

export const Contact = () => {
    const formInitial = useRef();

    const formInitialDetails = {
        firstName: "",
        lastName: "",
        emailAddress: "",
        phoneNumber: "",
        message: "",
    }

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [buttonText, setButtonText] = useState("Let's send the email");
    const [formData, setFormData] = useState(formInitialDetails);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }))
    }
    const [sendMessage, setSendMessage] = useState("")

    // ------------------------------------------------------------------------------------------------------

    const handleButtonSend = () => {
        setSendMessage('Email was sent successfully!');

        // Use setTimeout to simulate a delayed action
        setTimeout(() => {
            setSendMessage('');
        }, 5000);

        return () => clearTimeout(handleButtonSend)
    };


    // ------------------------------------------------------------------------------------------------------

    const sendEmail = async (e) => {
        setButtonText('Sending...');
        emailjs
            .sendForm('service_df9ex8o', 'template_b3k6mt6', formInitial.current, {
                publicKey: '4YuI0Acrrnq98FLr5',
            })
            .then(
                (result) => {
                    console.log('SUCCESS!' + result.text);
                    setButtonText("Let's send the email");
                    setFormData(formInitialDetails);
                    handleButtonSend();
                    alert('Message sent successfully');
                },
                (error) => {
                    alert('Something went wrong, please try again later');
                    setSendMessage("Something went wrong, the email wasn't sent");
                    setButtonText("Try again");
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <section className="contact" id="contact">
            <Container>
                <Row className="align-items-center">

                    <Col md={6}>
                        <h2>Contact me</h2>
                        <form ref={formInitial} onSubmit={handleSubmit(sendEmail)}>
                            <Row className="justify-content-center">
                                <Row>
                                    <Col sm={6} className="px-1">
                                        <input
                                            {...register("firstName", { required: true, maxLength: 40, minLength: 3 })}
                                            type="text"
                                            name="firstName"
                                            className="firstName"
                                            placeholder="First Name"
                                            aria-invalid={errors.firstName ? "true" : "false"}
                                            onChange={handleInputChange}
                                            value={formData.firstName}
                                        />
                                        <div style={{ marginTop: '-0.5rem' }}>
                                            <span className='text-alert'>{errors.firstName?.type === 'required' && "First name is required"}</span>
                                            <span className='text-alert'>{errors.firstName?.type === 'maxLength' && "you have put too many characters"}</span>
                                            <span className='text-alert'>{errors.firstName?.type === 'minLength' && "You have put too few characters"}</span>
                                        </div>
                                    </Col>
                                    {/* ------------------------------------------------------------- */}
                                    <Col sm={6} className="px-1">
                                        <input ref={formInitial}
                                            {...register("lastName", { required: true, maxLength: 40, minLength: 3 })}
                                            type="text"
                                            name="lastName"
                                            className="lastName"
                                            placeholder="Last Name"
                                            aria-invalid={errors.lastName ? "true" : "false"}
                                            onChange={handleInputChange}
                                            value={formData.lastName}
                                        />
                                        <div style={{ marginTop: '-0.5rem', marginBottom: '0.5rem' }}>
                                            <span className='text-alert'>{errors.lastName?.type === 'required' && "Last name is required"}</span>
                                            <span className='text-alert'>{errors.lastName?.type === 'maxLength' && "you have put too many characters"}</span>
                                            <span className='text-alert'>{errors.lastName?.type === 'minLength' && "You have put too few characters"}</span>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm={6} className="px-1">
                                        <input
                                            {...register("emailAddress", { required: true, pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/ })}
                                            type="email"
                                            name="emailAddress"
                                            className="emailAddress"
                                            placeholder="Email Address"
                                            aria-invalid={errors.emailAddress ? "true" : "false"}
                                            onChange={handleInputChange}
                                            value={formData.emailAddress}
                                        />
                                        <div style={{ marginTop: '-0.5rem', marginBottom: '0.5rem' }}>
                                            <span className='text-alert'>{errors.emailAddress?.type === 'required' && "Email Address is required"}</span>
                                            <span className='text-alert'>{errors.emailAddress?.type === 'pattern' && "Incorrect Email format"}</span>
                                        </div>
                                    </Col>
                                    {/* ------------------------------------------------------------- */}
                                    <Col sm={6} className="px-1">
                                        <input
                                            {...register('phoneNumber', { required: true, maxLength: 8, minLength: 8, pattern: /^([0-9]*)$/ })}
                                            type="tel"
                                            name="phoneNumber"
                                            className="phoneNumber"
                                            placeholder="Phone Number"
                                            aria-invalid={errors.phoneNumber ? "true" : "false"}
                                            onChange={handleInputChange}
                                            value={formData.phoneNumber}
                                        />
                                        <div style={{ marginTop: '-0.5rem', marginBottom: '0.5rem' }}>
                                            <span className='text-alert'>{errors.phoneNumber?.type === 'required' && "Phone Number is required"}</span>
                                            <span className='text-alert'>{errors.phoneNumber?.type === 'maxLength' && "This field only accepts eight numbers"}</span>
                                            <span className='text-alert'>{errors.phoneNumber?.type === 'minLength' && "This field only accepts eight numbers"}</span>
                                            <span className='text-alert'>{errors.phoneNumber?.type === 'pattern' && "Only numbers are allowed in this field"}</span>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm={12} className="px-1">
                                        <textarea
                                            {...register('message', { required: true, maxLength: 500, minLength: 10 })}
                                            type="text"
                                            name="message"
                                            className="Message"
                                            placeholder="Message"
                                            aria-invalid={errors.message ? "true" : "false"}
                                            onChange={handleInputChange}
                                            value={formData.message}
                                        />
                                        <div style={{ marginTop: '-0.8rem', marginBottom: '0.5rem' }}>
                                            <span className='text-alert'>{errors.message?.type === 'required' && "Message is required"}</span>
                                            <span className='text-alert'>{errors.message?.type === 'maxLength' && "you have put too many characters"}</span>
                                            <span className='text-alert'>{errors.message?.type === 'minLength' && "You have put too few characters"}</span>
                                        </div>
                                    </Col>
                                </Row>
                                <Col md={5} className="px-1">
                                    <div  className="justify-content-center">
                                        <Row>
                                            <button id="send" type="submit" className='vvd'>
                                                <span>
                                                    {buttonText}
                                                </span>
                                            </button>
                                        </Row>
                                    </div>
                                </Col>
                                <div className="justify-content-center;">
                                    <p style={{ textAlign: 'center', marginTop: '2rem', color: '#fff' }} >{sendMessage}</p>
                                </div>
                            </Row>
                        </form>
                    </Col>
                    <Col md={6}>
                        <img src={contactImg} alt="Contact Us.img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}





