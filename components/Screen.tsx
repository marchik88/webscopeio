import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

const Main = styled.main`
  margin: 50px 0;
`;

const Screen: React.FC = props => (
  <>
    <Main {...props} />
  </>
);

export default Screen;
