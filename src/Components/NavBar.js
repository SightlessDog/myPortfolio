import React from "react";
import styled from "styled-components";
import { Icons } from "../assets";
import { primaryFont, typeScale, defaultTheme } from "../utils";

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
  cursor: pointer;
  @media screen and (min-width: 768px) {
    margin-left: 40px;
  }
`;

const Logo = styled(A)`
  display: inline-block;
  font-family: ${primaryFont};
  font-size: ${typeScale.header4};
  margin-top: 10px;
  margin-left: 20px;

  @media screen and (min-width: 768px) {
    margin-top: 0;
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
      menu: ["Home", "Gallery", "About", "Instagram"],
      hover: false,
    };
    this.handleShowBar = this.handleShowBar.bind(this);
  }

  handleShowBar() {
    this.setState({ showBar: !this.state.showBar });
  }

  handleMouseOver(id) {
    this.setState({ hover: !this.state.hover });
    let otherState = this.state.menu.filter(
      (menuItem) => menuItem != this.state.menu[id.key]
    );
    for (let i = 0; i < otherState.length; i++) {
      let id = this.state.menu.indexOf(otherState[i]);
      this.state.hover
        ? (document.getElementById(id).style.color =
            defaultTheme.primaryColorButton)
        : (document.getElementById(id).style.color = defaultTheme.textColor);
    }
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
          {this.state.menu.map((tag, key) => (
            <Li>
              <A
                id={key}
                onMouseOver={() => this.handleMouseOver({ key })}
                onMouseLeave={() => this.handleMouseOver({ key })}
                hoverState={this.state.hover}
              >
                {tag}
              </A>
            </Li>
          ))}
        </Ul>
      </Nav>
    );
  }
}

export default NavBar;
