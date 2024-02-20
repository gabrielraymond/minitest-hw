import React from "react";

const Button: React.FC<{
  children: React.ReactNode;
  size?: string;
  style?: string;
}> = ({ children, size = "reguler", style = "primary" }) => {
  const sizeClasses: any = {
    large: "text-medium py-5 px-6",
    reguler: "py-4 px-[16px] text-sm w-fit",
    navItem: "p-5 text-sm",
    small: "",
  };

  const styleClasses: any = {
    primary: "bg-wibu-100 text-black hover:bg-wibu-50 font-bold",
    secondary: "",
    outlined: "bg-transparent text-white border-white border-2 hover:bg-white hover:text-black font-bold transition-all duration-200",
    transparent: "hover:bg-wibu-700 font",
    contactIcon: "group hover:bg-white",
  };

  return (
    <button
      className={`${styleClasses[style]}  ${sizeClasses[size]} relative    rounded-full  `}
    >
      {children}
    </button>
  );
};

export default Button;
