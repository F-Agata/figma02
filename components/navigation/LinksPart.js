
import styled, { css } from "styled-components";
import { useMediaQuery } from 'react-responsive'

import {BiCart} from "react-icons/bi";
import {MdOutlineManageAccounts} from "react-icons/md";
import {FaFacebook, FaInstagram, FaTwitter} from "react-icons/fa";

import Box from "../../styles/Box";
import Link from "../../styles/Link";
import TitleAndText from "../../styles/TitleAndText";
import Btn from "../../styles/Btn";


const LinksPart = ( {menuItems} ) => {

    const addBtn = useMediaQuery({ query: '(min-width: 1024px)'})

    const menuItem = menuItems.map((item) => (
        <StyledNavigationLi key={item.id}>
            <Link href={`/${item.id}`}>
                <TitleAndText variant={'textSmall'}> {item.name}</TitleAndText>
            </Link>
        </StyledNavigationLi>
    ));

    return (
        <Box
            // border={'orange 2px solid'}
            flexGrow={'1'}
            display={'flex'}
            justifyContent={'flex-end'}
            alignItems={'center'}
        >
            <StyledNavigationUl >
                {menuItem}
            </StyledNavigationUl>

            {addBtn &&  <Link href={`/freeTrial`}><Btn variant="dark" ml={20}> Free trial</Btn></Link>}
        </Box>
    );
};

export default LinksPart;

const StyledNavigationUl = styled.ul`
  //border: olivedrab 2px solid;
  display: flex;
  justify-content: flex-end;
  @media (min-width: 1024px) {
   justify-content: space-between;
  }
`

const StyledNavigationLi = styled.li`
  //border: blueviolet 2px solid;
  list-style: none;
margin-left: 10px;
  padding: 0 10px;
   cursor: pointer;
  transition: 0.3s;
  :hover  {
    ${({ theme }) => css`
    font-weight: ${theme.fontWeights.fontBold}; 
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  `};
  }
  :active {
    ${({ theme }) => css`
    font-weight: ${theme.fontWeights.fontBold}; 
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  `};
    :focus {
      ${({ theme }) => css`
    font-weight: ${theme.fontWeights.fontBold}; 
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  `};
    }
}
`

const StyledMdOutlineManageAccounts = styled(MdOutlineManageAccounts)`
   ${({ theme }) => css`
    background-color: ${theme.colors.colorWhite};
    color: ${theme.colors.colorSecondary};
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

