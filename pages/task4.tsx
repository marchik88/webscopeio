import React from "react";
import { Container, Col, Row } from "reactstrap";
import { teams, authors, articles } from "../data";
import Screen from "../components/Screen";
import * as R from "ramda";

const getWrittenArticles = (articles: Array<string>): string => {
  const count = R.length(articles);
  const getDelimetedArticles = (splitter: string, data: Array<string>) =>
    R.join(`'${splitter}'`, data);

  return count === 1
    ? `an article '${articles}'`
    : count === 2
    ? `'${getDelimetedArticles("and ", articles)}'`
    : count > 2
    ? `'${getDelimetedArticles(", ", R.take(2, articles))}' and ${count -
        2} more`
    : "0 articles";
};

export default () => {
  const getTeamArticlesDescription = (teamId: number): string => {
    const team = R.filter(R.pathEq(["id"], teamId))(teams)[0];
    const members = R.path(["members"], team);

    const articleGroup = R.map(member => ({
      name: R.path([0, "name"], R.filter(R.pathEq(["id"], member), authors)),
      articles: R.map(
        R.path(["text"]),
        R.filter(article =>
          R.contains(member, R.pathOr([], ["authors"], article))
        )(articles)
      )
    }))(members as Array<number>);

    const publications = R.map(
      ({ name, articles }) => `${name} wrote ${getWrittenArticles(articles)}`
    )(articleGroup) as Array<string>;

    const getTeamArticles = R.pipe(
      R.map(R.path(["articles"])),
      R.flatten,
      R.uniq,
      R.length
    )(articleGroup);

    const coAuthored = `Team '${R.path(
      ["name"],
      team
    )}' co-authored ${getTeamArticles} out of ${R.length(articles)}.`;

    return `${R.join("\n", publications)}\n-----\n${coAuthored}`;
  };
  const [value, setValue] = React.useState(1);

  return (
    <Screen>
      <Container>
        <Row>
          <Col xs={12}>
            <select
              value={value}
              onChange={event => setValue(+event.target.value)}
            >
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </Col>
        </Row>
        <Row>
          <Col lg="10">
            <pre>{getTeamArticlesDescription(value)}</pre>
          </Col>
        </Row>
      </Container>
    </Screen>
  );
};
