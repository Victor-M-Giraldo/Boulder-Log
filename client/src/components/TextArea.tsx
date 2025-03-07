interface TextAreaProps {
    label: string;
    placeholder: string;
    name: string;
    error?: string;
    required?: boolean;
    maxLength?: number;
    minLength?: number;
}

export default function TextArea({
    label,
    error,
    required,
    placeholder,
    maxLength,
    minLength,
    name,
}: TextAreaProps) {
    return (
        <>
            <label htmlFor={label}>
                {label}
                <textarea
                    className='textarea w-full mt-1 resize-none'
                    placeholder={placeholder}
                    required={required}
                    maxLength={maxLength}
                    minLength={minLength}
                    name={name}
                ></textarea>
                <p className='text-sm text-red-400 mt-1'>{error}</p>
            </label>
        </>
    );
}
