"use client"
import React, { createContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";


export const AppContext = createContext({})

export function ContextProdiver({children}){

  const [isToggleSidebar , setIsToggleSidebar] = useState(false)
  const [isLogin , setIsLogin] = useState(false)
  const [isHideSliderAndHeader , setIsHideSliderAndHeader] = useState(true)
  const [themeMode , setThemeMode] = useState(true)
  const router = useRouter();

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLogin") === "true";
    setIsLogin(loggedIn);
  }, []);

  const login = () => {
    setIsLogin(true);
    localStorage.setItem("isLogin", "true");
    setIsHideSliderAndHeader(false);

  };

  const logout = () => {
    setIsLogin(false);
    localStorage.setItem("isLogin", "false");
    router.push("/login"); 
  };
  
  const toggleSidebar = () => {
    setIsToggleSidebar(prev => !prev)
  }
    
  useEffect(() => {
    if (themeMode === true) {
      document.body.classList.remove("dark");
      localStorage.setItem("thememode", "light");
    } else {
      document.body.classList.add("dark");
      localStorage.setItem("thememode", "dark");
    }
  }, [themeMode]);


  return(
    <AppContext.Provider value={{isToggleSidebar , toggleSidebar , isLogin , login, logout,  isHideSliderAndHeader , setIsHideSliderAndHeader , setThemeMode, themeMode}}>
      {children}
    </AppContext.Provider>
  )
}