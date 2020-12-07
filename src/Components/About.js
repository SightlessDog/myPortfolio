import React from "react";
import { bodyFont, typeScale } from "../utils";
import Wrapper from "./Wrapper";
import styled from "styled-components";
import NavBar from "./NavBar";
import image from "../assets/pictures/myImage.jpg";

const me =
  "Hi I am Elyess, a frontend developer based in berlin. I am also an amateur documantary photographer who has come upon many different cultures." +
  "I was born in Bizerte, Tunisia (It's a wonderful place you should check it out) in 1999.";
const experience =
  "My first experiences with photography began in 2014 when I received a camera as gift, it was the famous Canon 400D." +
  "I started randomly shooting things until I discovered the profile a very inspiring person called Vivian Maier." +
  "What inspired me more is a very talented guy called Skander Khlif, he has a very wonderful portfolio" +
  "And that's how I started with documantary photography." +
  "I call it documentary because I try to document every aspect of our everyday life.";

const Div = styled.div`
  font-family: ${bodyFont};
  color: ${(props) => props.theme.bodyTextColor};
  font-size: ${typeScale.paragraphText};
  text-align: center;
`;

const LignContainer = styled.div`
  margin-left: 350px;
  margin-right: 350px;
  margin-top: 100px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas:
    "text pic"
    "text pic"
    "text pic";
`;

const ColContainer = styled.div`
  width: 100%;
  grid-area: text;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ImgContainer = styled.div`
  grid-area: pic;
  display: flex;
  justify-content: center;
  justify-items: stretch;
`;

const Img = styled.img`
  width: 50%;
`;

class About extends React.Component {
  render() {
    return (
      <Wrapper>
        <NavBar theme={this.props.theme} />
        <LignContainer>
          <ColContainer>
            <Div>{me}</Div>
            <Div>{experience}</Div>
          </ColContainer>
          <ImgContainer>
            <Img src={image} />
          </ImgContainer>
        </LignContainer>
      </Wrapper>
    );
  }
}

export default About;
