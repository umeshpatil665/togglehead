
import React from "react";
import "./Header.css";

interface MenuItemProps {
  label: string;
  items?: string[];
}

const MenuItem: React.FC<MenuItemProps> = ({ label, items = [] }) => {
  return (
    <div className="menu-item">
      {label}
      <span className="arrow">▼</span>
      {items.length > 0 && (
        <ul className="dropdown">
          {items.map((item, index) => (
            <li key={index} className="dropdown-item">
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MenuItem;
