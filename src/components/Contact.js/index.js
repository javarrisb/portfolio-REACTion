import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function Contact() {
    const [errorMessage, setErrorMessage] = useState('');
    const [formState, SetFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;


    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            if (!isValid) {
                setErrorMessage('Your email is invalid!');
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

        if (!errorMessage) {
            SetFormState({ ...formState, [e.target.name]: e.target.value });
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (!errorMessage) {
            console.log(formState);
        }
    }

    return (
        <div className='contact-container'>
            <form className='row row-cols-lg-auto g-3 align-items-center' onSubmit={handleSubmit}>
                <h1 className='header-contact'>Contact me</h1>
                <div>
                    <label htmlFor='="name' className='form-label'>Name:</label>
                    <input type="text" className='form-control' defaultValue={name} onBlur={handleChange} name="name" />
                </div>
                <div>
                    <label htmlFor='email' className='form-label mb-3'>Email address:</label>
                    <input type="email" className='form control' defaultValue={email} onBlur={handleChange} name="email" />
                </div>
                <div>
                    <label htmlFor="message" className='form-label'>Message:</label>
                    <textarea name="message" className='form-control' defaultValue={message} onBlur={handleChange} rows="5" />
                </div>
                {errorMessage && (
                    <div>
                        <p className='text-error'>{errorMessage}</p>
                    </div>
                )}
                <button className='btn btn-success' type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Contact;