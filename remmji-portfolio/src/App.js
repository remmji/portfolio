import React from "react";
import { Routes, Route } from "react-router-dom"
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./components/Themes";
import GlobalStyle from "./globalStyles";
// Components
import Main from './components/Main';
import AboutPage from './components/AboutPage';
import Projects from './components/Projects';
import SoundBar from "./subComponents/SoundBar";

function App() {
  return (
  <>

    <GlobalStyle/>

      <ThemeProvider theme={lightTheme}>
      <SoundBar/>
      
      <Routes>
        <Route path="/" element={ <Main/> } />
        <Route path="about" element={ <AboutPage/> } />
        <Route path="projects" element={ <Projects/> } />
      </Routes>
      
      </ThemeProvider>

  </>

  
  );
}

export default App;
