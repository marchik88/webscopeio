import React, { useState } from "react";
import { Container, Col, Row, Input } from "reactstrap";
import Screen from "../components/Screen";
import * as R from "ramda";

export default () => {
  const [lFigure, setLFigure] = useState(0);
  const [rFigure, setRFigure] = useState(0);
  const [divider, setDivider] = useState("");
  const addArgs = R.curry((x: number, y: number) => x + y);
  const sum = (y: number, Y: number) => `Add(${y}, ${Y}) ~> ${addArgs(y, Y)}`;
  const currySum = (y1: number, y2: number) =>
    `Add(${y1})(${y2}) ~> ${addArgs(y1)(y2)}`;

  const [a, b] = divider.split(",");

  return (
    <Screen>
      <Container>
        <Container>
          <Row>
            <Col>
              <Input
                onChange={event => setLFigure(+event.target.value)}
                value={lFigure}
                type="number"
                name="lFigure"
                placeholder="Insert number"
              />
            </Col>
            <Col>
              <Input
                onChange={event => setRFigure(+event.target.value)}
                value={rFigure}
                type="number"
                name="rFigure"
                placeholder="Insert number"
              />
            </Col>
          </Row>
          <Row>
            <Col lg="2">
              <section>
                <div>{sum(lFigure, rFigure)}</div>
                <div>{currySum(lFigure, rFigure)}</div>
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
