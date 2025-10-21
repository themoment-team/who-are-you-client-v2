type RadioToggleProps = {
  isTrue: boolean;
  setIsTrue: React.Dispatch<React.SetStateAction<boolean>>;
};

const RadioToggle = ({ isTrue, setIsTrue }: RadioToggleProps) => {
  const handleToggle = () => {
    setIsTrue((e) => !e);
  };
  return (
    <div
      className={`relative flex h-[1.6875rem] w-12 items-center rounded-[1.4375rem] p-[0.19rem] transition-colors duration-200 ${
        isTrue ? 'bg-black' : 'bg-[#BBB]'
      }`}
      onClick={handleToggle}
    >
      <div
        className={`absolute z-10 h-[1.3125rem] w-[1.3125rem] rounded-[50%] bg-white transition-transform duration-200 ${
          isTrue ? 'translate-x-[1.3125rem]' : 'translate-x-0'
        }`}
      />
    </div>
  );
};

export default RadioToggle;
