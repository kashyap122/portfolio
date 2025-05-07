import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaXTwitter } from 'react-icons/fa6';

const Connect = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Invalid email format';
    }
    if (!formData.message.trim()) errs.message = 'Message is required';
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      try {
        const response = await fetch('https://formspree.io/f/xkgrrdjv', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
          }),
        });
  
        const result = await response.json();
        if (result.ok || response.ok) {
          setSubmitted(true);
          setFormData({ name: '', email: '', message: '' });
          setTimeout(() => setSubmitted(false), 3000);
        } else {
          alert('Something went wrong, please try again!');
        }
      } catch (err) {
        console.error(err);
        alert('Error sending message!');
      }
    }
  };
  

  return (
    <div className="flex flex-col items-center px-4 bg-[#1d1d1d]">
      <h2 className="ppf text-4xl font-bold text-center py-3">Connect</h2>
      <p className="text-xl mb-8 text-center max-w-lg">
        Have a project in mind? I'd love to hear from you! Reach out to me, and let's turn your ideas into reality.
      </p>

      {/* Social links */}
      <div className="flex space-x-6 mb-8 text-3xl">
        <a href="https://www.linkedin.com/in/kashyapchauhan" target="_blank" rel="noopener noreferrer" className="hover:text-[#0072b1] transition">
          <FaLinkedin />
        </a>
        <a href="https://github.com/kashyap122" target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white transition">
          <FaGithub />
        </a>
        <a href="mailto:kashyapchauhan122@gmail.com" className="hover:text-red-500 transition">
          <FaEnvelope />
        </a>
        <a href="https://x.com/kashyap122_" target="_blank" rel="noopener noreferrer" className="hover:text-[#1DA1F2] transition">
          <FaXTwitter />
        </a>
      </div>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="bg-[#1d1d1d] rounded-lg p-6 w-full max-w-md space-y-4">
        <div>
          <label className="block text-sm font-semibold mb-1" htmlFor="name">Name</label>
          <input
            id="name"
            name='Name'
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            className={`w-full px-3 py-2 rounded border ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring focus:ring-[#5a0e0e]/50`}
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1" htmlFor="email">Email</label>
          <input
            name='Email'
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            className={`w-full px-3 py-2 rounded border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring focus:ring-[#5a0e0e]/50`}
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1" htmlFor="message">Message</label>
          <textarea
            id="message"
            name='Message'
            rows="4"
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
            className={`w-full px-3 py-2 rounded border ${errors.message ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring focus:ring-[#5a0e0e]/50`}
          />
          {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-[#1d1d1d] border py-2 rounded hover:bg-white hover:text-black font-bold transition"
        >
          {/* inline-block border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 font-bold px-6 py-3 rounded-lg cursor-pointer */}
          Send Message
        </button>

        {submitted && <p className="text-green-600 text-center text-sm mt-2">Message sent successfully!</p>}
      </form>
    </div>
  );
};

export default Connect;
