import HouseCard from "./HouseCard";
import backgroundImg from "../images/background-1.jpg";
import houseStarkImg from "../images/House_Stark.jpg";
import houseLannisterImg from "../images/House_Lannister.png"
import houseTargaryenImg from "../images/House_Targaryen.png"
import houseBaratheonImg from "../images/House_Baratheon.png"
import houseTyrellImg from "../images/House_Tyrell.png"
import houseGreyjoyImg from "../images/House_Greyjoy.png"
import houseMartellImg from "../images/House_Martell.png"
import houseArrynImg from "../images/House_Arryn.png"
import houseTullyImg from "../images/House_Tully.png"

const houses = [
    {
      name: "House Stark",
      region: "The North",
      sigil: "Direwolf",
      words: "Winter Is Coming",
      seat: "Winterfell",
      coatOfArms: houseStarkImg
    },
    {
      name: "House Lannister",
      region: "The Westerlands",
      sigil: "Lion",
      words: "Hear Me Roar!",
      seat: "Casterly Rock",
      coatOfArms: houseLannisterImg
    },
    {
      name: "House Targaryen",
      region: "The Crownlands",
      sigil: "Three-headed Dragon",
      words: "Fire and Blood",
      seat: "Dragonstone",
      coatOfArms: houseTargaryenImg
    },
    {
      name: "House Baratheon",
      region: "The Stormlands",
      sigil: "Stag",
      words: "Ours Is the Fury",
      seat: "Storm's End",
      coatOfArms: houseBaratheonImg
    },
    {
      name: "House Tyrell",
      region: "The Reach",
      sigil: "Rose",
      words: "Growing Strong",
      seat: "Highgarden",
      coatOfArms: houseTyrellImg
    },
    {
      name: "House Greyjoy",
      region: "The Iron Islands",
      sigil: "Kraken",
      words: "We Do Not Sow",
      seat: "Pyke",
      coatOfArms: houseGreyjoyImg
    },
    {
      name: "House Martell",
      region: "Dorne",
      sigil: "Sun and Spear",
      words: "Unbowed, Unbent, Unbroken",
      seat: "Sunspear",
      coatOfArms: houseMartellImg
    },
    {
      name: "House Arryn",
      region: "The Vale of Arryn",
      sigil: "Falcon and Crescent Moon",
      words: "As High as Honor",
      seat: "The Eyrie",
      coatOfArms: houseArrynImg
    },
    {
      name: "House Tully",
      region: "The Riverlands",
      sigil: "Trout",
      words: "Family, Duty, Honor",
      seat: "Riverrun",
      coatOfArms: houseTullyImg
    }
  ];

  export default function Houses() {
    return (
      <div
        className="page-container"
        style={{ backgroundImage: `url(${backgroundImg})` }}
      >
        <h1 className="text-center mt-4 mb-4 text-white">
          Game of Thrones Major Houses
        </h1>
        <div>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {houses.map((house, index) => (
              <HouseCard key={index} house={house} />
            ))}
          </div>
        </div>
      </div>
    );
  }