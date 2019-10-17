import React, { useState } from "react";
import { Container, Col, Row } from "reactstrap";
import Screen from "../components/Screen";
import * as R from "ramda";
import Input from "../components/Input";

const initState = {
  leftFigure: "0",
  rightFigure: "0",
  divider: "0"
};

const useInputs = () => {
  const [inputs, setInputs] = useState(initState);

  const onChange = (e: React.SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    const { name, value } = target;

    setInputs(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return {
    inputs,
    onChange
  };
};

export default () => {
  const addArgs = R.curry((x: number, y: number) => x + y);
  const sum = (x: string, y: string) => `Add(${x}, ${y}) ~> ${addArgs(+x, +y)}`;
  const currySum = (x: string, y: string) =>
    `Add(${x})(${y}) ~> ${addArgs(+x)(+y)}`;

  const {
    inputs: { leftFigure, rightFigure, divider },
    onChange
  } = useInputs();

  const [leftDividerNumber, rightDividerNumber] = divider.split(",");

  return (
    <Screen>
      <Container>
        <Container>
          <Row>
            <Col>
              <Input
                value={leftFigure}
                type="number"
                name="leftFigure"
                placeholder="Insert number"
                onChange={onChange}
              />
            </Col>
            <Col>
              <Input
                onChange={onChange}
                value={rightFigure}
                type="number"
                name="rightFigure"
                placeholder="Insert number"
              />
            </Col>
          </Row>
          <Row>
            <Col lg="2">
              <section>
                <div>{sum(leftFigure, rightFigure)}</div>
                <div>{currySum(leftFigure, rightFigure)}</div>
              </section>
            </Col>
          </Row>
          <Row>
            <Col lg="4">
              <h2>With comma</h2>
            </Col>
            <Col xs={12}>
              <Input
                onChange={onChange}
                value={divider}
                type="text"
                name="divider"
                placeholder="Insert your text"
              />
              <section>
                <div>{sum(leftDividerNumber, rightDividerNumber)}</div>
                <div>{currySum(leftDividerNumber, rightDividerNumber)}</div>
              </section>
            </Col>
          </Row>
        </Container>
      </Container>
    </Screen>
  );
};
