import React from "react";

export const FooterColumn = ({ title, links }) => {
  return (
    <div>
      <ul>
        <li className="font-extrabold text-xl mb-2">{title}</li>
        {links.map((link, index) => (
          <li key={index} className="mb-1 font-thin text-[15px]">
            {link}
          </li>
        ))}
      </ul>
    </div>
  );
};
