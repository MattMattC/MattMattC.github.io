import React from 'react';
import styled, {  createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';
import { ThemeProvider, ColorModeProvider, CSSReset } from '@chakra-ui/core';
import { LightTheme } from '../../theme';

const NormalizeStyle = createGlobalStyle`
    ${normalize()};
    html, body {
        font-family: "Georgia";
        font-size: 21px;
        height: 100%;
        width: 100%;
    }  
    #___gatsby, #gatsby-focus-wrapper {
        height: 100%;
        width: 100%;
    }
    html > * {
        box-sizing: border-box;
    }
`;

const Layout = ({ children }) => {
    return (
        <ThemeProvider theme={LightTheme}>
            <NormalizeStyle />
            <CSSReset />
            <ColorModeProvider>{children}</ColorModeProvider>
        </ThemeProvider>
    );
};

export default Layout;
