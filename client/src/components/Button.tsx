import { ElementType } from 'react';

interface ButtonProps {
  children: React.ReactNode;
  type: 'submit' | 'reset' | 'button';
  disabled?: boolean;
  Wrapper?: ElementType;
  width: 'full' | 'auto';
}

export default function Button({ children, Wrapper, width, ...props }: ButtonProps) {
  const baseStyles = 'btn btn-primary';
  const widthStyles = width === 'full' ? 'w-full' : 'w-auto';
  const className = `${baseStyles} ${widthStyles}`;
  const Content = (
    <button {...props} className={className}>
      {children}
    </button>
  );
  return Wrapper ? <Wrapper>{Content}</Wrapper> : Content;
}
