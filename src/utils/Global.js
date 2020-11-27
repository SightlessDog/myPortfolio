import { createGlobalStyle } from "styled-components";

import { normalize } from "polished";

export const GlobalStyle = createGlobalStyle`
    ${normalize()}
    html {
        background-color : ${(props) => props.theme.primaryColor}; 
        font-size : 16px; 
        box-sizing : border-box; 
    }

    *, *:before, *:after {
        box-sizing : border-box; 
        padding: 1px 5px;
        margin : 0;  
    }

    body {
        
    }

    main {
        width : 90%; 
        margin: 0 auto; 
    }
`;
