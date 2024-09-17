import React from 'react';
import './SubscriptionPlans.css'; 

const SubscriptionPlans = () => {
  const plans = [
    {
      id: 1,
      title: 'Gold Subscription',
      price: '$100.00',
      frequency: 'Every month',
      description: 'Get anytime access to our growing collection of classes, workshops, and exclusive content. New items added every month.',
      image: 'https://cdn-images.vtv.vn/zoom/640_400/66349b6076cb4dee98746cf1/2024/08/16/stills-1-1--82--00487784407060607288166-88884556937264690877561.jpg',
    },
    {
      id: 2,
      title: 'Gold Subscription',
      price: '$100.00',
      frequency: 'Every month',
      description: 'Get anytime access to our growing collection of classes, workshops, and exclusive content. New items added every month.',
      image: 'https://cdn-images.vtv.vn/zoom/640_400/66349b6076cb4dee98746cf1/2024/08/16/stills-1-1--82--00487784407060607288166-88884556937264690877561.jpg',
    },
    {
      id: 3,
      title: 'Gold Subscription',
      price: '$100.00',
      frequency: 'Every month',
      description: 'Get anytime access to our growing collection of classes, workshops, and exclusive content. New items added every month.',
      image: 'https://cdn-images.vtv.vn/zoom/640_400/66349b6076cb4dee98746cf1/2024/08/16/stills-1-1--82--00487784407060607288166-88884556937264690877561.jpg',
    },
  ];

  return (
    <div className="subscription-container">
      <h1>Choose your plan</h1>
      <div className="plans-grid">
        {plans.map(plan => (
          <div className="plan-card" key={plan.id}>
            <img src={plan.image} alt={plan.title} className="plan-image" />
            <div className="plan-details">
              <h2>{plan.title}</h2>
              <h3>{plan.price}</h3>
              <p>{plan.frequency}</p>
              <p>{plan.description}</p>
              <button className="sign-up-button">Sign Up</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubscriptionPlans;
