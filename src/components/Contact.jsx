import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_c0insi8', 'template_10cx1ci', form.current, {
        publicKey: 'En7SEx-I68Z67ylh4',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
  <div className='mt-20 '>
  <h1 className='text-2xl text-center text-amber-600'>Contact Me!</h1>
<form ref={form} onSubmit={sendEmail} className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-md">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="from_name">
          Name
        </label>
        <input
          type="text"
          name="from_name"
          id="from_name"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="from_email">
          Email
        </label>
        <input
          type="email"
          name="from_email"
          id="from_email"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="5"
          required
        ></textarea>
      </div>
      <div className="text-center">
        <input
          type="submit"
          className="bg-red-400 p-2 w-full md:w-32 text-xl rounded-lg text-blue-500 hover:text-red-400 hover:bg-gray-600 cursor-pointer transition-all duration-300"
          value="Send" onClick={(e)=>{alert("successful")}}
        />
      </div>
    </form>
  </div>

  );
};
export default Contact;