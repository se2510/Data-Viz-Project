import React, { useState } from "react";

interface ButtonProps {
  text?: string;
  inv?: boolean;
  onClick?: () => void;
  icon?: React.ReactNode | null;
  selected?: boolean;
}

const Button: React.FC<ButtonProps> = ({ text = "Botón", onClick, inv = false, icon = null , selected=false}) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    if (onClick) onClick();
    setTimeout(() => setIsClicked(false), 300); // Vuelve al estado normal después de 300ms
  };

  return (
    <button
      className={`p-2 m-2 w-full flex flex-row items-center justify-evenly border-2 border-tiffanyBlue transition-colors duration-300 
        ${isClicked ? "bg-vanilla" : "bg-rufous"} 
        ${inv ? "hover:bg-[#e9d8a6] hover:text-[#001219]" : "hover:bg-[#94d2bd] hover:text-[#9b2226]"}
        ${selected ? "bg-[#94d2bd] text-[#001219]" : ""}
        ${selected && inv ? "bg-[#e9d8a6] text-[#001219]" : ""}
        `}
      onClick={handleClick}
    >
      {icon == null ? "" : icon}
      {icon == null ? "" : " "}
      {text}
    </button>
  );
};

export default Button;