"use client";
import { createContext, useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { useRouter } from "next/navigation";
import { login } from "@/utils/login";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  let initialAuthTokens = null;
  let initialUser = null;

  let [authTokens, setAuthTokens] = useState(null);
  let [user, setUser] = useState(null);
  let [loading, setLoading] = useState(true);

  const router = useRouter();

  const loginUser = async ({email, password}) => {
    
    let response = await login({
      email,
      password,
    })

    if (response.status === 200) {
      let data = await response.json();
      setAuthTokens(data);
      setUser(jwt_decode(data.access));

      localStorage.setItem("authTokens", JSON.stringify(data));

      router.push("/");
    } else {
      alert("Algo salio mal, verifica tu Corrreo o contraseña");
    }
  };

  let logoutUser = () => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem("authTokens");
    router.push("/");
  };

  let updateToken = async () => {
    try {
      if(!localStorage.getItem("authTokens")){
        setLoading(false);
        return;
      } 
        

      let response = await fetch("http://127.0.0.1:8000/api/token/refresh/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ refresh: authTokens?.refresh }),
      });
      if (response.status === 200) {
        let data = await response.json();
        setAuthTokens(data);
        setUser(jwt_decode(data.access));
        localStorage.setItem("authTokens", JSON.stringify(data));
      } else {
        logoutUser();
      }

      if (loading) {
        setLoading(false);
      }
    } catch (error) {
        setLoading(false);
        logoutUser();
    }

    
  };

  let contextData = {
    user,
    authTokens,
    loginUser,
    logoutUser,
  };

  useEffect(() => {
    initialAuthTokens = localStorage.getItem("authTokens")
      ? JSON.parse(localStorage.getItem("authTokens"))
      : null;
    setAuthTokens(initialAuthTokens);
    initialUser = localStorage.getItem("authTokens")
      ? jwt_decode(localStorage.getItem("authTokens"))
      : null;
    setUser(initialUser);
  }, []);

  useEffect(() => {
    if (loading) {
      updateToken();
    }

    let fourMinutes = 1000 * 60 * 9;

    let interval = setInterval(() => {
      if (authTokens) {
        updateToken();
      }
    }, fourMinutes);
    return () => clearInterval(interval);
  }, [authTokens, loading]);

  return (
    <AuthContext.Provider value={contextData}>
      {loading ? <h1>joa mani</h1> : children}
    </AuthContext.Provider>
  );
}
