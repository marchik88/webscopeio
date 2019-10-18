import React, { useState } from "react";
import { Container, Col, Row } from "reactstrap";
import Screen from "../components/Screen";
import Input from "../components/Input";

export default () => {
  const [inputValue, setInputValue] = useState("");

  const toUpper = (text: string): string => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  };

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setInputValue(value);
  };

  return (
    <Screen>
      <Container>
        <Row>
          <Col lg="2">
            <Input
              value={inputValue}
              type="text"
              name="text"
              placeholder="Insert text"
              onChange={onChange}
            />
            <summary>{toUpper(inputValue)}</summary>
          </Col>
        </Row>
      </Container>
    </Screen>
  );
};
