import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HouseCard from "./HouseCard";
import backgroundImg from "../images/background-1.jpg";

export default function Houses() {
    const [houses, setHouses] = useState([]);
    const navigate = useNavigate();

    async function getHouses() {
        try {
            const response = await fetch('https://www.anapioficeandfire.com/api/houses/');
            if (response.status === 200) {
                const json = await response.json();
                setHouses(json);
            } else {
                navigate('/error');
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getHouses();
    }, []);

    if (!houses.length) {
        return (
            <div 
                className="d-flex justify-content-center"
                style={{ height: '90vh', alignItems: 'center' }}>
                <div className='spinner-border' role='status'>
                    <span className='visually-hidden'>Loading...</span>
                </div>
            </div>
        );
    }

    return (
        <div
          className="page-container"
          style={{ backgroundImage: `url(${backgroundImg})` }} // Set the page background image
        >
          <h1 className="text-center mt-4 mb-4 text-white">Game of Thrones Houses</h1> {/* Set the heading text color to white */}
          <div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
              {houses.map((house) => {
                return <HouseCard house={house} />;
              })}
            </div>
          </div>
        </div>
      );
}