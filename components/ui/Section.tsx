interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'gray';
  id?: string;
}

export default function Section({
  children,
  className = '',
  background = 'white',
  id
}: SectionProps) {
  const bgClasses = {
    white: 'bg-white',
    gray: 'bg-gray-100',
  };

  return (
    <section
      id={id}
      className={`section-padding ${bgClasses[background]} ${className}`}
    >
      <div className="container-custom">
        {children}
      </div>
    </section>
  );
}
