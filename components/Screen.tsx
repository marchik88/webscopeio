import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./Navigation";

const Main = styled.main`
  margin: 50px 0;
`;

const Screen: React.FC = props => (
  <>
    <Navigation />
    <Main {...props} />
  </>
);

export default Screen;
