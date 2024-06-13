import React, { useState } from "react";
import { Link } from "react-router-dom";
import ClassNames from "classnames";

interface MenuItems {
  text?: string;
  path: string;
  icon?: string;
  iconPosition?: "left" | "right";
  className?: string;
  component?: React.ReactNode;
}

interface TopBarProps {
  className?: string;
  logoUrl?: string;
  logoAlt?: string;
  menuItems?: Array<MenuItems>;
  isFixed?: boolean;
  isSticky?: boolean;
  isTransparent?: boolean;
  bgColor?: string;
}

const TopBar = ({
  className,
  logoUrl,
  logoAlt,
  menuItems,
  isFixed,
  isSticky,
  isTransparent,
  bgColor = "bg-blue-500 text-white",
}: TopBarProps) => {
  const [scroll, setScroll] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // listen to scroll event
  window.addEventListener("scroll", () => {
    setScroll(window.scrollY);
  });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className={ClassNames(
        "flex justify-between items-center w-full h-16 px-4 md:px-10 py-2 transition-all duration-300",
        className,
        isFixed && "fixed top-0 left-0 right-0 z-50",
        isSticky && "sticky top-0",
        isTransparent && scroll === 0 && "bg-transparent text-white",
        !isTransparent && bgColor,
        scroll > 0 && `shadow-md ${bgColor}`
      )}
    >
      <div className="w-1/3 md:hidden">
        <button
          onClick={toggleMenu}
          className="text-2xl text-white focus:outline-none"
        >
          <i className="fa-duotone fa-bars"></i>
        </button>
      </div>
      <div className="w-full md:w-1/3">
        <img src={logoUrl} alt={logoAlt} className="h-10 object-fit" />
      </div>
      <div
        className={ClassNames(
          "md:flex items-center justify-end md:space-x-4 md:w-2/3 space-y-4 md:space-y-0",
          isMenuOpen ? "transition-all duration-300 transform translate-x-0 md:translate-x-0" : "transition-all duration-300 transform -translate-x-full md:translate-x-0",
          "bg-blue-500 text-white h-screen w-full p-4 fixed top-16 left-0 right-0 z-50 md:relative md:top-0 md:left-auto md:right-auto md:bg-transparent md:text-white md:p-0 md:h-0"
        )}
      >
        {menuItems?.map((item, index) =>
          item.component ? (
            <div key={index}>{item.component}</div>
          ) : (
            <Link
              key={index}
              className="flex items-center space-x-2 text-xl md:text-base hover:text-gray-300 transition-all duration-300 hover:text-lg"
              to={item.path}
            >
              {item.icon && item.iconPosition !== "right" && (
                <i className={item.icon}></i>
              )}
              <span>{item.text}</span>
              {item.icon && item.iconPosition === "right" && (
                <i className={item.icon}></i>
              )}
            </Link>
          )
        )}
      </div>
    </div>
  );
};

export default TopBar;
