import { useState, useEffect } from 'react';


function HouseCard({ house }) {
  const [swornMembers, setSwornMembers] = useState([]);
  const [seats, setSeats] = useState([]);

  useEffect(() => {
    const fetchSwornMembers = async () => {
      const memberPromises = house.swornMembers.map(async (member) => {
        const response = await fetch(member);
        const data = await response.json();
        return data.name;
      });
      const members = await Promise.all(memberPromises);
      setSwornMembers(members);
    };

    const fetchSeats = async () => {
      const seatPromises = house.seats.map(async (seat) => {
        const response = await fetch(seat);
        const data = await response.json();
        return data.name;
      });
      const seatNames = await Promise.all(seatPromises);
      setSeats(seatNames);
    };

    fetchSwornMembers();
    if (house.seats && house.seats.length > 0) {
      fetchSeats();
    } else {
      setSeats([]);
    }
  }, [house.swornMembers, house.seats]);

  return (
    <div className="col">
      <h5 className="card-header text-white">{house.name}</h5>
      <div className="card-body text-white">
        <ul>
          <li>Region: {house.region}</li>
          <li>
            Seats:{" "}
            {seats.length > 0 ? (
              <ul>
                {seats.map((seat, index) => (
                  <li key={index}>{seat}</li>
                ))}
              </ul>
            ) : (
              "N/A"
            )}
          </li>
          <li>
            Sworn Members:{" "}
            {swornMembers.length > 0 ? (
              <ul>
                {swornMembers.map((member, index) => (
                  <li key={index}>{member}</li>
                ))}
              </ul>
            ) : (
              "N/A"
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HouseCard;
