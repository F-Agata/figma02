import React, {useState} from "react";
import styled, { css } from "styled-components";
import { useMediaQuery } from 'react-responsive'

import {GrClose} from "react-icons/gr";
import {BiCart} from "react-icons/bi";
import {MdOutlineManageAccounts} from "react-icons/md";
import {FaFacebook, FaInstagram, FaTwitter} from "react-icons/fa";

import Logo from '../Logo'

import Box from '../../styles/Box';
import BoxIcon from '../../styles/BoxIcon';
import Btn from "../../styles/Btn";
import Link from "../../styles/Link";
import TitleAndText from "../../styles/TitleAndText";

const NavSmall = ( {menuItems, setSmallNavIsOpen, changeNav} ) => {

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
                borderColor={'colorSecondary'}
                display={'flex'}
                flexDirection={'column'}
                justifyContent={'center'}
                alignItems={'flex-start'}
                >
             <Box width={"100%"}
                 display={'flex'}
                 justifyContent={'space-between'}
                 alignItems={'center'}
                 pb={40}
             >
                <Logo />
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
            {/*<Box*/}
            {/*       // border={'green 2px solid'}*/}
            {/*       width={'100%'}*/}
            {/*       mb={40}*/}
            {/*>*/}
            {/*       <Link href={`/freeTrial`}>*/}
            {/*           <Btn variant="orangeDark" onClick={changeNav} ml={0} width={'100%'}> More...</Btn>*/}
            {/*       </Link>*/}
            {/* </Box>*/}

            <Box
                width={"100%"}
                // border={'green 2px solid'}
                alignSelf={'flex-end'}
                    display={'flex'}
                    justifyContent={'space-between'}
                    maxWidth={300}
            >
                     <BoxIcon  width={40} height={40} bg={'colorBtn2'} ><StyledFaFacebook/></BoxIcon>
                     <BoxIcon  width={40} height={40} bg={'colorBtn2'} ml={10}> <StyledFaTwitter/></BoxIcon>
                     <BoxIcon  onClick={changeNav} width={40} height={40} bg={'colorBtn2'} ml={10}><StyledFaInstagram/></BoxIcon>
            </Box>
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
   list-style: none;
  cursor: pointer;
  transition: 0.3s;
   :hover p {
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
const StyledFaFacebook = styled(FaFacebook)`
  ${({ theme }) => css`
    background-color: ${theme.colors.colorBtn2};
    color: ${theme.colors.colorWhite};
    font-size: ${theme.fontSizes.fs5};
   `};
`

const StyledFaTwitter = styled(FaTwitter)`
  ${({ theme }) => css`
    background-color: ${theme.colors.colorBtn2};
    color: ${theme.colors.colorWhite};
    font-size: ${theme.fontSizes.fs5};
   `};
`

const StyledFaInstagram = styled(FaInstagram)`
  ${({ theme }) => css`
    background-color: ${theme.colors.colorBtn2};
    color: ${theme.colors.colorWhite};
    font-size: ${theme.fontSizes.fs5};
   `};
  `
