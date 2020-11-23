import React from "react";
import styled from "styled-components";
import { Icons } from "../assets";

// import styled from "styled-components";
// import { primaryFont, typeScale } from "../utils";

// const menu = ["Home", "Gallery", "About", "Instagram"];

// const LogoPlaceHolder = styled.span`
//   position: absolute;
//   left: 10%;
//   top: 5%;
//   font-family: ${primaryFont};
//   font-size: ${typeScale.header4};
//   color: ${(props) => props.theme.primaryColorButton};
// `;

// const Home = styled.span`
//   position: absolute;
//   right: 40%;
//   top: 5%;
//   font-family: ${primaryFont};
//   font-size: ${typeScale.header4};
//   color: ${(props) => props.theme.primaryColorButton};
// `;

// const Gallery = styled.span`
//   position: absolute;
//   right: 30%;
//   top: 5%;
//   font-family: ${primaryFont};
//   font-size: ${typeScale.header4};
//   color: ${(props) => props.theme.primaryColorButton};
// `;

// const About = styled.span`
// position: absolute;
//   right: 20%;
//   top: 5%;
//   font-family: ${primaryFont};
//   font-size: ${typeScale.header4};
//   color: ${(props) => props.theme.primaryColorButton};
// `

// const Instagram = styled.span`
// position : absolute;
// right : 10%;
// top : 5%;
// font-family: ${primaryFont};
//   font-size: ${typeScale.header4};
//   color: ${(props) => props.theme.primaryColorButton};
// `

// const Image = styled.div`
//     position : absolute;
//     height: 100%;
//     left : 50%;
//     opacity : 0.7;
//     //z-index:-9999;
//
const Nav = styled.nav`
  font-size: 18px;
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
  color: rgba(255, 255, 255, 0.7);

  @media screen and (min-width: 768px) {
    margin-left: 40px;
  }
`;

const Logo = styled(A)`
  display: inline-block;
  font-size: 22px;
  margin-top: 10px;
  margin-left: 20px;

  @media screen and (min-width: 768px) {
    margin-top: 0;

    :hover {
      color: rgba(255, 255, 255, 1);
    }
  }
`;

const Li = styled.li`
  text-align: center;
  margin: 15px auto;

  @media screen and (min-width: 768px) {
    margin: 0;

    :hover {
      color: rgba(255, 255, 255, 1);
    }
  }
`;

const Toggle = styled.span`
  position: absolute;
  top: 10px;
  right: 20px;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.8);
  font-size: 24px;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

class HomePage extends React.Component {
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

export default HomePage;
