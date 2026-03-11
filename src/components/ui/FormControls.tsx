import type { InputHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes } from 'react';
import { getFormControlClass, type FormControlTone, type FormControlWidth } from './formControlStyles';

interface BaseFieldProps {
  tone?: FormControlTone;
  width?: FormControlWidth;
  className?: string;
}

type TextInputFieldProps = InputHTMLAttributes<HTMLInputElement> & BaseFieldProps;
type TextAreaFieldProps = TextareaHTMLAttributes<HTMLTextAreaElement> & BaseFieldProps;
type SelectFieldProps = SelectHTMLAttributes<HTMLSelectElement> & BaseFieldProps;

export function TextInputField({ tone, width, className = '', ...props }: TextInputFieldProps) {
  return <input {...props} className={getFormControlClass({ tone, width, className })} />;
}

export function TextAreaField({ tone, width, className = '', rows = 4, ...props }: TextAreaFieldProps) {
  return <textarea {...props} rows={rows} className={getFormControlClass({ tone, width, className })} />;
}

export function SelectField({ tone, width, className = '', children, ...props }: SelectFieldProps) {
  return (
    <select {...props} className={getFormControlClass({ tone, width, className })}>
      {children}
    </select>
  );
}
