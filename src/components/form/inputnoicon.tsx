import React from "react";

interface InputProps {
  placeholder?: string;
  type?: string;
  value?: string;
  name?: string;
  inputClassName?: string;
  iconClassName?: string;
  containerClassName?: string;
  inputRef?: React.RefObject<HTMLInputElement | HTMLTextAreaElement>;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  autofocus?: boolean;
  multiline?: boolean;
}

const Input: React.FC<InputProps> = ({
  placeholder = "",
  type = "text",
  name = "",
  inputClassName = "",
  containerClassName = "",
  inputRef,
  autofocus = false,
  multiline = false,
  onChange,
}) => {
  return (
    <div className={`w-full ${containerClassName}`}>
      {multiline ? (
        <textarea
          name={name}
          placeholder={placeholder}
          className={`w-full border-[1px] border-gray-400 rounded-lg ${inputClassName}`}
          onChange={onChange as React.ChangeEventHandler<HTMLTextAreaElement>}
          ref={inputRef as React.RefObject<HTMLTextAreaElement>}
          autoFocus={autofocus}
        />
      ) : (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          className={`w-full border-[1px] border-gray-400 rounded-lg ${inputClassName}`}
          onChange={onChange as React.ChangeEventHandler<HTMLInputElement>}
          ref={inputRef as React.RefObject<HTMLInputElement>}
          autoFocus={autofocus}
        />
      )}
    </div>
  );
};

export default Input;
