import React, { useState } from "react";
import { ThemeProvider, createTheme, CssBaseline } from "@material-ui/core";

import Home from './Home';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      type: darkMode ? 'dark' : 'light',
      primary: {
        main: '#f44336'
      },
      secondary: {
        main: '#3ea6ff'
      }
    },
    background: {
      default: darkMode ? '#232323' : '#ffffff',
      dark: '#181818',
      paper: darkMode ? '#232323' : '#ffffff',
    },
    spacing: 4,
  })

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Home darkMode={darkMode} setDarkMode={setDarkMode} />
    </ThemeProvider>
  )
}

export default App;
