import {createContext, useContext, useEffect, useState} from "react";

export const ThemeContext = createContext({
  theme: 'light',
  toggleTheme(){}
})

export const useTheme = () => {
  return useContext(ThemeContext);
}

export const ThemeProvider = ( {children }) => {

  const [theme,setTheme] = useState('dark');

  const toggleTheme = () => {
    console.log("Toggle")
    setTheme((prev)=> prev === 'dark' ? 'light':'dark');
  }

  useEffect(()=>{
    document.documentElement.setAttribute('data-mode',theme);
  },[theme]);

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}