import React from 'react'

export interface ButtonProps {
  name: string;
  label: string;
  type: 'button' | 'submit'
}

export const Button = ({type = "submit", name, label}: ButtonProps) => {
  return (
    <button className="form-button" type={type} name={name}>{label}</button>
  );
}
