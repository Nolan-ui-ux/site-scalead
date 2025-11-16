interface InputProps {
  label?: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
  rows?: number;
}

export default function Input({
  label,
  name,
  type = 'text',
  placeholder,
  required = false,
  className = '',
  rows,
}: InputProps) {
  const baseClasses = 'w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all';

  const inputElement = rows ? (
    <textarea
      name={name}
      id={name}
      rows={rows}
      placeholder={placeholder}
      required={required}
      className={`${baseClasses} ${className}`}
    />
  ) : (
    <input
      type={type}
      name={name}
      id={name}
      placeholder={placeholder}
      required={required}
      className={`${baseClasses} ${className}`}
    />
  );

  return (
    <div className="w-full">
      {label && (
        <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-2">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      {inputElement}
    </div>
  );
}
