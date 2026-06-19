import { useSelector, useDispatch } from "react-redux";

import {
  addPatient as addPatientAction,
  deletePatient as deletePatientAction,
} from "../redux/actions";

const usePatient = () => {
  const patients = useSelector(
    (state) => state.patients
  );

  const dispatch = useDispatch();

  const addPatient = (name) => {
    dispatch(addPatientAction(name));
  };

  const deletePatient = (index) => {
    dispatch(deletePatientAction(index));
  };

  return {
    patients,
    addPatient,
    deletePatient,
  };
};

export default usePatient;