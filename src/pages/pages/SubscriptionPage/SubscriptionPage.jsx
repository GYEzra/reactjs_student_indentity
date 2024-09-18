import React from "react";

import Subscription from "../../components/Subscription/Subscription";
import "./SubscriptionPage";

const SubscriptionPage = () => {
    const subscriptionArray = [
        {
            plan: "STARTER",
            price: "$5/mo",
            popular: "",
            service: ["Automated Reporting", "Faster Processing", "Customization"],
            info: "Literally, you probably haven't heard of them jean short."
        },
        {
            plan: "STARTER",
            price: "$5/mo",
            popular: "",
            service: ["Automated Reporting", "Faster Processing", "Customization"],
            info: "Literally, you probably haven't heard of them jean short."
        },
        {
            plan: "STARTER",
            price: "$5/mo",
            popular: "",
            service: ["Automated Reporting", "Faster Processing", "Customization"],
            info: "Literally, you probably haven't heard of them jean short."
        },
        {
            plan: "STARTER",
            price: "$5/mo",
            popular: "",
            service: ["Automated Reporting", "Faster Processing", "Customization"],
            info: "Literally, you probably haven't heard of them jean short."
        },
        {
            plan: "STARTER",
            price: "$5/mo",
            popular: "",
            service: ["Automated Reporting", "Faster Processing", "Customization"],
            info: "Literally, you probably haven't heard of them jean short."
        }
    ];

    return (
        <div className="Subscription">
            <div className="Subscription_box">
                <div className="Subscription_box_info">
                    <h1>Subscription</h1>
                    <p>Pricing to fit the needs of any company size.</p>
                </div>

                <div className="Subscription_box_box">
                    {subscriptionArray.map((el, i) => (
                        <Subscription key={i} i={1} el={el} />
                    ))}
                </div>
            </div>
        </div>
    )
};

export default SubscriptionPage;
