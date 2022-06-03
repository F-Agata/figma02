import styled, { css } from "styled-components";

import {GrClose} from "react-icons/gr";
import {BiCart} from "react-icons/bi";
import {MdOutlineManageAccounts} from "react-icons/md";
import {FaBars} from "react-icons/fa";

import Box from "../../styles/Box";
import BoxIcon from '../../styles/BoxIcon';
import Link from "../../styles/Link";

const AccountIcons = ( {needCloseIcon, needOpenIcon, changeNav} ) => {

    return (
        <Box
            // border={'green 2px solid'}
            display={'flex'}
        >
            <Link href={`/home`} > <BoxIcon  width={40} height={40} bg={'colorWhite'} ml={10}><StyledMdOutlineManageAccounts /></BoxIcon></Link>
            <Link href={`/home`} ><BoxIcon   width={40} height={40} bg={'colorSecondary'} ml={10}><StyledBiCart /></BoxIcon></Link>
            {needCloseIcon && <BoxIcon  onClick={changeNav} width={40} height={40} bg={'colorWhite'} ml={10}><StyledGrClose /></BoxIcon>}
            {needOpenIcon &&  <BoxIcon  onClick={changeNav} width={40} height={40} bg={'colorWhite'} ml={10}><StyledFaBars /></BoxIcon>}
        </Box>
    );
};

export default AccountIcons;

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

const StyledFaBars = styled(FaBars)`
   ${({ theme }) => css`
    background-color: ${theme.colors.colorWhite};
    color: ${theme.colors.colorPrimary};
    font-size: ${theme.fontSizes.fs5};
  `};
`

