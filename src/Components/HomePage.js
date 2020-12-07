import React from "react";
import styled from "styled-components";
import { bodyFont, typeScale } from "../utils";
import { PrimaryButton, SecondaryButton } from "./Buttons";
import NavBar from "./NavBar";
import Wrapper from "./Wrapper";

const BodyText = styled.div`
  color: ${(props) => props.theme.bodyTextColor};
  font-family: ${bodyFont};
  text-align: center;
  grid-area: text;
  font-size: ${typeScale.header3};
`;

const TextButtonsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 100px;
  margin-top: 50px;
  margin-left: 350px;
  margin-right: 350px;
  row-gap: 100px;
  grid-template-areas:
    "text . pic pic"
    "buttons . pic pic"
    ". . pic pic";
`;

const ButtonsContainer = styled.div`
  width: 600px;
  grid-area: buttons;
  justify-content: center;
  align-items: start;
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
            designer the unchained the mother of the dragons
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
