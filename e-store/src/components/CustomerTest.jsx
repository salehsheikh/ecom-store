import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const CustomerTest = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Petey Cruiser',
      role: 'Designer at Colorlib',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D',
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    },
    {
      id: 2,
      name: 'John Doe',
      role: 'Mern developer',
      image: 'https://placekitten.com/500/500',
      review: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="bg-gray-800  py-16 ml-4 lg:mx-8">
      <div className="max-w-2xl mx-auto px-4">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Customer Testimonial</h2>
          <Slider {...settings}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="flex items-center justify-center mt-10 ">
                <div className="w-16 h-16 overflow-hidden rounded-full mx-auto">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover "
                  />
                </div>
                <div className="ml-4">
                  <span className="block text-xl font-semibold text-white">
                    {testimonial.name}
                  </span>
                  <p className="text-white">{testimonial.role}</p>
                  <p className="text-white mt-2">{testimonial.review}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default CustomerTest;
