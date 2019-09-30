import React from "react";
import { Container, Col, Row } from "reactstrap";
import Screen from "../components/Screen";
import * as R from "ramda";

export default () => {
  const addArgs = R.curry((x: number, y: number) => x + y);

  const sum = `Add(7, 8) ~> ${addArgs(7, 8)}`;
  const currySum = `Add(7)(8) ~> ${addArgs(7)(8)}`;

  return (
    <Screen>
      <Container>
        <Container>
          <Row>
            <Col lg="2">
              <section>
                <div>{sum}</div>
                <div>{currySum}</div>
              </section>
            </Col>
          </Row>
        </Container>
      </Container>
    </Screen>
  );
};
