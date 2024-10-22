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
  const inputClass =
    "outline-none bg-transparent border-x-0 border-t-0 border-2 w-full py-2 focus:border-blue-500 dark:placeholder:text-secondary-dark dark:border-white/50 dark:focus:border-blue-500 transition-all duration-300";
  return (
    <div className="animate-fadein">
      <label htmlFor={id} className="font-medium">
        {label}
      </label>

      {textarea ? (
        <textarea
          className={inputClass}
          id={id}
          placeholder={placeholder}
          required
          rows={textareaRows}
        />
      ) : (
        <input
          type={type}
          className={inputClass}
          id={id}
          placeholder={placeholder}
          required
        />
      )}
    </div>
  );
};

export default Input;
