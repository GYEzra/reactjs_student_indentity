import React from 'react';
import './Services.css'; // Link to your CSS file

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Basic Service',
      price: '$99',
      description: 'Describe important details like price, value, length of service, and why it’s unique. Or use these sections to showcase different key values of your products or services.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRulX29SGXtDy1gmj5wwx9P_5YjdQbRntAxGA&s',
    },
    {
      id: 2,
      title: 'Intermediate Service',
      price: '$149',
      description: 'Describe important details like price, value, length of service, and why it’s unique. Or use these sections to showcase different key values of your products or services.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRulX29SGXtDy1gmj5wwx9P_5YjdQbRntAxGA&s',
    },
    {
      id: 3,
      title: 'Advanced Service',
      price: '$199',
      description: 'Describe important details like price, value, length of service, and why it’s unique. Or use these sections to showcase different key values of your products or services.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRulX29SGXtDy1gmj5wwx9P_5YjdQbRntAxGA&s',
    },
  ];

  return (
    <div className="services-container">
      <h1>Our Services</h1>
      <div className="services-grid">
        {services.map(service => (
          <div className="service-card" key={service.id}>
            <img src={service.image} alt={service.title} className="service-image" />
            <div className="service-details">
              <h2>{service.title}</h2>
              <h3>{service.price}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
