import React from "react";

export const OfficeLocation = ({ title, address }) => {
  return (
    <div>
      <h1 className="uppercase text-sm py-4 font-extrabold">{title}</h1>
      <p className="text-sm">{address}</p>
    </div>
  );
};
