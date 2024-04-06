import { useState, useEffect } from "react";
import { auth } from "./Firebase"; 
const useAuth = () => {
  const [user, setUser] = useState(null); 

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user); 
    });

    return () => unsubscribe(); // Unsubscribe from the auth state listener when component unmounts
  }, []);

  return { user }; // Return the user object
};

export default useAuth;
