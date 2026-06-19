export const ADD_PATIENT = "ADD_PATIENT";
export const DELETE_PATIENT = "DELETE_PATIENT";

export const addPatient = (name) => {
  return {
    type: ADD_PATIENT,
    payload: name,
  };
};

export const deletePatient = (index) => {
  return {
    type: DELETE_PATIENT,
    payload: index,
  };
};