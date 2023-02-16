import { inputClass,inputLabelClass } from "./style";
const Input = ({ label, type, name, placeholder, value, onChange }) => {
    return (
      <div>
        <label htmlFor={name} className={inputLabelClass}>{label}</label>
        <input
          type={type}
          name={name}
          id={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={inputClass}
        />
      </div>
    );
  };
  
  export default Input;