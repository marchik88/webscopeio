import React from "react";

type InputProps = {
  value: string;
  type: string;
  name: string;
  placeholder: string;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
  children?: React.ReactNode;
};

const Input: React.FC<InputProps> = props => {
  return <input {...props} />;
};

export default Input;
