import "./Input.scss";
import PropTypes from "prop-types";

const Input = ({ onChange, ...props }) => {
  return (
    <div className="form__field">
      <label htmlFor={props.name}>{props.label}</label>
      <input
        type={props.type}
        className={props.className}
        name={props.name}
        onChange={onChange}
        value={props.value}
        required
      />
    </div>
  );
};

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Input;
