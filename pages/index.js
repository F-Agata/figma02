import styled, {ThemeProvider} from "styled-components";
import theme from "../styles/theme";
import GlobalStyle from "../styles/GlobalStyle";

import GoToTopOfPage from "../components/GoToTopOfPage";

import Box from '../styles/Box'

import {default as HomeContent} from "./home"

export default function Home() {
  return (
      <>
        <HomeContent/>
      </>
  );
}

