export default function CharacterCard( {character}) {

    return (
    <div className="col" key={character.id}>
      <div className="card bg-dark mb-3">
        <h5 className="card-header text-white" style={{ textAlign: "center" }}>
          {character.fullName}
        </h5>
        <div className="card-body text-white">
          <ul className="card-text text-white">
            <li>Title: {character.title}</li>
            <li>Full Name: {character.fullName}</li>
            <li>Family: {character.family}</li>
            <img src={character.imageUrl} alt={character.fullName} style={{width: 200, height: 200}} />
          </ul>
        </div>
        <div className="card-footer text-white">
        </div>
      </div>
    </div>
    );
}