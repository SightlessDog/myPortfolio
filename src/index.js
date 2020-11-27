import React, { useState } from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { darkTheme, defaultTheme, GlobalStyle } from "./utils";
import HomePage from "./Components/HomePage";

const App = () => {
  const [useDarkTheme, setUseDarkTheme] = useState(false);
  let theme = useDarkTheme ? darkTheme : defaultTheme;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <HomePage theme={theme} />
      <button onClick={() => setUseDarkTheme(!useDarkTheme)}>
        Use darkTheme
      </button>
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
