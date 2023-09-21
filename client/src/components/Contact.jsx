import React from "react";

function Contact() {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-zinc-800 p-4 rounded-lg text-center text-white mb-5">
          <h1 className="text-xl md:text-3xl font-bold  mb-3">
            Welcome to LEGAL DASTAVEZ
          </h1>
          <p className="hidden md:block text-base md:text-lg">
          Welcome to our <span className="font-semibold">AI-Powered Legal Documentation Assistant</span>, simplifying complex legal documents for individuals and small businesses in India.
        </p>
        </div>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Contact Us
            </h2>

            {/* Contact Information */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Contact Information
              </h3>
              <p className="text-gray-600">
                <strong>Email:</strong> legal_Dastavez@gmail.com
                <br />
                <strong>Phone:</strong> (+91) 7004054900
                <br />
                <strong>Address:</strong> Chandigarh University, Mohali, India
                <br />
              </p>
            </div>

            {/* Contact Form */}
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Send Us a Message
              </h3>
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-600">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-600">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-gray-600">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
