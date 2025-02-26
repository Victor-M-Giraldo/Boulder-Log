import { ElementType } from 'react';

interface SelectInputProps {
  label: string;
  options: string[];
  Wrapper?: ElementType;
  required?: boolean;
  error?: string | null;
}

export default function SelectInput({ options, label, Wrapper, required }: SelectInputProps) {
  const Content = (
    <label htmlFor={label}>
      {label}
      <select className='select w-full' defaultValue={options[0]} required={required}>
        {options.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </select>
    </label>
  )
  return Wrapper ? <Wrapper>{Content}</Wrapper> : Content;
}
