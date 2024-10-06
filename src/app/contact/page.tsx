"use client"; // This tells Next.js that this is a Client Component

import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (res.status === 200) {
        setStatus('Email sent successfully');
        // Reset form data after successful submission
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      } else {
        const result = await res.json();
        setStatus(result.error || 'Failed to send email');
      }
    } catch (error) {
      setStatus('Failed to send email');
    }
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gradient-to-r from-blue-50 to-gray-200 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold">Get in Touch</h2>
          <p className="text-gray-600 mb-5">
            Whether you have questions about our services, need support, or want
            to discuss potential collaborations, your feedback and inquiries are
            important to us. Our team is ready to help.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="border border-gray-300 p-2 w-full rounded"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="border border-gray-300 p-2 w-full rounded"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="border border-gray-300 p-2 w-full rounded"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
            >
              Send Message
            </button>
          </form>
          {status && <p className="mt-4 text-center text-green-600">{status}</p>}
        </div>
        <div className="bg-gradient-to-r from-blue-50 to-gray-200 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <p className="mb-2">
            <strong>Address:</strong> Jln PJS 8/9, Bandar Sunway, 46150 Petaling Jaya, Selangor
          </p>
          <p className="mb-2">
            <strong>Phone:</strong> +65 8034 0312
          </p>
          <p className="mb-2">
            <strong>Email:</strong> cs.solutions.my@gmail.com
          </p>
          <h2 className="text-2xl font-semibold text-center mb-4">Our Location</h2>
          <iframe
            className="w-full h-64 rounded-lg shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.052276363862!2d101.6099302756761!3d3.0807209535680498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4c7902c02159%3A0xc520149cbb0b6668!2sYolo%20Signature%20Suites!5e0!3m2!1sen!2smy!4v1727868487099!5m2!1sen!2smy"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
