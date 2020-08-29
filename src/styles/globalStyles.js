import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset}
    * {
        box-sizing: border-box;
    }
    body {
        background: white; 
        width: 100vw;
        height: 100vh;
    }
    #root {
        height: 100%;
    }
`;

export default GlobalStyle;
