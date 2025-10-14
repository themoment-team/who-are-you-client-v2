interface StepButtonProps {
  variant: 'back' | 'next';
  onClick: () => void;
  children: React.ReactNode;
}

const StepButton = ({ variant, onClick, children }: StepButtonProps) => {
  const baseStyles = 'cursor-pointer transition-colors duration-200 font-medium';

  const variantStyles = {
    back: 'decoration-skip-ink-none text-[1.25rem]/[1.875rem] text-[#888] underline [text-underline-position:from-font] hover:text-[#222]',
    next: 'rounded-xl border border-[#222] px-[1.25rem] py-[1rem] text-[1.25rem]/[1.25rem] text-[#222] hover:bg-[#222] hover:text-white hover:font-[600]',
  };

  return (
    <button className={`${baseStyles} ${variantStyles[variant]}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default StepButton;
