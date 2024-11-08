import React from "react";
import { useRef } from "react";

interface InputProps {
  placeholder?: string;
  type?: string;
  value?: string;
  name?: string;
  inputClassName?: string;
  iconClassName?: string;
  containerClassName?: string;
  inputRef?: React.RefObject<HTMLInputElement>;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  placeholder = "",
  type = "text",
  name = "",
  inputClassName = "",
  containerClassName = "",
  inputRef,
  onChange,
}) => {
  return (
    <div className={`w-full  ${containerClassName}`}>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={`w-full border-[1px] border-gray-400 rounded-lg ${inputClassName}`}
        onChange={onChange}
        ref={inputRef}
      />
    </div>
  );
};

export default Input;
