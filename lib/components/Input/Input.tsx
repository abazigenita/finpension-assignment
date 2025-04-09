import React from 'react';
import { InputProps } from "./Input.types.ts";
import { inputBase, inputValidationStates, errorHint, neutralHint } from "./Input.styles.ts";
import { border, focus, font } from "../../styles/tokens.ts";

const Input: React.FC<InputProps> = ({
                                       type = 'text',
                                       state ,
                                       prefix,
                                       suffix,
                                       helpText,
                                       errorText,
                                       className,
                                       ...rest
                                     }) => {
  return (
    <div className="space-y-1">
      <div className="relative flex items-center">
        {prefix && <span className="absolute left-3 text-gray-500">{prefix}</span>}
        <input
          type={type}
          className={`
            ${inputBase} 
            ${state && inputValidationStates[state]} 
            ${border}
            ${focus}
            ${font}
            ${prefix ? 'pl-6' : ''} 
            ${suffix ? 'pr-6' : ''} 
            ${className || ''}
          `}
          {...rest}
        />
        {suffix && <span className="absolute right-3 text-gray-500">{suffix}</span>}
      </div>
      {state === 'invalid' && errorText ? (
        <p className={errorHint}>{errorText}</p>
      ) : helpText ? (
        <p className={neutralHint}>{helpText}</p>
      ) : null}
    </div>
  );
};

export default Input;
