import React, { useEffect, useState } from "react";
import { Card, CardDeck } from "react-bootstrap";
import { useParams } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCoffee,
  faFlag,
  faFutbol,
  faMars,
} from "@fortawesome/free-solid-svg-icons";
import male from "../Images/male.png";
import female from "../Images/female.png";

const LeagueDetails = () => {
  const { idLeague } = useParams();
  const [league, setLeague] = useState([]);

  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setLeague(data.leagues[0]));
  }, [idLeague]);

  console.log(league);
  const {
    strDescriptionEN,
    strCountry,
    strLeague,
    dateFirstEvent,
    strGender,
    strTwitter,
    strYoutube,
    strFacebook,
    strLogo,
    strSport,
  } = league;
  let gender;
  console.log(strGender);
  if (strGender === "Male") {
    gender = male;
  } else if (strGender === "Female") {
    gender = female;
  }
  return (
    <div>
      <CardDeck style={{ margin: "10px" }}>
        <Card >
          <Card.Body>
          <div style={{ textAlign:'center',background:'lightsalmon'}}>
              <Card.Img variant="top" src={strLogo} />
            </div>    
          </Card.Body>
        </Card>
      </CardDeck>
      <CardDeck style={{ margin: "10px"}}>
        <Card>
          <Card.Body style={{backgroundColor:'rgb(96, 71, 236)'}}>
            <Card.Img variant="top" src={gender} />
          </Card.Body>
        </Card>
        <Card>
          <Card.Body style={{backgroundColor:'rgb(96, 71, 236)',boxRounded:'10px'}}>
            <Card.Title>{strLeague}</Card.Title>
            <Card.Text>
              <FontAwesomeIcon icon={faCoffee} /> Founded: {dateFirstEvent}
            </Card.Text>
            <Card.Text>
              <FontAwesomeIcon icon={faFlag} /> Country: {strCountry}
            </Card.Text>
            <Card.Text>
              <FontAwesomeIcon icon={faFutbol} /> Sport Type: {strSport}
            </Card.Text>
            <Card.Text>
              <FontAwesomeIcon icon={faMars} />
              Gender :{strGender}
            </Card.Text>
          </Card.Body>
        </Card>
      </CardDeck>
      <CardDeck style={{ margin: "10px" }}>
        <Card>
          <Card.Body>
            <Card.Text>{strDescriptionEN}</Card.Text>
          </Card.Body>
        </Card>
      </CardDeck>

      <div style={{ textAlign: "center", margin: "10px", padding: "10px" }}>
        <a href={strFacebook}>
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href={strTwitter}>
          {" "}
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href={strYoutube}>
          {" "}
          <FontAwesomeIcon icon={faYoutube} />
        </a>
      </div>
    </div>
  );
};

export default LeagueDetails;
