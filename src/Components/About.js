import React from "react";
import { bodyFont, typeScale } from "../utils";
import Wrapper from "./Wrapper";
import styled from "styled-components";
import NavBar from "./NavBar";

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
  width: 50%;
`;

const Container = styled.div`
  margin-top: 100px;
  margin-left: 100px;
  height: 300px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ImgContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 30px 100px;
`;

class About extends React.Component {
  render() {
    return (
      <Wrapper>
        <NavBar theme={this.props.theme} />
        <Container>
          <Div>{me}</Div>
          <Div>{experience}</Div>
        </Container>
        <ImgContainer>
          <img src={require("../assets/pictures/myImage.jpg")} />
        </ImgContainer>
      </Wrapper>
    );
  }
}

export default About;
