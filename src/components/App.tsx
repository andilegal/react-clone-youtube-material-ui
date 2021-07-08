import React from "react";
import { createTheme, ThemeProvider } from "@material-ui/core";
import Home from "./Home";

function App(): JSX.Element {
  const theme = createTheme({
    spacing: 4,
    palette: {
      primary: {
        main: "#f44336",
      },
      secondary: {
        main: "#2c387e",
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </>
  );
}

export default App;
