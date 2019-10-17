import React from "react";

const invalidInputStyles = {
  borderColor: "red",
  color: "red"
};
type InputProps = {
  values: {
    value: string | number;
    type: string;
    name: string;
    placeholder: string;
  };
  handleInputChange: (e: React.FormEvent<HTMLInputElement>) => void;
  children?: React.ReactNode;
};

const InputLabel: React.FC<InputProps> = ({ values, handleInputChange }) => {
  const { value, name } = values;
  const styles = invalidInputStyles;

  return (
    <input
      style={styles}
      name={name}
      value={value}
      onChange={handleInputChange}
    />
  );
};

export default InputLabel;
