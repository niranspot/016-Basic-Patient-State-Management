import { useDispatch, useSelector } from "react-redux";

import {
  addPatient,
  deletePatient,
} from "../features/patientSlice";

const usePatient = () => {
  const patients = useSelector(
    (state) => state.patient.patients
  );

  const dispatch = useDispatch();

  return {
    patients,

    addPatient: (name) =>
      dispatch(addPatient(name)),

    deletePatient: (index) =>
      dispatch(deletePatient(index)),
  };
};

export default usePatient;