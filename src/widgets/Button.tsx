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
      className={`p-2 m-2 w-full  rounded-md flex flex-row items-center justify-evenly border-2 transition-colors duration-300 
        ${isClicked ? "" : "" } 
        ${inv ? "hover:bg-tertiary hover:text-secondary bg-primary text-secondary" : "hover:bg-secondary hover:text-tertiary "}
        ${selected && inv ? "bg-tertiary text-secondary" : ""}
        ${selected && !inv ? "bg-secondary text-primary" : ""}
        
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