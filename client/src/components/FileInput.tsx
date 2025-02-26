import { ElementType } from "react";

interface FileInputProps {
    label: string;
    Wrapper?: ElementType;
    accept: string;
}

export default function FileInput({label, Wrapper, accept}: FileInputProps) {
  const Content = (
    <label htmlFor={label}>
      {label}
      <input type='file' className='file-input w-full' accept={accept}/>
    </label>
  )
    return Wrapper ? <Wrapper>{Content}</Wrapper> : Content;
}
