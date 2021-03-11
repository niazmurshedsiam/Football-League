import React from "react";
import { Card, Button, CardDeck } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./League.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
const Leagues = (props) => {
  const { idLeague, strLeague,strSport, strLeagueAlternate } = props.league;

  let history = useHistory();
  function handleClick() {
    history.push(`/league/${idLeague}`);
  }

  return (
    <div>
      <CardDeck style={{ margin: "10px" }}>
        <Card>
          <Card.Body>
            <Card.Title>{strLeague}</Card.Title>
            <Card.Text>{strLeagueAlternate}</Card.Text>
            <Card.Text>{strSport}</Card.Text>
            <Button variant="primary" onClick={handleClick}>
              Explore <FontAwesomeIcon icon={faArrowRight} />
            </Button>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>{strLeague}</Card.Title>
            <Card.Text>{strLeagueAlternate}</Card.Text>
            <Card.Text>{strSport}</Card.Text>
            <Button variant="primary" onClick={handleClick}>
              Explore <FontAwesomeIcon icon={faArrowRight} />
            </Button>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>{strLeague}</Card.Title>
            <Card.Text>{strLeagueAlternate}</Card.Text>
            <Card.Text>{strSport}</Card.Text>
            <Button variant="primary" onClick={handleClick}>
              Explore <FontAwesomeIcon icon={faArrowRight} />
            </Button>
          </Card.Body>
        </Card>
      </CardDeck>
    </div>
  );
};

export default Leagues;
