import Input from "../Input/Input";
import PropTypes from "prop-types";

function Form(props) {
  const { date, distance, onChange, onSubmit } = props;
  const handleChange = ({ target }) => {
    const name = target.name;
    const value = target.value;
    onChange(name, value);
  };

  const propsForDate = {
    label: "Дата (ДД.ММ.ГГ)",
    type: "date",
    className: "form__date",
    name: "date",
    value: date,
  };

  const propsForDistance = {
    label: "Пройдено км",
    type: "number",
    className: "form__distance",
    name: "distance",
    value: distance,
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <Input {...propsForDate} onChange={handleChange} />
      <Input {...propsForDistance} onChange={handleChange} />
      <button className="form__submit" type="submit">
        Ок
      </button>
    </form>
  );
}

Form.propTypes = {
  date: PropTypes.string.isRequired,
  distance: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
