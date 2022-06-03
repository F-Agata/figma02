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
import AccountIcons from "./AccountIcons"
import SocialIcons from "./SocialIcons"
import menuItems from './menuItems'
import LinksPart from "./LinksPart";
import NavSmall from "./NavSmall";

const Navigation = () => {

    const [smallNavIsOpen, setSmallNavIsOpen] = useState(false)

    const needOpenIcon = true

    // const modificationMenuSize = useMediaQuery({ query: `${props => props.theme.breakpoints.tablet} `})
    const modificationMenuSize = useMediaQuery({ query: '(min-width: 768px)'})
    const addSocialIcons = useMediaQuery({ query: '(min-width: 1024px)'})

    const changeNav = () => {
        setSmallNavIsOpen(!smallNavIsOpen)
    }

    return (
        <BoxNavigation >
            <Link href={`/`}><Logo /></Link>
            {addSocialIcons && <SocialIcons  bigMenu/>}
            {!modificationMenuSize &&
              <AccountIcons changeNav={changeNav} needOpenIcon={needOpenIcon}/>
            }
            {modificationMenuSize && <LinksPart menuItems={menuItems}/>}
            {modificationMenuSize && <AccountIcons/>}
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
  left: 50%;
  transform: translate(-50%, 0);
  display: flex; 
  justify-content: space-between;
  align-items: center;
  max-width: 1440px;
  width: 100%;
  height: 70px;
  padding:  10px 20px; 
  max-width: 1140px;
  margin: 0 auto;
  z-index: 100;
  background-color: transparent;
`
