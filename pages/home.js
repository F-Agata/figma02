import React  from "react";
import styled, { css } from "styled-components";
import { useMediaQuery } from 'react-responsive'

import HomeSmall from '../components/routes/home/HomeSmall'
import HomeBig from '../components/routes/home/HomeBig'

import Box from "../styles/Box";
import Btn from "../styles/Btn"
import Link from "../styles/Link"
import TitleAndText from  "../styles/TitleAndText"

const Home = () => {

    const modificationPage = useMediaQuery({ query: '(min-width: 768px)'})

    return (
        <Box
            border={'green 2px solid'}
        >
            {!modificationPage && <HomeSmall/>}
            {modificationPage && <HomeBig/>}
        </Box>
    );
}

export default Home;


