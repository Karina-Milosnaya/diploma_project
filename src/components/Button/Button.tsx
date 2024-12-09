import "./Button.css";
import { TButton } from "../types/types";

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
