import { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [passwordErrMsg, setPasswordErrMsg] = useState([]);

  //   const createUser = (email, password, name) => {
  //     setLoading(true);

  //     return createUserWithEmailAndPassword(auth, email, password, name).then(
  //       () => {
  //         return updateProfile(auth.currentUser, {
  //           displayName: name,
  //         });
  //       }
  //     );
  //   };
  const createUser = (email, password, name) => {
    setLoading(true);

    if (password.length <= 6) {
      return setPasswordErrMsg("Password must be at least 6 characters.");
    }

    setPasswordErrMsg("");
    return createUserWithEmailAndPassword(auth, email, password, name).then(
      () => {
        return updateProfile(auth.currentUser, {
          displayName: name,
        });
      }
    );
  };

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currUser) => {
      setUser(currUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  });

  const authInfo = {
    user,
    loading,
    createUser,
    signInUser,
    signOutUser,
    passwordErrMsg,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
export default AuthProvider;
