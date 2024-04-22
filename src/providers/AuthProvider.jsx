import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";

export const ResidenceContext = createContext(null);
console.log(ResidenceContext);

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //logOut

  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("user in", currentUser);
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser({});
      }
    });
    return () => {
      unSubscribe();
    };
  }, []);
  const estateInfo = { user, createUser, signIn, logOut };

  return (
    <ResidenceContext.Provider value={estateInfo}>
      {children}
    </ResidenceContext.Provider>
  );
};

export default AuthProvider;
