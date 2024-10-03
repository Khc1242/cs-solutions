const Contact = () => {
  // return (
  //   <div>
  //     <h2 className="text-4xl font-bold mb-4 text-center">Contact Us</h2>
  //     <p className="text-lg mb-4 text-center">
  //       Get in touch with us to discuss your project needs.
  //     </p>
  //     <form className="max-w-md mx-auto space-y-4">
  //       <div>
  //         <label className="block">Your Name:</label>
  //         <input type="text" className="border p-2 w-full rounded" />
  //       </div>
  //       <div>
  //         <label className="block">Your Email:</label>
  //         <input type="email" className="border p-2 w-full rounded" />
  //       </div>
  //       <div>
  //         <label className="block">Message:</label>
  //         <textarea className="border p-2 w-full rounded" rows={5}></textarea>
  //       </div>
  //       <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-500 transition">Send Message</button>
  //     </form>
  //   </div>
  // );
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gradient-to-r from-blue-50 to-gray-200 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold">Get in Touch</h2>
          <p className="text-gray-600 mb-5">Whether you have questions about our services, need support, or want to discuss potential collaborations, your feedback and inquiries are important to us, our team is ready to help.</p>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="border border-gray-300 p-2 w-full rounded"
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
                className="border border-gray-300 p-2 w-full rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="border border-gray-300 p-2 w-full rounded"
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
        </div>
        <div className="bg-gradient-to-r from-blue-50 to-gray-200 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <p className="mb-2">
            <strong>Address:</strong> 123 Street, City, Country
          </p>
          <p className="mb-2">
            <strong>Phone:</strong> +6012 345 6789
          </p>
          <p className="mb-2">
            <strong>Email:</strong> info@yourcompany.com
          </p>
          {/* <h3 className="text-lg font-semibold mt-4">Follow Us</h3>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="text-blue-600">Facebook</a>
            <a href="#" className="text-blue-600">Twitter</a>
            <a href="#" className="text-blue-600">LinkedIn</a>
          </div> */}
          <h2 className="text-2xl font-semibold text-center mb-4">Our Location</h2>
          <iframe className="w-full h-64 rounded-lg shadow-lg" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.052276363862!2d101.6099302756761!3d3.0807209535680498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4c7902c02159%3A0xc520149cbb0b6668!2sYolo%20Signature%20Suites!5e0!3m2!1sen!2smy!4v1727868487099!5m2!1sen!2smy" loading="lazy"></iframe>
          {/* <iframe className="w-full h-64 rounded-lg shadow-lg" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.2014775201384!2d144.96145331531912!3d-37.81432797975117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0c047dcb%3A0x6bb5834b99357606!2sYour%20Company!5e0!3m2!1sen!2s!4v1623924548437!5m2!1sen!2s" loading="lazy"></iframe> */}
        </div>
      </div>
      {/* <div className="mt-16">
        <h2 className="text-2xl font-semibold text-center mb-4">Our Location</h2>
        <iframe
          className="w-full h-64 rounded-lg shadow-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.2014775201384!2d144.96145331531912!3d-37.81432797975117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0c047dcb%3A0x6bb5834b99357606!2sYour%20Company!5e0!3m2!1sen!2s!4v1623924548437!5m2!1sen!2s"
          loading="lazy"
        ></iframe>
      </div> */}
    </div>
  );
};

export default Contact;