import React from "react";
import me from "../assets/pictures/myImage.jpg";
import styled from "styled-components";

const Div = styled.div`
  background-image: ${me};
`;

export default function app() {
  return <Div />;
}
