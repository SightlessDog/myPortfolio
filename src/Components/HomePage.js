import React from "react";
import styled from "styled-components";
import { bodyFont, typeScale } from "../utils";
import { PrimaryButton, SecondaryButton } from "./Buttons";
import NavBar from "./NavBar";
import Wrapper from "./Wrapper";

const BodyText = styled.div`
  color: ${(props) => props.theme.bodyTextColor};
  font-family: ${bodyFont};
  font-size: ${typeScale.paragraphText};
  text-align: center;

  @media screen and (min-width: 768px) {
    width: 600px;
    height: 550px;
    font-size: ${typeScale.header3};
  }
`;

const TextButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  margin-left: 150px;
`;

const ButtonsContainer = styled.div`
  width: 600px;
  display: flex;
  justify-content: space-around;
`;
class HomePage extends React.Component {
  render() {
    return (
      <Wrapper>
        <NavBar theme={this.props.theme} />
        <TextButtonsContainer>
          <BodyText>
            Meet the futue photographer the best one in berlin th edeveloper the
            designer the unchained the mother of the dragons{" "}
          </BodyText>
          <ButtonsContainer>
            <PrimaryButton>Discover</PrimaryButton>
            <SecondaryButton>Instagram</SecondaryButton>
          </ButtonsContainer>
        </TextButtonsContainer>
      </Wrapper>
    );
  }
}

export default HomePage;
