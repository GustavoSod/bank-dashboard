// Corrigido InputText.tsx
import React from 'react';

interface InputTextProps {
  type: string;
  name: string;
  placeholder: string;
  style: string;
}

const InputText: React.FC<InputTextProps> = ({ type, name, placeholder, style }) => {
  return (
    <input type={type} name={name} placeholder={placeholder} className={style} />
  );
}

export default InputText;
