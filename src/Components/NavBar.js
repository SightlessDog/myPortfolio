import React from "react";
import styled from "styled-components";
import { Icons } from "../assets";
import { primaryFont, typeScale } from "../utils";

const Nav = styled.nav`
  font-size: ${typeScale.header5};
  padding-bottom: 10px;
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    padding-bottom: 0;
    height: 70px;
    align-items: center;
  }
`;

const Ul = styled.ul`
  list-style-type: none;
  display: ${(props) => (props.showBar ? "none" : "block")};

  @media screen and (min-width: 768px) {
    display: flex;
    margin-right: 30px;
    flex-direction: row;
    justify-content: flex-end;
  }
`;

const A = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.primaryColorButton};

  @media screen and (min-width: 768px) {
    margin-left: 40px;
  }
`;

const Logo = styled(A)`
  display: inline-block;
  font-size: ${typeScale.header4};
  margin-top: 10px;
  margin-left: 20px;

  @media screen and (min-width: 768px) {
    margin-top: 0;

    &:hover {
      color: ${(props) => props.theme.primaryColorButton};
    }
  }
`;

const Li = styled.li`
  font-family: ${primaryFont};
  text-align: center;
  margin: 15px auto;

  @media screen and (min-width: 768px) {
    margin: 0;

    &:hover {
      color: ${(props) => props.theme.primaryColorButton};
    }
  }
`;

const Toggle = styled.span`
  font-family: ${primaryFont};
  position: absolute;
  top: 10px;
  right: 20px;
  cursor: pointer;
  color: ${(props) => props.theme.primaryColorButton};
  font-size: 24px;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showBar: true,
    };
    this.handleShowBar = this.handleShowBar.bind(this);
  }

  handleShowBar() {
    console.log(this.state.showBar);
    this.setState({ showBar: !this.state.showBar });
  }

  render() {
    return (
      <Nav>
        <Toggle onClick={this.handleShowBar}>
          log
          <img src={Icons.BarsIcon} />
        </Toggle>
        <Logo>Elyess</Logo>
        <Ul showBar={this.state.showBar}>
          <Li>
            <A>Home</A>
          </Li>
          <Li>
            <A>Products</A>
          </Li>
          <Li>
            <A>About Us</A>
          </Li>
          <Li>
            <A>Contact Us</A>
          </Li>
          <Li>
            <A>Blog</A>
          </Li>
        </Ul>
      </Nav>
    );
  }
}

export default NavBar;
