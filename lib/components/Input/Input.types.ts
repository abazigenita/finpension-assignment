import React from 'react';

export type InputState = 'valid' | 'invalid';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  state?: InputState | undefined;
  suffix?: string | undefined;
  helpText?: string | undefined;
  errorText?: string | undefined;
}