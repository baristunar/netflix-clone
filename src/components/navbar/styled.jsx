import styled from 'styled-components';
import variables from '../../styled/variables';

export const Header = styled.header`
  background: ${(props) => (props.background ? props.background : 'transparent')};
  padding: 20px 0;
  position: fixed;
  transition:all 1s ease;
  top: 0;
  width: 100vw;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
`;

export const NavLeft = styled.div`
  display: flex;
  align-items: center;
`;

export const NavRight = styled.ul`
  display: flex;
  align-items: center;
`;

export const NavLeftMenu = styled.ul`
  margin-left: 20px;
  display: flex;
  align-items: center;
`;

export const NavLeftMenuItem = styled.li`
  width: max-content;
  &:not(:first-child) {
    margin-left: 20px;
  }
`;

export const NavRightMenuItem = styled.li`
  width: max-content;
  &:not(:last-child) {
    margin-right: 20px;
  }
`;

export const InputWrapper = styled.div`
  background: ${(props) => (props.background ? props.background : variables.BLACK_150)};
  border: ${(props) => (props.border ? props.border : 'none')};
  height: 40px;
  padding: 10px 10px;
  display: flex;
  align-items: center;
`;
