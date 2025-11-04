interface StepButtonProps {
  variant: 'back' | 'next';
  onClick: () => void;
  children: React.ReactNode;
  disabled?: boolean;
}

const StepButton = ({ variant, onClick, children, disabled = false }: StepButtonProps) => {
  const baseStyles = 'cursor-pointer font-medium transition-all ease-out';

  const variantStyles = {
    back: 'decoration-skip-ink-none text-[1.25rem]/[1.875rem] text-[#888] underline duration-100 [text-underline-position:from-font] hover:text-[#222]',
    next: 'rounded-xl border border-[#222] px-[1.25rem] py-[1rem] text-[1.25rem]/[1.25rem] text-[#222] duration-300',
  };

  const nextStateStyles = disabled
    ? 'opacity-30'
    : 'hover:bg-[#222] hover:font-[600] hover:text-white';

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${variant === 'next' ? nextStateStyles : ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default StepButton;
