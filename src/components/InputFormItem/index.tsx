import React, { forwardRef } from 'react';

interface InputFormItemProps extends React.InputHTMLAttributes<HTMLInputElement> {
  inputTitle: string;
  placeholder: string;
  errorMessage?: string;
  required?: boolean;
}

const InputFormItem = forwardRef<HTMLInputElement, InputFormItemProps>(
  ({ inputTitle, placeholder, errorMessage, required = false, ...rest }, ref) => {
    return (
      <div className="flex flex-col">
        <label className="mb-[0.5rem] flex items-center px-[0.25rem] text-[#222]">
          <span className="text-[1.25rem]/[1.25rem] font-semibold">{inputTitle}</span>
          {required && (
            <span
              className={`ml-[0.5rem] text-[1rem]/[1rem] font-medium ${
                errorMessage ? 'text-[#FF0002]' : 'text-[#888]'
              }`}
            >
              필수
            </span>
          )}
        </label>

        <input
          ref={ref}
          placeholder={placeholder}
          className={`rounded-[0.75rem] border px-[1.5rem] py-[0.75rem] text-[1.25rem]/[1.25rem] font-medium text-[#888] placeholder-[#888] transition-colors duration-[150ms] ease-[cubic-bezier(0.97,-0.02,0.03,1)] outline-none ${
            errorMessage
              ? 'border-[#FF0002]'
              : 'border-[#888] hover:border-[#666] hover:text-[#666] hover:placeholder-[#666] focus:border-[#222] focus:bg-[#F8F8F8] focus:text-[#222] focus:placeholder-[#222]'
          }`}
          {...rest}
        />
        {errorMessage && (
          <p className="mt-[0.5rem] ml-[0.25rem] text-[1rem]/[1rem] font-medium text-[#FF0002]">
            {errorMessage}
          </p>
        )}
      </div>
    );
  },
);

InputFormItem.displayName = 'InputFormItem';

export default InputFormItem;
