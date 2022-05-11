import "./Table.scss";
import PropTypes from "prop-types";

const Table = (props) => {
  let { table, onDelete, onEdit } = props;
  return (
    <table className="table">
      <tbody>
        <tr>
          <th>Дата (ДД.ММ.ГГ)</th>
          <th>Пройдено км</th>
          <th>Действия</th>
        </tr>
        {table.map((t) => (
          <tr key={t.id}>
            <td>{t.date}</td>
            <td>{t.distance}</td>
            <td>
              <button type="submit" onClick={(e) => onEdit(e, t.id)}>
                ✎
              </button>
              <button type="submit" onClick={(e) => onDelete(e, t.id)}>
                ✘
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

Table.propTypes = {
  table: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default Table;
