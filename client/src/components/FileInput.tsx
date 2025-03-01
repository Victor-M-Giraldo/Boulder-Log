import { ElementType } from "react";

interface FileInputProps {
    label: string;
    Wrapper?: ElementType;
    accept: string;
    required?: boolean;
    error?: string | null;
    name: string;
}

export default function FileInput({label, Wrapper, accept, required, error, name}: FileInputProps) {
  const Content = (
    <label htmlFor={label}>
      {label}
      <input
        type='file'
        className='file-input w-full mt-1'
        accept={accept}
        required={required}
        name={name}
      />
      <p className='text-sm text-red-400 mt-1'>{error}</p>
    </label>
  );
    return Wrapper ? <Wrapper>{Content}</Wrapper> : Content;
}
