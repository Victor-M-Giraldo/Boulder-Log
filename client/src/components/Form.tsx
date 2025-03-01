import { ElementType } from 'react';

interface FormProps {
  FormHeader: ElementType;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  children: React.ReactNode;
  enctype?:
    | 'multipart/form-data'
    | 'application/x-www-form-urlencoded'
    | 'text/plain';
}

export default function Form({
  children,
  FormHeader,
  enctype,
  onSubmit,
}: FormProps) {
  return (
    <>
      <FormHeader />
      <form onSubmit={onSubmit} className='space-y-4' encType={enctype}>
        {children}
      </form>
    </>
  );
}
