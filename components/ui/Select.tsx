interface SelectProps {
  label?: string;
  name: string;
  options: { value: string; label: string }[];
  required?: boolean;
  className?: string;
}

export default function Select({
  label,
  name,
  options,
  required = false,
  className = '',
}: SelectProps) {
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-2">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <select
        name={name}
        id={name}
        required={required}
        className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all ${className}`}
      >
        <option value="">Sélectionnez une option</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
