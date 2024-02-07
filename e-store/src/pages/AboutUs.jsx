import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <div className="container mx-auto py-12">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded shadow-lg">
        <h2 className="text-4xl font-bold mb-8 text-center">About Us</h2>

        {/* Introduction Section */}
        <section className="mb-8">
          <h3 className="text-2xl font-bold mb-4">Who We Are</h3>
          <p className="text-lg text-gray-700">
            Welcome to Our Company! We are a dedicated team of professionals committed to delivering exceptional products and services. Our journey began with a vision to make a positive impact on the lives of our customers.
          </p>
        </section>

        {/* Mission and Values Section */}
        <section className="mb-8">
          <h3 className="text-2xl font-bold mb-4">Mission & Values</h3>
          <p className="text-lg text-gray-700 mb-4">
            Our mission is to create innovative solutions that cater to the unique needs of our customers. We operate with transparency, integrity, and a commitment to building lasting relationships. Our values guide us in every decision we make, ensuring that we consistently exceed expectations.
          </p>
          <ul className="list-disc pl-6">
            <li>Customer Satisfaction</li>
            <li>Integrity and Transparency</li>
            <li>Innovation and Excellence</li>
            {/* Add more values as needed */}
          </ul>
        </section>

        {/* Our Team Section */}
        <section className="mb-8">
          <h3 className="text-2xl font-bold mb-4">Our Team</h3>
          <p className="text-lg text-gray-700 mb-4">
            Meet the talented individuals behind Our Company. Our team is comprised of skilled professionals from diverse backgrounds, each contributing their expertise to ensure the success of our projects.
          </p>
          <img src="https://images.unsplash.com/photo-1576267423048-15c0040fec78?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHRlYW13b3JrfGVufDB8fDB8fHww" alt="r"
          className="w-full h-auto rounded-md shadow-lg" />
          {/* Add team member details, photos, etc. */}
        </section>

        {/* Contact Section */}
        <section>
          <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
          <p className="text-lg text-gray-700 mb-4">
            Have questions or want to learn more about Our Company? Feel free to reach out to us. We value your feedback and are always here to assist you.
          </p>
          <div className="flex justify-center space-x-6">
            {/* Instagram */}
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-3xl text-gray-700 hover:text-gray-900 cursor-pointer" />
            </a>
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-3xl text-gray-700 hover:text-gray-900 cursor-pointer" />
            </a>
            {/* GitHub */}
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-3xl text-gray-700 hover:text-gray-900 cursor-pointer" />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
