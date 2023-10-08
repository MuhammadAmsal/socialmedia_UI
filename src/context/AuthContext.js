

import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  user: { 
    _id:"64fc663d4a480932c70e248a",
    username:"Amsal",
    email:"amsal@gmail.com",
    profilePicture:"persons/Capture4.PNG",
    coverPicture:"",
    isAdmin:false,
    followers:[],
    followings:[],
    },
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
