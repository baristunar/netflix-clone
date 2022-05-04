import React, { useState, useRef, useEffect } from 'react';
import Logo from '../../assets/images/logo.svg';
import variables from '../../styled/variables';
import { NavLink } from 'react-router-dom';
import BellRegularIcon from '../../assets/icons/bell-regular.svg';
import AccountAvatar from '../../assets/icons/account-avatar.svg';
import SearchIcon from '../../assets/icons/search-solid.svg';
import { Container, Input, Image, Button } from '../ui';
import {
  Header,
  Nav,
  NavLeft,
  NavRight,
  NavLeftMenu,
  NavLeftMenuItem,
  NavRightMenuItem,
  InputWrapper,
} from './styled';
import useScrollPosition from '../../hooks/useScrollPosition';

const Navbar = () => {
  const [searchStatus, setSearchStatus] = useState(false);
  const inputRef = useRef(null);
  const scrollPosition = useScrollPosition();

  const searchButtonClickHandler = () => {
    setSearchStatus(!searchStatus);
  };

  useEffect(() => {
    if (searchStatus) {
      inputRef.current.focus();
    }
  }, [searchStatus]);

  return (
    <Header className="header" background={scrollPosition > 20 && variables.BLACK_150}>
      <Container>
        <Nav className="nav">
          <NavLeft className="nav-left">
            <Image src={Logo} alt="logo" width="100%" />
            <NavLeftMenu className="nav-menu-left">
              <NavLeftMenuItem className="nav-menu-item">
                <NavLink
                  style={({ isActive }) => {
                    return {
                      fontWeight: isActive ? 'bold' : 'normal',
                    };
                  }}
                  className="nav-link"
                  to="/">
                  Homepage
                </NavLink>
              </NavLeftMenuItem>
              <NavLeftMenuItem className="nav-menu-left-item">
                <NavLink
                  style={({ isActive }) => {
                    return {
                      fontWeight: isActive ? 'bold' : 'normal',
                    };
                  }}
                  className="nav-link"
                  to="/series">
                  TV Series
                </NavLink>
              </NavLeftMenuItem>
              <NavLeftMenuItem className="nav-menu-left-item">
                <NavLink
                  style={({ isActive }) => {
                    return {
                      fontWeight: isActive ? 'bold' : 'normal',
                    };
                  }}
                  className="nav-link"
                  to="/movies">
                  Movies
                </NavLink>
              </NavLeftMenuItem>
            </NavLeftMenu>
          </NavLeft>
          <NavRight className="nav-menu-right">
            <NavRightMenuItem className="nav-menu-right-item">
              <InputWrapper
                background={searchStatus ? variables.BLACK_150 : 'transparent'}
                border={searchStatus ? '1px solid white' : 'none'}>
                <Button onClick={searchButtonClickHandler}>
                  <Image src={SearchIcon} height="100%" />
                </Button>
                <Input
                  ref={inputRef}
                  type="text"
                  display={searchStatus ? 'block' : 'none'}
                  margin="0 0 0 10px"
                />
              </InputWrapper>
            </NavRightMenuItem>
            <NavRightMenuItem className="nav-menu-right-item">
              <Image src={BellRegularIcon} height="25px" />
            </NavRightMenuItem>
            <NavRightMenuItem className="nav-menu-right-item">
              <Image src={AccountAvatar} height="25px" />
            </NavRightMenuItem>
          </NavRight>
        </Nav>
      </Container>
    </Header>
  );
};

export default Navbar;
