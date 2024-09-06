import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function UpdatePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [playtime, setPlaytime] = useState("");
  const [players, setPlayers] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [genre, setGenre] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    const data = localStorage.getItem("games");
    const gamesData = JSON.parse(data) || [];
    const game = gamesData.find((game) => game.id === id);

    if (game) {
      setName(game.name);
      setLocation(game.location);
      setPlaytime(game.playtime);
      setPlayers(game.players);
      setDifficulty(game.difficulty);
      setGenre(game.genre);
      setImage(game.image);
    }
  }, [id]);

  function updateGame(event) {
    event.preventDefault();

    const gameToUpdate = {
      id,
      name,
      location,
      playtime,
      players,
      difficulty,
      genre,
      image,
    };

    const data = localStorage.getItem("games");
    const gamesData = JSON.parse(data) || [];

    const updatedGames = gamesData.map((game) =>
      game.id === id ? gameToUpdate : game
    );

    localStorage.setItem("games", JSON.stringify(updatedGames));

    navigate(`/games/${id}`);
  }

  return (
    <section className="page">
      <div className="container">
        <h1>Update Game</h1>
        <form onSubmit={updateGame}>
          {/* Name */}
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            value={name}
            placeholder="Insert a name"
            onChange={(e) => setName(e.target.value)}
          />

          {/* Location */}
          <label htmlFor="location">Location</label>
          <input
            id="location"
            type="text"
            value={location}
            placeholder="Insert a location"
            onChange={(e) => setLocation(e.target.value)}
          />

          {/* Playtime */}
          <label htmlFor="playtime">Playtime</label>
          <input
            id="playtime"
            type="text"
            value={playtime}
            placeholder="Insert playtime"
            onChange={(e) => setPlaytime(e.target.value)}
          />

          {/* Players */}
          <label htmlFor="players">Players</label>
          <input
            id="players"
            type="text"
            value={players}
            placeholder="Insert number of players"
            onChange={(e) => setPlayers(e.target.value)}
          />

          {/* Difficulty */}
          <label htmlFor="difficulty">Difficulty</label>
          <input
            id="difficulty"
            type="text"
            value={difficulty}
            placeholder="Insert difficulty level"
            onChange={(e) => setDifficulty(e.target.value)}
          />

          {/* Genre */}
          <label htmlFor="genre">Genre</label>
          <input
            id="genre"
            type="text"
            value={genre}
            placeholder="Insert genre"
            onChange={(e) => setGenre(e.target.value)}
          />

          {/* Image */}
          <label htmlFor="image">Image URL</label>
          <input
            id="image"
            type="text"
            value={image}
            placeholder="Insert image URL"
            onChange={(e) => setImage(e.target.value)}
          />

          {/* Submit button */}
          <div className="btns">
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    </section>
  );
}
