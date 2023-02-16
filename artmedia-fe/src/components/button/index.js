import { buttonClass } from "./style";
const Button = ({ label, onClick, type }) => {
    return (
      <button type={type} onClick={onClick} className={buttonClass}>
        {label}
      </button>
    );
  };
  
  export default Button;