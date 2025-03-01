import { ElementType } from 'react';

interface SelectInputProps {
  label: string;
  options: string[];
  Wrapper?: ElementType;
  required?: boolean;
  error?: string | null;
  name: string;
}

export default function SelectInput({
  options,
  label,
  Wrapper,
  required,
  error,
  name,
}: SelectInputProps) {
  const Content = (
    <label htmlFor={label}>
      {label}
      <select
        className='select w-full mt-1'
        defaultValue={options[0]}
        required={required}
        name={name}>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      <p className='text-sm text-red-400 mt-1'>{error}</p>
    </label>
  );
  return Wrapper ? <Wrapper>{Content}</Wrapper> : Content;
}
