import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Create() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [playtime, setPlaytime] = useState("");
  const [players, setPlayers] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [genre, setGenre] = useState("");
  const [image, setImage] = useState("");

  const navigate = useNavigate();

  function handleCancel() {
    //handle cancel
    navigate(-1);
  }

  function handleSubmit(event) {
    //handle submit
    event.preventDefault();

    const newGame = {
      id: Date.now().toString(),
      name: name,
      location: location,
      playtime: playtime,
      players: players,
      difficulty: difficulty,
      genre: genre,
      image: image,
    };

    const data = localStorage.getItem("games");
    const gamesData = JSON.parse(data) || [];

    gamesData.push(newGame);
    localStorage.setItem("games", JSON.stringify(gamesData));

    navigate("/", { state: { refresh: true } }); //Navigate to the home page
  }

  return (
    <div className="page">
      <div className="container">
        <h1>Add New Game</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            placeholder="Insert a name"
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="location">Location</label>
          <input
            id="location"
            type="text"
            placeholder="Insert Location"
            onChange={(e) => setLocation(e.target.value)}
          />
          <label htmlFor="playtime">Playtime</label>
          <input
            id="playtime"
            type="text"
            placeholder="Insert Playtime"
            onChange={(e) => setPlaytime(e.target.value)}
          />
          <label htmlFor="players">Players</label>
          <input
            id="players"
            type="text"
            placeholder="Insert N. of Players"
            onChange={(e) => setPlayers(e.target.value)}
          />
          <label htmlFor="difficulty">Difficulty</label>
          <input
            id="difficulty"
            type="text"
            placeholder="Insert Difficulty"
            onChange={(e) => setDifficulty(e.target.value)}
          />
          <label htmlFor="genre">Genre</label>
          <input
            id="genre"
            type="text"
            placeholder="Insert Genre"
            onChange={(e) => setGenre(e.target.value)}
          />
          <label htmlFor="image">Image URL</label>
          <input
            type="url"
            placeholder="Paste image url"
            onChange={(e) => setImage(e.target.value)}
          />
          <label htmlFor="image-preview"></label>
          <img
            id="image-preview"
            className="image-preview"
            src={
              image
                ? image
                : "https://placehold.co/600x400?text=Paste+an+image+URL"
            }
            alt="Choose"
            onError={(e) =>
              (e.target.src =
                " https://placehold.co/600x400?text=Error+loading+image")
            }
          />

          <div className="btns">
            <button type="button" className="btn-cancel" onClick={handleCancel}>
              Cancel
            </button>
            <button>Create</button>
          </div>
        </form>
      </div>
    </div>
  );
}
