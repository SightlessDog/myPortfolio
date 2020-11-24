import React from "react";
import styled from "styled-components";
import { bodyFont, typeScale } from "../utils";
import NavBar from "./NavBar";
import Wrapper from "./Wrapper";

const BodyText = styled.div`
  color: ${(props) => props.theme.textColor};
  font-family: ${bodyFont};
  font-size: ${typeScale.header2};
  position: absolute;
  top: 170px;
  left: 200px;
  width: 50%;
  text-align: center;
`;

const DivImage = styled.div`
  background: url(../assets/pictures/myImage.jpg);
  height: 100%;
  position: absolute;
  left: 50%;
  top: -246px;
`;

class HomePage extends React.Component {
  render() {
    return (
      <Wrapper>
        <DivImage />
        <NavBar />
        <BodyText>
          Meet the futue photographer the best one in berlin th edeveloper the
          designer the unchained the mother of the dragons{" "}
        </BodyText>
      </Wrapper>
    );
  }
}

export default HomePage;
