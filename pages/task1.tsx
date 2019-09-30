import React, { useState } from "react";
import { Container, Col, Row, Input } from "reactstrap";
import Screen from "../components/Screen";

export default () => {
  const [inputValue, setInputValue] = useState("");

  const toUpper = (text: string): string => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  };

  return (
    <Screen>
      <Container>
        <Row>
          <Col lg="2">
            <Input
              onChange={event => setInputValue(event.target.value)}
              value={inputValue}
              type="text"
              name="text"
              placeholder="Insert text"
            />
            <summary>{toUpper(inputValue)}</summary>
          </Col>
        </Row>
      </Container>
    </Screen>
  );
};
