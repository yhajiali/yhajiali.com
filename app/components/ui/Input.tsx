import React from "react";

type Props = {
  label: string;
  id: string;
  placeholder: string;
  textarea?: boolean;
  textareaRows?: number;
  type?: "text" | "email";
};

const Input = ({
  label,
  id,
  placeholder,
  textarea,
  textareaRows = 3,
  type,
}: Props) => {
  return (
    <div className="animate-fadein">
      <label htmlFor={id} className="font-medium">
        {label}
      </label>

      {textarea ? (
        <textarea
          className="outline-none bg-transparent border-x-0 border-t-0 border-2 w-full py-2 focus:border-blue-400 transition-all duration-300"
          id={id}
          placeholder={placeholder}
          required
          rows={textareaRows}
        />
      ) : (
        <input
          type={type}
          className="outline-none bg-transparent border-x-0 border-t-0 border-2 w-full py-2 focus:border-blue-400 transition-all duration-300"
          id={id}
          placeholder={placeholder}
          required
        />
      )}
    </div>
  );
};

export default Input;
