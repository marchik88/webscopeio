import React, { useState } from "react";
import { Container, Col, Row, Input } from "reactstrap";
import Screen from "../components/Screen";
import * as R from "ramda";
import InputLabel from "../components/Input";

export default () => {
  const [leftFigure, setLeftFigure] = useState(0);
  const [rightFigure, setRightFigure] = useState(0);
  const [divider, setDivider] = useState("");
  const addArgs = R.curry((x: number, y: number) => x + y);
  const sum = (x: number, y: number) => `Add(${x}, ${y}) ~> ${addArgs(x, y)}`;
  const currySum = (x: number, y: number) =>
    `Add(${x})(${y}) ~> ${addArgs(x)(y)}`;

  const [a, b] = divider.split(",");

  return (
    <Screen>
      <Container>
        <Container>
          <Row>
            <Col>
              <InputLabel
                values={{
                  value: rightFigure,
                  type: "number",
                  name: "rightFigure",
                  placeholder: "Insert number"
                }}
                handleInputChange={setRightFigure}
              />
            </Col>
            <Col>
              <Input
                onChange={event => setRightFigure(+event.target.value)}
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
                onChange={event => setDivider(event.target.value)}
                value={divider}
                type="text"
                name="divider"
                placeholder="Insert your text"
              />
              <section>
                <div>{sum(+a, +b)}</div>
                <div>{currySum(+a, +b)}</div>
              </section>
            </Col>
          </Row>
        </Container>
      </Container>
    </Screen>
  );
};
