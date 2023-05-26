import { useState } from "react";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import CharacterCard from "./CharacterCard";

export default function Characters() {
  const [characters, setCharacters] = useState([]);
  const navigate = useNavigate();
  const [img, setImg] = useState();

  async function getCharacters() {
    try {
      const response = await fetch(`https://thronesapi.com/api/v2/Characters`);
      if (response.status === 200) {
        const json = await response.json();
        setCharacters(json);

      } else {
        navigate("/error");
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getCharacters();
  }, []);

  if (!characters.length) {
    return (
      <div
        className="d-flex justify-content-center"
        style={{ height: "90vh", alignItems: "center" }}
      >
        <div className="spinner-border text-info" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div>
        <div>
            <h1 className="p-3" style={{ textAlign: "center" }}>Characters of Game of Thrones</h1>
        </div>
      <div className="p-3 mb-4 row row-cols-1 row-cols-md-3 g-4">
        {characters.map((character) => {
          return <CharacterCard character={character} key={character.id} img={img}/>;
        })}
      </div>
    </div>
  );

  //   return (
  //     <div className="col" key={character.firstName}>
  //       <div className="card bg-light mb-3">
  //         <h5 className="card-header">
  //           {character.firstName}
  //         </h5>
  //         <div className="card-body">
  //           <ul className="card-text">
  //             <li></li>
  //             <li>
  //               Full Name: {character.firstName} {character.lastName}
  //             </li>
  //           </ul>
  //         </div>
  //         <div className="card-footer">
  //         </div>
  //       </div>
  //     </div>
  //   );
}
