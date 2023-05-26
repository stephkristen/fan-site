import React from "react";

function HouseCard({ house }) {
  return (
    <div className="col">
      <div className="card text-white bg-dark mb-3">
        <div className="card-header text-center">{house.name}</div>
        <div className="card-body d-flex flex-column align-items-center">
          <img
            src={house.coatOfArms}
            alt={house.name}
            style={{ width: "100px", height: "100px" }}
            className="mb-3"
          />
          <ul className="list-unstyled text-center">
            <li>
              <strong>Region:</strong> {house.region}
            </li>
            <li>
              <strong>Sigil:</strong> {house.sigil}
            </li>
            <li>
              <strong>Words:</strong> {house.words}
            </li>
            <li>
              <strong>Seat:</strong> {house.seat}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HouseCard;
