import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            if (!isValid) {
                setErrorMessage("Email address is needed!");
            } else {
                setErrorMessage('');
            }
        }
        else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is needed!`);
            } else {
                setErrorMessage('');
            }
        }
        setFormState({ ...formState, [e.target.name]: e.target.value })
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    return (
        <div className='contact-container'>
            <form className='contact-form' onSubmit={handleSubmit}>
                <h1 className='header-contact'>Contact me</h1>
                <div>
                    <label htmlFor='="name' className='label-input'>Name:</label>
                    <input type="text" className='input-form' defaultValue={name} onBlur={handleChange} name="name" />
                </div>
                <div>
                    <label htmlFor='email' className='label-input'>Email:</label>
                    <input type="text" className='input-form' defaultValue={email} onBlur={handleChange} email="email" />
                </div>
                <div>
                    <label htmlFor="message" className='label-input'>Message:</label>
                    <textarea name="message" className='input-form' defaultValue={message} onBlur={handleChange} rows="5" />
                </div>
                {errorMessage && (
                    <div>
                        <p className='text-error'>{errorMessage}</p>
                    </div>
                )}
                <button className='btn' type="submit" onCLick={handleSubmit}>Submit</button>
            </form>
        </div>
    );
};

export default Contact;