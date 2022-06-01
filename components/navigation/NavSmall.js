import React, {useState} from "react";
import styled, { css } from "styled-components";
import { useMediaQuery } from 'react-responsive'

import {GrClose} from "react-icons/gr";
import {BiCart} from "react-icons/bi";
import {MdOutlineManageAccounts} from "react-icons/md";

import Logo from '../Logo'

import Box from '../../styles/Box';
import BoxIcon from '../../styles/BoxIcon';
import Btn from "../../styles/Btn";
import Link from "../../styles/Link";
import TitleAndText from "../../styles/TitleAndText";

const NavSmall = ( {menuItems, setSmallNavIsOpen, changeNav} ) => {

       // const modificationMenuSize = useMediaQuery({ query: `${props => props.theme.breakpoints.tablet} `})



    const menuItem = menuItems.map((item) => (
        <StyledNavigationLi key={item.id}>
           <Link href={`/${item.id}`} onClick={changeNav}>
                <TitleAndText variant={'textSmall'}> {item.name}</TitleAndText>
            </Link>
        </StyledNavigationLi>
    ));

      return (
        <Box position={'fixed'}
             top={0}
             left={0}
             width={'100%'}
             height={'100vh'}
             zIndex={'999'}
        >
            <Box onClick={changeNav}
                 position={'fixed'}
                 top={0}
                 left={0}
                 bg={'colorWhite'}
                 opacity={'80%'}
                 width={'100%'}
                 height={'100vh'}
             />
           <Box position={'fixed'}
                top={0}
                left={0}
                bg={'colorWhite'}
                width={'100%'}
                p={'40px'}
                borderBottom={'1px solid '}
                borderColor={'colorLightFooter'}
                >
             <Box display={'flex'}
                 justifyContent={'space-between'}
                 alignItems={'center'}
                 pb={40}
             >
                <Logo color={"dark"}/>
                 <Box
                     // border={'green 2px solid'}
                     display={'flex'}
                 >
                     <BoxIcon  width={40} height={40} bg={'colorWhite'} ml={10}><StyledMdOutlineManageAccounts /></BoxIcon>
                     <BoxIcon  width={40} height={40} bg={'colorSecondary'} ml={10}><StyledBiCart /></BoxIcon>
                     <BoxIcon  onClick={changeNav} width={40} height={40} bg={'colorWhite'} ml={10}><StyledGrClose /></BoxIcon>
                 </Box>
             </Box>

            <StyledNavigationUl>
                {menuItem}
            </StyledNavigationUl>
            <Link href={`/freeTrial`}>
                <Btn variant="orangeDark" onClick={changeNav} ml={0}> More...</Btn>
            </Link>
           </Box>
        </Box>
    );
};

export default NavSmall;



const StyledNavigationUl = styled.ul`
  //border: green 2px solid;
    padding-bottom: 40px;
  //text-decoration: none;
`

const StyledNavigationLi = styled.li`
    //border: lightcoral 2px solid;
    padding: 20px 0;
   //text-decoration: none;
  list-style: none;
  cursor: pointer;
  transition: 0.3s;
   :hover p {
    //display: inline;
    ${({ theme }) => css`
    //color: ${theme.colors.colorSecondary};
    font-weight: ${theme.fontWeights.fontBold}; 
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
     
  `};
   }
  }
`
const StyledBiCart = styled(BiCart)`
   ${({ theme }) => css`
    background-color: ${theme.colors.colorSecondary};
    color: ${theme.colors.colorWhite};
    font-size: ${theme.fontSizes.fs5};
  `};
`
const StyledMdOutlineManageAccounts = styled(MdOutlineManageAccounts)`
   ${({ theme }) => css`
    background-color: ${theme.colors.colorWhite};
    color: ${theme.colors.colorSecondary};
    font-size: ${theme.fontSizes.fs5};
  `};
`

const StyledGrClose = styled(GrClose)`
  ${({ theme }) => css`
    background-color: ${theme.colors.colorWhite};
    color: ${theme.colors.colorPrimary};
    font-size: ${theme.fontSizes.fs5};
   `};
`
