import React, { useState } from "react";
import { Container, Col, Row } from "reactstrap";
import Screen from "../components/Screen";
import * as R from "ramda";
import Input from "../components/Input";

const initState = {
  leftFigure: "",
  rightFigure: "",
  divider: ""
};

const useInputs = () => {
  const [inputs, setInputs] = useState(initState);

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;

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
  const sum = (x: number, y: number) => `Add(${x}, ${y}) ~> ${addArgs(x, y)}`;
  const currySum = (x: number, y: number) =>
    `Add(${x})(${y}) ~> ${addArgs(x)(y)}`;

  const infinityCurry = (fn: any, seed: number): any => {
    const reduceValue = (args: [], seedValue: number) =>
      args.reduce((acc, a) => {
        return fn.call(fn, acc, a);
      }, seedValue);
    const next = (...args: any) => {
      return (...x: []) => {
        if (!x.length) {
          return reduceValue(args, seed);
        }
        return next(...args, reduceValue(x, seed));
      };
    };
    return next();
  };

  const iSum = infinityCurry((x: number, y: number) => x + y, 0);

  const infinitySum = (numbers: Array<number>) => R.sum(numbers);

  const infinityCurrySum = (numbers: Array<number>) =>
    `${numbers.map(item => `${item}`)} ~> ${infinitySum(numbers)}`;

  const {
    inputs: { leftFigure, rightFigure, divider },
    onChange
  } = useInputs();

  const numbers = divider.split(",").map(Number);
  console.log(iSum(...numbers)());
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
                <div>{sum(+leftFigure, +rightFigure)}</div>
                <div>{currySum(+leftFigure, +rightFigure)}</div>
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
                <div>{infinityCurrySum(numbers)}</div>
              </section>
            </Col>
          </Row>
        </Container>
      </Container>
    </Screen>
  );
};
