import React, { useContext, useEffect, useReducer } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase/firebase";

import { SET_LOADING, LOGIN_USER_SUCCESS, SET_USER, LOGOUT } from "./actions";
import reducer from "./reducer";
import { toast } from "react-toastify";

const initialState = {
  user: null,
  isLoading: false,
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    hd: "iiitn.ac.in",
  });

  const setLoading = (value) => {
    dispatch({ type: SET_LOADING, payload: value });
  };

  const notify = (notifications) => {
    notifications.map((notification) => {
      toast[notification.type](notification.message, {
        position: notification?.position,
        autoClose: notification?.autoClose,
      });
    });
  };

  const login = async () => {
    setLoading(true);
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        // The signed-in user info.
        const user = result.user;
        dispatch({ type: LOGIN_USER_SUCCESS, payload: user });
        notify([
          {
            type: "success",
            message: `Logged in as ${user.displayName.toLowerCase()}`,
          },
        ]);
        console.log({ credential, token, user });
        setLoading(false);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log({ errorCode, errorMessage, email, credential });
        setLoading(false);
      });
  };

  const logout = () => {
    setLoading(true);
    auth
      .signOut()
      .then(() => {
        dispatch({ type: LOGOUT });
        notify([{ type: "success", message: "Logged out successfully" }]);
        console.log("logout");
        setLoading(false);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    setLoading(true);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user.displayName, user.email, user.photoURL);
        dispatch({ type: SET_USER, payload: user });
        setLoading(false)
      } else {
        console.log("no logged in user");
        setLoading(false);
      }
    });
  }, []);

  return (
    <AppContext.Provider
      value={{
        ...state,
        login,
        logout,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider };
