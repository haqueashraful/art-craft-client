import {
  GithubAuthProvider,
  GoogleAuthProvider,
  TwitterAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import auth from "../Firebase/firebase.config";

const Context = createContext({});

const MyContextProvider = ({ children }) => {
  const [load, setLoad] = useState(false);
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);
  const [stateLoader, setStateLoader] = useState(true);
  const [storedValue, setStoredValue] = useState();
  const [isChecked, setIsChecked] = useState(storedValue || false);

  const googleProvider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();
  const twitterProvider = new TwitterAuthProvider();

  const profileUpdate = (name, photo_url) => {
    setLoad(true);
    updateProfile(auth.currentUser, {
      displayName: name || user?.displayName,
      photoURL: photo_url || user?.photoURL,
    })
      .then(() => {})
      .catch((error) => {
        toast.error("Cannot update profile:", error.message);
      })
      .finally(() => {
        setLoad(false);
      });
  };

  const logInUser = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const registerUser = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = () => {
    setLoader(true);
    return signInWithPopup(auth, googleProvider);
  };

  const signInWithGitHub = () => {
    setLoader(true);
    return signInWithPopup(auth, gitHubProvider);
  };
  const signInWithTwitter = () => {
    setLoader(true);
    return signInWithPopup(auth, twitterProvider);
  };
  const logOutUser = () => {
    return signOut(auth)
      .then(() => {
        toast.success("Logout successfully");
        setUser(null);
      })
      .catch((error) => {
        toast.error("Error signing out:", error.message);
        throw error;
      })
      .finally(() => {
        setLoader(false);
      });
  };

  const handleChange = () => {
    setIsChecked(!isChecked);
    const newTheme = !isChecked ? "light" : "dracula";
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  useEffect(() => {
    setStoredValue(localStorage.getItem("isChecked"));
    if (storedValue === "true") {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("isChecked", isChecked);
  }, [isChecked]);

  useEffect(() => {
    setLoader(true);
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setStateLoader(false);
      setLoader(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const state = {
    setUser,
    logOutUser,
    logInUser,
    registerUser,
    profileUpdate,
    signInWithGoogle,
    signInWithGitHub,
    signInWithTwitter,
    setLoad,
    setLoader,
    setStateLoader,
    setIsChecked,
    handleChange,
    isChecked,
    stateLoader,
    loader,
    user,
    load,
  };

  return <Context.Provider value={state}>{children}</Context.Provider>;
};

export { MyContextProvider, Context };
