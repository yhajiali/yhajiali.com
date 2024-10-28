import clsx from "clsx";
import React from "react";

type Props = {
  label: string;
  id: string;
  placeholder: string;
  textarea?: boolean;
  textareaRows?: number;
  type?: "text" | "email";
  error?: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
};

const Input = ({
  label,
  id,
  placeholder,
  textarea,
  textareaRows = 3,
  type,
  error,
  onChange,
}: Props) => {
  const inputClass = clsx(
    "outline-none bg-transparent border-x-0 border-t-0 border-2 w-full py-2 focus:border-blue-500 dark:placeholder:text-secondary-dark dark:border-white/50 dark:focus:border-blue-500 transition-all duration-300",
    error && ""
  );

  return (
    <div className="animate-fadein w-full">
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
          onChange={onChange}
        />
      ) : (
        <input
          type={type}
          className={inputClass}
          id={id}
          placeholder={placeholder}
          required
          onChange={onChange}
        />
      )}

      <span
        className={clsx(
          "animate-fadein text-red-400",
          error ? "flex" : "hidden"
        )}
      >
        {error}
      </span>
    </div>
  );
};

export default Input;
