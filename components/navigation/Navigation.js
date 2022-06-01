import React, {useState} from "react";
import styled, { css } from "styled-components";
import { useMediaQuery } from 'react-responsive'
import {FaBars} from "react-icons/fa";
import {BiCart} from "react-icons/bi";
import {MdOutlineManageAccounts} from "react-icons/md";
import Box from '../../styles/Box'
import BoxIcon from '../../styles/BoxIcon'
import Link from "../../styles/Link";
import Logo from "../Logo"
import menuItems from './menuItems'
import LinksPart from "./LinksPart";
import NavSmall from "./NavSmall";

const Navigation = () => {

    const [smallNavIsOpen, setSmallNavIsOpen] = useState(false)

    // const modificationMenuSize = useMediaQuery({ query: `${props => props.theme.breakpoints.tablet} `})
    const modificationMenuSize = useMediaQuery({ query: '(min-width: 768px)'})

    const changeNav = () => {
        setSmallNavIsOpen(!smallNavIsOpen)
    }

    return (
        <BoxNavigation >
            <Link href={`/`}><Logo /></Link>
            {!modificationMenuSize &&
            <Box
                border={'green 2px solid'}
                  display={'flex'}
            >
                <BoxIcon  width={40} height={40} bg={'colorWhite'} ml={10}><StyledMdOutlineManageAccounts /></BoxIcon>
                <BoxIcon  width={40} height={40} bg={'colorSecondary'} ml={10}><StyledBiCart /></BoxIcon>
                <BoxIcon  onClick={changeNav} width={40} height={40} bg={'colorWhite'} ml={10}><StyledFaBars /></BoxIcon>
            </Box>
            }
            {modificationMenuSize && <LinksPart menuItems={menuItems}/>}
            {!modificationMenuSize && smallNavIsOpen  ?
                <NavSmall menuItems={menuItems}
                          setSmallNavIsOpen={setSmallNavIsOpen}
                          changeNav={changeNav}
                /> : null}
        </BoxNavigation>
    );
}

export default Navigation;

const BoxNavigation = styled(Box)`
    //border: 2px solid red;
  position: fixed;
  top: 0px;
  display: flex; 
  justify-content: space-between;
  align-items: center;
  max-width: 1440px;
  width: 100%;
  height: 70px;
  padding:  10px 20px; 
  z-index: 100;
  background-color: transparent;
  // ${({ theme }) => css`
  //   background-color: ${theme.colors.colorWhite};
  // `};
  //@media (min-width: 768px) {
  //  padding:  0 40px;
  //}
`

const StyledFaBars = styled(FaBars)`
   ${({ theme }) => css`
    background-color: ${theme.colors.colorWhite};
    color: ${theme.colors.colorPrimary};
    font-size: ${theme.fontSizes.fs5};
  `};
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
