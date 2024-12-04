import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/firebase";

const googleProvider = new GoogleAuthProvider();

export const AuthContex = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  //   login with google
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };
  useEffect(() => {
    const unSubscreibe = onAuthStateChanged(auth, (currentUser) => {
      console.log("current user", currentUser);
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unSubscreibe();
    };
  }, []);

  const authInfo = {
    loading,
    user,
    createUser,
    loginUser,
    googleLogin,
    signOutUser,
  };

  return <AuthContex.Provider value={authInfo}>{children}</AuthContex.Provider>;
};

export default AuthProvider;
