import React from "react";
import { Button, Container, Col, Row } from "reactstrap";
import * as Rx from "rxjs";
import { filter, map, buffer, debounceTime } from "rxjs/operators";

import Screen from "../components/Screen";

export default () => {
  const [text, setText] = React.useState("");
  const onDblClick = (e: React.SyntheticEvent): void => {
    const target = e.target as HTMLInputElement;
    const mouse$ = Rx.fromEvent(target, "click");

    const buff$ = mouse$.pipe(debounceTime(300));

    const click$ = mouse$.pipe(
      buffer(buff$),
      map(list => {
        return list.length;
      }),
      filter(x => x === 2)
    );

    click$.subscribe(() => {
      setText("You are doubleclicking");
    });

    click$.pipe(debounceTime(1000)).subscribe((_: any) => {
      setText("No click or single click");
    });
  };

  return (
    <Screen>
      <Container>
        <Row>
          <Col lg="2">
            <Button
              className="double-click"
              color="primary"
              onClick={onDblClick}
            >
              Click me
            </Button>
          </Col>
        </Row>
        {text}
      </Container>
    </Screen>
  );
};
