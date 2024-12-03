import "./Button.css";

type TButton = {
  buttonText: string;
  isDisabled: boolean;
  typeButton: string;
  functionClick: () => void;
};

function Button({
  buttonText,
  isDisabled,
  typeButton,
  functionClick,
}: TButton) {
  return (
    <>
      <button
        onClick={functionClick}
        disabled={isDisabled}
        type="button"
        className={typeButton}
      >
        {buttonText}
      </button>
    </>
  );
}

export default Button;
