// src/components/Contact.js
import React from 'react';

function Contact() {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-900">Contact Me</h2>
        <form className="mt-8 space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 border rounded-lg"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 border rounded-lg"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-4 border rounded-lg"
          ></textarea>
          <button className="w-full bg-blue-500 text-white p-4 rounded-lg">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
