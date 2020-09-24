import React, { useState } from "react";
import { Row, Col, FormControl, Button } from "react-bootstrap";

const CitySelector = ({ onSelectButtonClick }) => {
  const [city, setCity] = useState(null);
  return (
    <>
      <Row>
        <Col>
          <h3 className="text-ms text-white py-1"> Ville</h3>
        </Col>
      </Row>
      <Row>
        <Col xs={4}>
          <FormControl
            placeholder="Entrez le noms d'une ville"
            onChange={(e) => setCity(e.target.value)}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Button
            onClick={() => onSelectButtonClick(city)}
            className="bg-gradient-to-r from-teal-400 to-blue-800 hover:from-pink-500 hover:to-orange-500 text-white font-semibold px-4 py-2 rounded"
          >
            Consultez la météo
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default CitySelector;
