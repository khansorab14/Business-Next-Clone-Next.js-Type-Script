import React from "react";

interface FooterColumnProps {
  title: string;
  links: string[]; // Array of strings representing link names or URLs
}

export const FooterColumn: React.FC<FooterColumnProps> = ({ title, links }) => {
  return (
    <div>
      <ul>
        {/* Title */}
        <li className="font-extrabold text-xl mb-2">{title}</li>

        {/* Links */}
        {links && links.length > 0 ? (
          links.map((link, index) => (
            <li key={index} className="mb-1 font-thin text-[15px]">
              <a href="#" className="hover:text-blue-500">
                {link}
              </a>
            </li>
          ))
        ) : (
          <li className="font-thin text-[15px]">No links available</li>
        )}
      </ul>
    </div>
  );
};
