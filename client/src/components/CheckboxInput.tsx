import { ElementType } from "react";

interface CheckboxInputProps {
    children: React.ReactNode;
    label: string;
    Wrapper?: ElementType;
    value: string;
    required?: boolean;
    error?: string | null;
    name: string;
}

export default function CheckboxInput({label, Wrapper, required, value, error, name}: CheckboxInputProps) {
  const Content = (
    <label className='fieldset-label mt-2'>
      <input
        type='checkbox'
        className='checkbox checkbox-primary mt-1'
        required={required}
        value={value}
        name={name}
      />
      {label}
      <p className='text-sm text-red-400 mt-1'>{error}</p>
    </label>
  );
    return Wrapper ? <Wrapper>{Content}</Wrapper> : Content;
}
