import { useState } from "react";
import usePatient from "../hooks/usePatient";

function AddPatient() {
  const [name, setName] = useState("");

  const { addPatient } = usePatient();

  const handleAdd = () => {
    if (!name.trim()) return;

    addPatient(name);

    setName("");
  };

  return (
    <div className="add-container">
      <input
        type="text"
        placeholder="Enter Patient Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={handleAdd}>
        Add Patient
      </button>
    </div>
  );
}

export default AddPatient;