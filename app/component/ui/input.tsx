import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    hasError?: boolean
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, placeholder, hasError, ...props }, ref) => {
        return (
            <input
                type={type}
                className={`w-full rounded-md border-gray-200 outline-none pe-4 sm:text-sm ${className} ${hasError ? 'border-red-500' : ''}`}
                placeholder={placeholder}
                ref={ref}
                {...props}
            />
        );
    }
);

Input.displayName = "Input";

export default Input;
