import React from "react";

const Card = ({ icon: Icon, amount, description }) => {
  return (
    <div className="space-y-1 rounded-xl bg-white p-4 shadow-md lg:space-y-2">
      <Icon size={40} />
      <p className="text-lg font-semibold lg:text-xl">{amount}</p>
      <p className="text-sm lg:text-base">{description}</p>
    </div>
  );
};

export default Card;
