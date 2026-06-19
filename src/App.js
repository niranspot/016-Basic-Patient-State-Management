import AddPatient from "./components/AddPatient";
import PatientList from "./components/PatientList";
import "./App.css"

function App() {
  return (
    <div className="main">
      <h1 className="titlep">Patient Management</h1>

      <AddPatient />
      <PatientList />
    </div>
  );
}

export default App;