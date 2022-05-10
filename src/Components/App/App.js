import Form from "../Form/Form";
import Table from "../Table/Table";
import "./App.css";
import { useState } from "react";
import { nanoid } from "nanoid";

function App() {
  const [form, setForm] = useState({
    date: "",
    distance: "",
  });

  const [table, setTable] = useState([]);

  const handleChange = (name, value) => {
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newTable = Array.from(table);

    //Проверка на повторы дат
    const coincidence = newTable.findIndex(
      (record) =>
        new Date(record.date).getTime() === new Date(form.date).getTime()
    );
    if (coincidence !== -1) {
      newTable[coincidence].distance =
        Number(newTable[coincidence].distance) + Number(form.distance);
    } else {
      newTable.push({
        id: nanoid(),
        date: form.date,
        distance: form.distance,
      });
    }

    // Сортировка
    if (newTable.length > 1) {
      newTable = newTable.sort((a, b) => new Date(a.date) - new Date(b.date));
    }

    setTable(newTable);
    setForm({
      date: "",
      distance: "",
    });
  };

  // Удаление
  const handleDelete = (e, id) => {
    e.preventDefault();
    setTable((prevTable) => prevTable.filter((el) => el.id !== id));
  };

  // Редактирование
  const handleEdit = (e, id) => {
    e.preventDefault();
    const editableRecord = table.find((el) => el.id === id);
    setForm({ date: editableRecord.date, distance: editableRecord.distance });
    handleDelete(e, id);
  };

  return (
    <div className="container">
      <Form
        date={form.date}
        distance={form.distance}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <Table table={table} onDelete={handleDelete} onEdit={handleEdit} />
    </div>
  );
}

export default App;
