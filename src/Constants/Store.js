import { createStore } from "redux";

const initialState = {
      enrolledCourses: [],
};

const reducer = (state = initialState, action) => {
      switch (action.type) {
            case "ENROLL_COURSE":
                  return {
                        ...state,
                        enrolledCourses: [...state.enrolledCourses, action.payload],
                  };
            default:
                  return state;
      }
}
const store = createStore(reducer);

export default store;