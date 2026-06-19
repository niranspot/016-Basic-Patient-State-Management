import usePatient from "../hooks/usePatient";

function PatientList() {
  const { patients, deletePatient } =
    usePatient();

  return (
    <div>
      <h2>Patient List</h2>

      {patients.length === 0 ? (
        <p>No Patients Found</p>
      ) : (
        <ul>
          {patients.map((patient, index) => (
            <li key={index}>
              {patient}

              <button
                onClick={() =>
                  deletePatient(index)
                }
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default PatientList;