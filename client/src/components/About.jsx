import React from "react";

function About() {
  return (
    <div className="bg-gray-100 py-16 about my-3">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="bg-zinc-800 p-4 rounded-lg text-center text-white mb-6">
            <h1 className="text-xl md:text-3xl font-bold  mb-3">
              Welcome to LEGAL DASTAVEZ
            </h1>
            <p className="hidden md:block text-base md:text-lg">
              Welcome to our <span className="font-semibold">AI-Powered Legal Documentation Assistant</span>, simplifying complex legal documents for individuals and small businesses in India.
            </p>
          </div>
          <p className="mt-2 text-sm md:text-xl text-gray-600 py-5 text-justify leading-relaxed">
            At LEGAL DASTAVEZ, we're on a mission to transform the way individuals and small businesses in India handle their legal documentation. With a deep passion for harnessing the power of artificial intelligence and data science, we've embarked on a journey to simplify and demystify the complexities of the legal world.
          </p>
          
          <p className="mt-2 text-sm md:text-xl text-gray-600 py-5 text-justify leading-relaxed">
            Through cutting-edge technology and a user-centric approach, we aim to bridge the gap between legal expertise and everyday individuals and businesses. Whether you're a startup owner, a freelancer, or simply someone in need of clear and concise legal documents, our AI-Powered Legal Documentation Assistant is designed to simplify your journey.
          </p>
          
          <p className="mt-2 text-sm md:text-xl text-gray-600 py-5 text-justify leading-relaxed">
            Thank you for choosing LEGAL DASTAVEZ as your trusted partner in the world of legal documentation.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
