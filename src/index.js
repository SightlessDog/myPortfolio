import React, { useState } from "react";
import ReactDOM from "react-dom";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme, defaultTheme, GlobalStyle } from "./utils";
import HomePage from "./Components/HomePage";
import About from "./Components/About";
import { BrowserRouter, Route } from "react-router-dom";
import image from "./assets/pictures/myImage.jpg";

const App = () => {
  const [useDarkTheme, setUseDarkTheme] = useState(false);
  let theme = useDarkTheme ? darkTheme : defaultTheme;
  const Image = styled.img`
    opacity: ${theme ? 1 : 0};
    position: absolute;
    z-index: -3;
    float: right;
    margin-left: 1000px;
    margin-right: -1300px;
    margin-top: -400px;
  `;

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Route path="/Home">
          <Image src={image} />
          <HomePage theme={theme} />
        </Route>
        <Route path="/About">
          <About theme={theme} />
        </Route>
        <button onClick={() => setUseDarkTheme(!useDarkTheme)}>
          Use darkTheme
        </button>
      </ThemeProvider>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
