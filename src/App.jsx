// import styled from 'styled-components'
import Toggler from "./Toggler.jsx";
import ThemeContext from "./ThemeContext.js";
import {useState} from "react";
import {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle `
body {
    background-color: ${props=>props.darkMode ? '#334' : '#eef'};
    color: ${props=>props.darkMode ? '#eee' : '#333'};
}`
function App() {
    const [darkMode,setDarkMode]=useState(false)

  return (
   <div>
       <ThemeContext.Provider value={{darkMode, setDarkMode}}>
           <GlobalStyles darkMode={darkMode}/>
           <h3>Dark Mode</h3>
           <Toggler/>
       </ThemeContext.Provider>
   </div>
  )
}

export default App
